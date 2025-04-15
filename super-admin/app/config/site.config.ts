export const siteConfig = {
  base_url: process.env.NEXT_PUBLIC_DB_URL,
  auth_token: localStorage.getItem("session_id"),
};
