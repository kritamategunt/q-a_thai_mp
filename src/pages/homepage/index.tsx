import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

interface LevelProps {
    id: number;
    name: string;
    description: string;
    route: string;
}

function HomePage() {


    const navigate = useNavigate();

    const levels: LevelProps[] = [
        { id: 1, name: 'ประถมศึกษา (ป.1 - ป.6)', description: 'สำหรับนักเรียนระดับประถมศึกษา', route: '/primary' },
        { id: 2, name: 'มัธยมศึกษาตอนต้น (ม.1 - ม.3)', description: 'สำหรับนักเรียนระดับมัธยมศึกษาตอนต้น', route: '/lower-secondary' },
        { id: 3, name: 'มัธยมศึกษาตอนปลาย (ม.4 - ม.6)', description: 'สำหรับนักเรียนระดับมัธยมศึกษาตอนปลาย', route: '/upper-secondary' },
    ];
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            <h1 className="text-2xl font-bold mb-6">เลือกช่วงชั้นการศึกษา</h1>
            <div className="grid gap-4 w-1/2">
                {levels.map((level) => (
                    <>
                        <button key={level.id}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer mb-4"
                            onClick={() => navigate(level.route)}
                        >

                            <h2 className="text-xl font-semibold mb-2">{level.name}</h2>
                            <p className="text-gray-600">{level.description}</p>

                        </button>
                        <br/>
                    </>

                ))}
            </div>
        </div>

    )
}

export default HomePage