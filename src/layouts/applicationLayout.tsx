import { Outlet } from "react-router-dom";

export default function ApplicationLayout() {

    const labelHeader = () => {
        switch (window.location.pathname) {
            case '/':
                return '';
            case '/primary_1':
                return 'ช่วงชั้นที่ 1';
            case '/primary_2':
                return 'ช่วงชั้นที่ 2';
            case '/upper-secondary':
                return 'ช่วงชั้นที่ 3';
            default:
                return '';
        }
    };
    return (
        <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
            {/* 🔹 Header */}
            <header className="bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                    <h1 className="text-xl font-semibold">{labelHeader()}</h1>
                    <nav className="space-x-4">
                        {window.location.pathname !== '/' && (
                            <a href="/" className="text-blue-500 hover:underline">หน้าแรก</a>
                        )}
                    </nav>
                </div>
            </header>

            {/* 🔹 Main Content */}
            <main className="flex-1">
                <div className="mx-auto max-w-7xl px-4 py-6">
                    {/* Render children or route outlet */}
                    <Outlet />
                </div>
            </main>

            {/* 🔹 Footer */}
            <footer className="mt-auto bg-white border-t justify-center py-4">
                <div>version 0.0.1</div>
                <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-gray-500">
                    © {new Date().getFullYear()} Kritamate G. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
