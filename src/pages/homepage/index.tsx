
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface LevelCardProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    bg: string;
    iconClass: string;
    iconBgColor: string;
    route: string;
}

const HomePage = () => {
    const navigate = useNavigate();

    const levels: LevelCardProps[] = [
        {
            id: '1',
            title: 'ช่วงชั้นที่ 1',
            subtitle: 'ประถมศึกษาปีที่ 1-3',
            description: 'การอ่านจับใจความสำหรับเด็กประถมศึกษาตอนต้น',
            bg: 'bg-[#31CE69]',
            iconClass: 'fas fa-seedling',
            iconBgColor: 'text-green-500',
            route: '/primary_1'
        },
        {
            id: '2',
            title: 'ช่วงชั้นที่ 2',
            subtitle: 'ประถมศึกษาปีที่ 4-6',
            description: 'การอ่าน...คิดให่หน่อย',
            bg: 'bg-[#488FF7]',
            iconClass: 'fas fa-school',
            iconBgColor: 'text-blue-500',
            route: '/primary_2'
        },
        {
            id: '3',
            title: 'ช่วงชั้นที่ 3',
            subtitle: 'มัธยมศึกษาปีที่ 1-3',
            description: 'คิดคำอธิบายให้หน่อยยยย',
            bg: 'bg-[#AC5DF8]',
            iconClass: 'fas fa-university',
            iconBgColor: 'text-purple-500',
            route: '/upper-secondary'
        },

    ];

    return (
        <div className="min-h-screen bg-gray-100 px-4">
            {/* ✅ CONTENT */}
            <main className="max-w-4xl mx-auto px-4 py-10">

                {/* Welcome */}
                <h2 className="text-center text-2xl font-bold mb-2">ยินดีต้อนรับ</h2>
                <p className="text-center text-gray-600 mb-8">
                    โปรดเลือกระดับการศึกษาเพื่อตอบคำถาม
                </p>

                <h3 className="text-center text-xl font-semibold mb-6">
                    เลือกช่วงชั้นการศึกษา
                </h3>

                {/* ✅ LEVEL OPTIONS */}
                <div className="flex flex-col space-y-4 items-center justify-center w-full">
                    {levels.map((level) => (
                        <button
                            key={level.id}
                            onClick={() => { navigate(level.route) }}

                            className={`w-full max-w-md rounded-sm shadow-md overflow-hidden cursor-pointer bg-white transition hover:bg-opacity-50 `}                   >
                            {/* Top section */}
                            <div className={`${level.bg} px-5 py-4 text-white flex items-center justify-between shadow-md`}>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h3 className="font-semibold text-lg">{level.title}</h3>
                                        <p className="text-sm text-start">{level.subtitle}</p>
                                    </div>
                                </div>

                                <FaArrowRight size={18} />
                            </div>

                            {/* Bottom section */}
                            <div className="px-5 py-4">
                                <p className="text-gray-700 text-sm mb-3">{level.description}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default HomePage;
