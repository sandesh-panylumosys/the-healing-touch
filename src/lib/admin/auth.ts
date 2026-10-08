import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { isSupabaseConfigured } from "@/lib/env";
import { businessConfig } from "@/config/business";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * Server-side admin guard. Call at the top of every protected page and
 * server action — the proxy redirect alone is not enough.
 *
 * 1. Verifies the Supabase Auth user with the Auth server (getUser).
 * 2. Loads the configured business through RLS: it is only visible if this
 *    user is listed in admin_users for it.
 */
export const requireAdmin = cache(async () => {
  await connection();
  if (!isSupabaseConfigured()) redirect("/admin/login");
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data: business } = await supabase
    .from("businesses")
    .select("id, name, slug")
    .eq("slug", businessConfig.slug)
    .maybeSingle();
  if (!business) redirect("/admin/login?error=not_authorized");

  return { supabase, user, business, config: businessConfig };
});
