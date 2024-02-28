import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "our-cool-username"
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-password"
        }
      },
      async authorize(credentials) {
        //where you would need to retrieve user data
        //to verify with credentials
        //https://next-auth.js.org/tutorials/ldap-auth-example
        const user = { id: "43", name: "Jack", password: "nextauth"}
        if(credentials?.username === user.name && credentials?.password === user.password) {
          return user
        } else {
          return null
        }
      }
    })
  ],
}