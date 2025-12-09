import { supabase } from "../db/supabaseClient";

export async function signUp(
  username: string,
  email: string,
  password: string
) {
  // Step 1: Sign up the user in Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    console.error("Signup error:", authError.message);
    return null;
  }

  if (!authData.user) {
    return null;
  }

  const userId = authData.user.id;

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .insert({
      id: userId,      
      username,
      created_at: new Date(),
    })
    .select()
    .single();

  if (profileError) {
    console.error("Profile creation error:", profileError.message);
    return null;
  }

  return { user: authData.user, profile: profileData };
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) console.error("Signin error:", error.message);
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) console.error("Sign out error:", error.message);
}
