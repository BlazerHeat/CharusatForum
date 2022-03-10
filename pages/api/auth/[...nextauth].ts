import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "../../../database/dbConnect";
import Users from "../../../database/models/User";
import { usersData } from "../../../database/usersDataTemp";

export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        // OAuth authentication providers
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    pages: {
        signIn: "/login",
        error: "/error",
        signOut: "/",
    },
    session: {
        maxAge: 24 * 60 * 60,
    },
    callbacks: {
        async signIn({ profile }): Promise<boolean | string> {
            if (profile.hd === "charusat.edu.in") {
                const user = {
                    email: profile.email,
                    image: profile.picture,
                    name: profile.name,
                    hd: profile.hd,
                    givenName: profile.given_name,
                    familyName: profile.family_name,
                };

                await Users.findOneAndUpdate({ email: user.email }, user, {
                    upsert: true,
                    new: true,
                    setDefaultsOnInsert: true,
                });

                return true;
            } else {
                return "/login";
            }
        },
        async jwt({ token }) {
            await dbConnect();
            if (!usersData.has(token.email!)) {
                token.databaseData = await Users.findOne(
                    { email: token.email },
                    "name email image hd -_id"
                );
                usersData.set(token.email!, token.databaseData);
            } else {
                token.databaseData = usersData.get(token.email!);
            }

            return token;
        },
        async session({ session, token }) {
            session.databaseData = token.databaseData;
            return session;
        },
    },
});
