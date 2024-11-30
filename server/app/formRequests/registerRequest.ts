import { z } from "zod";
import type { H3Event } from "h3";

const bodySchema = z.object({
  email: z
    .string({
      required_error: "valid email required",
    })
    .email({ message: "valid email required" }),

  password: z
    .string({
      required_error: "password required",
    })
    .min(8, { message: "password must be at least 8 characters" }),
});

export default async function registerRequest(event: H3Event) {
  const body = await readBody(event).catch(() => {});
  return await bodySchema.parseAsync(body);
}
