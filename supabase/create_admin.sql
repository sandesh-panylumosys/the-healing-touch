-- Link an existing Supabase Auth user to the business as an admin.
-- 1. Create the user first: Supabase Dashboard → Authentication → Users → Add user.
-- 2. Replace the two values below, then run this in the SQL Editor.

insert into public.businesses (name, slug, category)
values ('The Healing Touch', 'the-healing-touch', 'dental-and-ent-clinic')   -- must match src/config/business.ts
on conflict (slug) do nothing;

insert into public.admin_users (user_id, business_id)
select u.id, b.id
from auth.users u
join public.businesses b on b.slug = 'the-healing-touch'          -- your slug
where u.email = 'sandesh.lumosys@gmail.com'                          -- the admin's email
on conflict do nothing;
