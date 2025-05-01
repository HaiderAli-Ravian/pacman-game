"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import PlayGame from "./play-game";

function GamePage() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("pacman-user");
    if (!storedUser) {
      router.push("/");
      return;
    }
    setUsername(storedUser);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("pacman-user");
    router.push("/");
  };

  if (!username) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white p-4">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-yellow-400">PAC-MAN</h1>
          <div className="flex items-center space-x-4">
            <span>Player: {username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </div>
        </div>

        <PlayGame />
      </div>
    </div>
  );
}

export default GamePage;
