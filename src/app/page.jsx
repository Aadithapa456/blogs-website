"use client";  // This ensures the component is client-side

import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You are not logged in!</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.email}</h1>
    </div>
  );
}
