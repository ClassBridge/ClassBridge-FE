"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { LogInFormData } from "@/components/form/LogInForm";
import type { SignUpFormData } from "@/components/form/SignUpForm";
import type { SignUpInfoFormData } from "@/components/form/SignUpInfoForm";

export async function login(credentials: LogInFormData) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword(credentials);

  if (error) {
    return { data, error };
  }

  revalidatePath("/", "layout");
  return { data, error };
}

export async function signup(credentials: SignUpFormData & SignUpInfoFormData) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      data: {
        username: credentials.username,
        phoneNumber: credentials.phoneNumber,
        gender: credentials.gender,
        birthDate: credentials.birthDate,
        interests: credentials.interests,
      },
    },
  });

  if (error) {
    return { data, error };
  }

  revalidatePath("/", "layout");
  return { data, error };
}

export async function getUser() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return { data, error };
}
