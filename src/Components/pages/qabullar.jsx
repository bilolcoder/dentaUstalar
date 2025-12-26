// src/Components/pages/Qabullar.jsx
import React from 'react';
import { Search, Bell, Edit2, Trash2, Menu } from 'lucide-react';

export default function Qabullar() {
  const appointments = [
    { id: 1, initials: "KN", name: "Karimova Nodira", doctor: "Stomatolog: Dr. Aliyev Jamshid", service: "Profilaktika", date: "24-Yan.2025", time: "09:10", status: "Rejalashtirilgan", note: "" },
    { id: 2, initials: "TS", name: "Toshmatov Sardor", doctor: "Stomatolog: Dr. Karimova Malika", service: "Ortodontiya", date: "22-Dek.2025", time: "09:30", status: "Yakunlandi", note: "" },
    { id: 3, initials: "AD", name: "Abdullayeva Dinoza", doctor: "Stomatolog: Dr. Rustamov Abbos", service: "Jarrohlik", date: "11-Sen.2025", time: "09:40", status: "Kelmadi", note: "Bemor kelmadi" },
    { id: 4, initials: "RJ", name: "Rahimov Jasur", doctor: "Stomatolog: Dr. Aliyev Jamshid", service: "Davolash", date: "10-Sen.2025", time: "10:35", status: "Yakunlandi", note: "" },
    { id: 5, initials: "NM", name: "Nazarova Madina", doctor: "Stomatolog: Dr. Nazarova Dinoza", service: "Konsultatsiya", date: "2-Avg.2025", time: "13:00", status: "Bekor qilindi", note: "Bemor bekor qildi" },
    { id: 6, initials: "YO", name: "Yusupov Otabek", doctor: "Stomatolog: Dr. Karimova Malika", service: "Profilaktika", date: "1-Avg.2025", time: "14:00", status: "Rejalashtirilgan", note: "" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Rejalashtirilgan": return "text-blue-700 font-semibold";
      case "Yakunlandi": return "text-green-700 font-semibold";
      case "Kelmadi": return "text-yellow-700 font-semibold";
      case "Bekor qilindi": return "text-gray-700 font-semibold";
      default: return "text-gray-700";
    }
  };

  return (
    <div className="bg-indigo-50/50 min-h-screen p-3 md:p-6 lg:p-8">
      {/* Header */}
      <header className="bg-white rounded-2xl shadow-sm mb-6 sticky top-0 z-40 lg:relative">
        <div className="px-4 py-4 md:px-6 md:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col">
            <p className="text-xs md:text-sm text-gray-500">Tizim statistikasi va umumiy ma'lumotlar</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Qabullar</h2>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Qidirish"
                className="pl-9 pr-4 py-2 w-full sm:w-48 lg:w-64 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center gap-2 md:gap-4">
               <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer relative">
                  <Bell className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
               </div>
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden ring-2 md:ring-4 ring-indigo-100 shrink-0">
                 <img src="https://i.pravatar.cc/100" alt="Profile" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Statistika kartalari - Moslashuvchan Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 mb-8">
        {[
          { label: "Bugun", val: "89" },
          { label: "Rejalashtirilgan", val: "35" },
          { label: "Yakunlangan", val: "34" },
          { label: "Bekor qilingan", val: "6" },
          { label: "Kelmagan", val: "4" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm p-4 md:p-6 transition-transform hover:scale-[1.02]">
            <p className="text-xs md:text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className="text-2xl md:text-4xl font-bold text-gray-800">{stat.val}</p>
          </div>
        ))}
      </div>

      {/* Bildirishnomalar jadvali */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Barcha qabullar</h3>
        </div>
        
        {/* Jadvalni mobil qurilmalarda surish imkoniyati */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50 border-b border-gray-200 text-left">
              <tr>
                <th className="px-6 py-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Ism familiya</th>
                <th className="px-6 py-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Xizmat turi</th>
                <th className="px-6 py-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Sana / Vaqt</th>
                <th className="px-6 py-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Holat</th>
                <th className="px-6 py-4 text-xs font-medium text-gray-600 uppercase tracking-wider">Izoh</th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {appointments.map((item) => (
                <tr key={item.id} className="hover:bg-indigo-50/30 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 shrink-0 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                        {item.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                        <p className="text-[12px] text-gray-500">{item.doctor}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.date}</div>
                    <div className="text-xs text-gray-500">{item.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-3 py-1 rounded-full bg-opacity-10 text-[12px] ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 italic">
                    {item.note || <span className="text-gray-300">—</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button title="Tahrirlash" className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-lg transition">
                        <Edit2 className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                      <button title="O'chirish" className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition">
                        <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobil uchun pastki ma'lumot (ixtiyoriy) */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-center lg:hidden">
          <p className="text-xs text-gray-500">Jadvalni to'liq ko'rish uchun o'ngga suring →</p>
        </div>
      </div>
    </div>
  );
}