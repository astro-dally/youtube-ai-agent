"use client";

import { ClerkProvider,useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  throw new Error("NEXT_PUBLIC_CONVEX_URL is not defined");
}
const convex = new ConvexReactClient(convexUrl);

export default function ConvexClientProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <ClerkProvider>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            {children}
        </ConvexProviderWithClerk>
        </ClerkProvider>
    );
  }