import React, { useState } from "react";
import { Search, Bell, Edit2, Trash2, Menu, X } from "lucide-react";

export default function Zubtexniklar() {
  const technicians = [
    { id: 1, name: "Dr. Aliyev Jamshid", email: "j.aliyev@example.com", specialty: "Protezchi", phone: "+998 99 111-44-56", patients: 128, rating: 4.9, status: "Faol", date: "24-Yan.2025", comDate: "12-Dek.2025", color: "indigo" },
    { id: 2, name: "Dr. Karimova Malika", email: "m.karimova@example.com", specialty: "Ortodont", phone: "+998 91 234-56-78", patients: 205, rating: 4.2, status: "Faol", date: "22-Dek.2025", comDate: "12-Dek.2025", color: "purple" },
    { id: 3, name: "Dr. Rustamov Abbos", email: "a.rustamov@example.com", specialty: "Breketchi", phone: "+998 99 111-44-56", patients: 89, rating: 3.9, status: "Faol", date: "11-Sen.2025", comDate: "12-Dek.2025", color: "blue" },
    { id: 4, name: "Dr. Nazarova Dilnoza", email: "d.nazarova@example.com", specialty: "Vinir", phone: "+998 99 111-44-56", patients: 78, rating: 3.8, status: "Kutilmoqda", date: "10-Sen.2025", comDate: "12-Dek.2025", color: "pink" },
    { id: 5, name: "Dr. Tursunov Otabek", email: "o.tursunov@example.com", specialty: "Protezchi", phone: "+998 99 111-44-56", patients: 112, rating: 4.9, status: "Nofaol", date: "2-Avg.2025", comDate: "12-Dek.2025", color: "green" },
    { id: 6, name: "Dr. Aliyev Jamshid", email: "j.aliyev@example.com", specialty: "Breketchi", phone: "+998 99 111-44-56", patients: 225, rating: 4.7, status: "Faol", date: "1-Avg.2025", comDate: "12-Dek.2025", color: "yellow" },
  ];

  const colorMap = {
    indigo: { bg: "bg-indigo-100", ring: "ring-indigo-100/60", dot: "bg-indigo-500" },
    purple: { bg: "bg-purple-100", ring: "ring-purple-100/60", dot: "bg-purple-500" },
    blue: { bg: "bg-blue-100", ring: "ring-blue-100/60", dot: "bg-blue-500" },
    pink: { bg: "bg-pink-100", ring: "ring-pink-100/60", dot: "bg-pink-500" },
    green: { bg: "bg-green-100", ring: "ring-green-100/60", dot: "bg-green-500" },
    yellow: { bg: "bg-yellow-100", ring: "ring-yellow-100/60", dot: "bg-yellow-500" },
  };

  const statusStyle = {
    Faol: "bg-green-100 text-green-700",
    Kutilmoqda: "bg-yellow-100 text-yellow-700",
    Nofaol: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans pb-10">
      {/* HEADER */}
      <header className="px-4 md:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sticky top-0 bg-white/80 backdrop-blur-md z-30 shadow-sm lg:relative lg:shadow-none lg:bg-transparent">
        <div>
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">Tizim statistikasi</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Stomatologlar</h1>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              placeholder="Qidirish..."
              className="pl-9 pr-4 py-2 w-full sm:w-48 lg:w-64 bg-white border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <button className="p-2 bg-white border border-gray-200 rounded-full relative hover:bg-gray-50">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 ring-4 ring-indigo-50" />
        </div>
      </header>

      {/* STATS - Responsive Grid */}
      <div className="px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-8">
        {[
          { label: "Jami stomatologlar", val: "225", trend: "+23 ta" },
          { label: "Faol", val: "156" },
          { label: "Kutilmoqda", val: "34" },
          { label: "Nofaol", val: "35" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-xs md:text-sm text-gray-500 font-medium mb-1">{item.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl md:text-4xl font-bold text-gray-900">{item.val}</p>
              {item.trend && <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">{item.trend}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* TABLE SECTION */}
      <div className="px-4 md:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Stomatologlar Ro'yxati</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead className="bg-gray-50/50">
                <tr>
                  {["Ism / Email", "Mutaxassislik", "Telefon", "Bemorlar", "Baho", "Holat", "Sana", "Amallar"].map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {technicians.map((tech) => (
                  <tr key={tech.id} className="hover:bg-indigo-50/20 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ring-4 ${colorMap[tech.color].bg} ${colorMap[tech.color].ring}`}>
                          <div className={`w-2.5 h-2.5 rounded-full ${colorMap[tech.color].dot}`} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-900 text-sm truncate">{tech.name}</p>
                          <p className="text-xs text-gray-400 truncate">{tech.email}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{tech.specialty}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tech.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-black text-gray-700">{tech.patients}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="font-bold text-sm text-gray-700">{tech.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${statusStyle[tech.status]}`}>
                        {tech.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-[12px] font-medium text-gray-600">{tech.date}</p>
                      <p className="text-[10px] text-gray-400">Tugash: {tech.comDate}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobil foydalanuvchilar uchun eslatma */}
          <div className="lg:hidden px-6 py-3 bg-gray-50 text-[10px] text-gray-400 text-center border-t border-gray-100 italic">
            To'liq ma'lumot uchun jadvalni o'ngga suring
          </div>
        </div>
      </div>
    </div>
  );
}