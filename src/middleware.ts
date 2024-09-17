import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
	const loggedIn = context.cookies.get("logged-in")?.boolean();

	if (context.url.pathname === "/ideas" && !loggedIn) {
		return context.redirect("/login");
	}

	if (context.url.pathname === "/login" && loggedIn) {
		return context.redirect("/ideas");
	}

	return next();
});
