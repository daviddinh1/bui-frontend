import { supabase } from "./supabase";

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;

  //not needed just, use it to check JWT token
  if (data.session) {
    console.log("JWT token: ", data.session.access_token);
  }
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
}

//create helper to get session for context
export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

//helper to get current user
export async function getUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw error;
  return data.user;
}
