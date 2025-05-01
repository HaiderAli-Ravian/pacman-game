"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("pacman-user");
    if (storedUser) {
      router.push("/game");
    }
  }, [router]);

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    // Store user in localStorage
    localStorage.setItem("pacman-user", username);
    router.push("/game");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8">
          PAC-MAN
        </h1>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Login to Play</h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your username"
              />
              {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 transition"
            >
              Start Game
            </button>
          </form>

          
        </div>
      </div>
    </div>
  );
}
