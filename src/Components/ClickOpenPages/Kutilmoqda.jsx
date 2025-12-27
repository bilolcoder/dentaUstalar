import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const advertisementData = [
    { name: "Stomatologik kreslo Premium 2024", manufacturer: "DentalSupply LLC", category: "Kreslo", price: "45 000 UZS", condition: "Yangi", views: 2122, status: "Faol", date: "24-Yan.2025" },
    { name: "Rentgen apparati Panoramik", manufacturer: "MedTech Solutions", category: "Rentgen", price: "550 000 UZS", condition: "Ishlagan", views: 1100, status: "Faol", date: "22-Dek.2025" },
    { name: "Ultratovushli tozalagich", manufacturer: "Dr. Aliyev Jamshid", category: "Asboblar", price: "220 000 UZS", condition: "Ishlagan", views: 500, status: "Faol", date: "11-Sen.2025" },
    { name: "Avtoklavl sterilizatori", manufacturer: "Health Equip Uz", category: "Sterilizatsiya", price: "92 000 UZS", condition: "Yangi", views: 455, status: "Kutilmoqda", date: "10-Sen.2025" },
    { name: "LED operatsion chiroq", manufacturer: "LightMed Pro", category: "Yoritish", price: "135 000 UZS", condition: "Yangi", views: 420, status: "Nofaol", date: "2-Avg.2025" },
    { name: "Kompressor havo nasosi", manufacturer: "Dr. Karimova Malika", category: "Uskunalar", price: "155 000 UZS", condition: "Ishlagan", views: 120, status: "Faol", date: "1-Avg.2025" },
    { name: "Dental mikromotor", manufacturer: "DentPro", category: "Asboblar", price: "75 000 UZS", condition: "Yangi", views: 980, status: "Faol", date: "15-Fev.2025" },
    { name: "Oral kamera HD", manufacturer: "SmileTech", category: "Diagnostika", price: "65 000 UZS", condition: "Yangi", views: 640, status: "Faol", date: "12-Fev.2025" },
    { name: "Plomba aralashtirgich", manufacturer: "DentalMix", category: "Asboblar", price: "18 000 UZS", condition: "Ishlagan", views: 210, status: "Faol", date: "5-Fev.2025" },
    { name: "Steril konteyner", manufacturer: "Health Box", category: "Sterilizatsiya", price: "12 000 UZS", condition: "Yangi", views: 90, status: "Faol", date: "1-Fev.2025" },
    { name: "Tish oqartirish lampasi", manufacturer: "WhiteSmile", category: "Yoritish", price: "88 000 UZS", condition: "Yangi", views: 310, status: "Kutilmoqda", date: "28-Yan.2025" },
    { name: "Dental stol", manufacturer: "Clinic Furniture", category: "Mebel", price: "40 000 UZS", condition: "Ishlagan", views: 260, status: "Faol", date: "20-Yan.2025" },
    { name: "Shifokor kreslosi", manufacturer: "MedChair", category: "Mebel", price: "30 000 UZS", condition: "Yangi", views: 180, status: "Faol", date: "18-Yan.2025" },
    { name: "Suv filtrlash tizimi", manufacturer: "PureMed", category: "Uskunalar", price: "95 000 UZS", condition: "Yangi", views: 140, status: "Nofaol", date: "12-Yan.2025" },
    { name: "Dental monitor", manufacturer: "VisionDent", category: "Elektronika", price: "120 000 UZS", condition: "Yangi", views: 390, status: "Faol", date: "8-Yan.2025" },
];

function Kutilmoqda() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const nav = () => {
        navigate(-1);
    };

    const getStatusClass = (status) => {
        if (status === "Faol") return "text-[#05CD99]";
        if (status === "Kutilmoqda") return "text-[#FFB543]";
        if (status === "Nofaol") return "text-[#A3AED0]";
        return "text-[#2B3674]";
    };

    const filteredData = advertisementData.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">

{/* 🔍 SEARCH PANEL */}
<div className="flex items-center justify-center gap-4">
        <button onClick={nav} className='w-[65px] h-[65px] bg-white rounded-2xl text-3xl shadow-sm p-4' >
            <IoMdArrowRoundBack />
            </button>
<div className="bg-white w-[94%] rounded-2xl shadow-sm p-2">
    <div className="flex sm:flex-row gap-3 items-stretch sm:items-center">

        {/* Input */}
        <div className="flex items-center gap-2 border rounded-xl px-4 py-[10px]
                w-full flex-1
                focus-within:ring-2 focus-within:ring-[#2B3674] transition">
    <IoSearch className="text-[#A3AED0] text-[20px]" />
    <input
        type="text"
        placeholder="Mahsulot nomi bo‘yicha qidirish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 outline-none text-[18px] text-[#2B3674] placeholder-[#A3AED0]"
        />
</div>


        {/* Button */}
        <button
            className="bg-[#2B3674] text-white px-6 py-[14px] rounded-xl text-sm font-medium
            hover:bg-[#1f285a] transition active:scale-95"
            >
            Qidirish
        </button>

    </div>
</div>
            </div>


            {/* 📦 TABLE */}
            <div className='bg-white rounded-2xl shadow-sm p-6 overflow-x-auto'>
                <h2 className='text-[#2B3674] text-[22px] font-bold mb-6'>
                    Kutilmoqda
                </h2>

                <div className='min-w-[1000px]'>
                    <div className='grid grid-cols-[3fr_1fr_1.2fr_1fr_1fr_1fr_1.5fr]
                                    gap-4 text-[#A3AED0] text-[14px] mb-4 border-b pb-2'>
                        <span>Nomi va ishlab chiqaruvchi</span>
                        <span>Toifa</span>
                        <span>Narxi</span>
                        <span>Holati</span>
                        <span>Ko'rishlar</span>
                        <span>Holat</span>
                        <span>Qo'yilgan sana</span>
                    </div>

                    {filteredData.length ? (
                        filteredData.map((item, index) => (
                            <div
                                key={index}
                                className='grid grid-cols-[3fr_1fr_1.2fr_1fr_1fr_1fr_1.5fr]
                                           gap-4 items-center py-4 border-b last:border-b-0'
                            >
                                <div>
                                    <p className='text-[#2B3674] font-medium text-[15px]'>{item.name}</p>
                                    <p className='text-[#A3AED0] text-xs'>{item.manufacturer}</p>
                                </div>
                                <span>{item.category}</span>
                                <span className="font-semibold">{item.price}</span>
                                <span>{item.condition}</span>
                                <span>{item.views}</span>
                                <span className={`font-semibold ${getStatusClass(item.status)}`}>
                                    {item.status}
                                </span>
                                <span>{item.date}</span>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-[#A3AED0] py-6">
                            Natija topilmadi
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Kutilmoqda;
