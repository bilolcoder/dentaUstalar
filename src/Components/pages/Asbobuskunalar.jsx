import React, { useState } from 'react';
// Xatolikni oldini olish uchun faqat Lucide-react ishlatamiz
import { 
  Search, Bell, Eye, Edit2, Trash2, 
  CheckCircle, XCircle, Filter, ChevronRight 
} from 'lucide-react';

const Asbobuskunalar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Figma dizayniga moslashtirilgan ma'lumotlar
  const equipmentData = [
    { id: 1, name: "Stomatologik kreslo Premium 2024", company: "DentalSupply LLC", category: "Kreslo", price: "45 mln", status: "Yangi", views: 2122, holat: "Faol", date: "24-Yan, 2025" },
    { id: 2, name: "Rentgen apparati Panoramik", company: "MedTech Solutions", category: "Rentgen", price: "550 mln", status: "Ishlagan", views: 1100, holat: "Faol", date: "22-Dek, 2024" },
    { id: 3, name: "Ultratovushli tozalagich", company: "Dr. Aliyev Jamshid", category: "Asboblar", price: "220 mln", status: "Ishlagan", views: 500, holat: "Faol", date: "11-Sen, 2024" },
    { id: 4, name: "Avtoklav sterilizatorlari", company: "Health Equip Uz", category: "Sterilizatsiya", price: "92 mln", status: "Yangi", views: 455, holat: "Kutilmoqda", date: "10-Sen, 2024" },
    { id: 5, name: "LED operatsion chiroq", company: "LightMed Pro", category: "Yoritish", price: "135 mln", status: "Yangi", views: 420, holat: "Nofaol", date: "2-Avg, 2024" },
  ];

  const getStatusStyle = (holat) => {
    switch (holat) {
      case "Faol": return "text-emerald-500 bg-emerald-50";
      case "Kutilmoqda": return "text-amber-500 bg-amber-50";
      case "Nofaol": return "text-rose-500 bg-rose-50";
      default: return "text-slate-500 bg-slate-50";
    }
  };

  return (
    <div className="bg-[#F4F7FE] min-h-screen p-4 md:p-8 font-sans text-[#2B3674]">
      
      {/* HEADER SECTION - Figma Style */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <p className="text-sm font-medium text-[#707EAE]">Tizim statistikasi va umumiy ma'lumotlar</p>
          <h2 className="text-3xl font-bold text-[#2B3674]">Asbob uskunalar bozori</h2>
        </div>

        <div className="flex items-center bg-white rounded-3xl shadow-sm p-2 gap-2 border border-gray-50">
          <div className="flex items-center bg-[#F4F7FE] rounded-2xl px-4 py-2 md:w-64">
            <Search className="w-4 h-4 text-[#A3AED0]" />
            <input
              type="text"
              placeholder="Qidiruv..."
              className="bg-transparent outline-none text-sm px-2 w-full placeholder-[#8F9BBA]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="relative p-2 text-[#A3AED0] hover:text-[#4318FF]">
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden">
            <img src="https://i.pravatar.cc/100?img=12" alt="admin" />
          </div>
        </div>
      </header>

      {/* STATISTICS CARDS - Figma Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Jami mahsulotlar", value: "225", trend: "+23 ta", color: "bg-indigo-50 text-indigo-600" },
          { label: "Faol e'lonlar", value: "156", trend: null, color: "bg-emerald-50 text-emerald-600" },
          { label: "Qolgan mahsulotlar", value: "34", trend: null, color: "bg-amber-50 text-amber-600" },
          { label: "Nofaol", value: "35", trend: null, color: "bg-rose-50 text-rose-600" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-[30px] p-6 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-full ${stat.color}`}>
               <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#A3AED0] uppercase tracking-wider">{stat.label}</p>
              <div className="flex items-center gap-2">
                <h4 className="text-2xl font-bold text-[#2B3674]">{stat.value}</h4>
                {stat.trend && <span className="text-[12px] font-bold text-emerald-500">{stat.trend}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT - Clean Table Design */}
      <div className="bg-white rounded-[30px] shadow-sm overflow-hidden border border-white">
        <div className="px-8 py-6 flex justify-between items-center border-b border-gray-50">
          <h3 className="text-xl font-bold text-[#2B3674]">E'lonlar boshqaruvi</h3>
          <button className="text-[#4318FF] text-sm font-bold hover:underline">Hammasini ko'rish</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[#A3AED0] text-[12px] font-bold uppercase bg-[#F9FAFD]">
                <th className="px-8 py-5">Mahsulot va Ishlab chiqaruvchi</th>
                <th className="px-6 py-5">Toifa</th>
                <th className="px-6 py-5">Narxi</th>
                <th className="px-6 py-5">Holati</th>
                <th className="px-6 py-5 text-center">Ko'rishlar</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-8 py-5 text-right">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {equipmentData.map((item) => (
                <tr key={item.id} className="hover:bg-[#F4F7FE]/30 transition-colors group">
                  <td className="px-8 py-5">
                    <div>
                      <p className="font-bold text-[#2B3674] text-sm group-hover:text-[#4318FF] transition-colors">{item.name}</p>
                      <p className="text-xs text-[#A3AED0]">{item.company}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-[#2B3674]">{item.category}</td>
                  <td className="px-6 py-5 text-sm font-bold text-[#2B3674]">{item.price}</td>
                  <td className="px-6 py-5 text-sm text-[#2B3674]">{item.status}</td>
                  <td className="px-6 py-5 text-center">
                    <span className="bg-gray-100 text-[#707EAE] px-3 py-1 rounded-full text-xs font-bold">
                      {item.views.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold ${getStatusStyle(item.holat)}`}>
                      {item.holat}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-[#A3AED0] hover:text-[#4318FF] hover:bg-indigo-50 rounded-xl transition-all"><Eye size={18} /></button>
                      <button className="p-2 text-[#A3AED0] hover:text-emerald-500 hover:bg-emerald-50 rounded-xl transition-all"><Edit2 size={18} /></button>
                      <button className="p-2 text-[#A3AED0] hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Asbobuskunalar;