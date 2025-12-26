import React, { use } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import {
    Eye, Trash2, Edit2, CheckCircle, XCircle
} from 'lucide-react';
import { FaRegBell } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function AdminBody() {
    const navigate = useNavigate();
    const lineData = [
        { name: 'Sentabr', Qabullar: 80, YangiBemorlar: 60 },
        { name: 'Oktabr', Qabullar: 95, YangiBemorlar: 70 },
        { name: 'Noyabr', Qabullar: 85, YangiBemorlar: 65 },
        { name: 'Dekabr', Qabullar: 110, YangiBemorlar: 80 },
        { name: 'Yanvar', Qabullar: 120, YangiBemorlar: 90 },
        { name: 'Fevral', Qabullar: 105, YangiBemorlar: 85 },
    ];

    const pieData = [
        { name: 'Sotilgan', value: 63 },
        { name: 'Yangi', value: 25 },
    ];

    const advertisementData = [
        { name: "Stomatologik kreslo Premium 2024", manufacturer: "DentalSupply LLC", category: "Kreslo", price: "45 000 UZS", condition: "Yangi", views: 2122, status: "Faol", date: "24-Yan.2025" },
        { name: "Rentgen apparati Panoramik", manufacturer: "MedTech Solutions", category: "Rentgen", price: "550 000 UZS", condition: "Ishlagan", views: 1100, status: "Faol", date: "22-Dek.2025" },
        { name: "Ultratovushli tozalagich", manufacturer: "Dr. Aliyev Jamshid", category: "Asboblar", price: "220 000 UZS", condition: "Ishlagan", views: 500, status: "Faol", date: "11-Sen.2025" },
        { name: "Avtoklavl sterilizatori", manufacturer: "Health Equip Uz", category: "Sterilizatsiya", price: "92 000 UZS", condition: "Yangi", views: 455, status: "Kutilmoqda", date: "10-Sen.2025" },
        { name: "LED operatsion chiroq", manufacturer: "LightMed Pro", category: "Yoritish", price: "135 000 UZS", condition: "Yangi", views: 420, status: "Nofaol", date: "2-Avg.2025" },
        { name: "Kompressor havo nasosi", manufacturer: "Dr. Karimova Malika", category: "Uskunalar", price: "155 000 UZS", condition: "Ishlagan", views: 120, status: "Faol", date: "1-Avg.2025" },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Faol': return 'text-[#05CD99]';
            case 'Kutilmoqda': return 'text-[#FFB543]';
            case 'Nofaol': return 'text-[#A3AED0]';
            default: return 'text-[#2B3674]';
        }
    };

    return (
        <div className='w-full h-auto'>
            {/* Header Section */}
            <div className='flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4'>
                <div>
                    <p className='text-[#707EAE] text-[14px] md:text-[16px]'>Tizim statistikasi va umumiy ma'lumotlar</p>
                    <p className='text-[#2B3674] text-[22px] md:text-[26px] font-bold'>Bosh sahifa</p>
                </div>

                <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 gap-4
                    w-full md:w-[350px] md:hover:md:w-[73%]
                    transition-all duration-700 h-[50px]">
                <IoSearch />
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-1 bg-transparent outline-none text-[#707EAE] placeholder-[#A3AED0]"
                    />
                    <FaRegBell />
                    <img
                        src="https://i.pravatar.cc/100"
                        alt="user"
                        className="w-[36px] h-[36px] rounded-full object-cover"
                    />
                </div>
            </div>

            {/* Stat Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8'>
                {[
                    { label: "Jami mahsulotlari", val: "225", trend: "+23 ta", path: "/jamimaxsulotlar"},
                    { label: "Faol", val: "156", path: "/faol" },
                    { label: "Qolgan mahsulotlar", val: "34", path: "/qolganmaxsulotlar" },
                    { label: "Nofaol", val: "35", path: "/nofaol" },
                    { label: "Dastur tolovi", val: "200 so'm", path: "/dasturtolovi" }
                ].map((s, i) => (
                    <div
                        key={i}
                        onClick={() => navigate(s.path)}
                        className='rounded-2xl bg-white shadow-sm p-5 cursor-pointer
                                hover:shadow-md transition-all'
                    >
                        <p className='text-[#A3AED0] text-[15px]'>{s.label}</p>
                        <p className='text-[#2B3674] text-[24px] font-bold'>{s.val}</p>
                        {s.trend && (
                            <p className='text-[#A3AED0] text-[12px]'>
                                <span className='text-[#05CD99]'>{s.trend}</span>
                            </p>
                        )}
                    </div>
                ))}
            </div>
            {/* Notifications and Equipment Stats */}
            <div className='mb-8'>
                <div className='w-full bg-white rounded-2xl shadow-sm p-6'>
                    <h2 className='text-[#2B3674] text-[20px] font-semibold mb-4'>Bildirishnomalar</h2>
                    <div className='space-y-4 overflow-x-auto'>
                        {/* Table Header */}
                        <div className='grid grid-cols-3 text-[#A3AED0] text-[14px] border-b pb-2 min-w-[400px]'>
                            <span>Mavzu</span><span>Holat</span><span>Vaqti</span>
                        </div>
                        {/* Items */}
                        {[
                            { title: "Yangi Zubtexnik ro‘yxatdan o‘tdi", name: "Dr Aliyev Azamjon", status: "Yangi", time: "24–Yan.2025", new: true },
                            { title: "Yangi asbob e‘loni qo‘shildi", name: "DentalSupply LLC", status: "Yangi", time: "24–Yan.2025", new: true },
                            { title: "Qabul qilindi", name: "Karimova Nodira", status: "Yangi", time: "24–Yan.2025", new: true },
                        ].map((item, idx) => (
                            <div key={idx} className='grid grid-cols-3 items-center py-2 min-w-[400px]'>
                                <div>
                                    <p className='text-[#2B3674] font-medium text-sm'>{item.title}</p>
                                    <p className='text-[#A3AED0] text-xs'>{item.name}</p>
                                </div>
                                <span className={`text-[14px] font-semibold ${item.new ? "text-[#05CD99]" : "text-[#A3AED0]"}`}>{item.status}</span>
                                <span className='text-[#2B3674] text-[14px]'>{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Big Advertisement Table */}
            <div className='bg-white rounded-2xl shadow-sm p-6 overflow-x-auto'>
                <h2 className='text-[#2B3674] text-[22px] font-bold mb-6'>E'lonlar Ro'yxati</h2>
                <div className='min-w-[1000px]'>
                    <div className='grid grid-cols-[3fr_1fr_1.2fr_1fr_1fr_1fr_1.5fr] gap-4 text-[#A3AED0] text-[14px] mb-4 border-b pb-2'>
                        <span>Nomi va ishlab chiqaruvchi</span><span>Toifa</span><span>Narxi</span><span>Holati</span><span>Ko'rishlar</span><span>Holat</span><span>Qo'yilgan sana</span>
                    </div>
                    {advertisementData.map((item, index) => (
                        <div key={index} className='grid grid-cols-[3fr_1fr_1.2fr_1fr_1fr_1fr_1.5fr] gap-4 items-center py-4 border-b last:border-b-0'>
                            <div>
                                <p className='text-[#2B3674] font-medium text-[15px]'>{item.name}</p>
                                <p className='text-[#A3AED0] text-xs'>{item.manufacturer}</p>
                            </div>
                            <span className='text-[#2B3674] text-[14px]'>{item.category}</span>
                            <span className='text-[#2B3674] text-[14px] font-semibold'>{item.price}</span>
                            <span className='text-[#2B3674] text-[14px]'>{item.condition}</span>
                            <span className='text-[#2B3674] text-[14px]'>{item.views}</span>
                            <span className={`text-[14px] font-semibold ${getStatusClass(item.status)}`}>{item.status}</span>
                            <span className='text-[#2B3674] text-[14px]'>{item.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminBody;
