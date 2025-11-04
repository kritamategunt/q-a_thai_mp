import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

interface LevelProps {
    id: number;
    name: string;
    description: string;
    route: string;
    isOpen?: boolean;
}

function HomePage() {


    const navigate = useNavigate();

    const levels: LevelProps[] = [
        { id: 1, name: 'ช่วงชั้นที่ 1', description: 'สำหรับนักเรียนชั้นประถมศึกษาปีที่ 1–3', route: '/primary_1' },
        { id: 2, name: 'ช่วงชั้นที่ 2', description: 'สำหรับนักเรียนชั้นประถมศึกษาปีที่ 4-6', route: '/primary_2', isOpen: false },
        { id: 3, name: 'ช่วงชั้นที่ 3', description: 'สำหรับนักเรียนมัธยมศึกษาปีที่ 1–3', route: '/upper-secondary', isOpen: false },
    ];
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            <h1 className="text-2xl font-bold mb-6">เลือกช่วงชั้นการศึกษา</h1>
            <div className="grid gap-4 w-1/2">
                {levels.map((level) => (
                    <>
                        <button key={level.id}
                            className={`bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow mb-4 ${level.isOpen === false ? 'cursor-not-allowed' : 'hover:text-blue-300 cursor-pointer'}`}
                            onClick={() => navigate(level.route)}
                            disabled={level.isOpen === false}
                        >

                            <h2 className="text-xl font-semibold mb-2">{level.name}</h2>
                            <p className="text-gray-600">{level.description}</p>
                            {level.isOpen === false ? (
                                <p className="mt-4 text-red-500 font-bold">เร็วๆ นี้</p>
                            ) : null}
                        </button>
                        <br />
                    </>

                ))}
            </div>
        </div>

    )
}

export default HomePage