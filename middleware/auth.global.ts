import { defineNuxtRouteMiddleware } from "#app";
import { useUser } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware(async (to) => {
  const user = await useUser();

  const guestLinks: Array<string | RegExp> = ["/", "/sign-up"];

  const isGuestPage = guestLinks.some((pattern) => {
    if (typeof pattern === "string") {
      return to.path === pattern;
    } else if (pattern instanceof RegExp) {
      return pattern.test(to.path);
    }
    return false;
  });

  if (!user && !isGuestPage) {
    return "/";
  }

  if (user && isGuestPage) {
    return "/projects";
  }
});
