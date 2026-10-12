import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (
          credentials?.email === "demo@studycircle.com" &&
          credentials?.password === "password"
        ) {
          return {
            id: "1",
            name: "Demo User",
            email: "demo@studycircle.com",
          };
        }

        return null;
      },
    }),
  ],
});