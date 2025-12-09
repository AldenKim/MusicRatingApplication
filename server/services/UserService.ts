import { supabase } from "../db/supabaseClient";

export async function fetchUserProfile() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) throw userError ?? new Error("No user found");

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("username")
    .eq("id", user.id)
    .single();

  if (profileError) throw profileError;

  return {
    id: user.id,
    email: user.email ?? null,
    username: profile?.username ?? null,
  };
}
