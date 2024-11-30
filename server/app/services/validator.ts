import type { RegistrationRequest } from "~/types/IRegistration";
import { getUserByEmail } from "~/server/database/repositories/userRepository";
import type { InputValidation } from "~/types/InputValidation";

export async function validate(data: RegistrationRequest) {
  const errors = new Map<string, { message: string | undefined }>();

  for (const [key, value] of Object.entries(data)) {
    const val = await validateRegistration(key, value);

    if (val.hasError) {
      errors.set(key, { message: val.errorMessage });
    }
  }

  return errors;
}

async function validateRegistration(
  key: string,
  value: string,
): Promise<InputValidation> {
  const check: InputValidation = {
    value,
    isBlank: false,
    lengthMin8: true,
    key,
    hasError: false,
  };

  if (key == "password") {
    if (value.length < 8) {
      check.hasError = true;
      check.errorMessage = `Пароль должен быть минимум 8 символов`;
    }
    check.lengthMin8 = false;
  }

  if (key == "email") {
    const email = await getUserByEmail(value);
    if (email) {
      check.emailTaken = true;
      check.hasError = true;
      check.errorMessage = `Такой email уже зарегестрирован`;
    }
  }

  return check;
}
