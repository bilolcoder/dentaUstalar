import React, { useState } from "react";
import { Menu, Search, Bell, Pencil, Trash2 } from "lucide-react";

export default function Bemorlar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const data = [
    { id: 1, name: "Karimova Nodira", email: "karimova@gmail.com", phone: "+998 99 111-44-56", lastVisit: "24–Yan.2025", age: 34, status: "Faol", visits: 3, doctor: "Dr. Aliyev Jamshid", initials: "KN", color: "bg-indigo-500" },
    { id: 2, name: "Toshmatov Sardor", email: "toshmatov@gmail.com", phone: "+998 99 111-44-56", lastVisit: "22–Dek.2025", age: 24, status: "Faol", visits: 10, doctor: "Dr. Karimova Malika", initials: "TS", color: "bg-purple-500" },
    { id: 3, name: "Abdullayeva Dilnoza", email: "abdullayeva@gmail.com", phone: "+998 99 111-44-56", lastVisit: "11–Sen.2025", age: 48, status: "Faol", visits: 7, doctor: "Dr. Rustamov Abbos", initials: "AD", color: "bg-blue-500" },
    { id: 4, name: "Rahimov Jasur", email: "rahimov@gmail.com", phone: "+998 99 111-44-56", lastVisit: "10–Sen.2025", age: 36, status: "Faol", visits: 5, doctor: "Dr. Aliyev Jamshid", initials: "RJ", color: "bg-pink-500" },
    { id: 5, name: "Nazarova Madina", email: "nazarova@gmail.com", phone: "+998 99 111-44-56", lastVisit: "2–Avg.2025", age: 22, status: "Nofaol", visits: 15, doctor: "Dr. Nazarova Dilnoza", initials: "NM", color: "bg-indigo-400" },
    { id: 6, name: "Yusupov Otabek", email: "otabek@gmail.com", phone: "+998 99 111-44-56", lastVisit: "1–Avg.2025", age: 16, status: "Faol", visits: 8, doctor: "Dr. Karimova Malika", initials: "YO", color: "bg-violet-500" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FE]/50">
      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between bg-white/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden text-[#2B3674] p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <Menu size={24} />
          </button>

          <div>
            <p className="hidden sm:block text-[10px] md:text-sm text-[#707EAE]">
              Tizim statistikasi va umumiy ma'lumotlar
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-[#2B3674]">
              Bemorlar
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 bg-white px-3 md:px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3AED0]" />
            <input
              placeholder="Qidiruv..."
              className="pl-10 pr-4 py-1.5 w-40 lg:w-48 rounded-full bg-[#F4F7FE] outline-none text-sm focus:ring-2 focus:ring-indigo-200 transition-all"
            />
          </div>
          <button className="p-1.5 text-[#A3AED0] hover:bg-gray-50 rounded-full transition relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#4318FF] to-[#9F7AEA] ring-2 md:ring-4 ring-[#E0E7FF] shrink-0" />
        </div>
      </header>

      {/* ================= CARDS ================= */}
      <div className="py-4 md:py-6 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { title: "Jami bemorlar", value: "1 234" },
          { title: "Faol bemorlar", value: "1 187" },
          { title: "Nofaol (30+ kun)", value: "47" },
          { title: "Yangi (ushbu oy)", value: "89" },
        ].map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm p-4 md:p-5 border border-gray-50 hover:shadow-md transition-shadow"
          >
            <p className="text-[10px] md:text-sm text-[#A3AED0] font-medium truncate uppercase tracking-wider">{c.title}</p>
            <p className="text-xl md:text-3xl font-bold text-[#2B3674] mt-1">{c.value}</p>
          </div>
        ))}
      </div>

      {/* ================= TABLE SECTION ================= */}
      <div className="pb-10">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <div className="px-6 py-5 border-b border-gray-50 flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-bold text-[#2B3674]">Barcha bemorlar</h3>
            <button className="text-sm font-bold text-[#4318FF] hover:underline lg:hidden">
              Filtrlash
            </button>
          </div>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-[1000px] p-6">
              {/* Table Header */}
              <div className="grid grid-cols-[2.5fr_1.5fr_1.3fr_0.7fr_0.8fr_1fr_1.5fr_0.7fr] text-xs md:text-sm font-bold text-[#A3AED0] pb-4 border-b border-gray-50 uppercase tracking-widest">
                <span>Ism familiya</span>
                <span>Tel. raqam</span>
                <span>So‘nggi tashrif</span>
                <span>Yosh</span>
                <span>Holat</span>
                <span>Tashriflar</span>
                <span>Shifokor</span>
                <span className="text-right pr-4">Amallar</span>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-50">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[2.5fr_1.5fr_1.3fr_0.7fr_0.8fr_1fr_1.5fr_0.7fr] items-center py-4 hover:bg-[#F4F7FE]/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full text-white flex items-center justify-center text-xs font-bold shrink-0 ${item.color} shadow-sm`}>
                        {item.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[#2B3674] truncate">{item.name}</p>
                        <p className="text-[11px] text-[#A3AED0] truncate">{item.email}</p>
                      </div>
                    </div>

                    <p className="text-sm text-[#2B3674] font-medium">{item.phone}</p>
                    <p className="text-sm text-[#2B3674]">{item.lastVisit}</p>
                    <p className="text-sm text-[#2B3674] font-semibold">{item.age}</p>

                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                        item.status === "Faol"
                        ? "bg-blue-50 text-[#4318FF]"
                        : "bg-gray-50 text-[#A3AED0]"
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <p className="text-sm font-bold text-[#2B3674] pl-4">{item.visits}</p>
                    <p className="text-sm text-[#707EAE] font-medium">{item.doctor}</p>

                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 lg:group-hover:opacity-100 transition-opacity">
                      <button title="Tahrirlash" className="w-8 h-8 border border-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                        <Pencil size={14} />
                      </button>
                      <button title="O'chirish" className="w-8 h-8 border border-red-100 rounded-lg flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobil uchun eslatma */}
          <div className="lg:hidden py-3 text-center bg-gray-50/50">
            <p className="text-[10px] text-[#A3AED0] italic">
              To'liq ko'rish uchun o'ngga suring →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
