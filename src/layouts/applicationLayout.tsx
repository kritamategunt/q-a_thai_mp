import React from "react";
import { Outlet } from "react-router-dom";

export default function ApplicationLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
            {/* 🔹 Header */}
            {/* <header className="bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                    <h1 className="text-xl font-semibold">My App</h1>
                    <nav className="space-x-4">
                        <a href="/" className="text-gray-600 hover:text-black">
                            Home
                        </a>
                        <a href="/about" className="text-gray-600 hover:text-black">
                            About
                        </a>
                    </nav>
                </div>
            </header> */}

            {/* 🔹 Main Content */}
            <main className="flex-1">
                <div className="mx-auto max-w-7xl px-4 py-6">
                    {/* Render children or route outlet */}
                    <Outlet />
                </div>
            </main>

            {/* 🔹 Footer */}
            <footer className="mt-auto bg-white border-t">
                <div className="mx-auto max-w-7xl px-4 py-3 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Kritamate G. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
