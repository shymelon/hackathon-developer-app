import type { H3Event } from "h3";
import { sendError } from "h3";
import bcrypt from "bcrypt";
import type { IUser } from "~/types/IUser";
import { ZodError } from "zod";
import sendDefaultErrorResponse from "~/server/app/errors/responses/defaultErrorsResponse";
import registerRequest from "~/server/app/formRequests/registerRequest";
import { validateUser } from "~/server/app/services/userService";
import { makeSession } from "~~/server/app/services/sessionService";
import { createUser } from "~/server/database/repositories/userRepository";
import sendZodErrorResponse from "~/server/app/errors/responses/zodErrorsResponse";

export default eventHandler(async (event: H3Event) => {
  try {
    const data = await registerRequest(event);
    const validation = await validateUser(data);

    if (validation.hasErrors === true && validation.errors) {
      const errors = JSON.stringify(Object.fromEntries(validation.errors));
      return sendError(event, createError({ statusCode: 422, data: errors }));
    }

    const encryptedPassword: string = await bcrypt.hash(data.password, 10);

    const userData: IUser = {
      name: "",
      email: data.email,
      loginType: "email",
      password: encryptedPassword,
    };

    const user = await createUser(userData);

    return await makeSession(user, event);
  } catch (error: unknown) {
    if (error.data instanceof ZodError) {
      return await sendZodErrorResponse(event, error.data);
    }

    return await sendDefaultErrorResponse(event, "oops", 500, error);
  }
});
