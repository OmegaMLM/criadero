
import NextAuth, { type DefaultSession, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/prisma/client"
import bcrypt from 'bcrypt';

import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from '@auth/prisma-adapter';
const getUserFromDb = async (email: string, password: string) => {
    const user = await prisma.user.findFirst({ where: { email: email } });
    if (!user) return null
    const checkUser = await bcrypt.compare(password, user.password ?? '')
    return checkUser ? user : null;
}


export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null
                user = await getUserFromDb(credentials.email as string, credentials.password as string)

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // meaning this is also the place you could do registration
                    throw new Error("User not found.")
                }

                // return user object with the their profile data
                return user
            },
        }),
        GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
})



    ],
    cookies: {
        pkceCodeVerifier: {
          name: "next-auth.pkce.code_verifier",
          options: {
            httpOnly: true,
            sameSite: "none",
            path: "/",
            secure: true,
          },
        },
      },
    session: {
        strategy: 'jwt'
    },
   
    callbacks: {
        
        async signIn({ user, account, profile, email, credentials }) {

            return true
        },
        async jwt({ token, user, account, profile }) {
            const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email' } });
            if (dbUser?.isActive === false) {
                return null;
            }
            token.roles = dbUser?.roles ?? ['no-roles'];
            token.id = dbUser?.id ?? ['no-uuid']
            return token;
        },
        async session({ session, token, user }) {

            if (session && session.user) {
                (session.user as any).roles = token.roles;
                (session.user as any).id = token.id;
            }
            return session
        },
        async redirect({ url, baseUrl }) {
          // Si la URL de redirección está vacía o undefined, redirige a la página por defecto
          return url;
        }
    },
    
})