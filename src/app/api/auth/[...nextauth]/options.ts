import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";

const GITHUB_ID = process.env.GITHUB_ID as string
const GITHUB_SECRET = process.env.GITHUB_SECRET as string
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

export const options: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: {
    //       label: "Username:",
    //       type: "text",
    //       placeholder: "our-cool-username"
    //     },
    //     password: {
    //       label: "Password:",
    //       type: "password",
    //       placeholder: "your-password"
    //     }
    //   },
    //   async authorize(credentials) {
    //     //where you would need to retrieve user data
    //     //to verify with credentials
    //     //https://next-auth.js.org/tutorials/ldap-auth-example
    //     const user = { id: "43", name: "Jack", password: "nextauth"}
    //     if(credentials?.username === user.name && credentials?.password === user.password) {
    //       return user
    //     } else {
    //       return null
    //     }
    //   }
    // })
  ],
  secret: process.env.NEXTAUTH_SECRET
}