"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function NavUser() {
  const router = useRouter();
  const handleLogOut = async () => {
    await localStorage.removeItem("session_id");
    await router.push("/");
  };

  return (
    <div
      className="flex gap-3 text-red-600 font-medium py-3 "
      onClick={() => handleLogOut()}
    >
      <LogOut />
      Logout
    </div>
  );
}
