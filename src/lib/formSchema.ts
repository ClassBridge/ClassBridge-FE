import { z } from "zod";

const MESSAGE = {
  required: "필수 입력 사항입니다.",
  invalidEmail: "유효한 이메일 형식이 아닙니다.",
  invalidPassword: {
    length: "비밀번호는 8자에서 16자 사이여야 합니다.",
    alphabet: "영문자를 최소한 1개 이상 포함해야 합니다.",
    number: "숫자를 최소한 1개 이상 포함해야 합니다.",
    special: "특수문자를 최소한 1개 이상 포함해야 합니다.",
  },
};

export const logInFormSchema = z.object({
  email: z
    .string({ required_error: MESSAGE.required })
    .email({ message: MESSAGE.invalidEmail }),
  password: z
    .string({ required_error: MESSAGE.required })
    .min(8, { message: MESSAGE.invalidPassword.length })
    .max(16, { message: MESSAGE.invalidPassword.length })
    .regex(/(?=.*[a-zA-Z])/, {
      message: MESSAGE.invalidPassword.alphabet,
    })
    .regex(/(?=.*[0-9])/, {
      message: MESSAGE.invalidPassword.number,
    })
    .regex(/(?=.*[!@#$%^&*(),.?":{}|<>])/, {
      message: MESSAGE.invalidPassword.special,
    }),
});
