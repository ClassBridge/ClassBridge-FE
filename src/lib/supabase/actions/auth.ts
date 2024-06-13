"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { LogInFormData } from "@/components/form/LogInForm";
import type { SignUpFormData } from "@/components/form/SignUpForm";
import type { SignUpInfoFormData } from "@/components/form/SignUpInfoForm";
import { USER_TABLE, PROFILE_BUCKET } from "@/constants/supabase";

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
        phone_number: credentials.phoneNumber,
        gender: credentials.gender,
        birthdate: credentials.birthDate,
        interests: credentials.interests,
      },
    },
  });

  if (error) {
    return { data, error };
  }

  if (credentials.profilePicture && data.user) {
    const file = credentials.profilePicture;
    const filePath = `${data.user.id}/profile.${file.name.split(".").pop()}`;

    const { error } = await supabase.storage
      .from(PROFILE_BUCKET)
      .upload(filePath, file);

    if (!error) {
      await supabase
        .from(USER_TABLE)
        .update({ profile_url: filePath })
        .eq("id", data.user.id);
    }
  }

  revalidatePath("/", "layout");
  return { data, error };
}

export async function getUser() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  return { data, error };
}
