import { Outlet } from "react-router-dom";
import logo from "../assets/logoMp.jpeg";

export default function ApplicationLayout() {
    const labelHeader = () => {
        switch (window.location.pathname) {
            case '/primary_1':
                return 'ช่วงชั้นที่ 1';
            case '/primary_2':
                return 'ช่วงชั้นที่ 2';
            case '/upper-secondary':
                return 'ช่วงชั้นที่ 3';
            default:
                return 'อ่านคิดลึก';
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-linear-to-b from-blue-50 to-white">
            {/* ✅ HEADER */}
            <header className="bg-linear-to-b from-[#0d3c74] to-[#1e5d9c] text-white shadow-md sticky top-0 z-10">
                <div className="mx-auto max-w-md w-full px-4 py-4 flex items-center gap-4">
                    <div className="bg-white text-[#224E8A] w-14 h-14 rounded-full flex items-center justify-center">
                        {/* <FaGraduationCap size={32} /> */}
                        <img src={logo} alt="Logo" className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-[#FFFFFF]">{labelHeader()}</h1>
                    </div>
                </div>
            </header>


            {/* ✅ Main Content */}
            <main className="flex-1 ">
                <div className="w-full px-4">
                    <Outlet />
                </div>
            </main>

            {/* ✅ FOOTER – matching rounded card style */}
            <footer className="mt-6 mb-4 mx-auto w-full max-w-md">
                <div className="bg-white shadow-sm rounded-2xl border p-4 text-center">
                    <p className="text-gray-600 text-sm">version 0.0.2</p>
                    <p className="text-gray-400 text-xs mt-1">
                        © {new Date().getFullYear()} Kritamate G. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
}
