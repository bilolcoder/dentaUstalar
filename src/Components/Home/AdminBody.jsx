import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

function AdminBody() {
    const lineData = [
        { name: 'Sentabr', Qabullar: 80, YangiBemorlar: 60 },
        { name: 'Oktabr', Qabullar: 95, YangiBemorlar: 70 },
        { name: 'Noyabr', Qabullar: 85, YangiBemorlar: 65 },
        { name: 'Dekabr', Qabullar: 110, YangiBemorlar: 80 },
        { name: 'Yanvar', Qabullar: 120, YangiBemorlar: 90 },
        { name: 'Fevral', Qabullar: 105, YangiBemorlar: 85 },
    ];

    const barData = [
        { day: 'Du', tashriflar: 52 },
        { day: 'Se', tashriflar: 32 },
        { day: 'Ch', tashriflar: 45 },
        { day: 'Pa', tashriflar: 47 },
        { day: 'Ju', tashriflar: 32 },
        { day: 'Sh', tashriflar: 33 },
        { day: 'Ya', tashriflar: 29 },
    ];

    return (
        <div className='w-[73%] h-[100vh] overflow-y-auto  ml-[50px]  p-6'>
            <div>
                <div>
                    <p className='text-[#707EAE] text-[16px]'>Tizim statistikasi va ummumiy ma'lumotlar</p>
                    <p className='text-[#2B3674] text-[26px] font-bold mb-6'>Bosh Sahifa</p>
                </div>
                <div className="w-full flex justify-end mt-4">
                    <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 gap-4
                  w-[350px] h-[50px] mt-[-80px]">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="text-[#707EAE]"
                            width="18" height="18"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M21 21l-4.35-4.35m1.68-5.03a6.72 6.72 0 11-13.44 0 6.72 6.72 0 0113.44 0z" />
                        </svg>

                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 bg-transparent outline-none text-[#707EAE] placeholder-[#A3AED0]"
                        />

                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="text-[#A3AED0] cursor-pointer"
                            width="20" height="20"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M15 17h5l-1.405-1.405C18.21 14.79
        18 14.298 18 13.757V11a6 6 0 00-5-5.917V4a2 2
        0 10-4 0v1.083A6 6 0 004 11v2.757c0 .541-.21
        1.033-.595 1.838L2 17h5m8 0a3 3 0 11-6
        0m6 0H9" />
                        </svg>

                        <img
                            src="https://i.pravatar.cc/100"
                            alt="user"
                            className="w-[36px] h-[36px] rounded-full object-cover"
                        />
                    </div>
                </div>

            </div>

            <div className='flex gap-[20px] flex-wrap mb-8'>
                <div className='w-[230px] h-[110px] rounded-2xl bg-white shadow-sm p-5'>
                    <p className='text-[#A3AED0] text-[15px]'>Jami Zubtexniklar</p>
                    <p className='text-[#2B3674] text-[24px] font-bold'>87</p>
                    <p className='text-[#A3AED0] text-[12px]'><span className='text-[#05CD99]'>+23%</span> O'tgan oyga nisbatan</p>
                </div>
                <div className='w-[230px] h-[110px] rounded-2xl bg-white shadow-sm p-5'>
                    <p className='text-[#A3AED0] text-[15px]'>Jami Bemorlar</p>
                    <p className='text-[#2B3674] text-[24px] font-bold'>1 230</p>
                    <p className='text-[#A3AED0] text-[12px]'><span className='text-[#05CD99]'>+13%</span> O'tgan oyga nisbatan</p>
                </div>
                <div className='w-[230px] h-[110px] rounded-2xl bg-white shadow-sm p-5'>
                    <p className='text-[#A3AED0] text-[15px]'>Asbob uskunalar</p>
                    <p className='text-[#2B3674] text-[24px] font-bold'>1 230</p>
                    <p className='text-[#A3AED0] text-[12px]'>E'lonlar soni</p>
                </div>
                <div className='w-[230px] h-[110px] rounded-2xl bg-white shadow-sm p-5'>
                    <p className='text-[#A3AED0] text-[15px]'>Bugungi qabullar</p>
                    <p className='text-[#2B3674] text-[24px] font-bold'>42</p>
                    <p className='text-[#A3AED0] text-[12px]'>28 ta yuklangan, 14 ta kutilmoqda</p>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2  '>
                <div className='bg-white rounded-2xl shadow-sm p-6 w-[650px]'>
                    <div className='flex items-center justify-between mb-4'>
                        <div>
                            <p className='text-[#2B3674] text-[18px] font-semibold'>120 mln</p>
                            <p className='text-[#A3AED0] text-[14px]'>UZS Kirim</p>
                        </div>
                        <button className='bg-[#F4F7FE] text-[#2B3674] px-4 py-2 rounded-lg text-sm'>
                            Ushbu oyda
                        </button>
                    </div>

                    <div className='h-[300px]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" tick={{ fill: '#A3AED0' }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="Qabullar" stroke="#4318FF" strokeWidth={3} dot={{ fill: '#4318FF' }} />
                                <Line type="monotone" dataKey="YangiBemorlar" stroke="#05CD99" strokeWidth={3} dot={{ fill: '#05CD99' }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className='flex justify-center gap-8 mt-4 text-sm'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-[#4318FF] rounded-full'></div>
                            <span className='text-[#707EAE]'>Qabullar</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-[#05CD99] rounded-full'></div>
                            <span className='text-[#707EAE]'>Yangi bemorlar</span>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-sm p-7 w-[400px] ml-[140px]'>
                    <div className='flex items-start justify-between mb-8'>
                        <div>
                            <h3 className='text-[#A3AED0] text-[18px]  '>Haftalik qabullar</h3>
                            <p className='text-[#2B3674] text-[32px] font-bold mt-1'>
                                432 <span className='text-[#A3AED0] text-[16px] font-normal ml-2'>tashriflar soni</span>
                            </p>

                        </div>
                        <div className='text-[#05CD99]  text-[16px] font-medium flex items-center gap-1 '>
                            <span>↑</span> +2.45%

                        </div>
                    </div>

                    <div className='flex items-end justify-between h-[280px] px-4'>
                        {[
                            { day: 'Du', value: 52 },
                            { day: 'Se', value: 32 },
                            { day: 'Ch', value: 45 },
                            { day: 'Pa', value: 47 },
                            { day: 'Ju', value: 32 },
                            { day: 'Sh', value: 33 },
                            { day: 'Ya', value: 29 },
                        ].map((item, index) => (
                            <div key={index} className='flex flex-col items-center gap-3'>


                                <div
                                    className='w-7 bg-gradient-to-t from-[#A37CFB] to-[#4318FF] rounded-t-2xl shadow-lg relative overflow-hidden'
                                    style={{ height: `${item.value * 4.8}px` }}
                                >
                                    <div className='absolute inset-0 bg-white opacity-20 rounded-t-2xl'></div>
                                </div>

                                <span className='text-[#A3AED0] text-[14px] font-medium mt-[-10px]'>{item.day}</span>

                                <span className='text-[#4318FF] text-[15px] font-bold mt-[-15px]  z-10'>
                                    {item.value}
                                </span>
                            </div>
                        ))}


                    </div>

                </div>

            </div>
            <div className='flex gap-6 mt-10'>

                <div className='w-[60%] bg-white rounded-2xl shadow-sm p-6 '>
                    <h2 className='text-[#2B3674] text-[22px] font-semibold mb-4 '>Bildirishnomalar</h2>

                    <div className='grid grid-cols-3 text-[#A3AED0] text-[14px] mb-4'>
                        <span>Mavzu</span>
                        <span>Holat</span>
                        <span>Vaqti</span>
                    </div>

                    {[
                        { title: "Yangi Zubtexnik ro‘yxatdan o‘tdi", name: "Dr Aliyev Azamjon", status: "Yangi", time: "24–Yan.2025", new: true },
                        { title: "Yangi asbob e‘loni qo‘shildi", name: "DentalSupply LLC", status: "Yangi", time: "24–Yan.2025", new: true },
                        { title: "Qabul yakunlandi", name: "Bemor: Karimova Nodira", status: "Yangi", time: "24–Yan.2025", new: true },
                        { title: "Yangi bemor ro‘yxatdan o‘tdi", name: "Toshmatov Sardor", status: "Ko‘rildi", time: "24–Yan.2025" },
                        { title: "Asbob sotib oldi", name: "Stomatologik kreslo #12345", status: "Ko‘rildi", time: "24–Yan.2025" }
                    ].map((item, idx) => (
                        <div key={idx} className='grid grid-cols-3 items-center py-3   h-[100px]'>

                            <div>
                                <div className='flex items-center gap-3'>
                                    <input type="checkbox" className='w-4 h-4 cursor-pointer' />
                                    <p className='text-[#2B3674] font-medium'>{item.title}</p>
                                </div>
                                <p className='text-[#A3AED0] text-sm ml-7'>{item.name}</p>
                            </div>

                            <span className={`text-[15px] font-semibold ${item.new ? "text-[#05CD99]" : "text-[#A3AED0]"}`}>
                                {item.status}
                            </span>

                            <span className='text-[#2B3674] text-[15px] font-medium'>{item.time}</span>
                        </div>
                    ))}
                </div>

                <div className='w-[40%] bg-white rounded-2xl shadow-sm  h-[350px] p-6'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-[#2B3674] text-[18px] font-semibold'>Asbob uskunalar statistikasi</h2>
                        <span className='text-[#A3AED0]'>Oylik ▼</span>
                    </div>

                    <div className='w-full h-[200px] flex justify-center items-center'>
                        <ResponsiveContainer width="70%" height="100%">
                            <PieChart>
                                <Pie
                                    data={[
                                        { name: 'Sotilgan', value: 63 },
                                        { name: 'Yangi', value: 25 },
                                    ]}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={70}
                                    fill="#4318FF"
                                    dataKey="value"
                                >
                                    <Cell fill="#4318FF" />
                                    <Cell fill="#67C7FF" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className='flex justify-around mt-5'>
                        <div className='flex items-center gap-2'>
                            <span className='w-3 h-3 bg-[#4318FF] rounded-full'></span>
                            <p className='text-[#707EAE]'>Sotilgan <strong className='text-[#2B3674]'>63%</strong></p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='w-3 h-3 bg-[#67C7FF] rounded-full'></span>
                            <p className='text-[#707EAE]'>Yangi <strong className='text-[#2B3674]'>25%</strong></p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AdminBody;
