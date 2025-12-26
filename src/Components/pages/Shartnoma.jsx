import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

function Shartnoma() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#F4F7FE] pb-20">
      {/* Oddiy va toza navigatsiya */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-6 flex items-center justify-between border-b border-gray-100">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium"
        >
            <IoMdArrowRoundBack />
          Orqaga
        </button>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest italic">Rasmiy hujjat</span>
      </div>

      {/* Matn qismi - Hech qanday Card-siz */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <h1 className="text-3xl font-black text-gray-900 mb-4 uppercase leading-tight">
          Dentago platformasi uchun ustalar ofertasi
        </h1>
        <p className="text-gray-500 mb-10 font-medium">Versiya 1.0.2 — 2024</p>

        <div className="space-y-12 text-gray-700 leading-relaxed text-lg">

          <p className="text-gray-900 font-medium border-l-4 rounded-[10px] border-gray-800 pl-6 py-2">
            Ushbu Oferta Dentago platformasi tomonidan Ustalar (keyingi o‘rinlarda — “Usta”)ga taqdim etiladigan xizmatlar va o‘zaro huquqiy munosabatlarni tartibga soladi.
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">1. Umumiy qoidalar</h2>
            <div className="space-y-4">
              <p><strong>1.1. Dentago</strong> — stomatologlar, zubtexniklar, ustalar va boshqa xizmat ko‘rsatuvchi mutaxassislarni yagona tizimda bog‘laydigan elektron platformadir.</p>
              <p><strong>1.2.</strong> Platforma buyurtmalarni taqsimlash, ularni qulay boshqarish va xizmat ko‘rsatuvchilar bilan mijozlar o‘rtasidagi ishlash jarayonini soddalashtirish uchun mo‘ljallangan.</p>
              <p><strong>1.3.</strong> Usta platformadan faqat o‘z nomidan foydalanadi va o‘z faoliyati uchun mustaqil ravishda javobgar hisoblanadi.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">2. Xizmatlar tavsifi</h2>
            <p className="mb-4 font-semibold text-gray-600 italic">Platforma Ustaga quyidagi imkoniyatlarni taqdim etadi:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium">
              <li className="bg-gray-50 p-4 rounded-lg">• Buyurtmalarni ko‘rish va ariza qoldirish</li>
              <li className="bg-gray-50 p-4 rounded-lg">• Buyurtmachilar bilan tezkor aloqa</li>
              <li className="bg-gray-50 p-4 rounded-lg">• O‘z xizmat narxlarini o‘rnatish</li>
              <li className="bg-gray-50 p-4 rounded-lg">• Reyting tizimi va mijoz sharhlari</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Tarif va to‘lov shartlari</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <p className="text-gray-600 max-w-md">Ustalar uchun xizmatdan foydalanish narxi: <br /><strong>Oylik obuna to‘lovi — 200 000 so‘m.</strong></p>
              <div className="text-right">
                <p className="text-sm text-gray-400">To‘lov amalga oshirilgandan keyin barcha funksiyalar ochiladi.</p>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-10">
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-tighter">4. Ustaning huquqlari</h2>
              <ul className="space-y-3 text-sm border-t border-gray-100 pt-4">
                <li>• Barcha buyurtmalarga murojaat qilish</li>
                <li>• Ish narxini mustaqil belgilash</li>
                <li>• Platforma texnik xizmatidan yordam olish</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-tighter">5. Ustaning majburiyatlari</h2>
              <ul className="space-y-3 text-sm border-t border-gray-100 pt-4">
                <li>• Ishni sifatli va muddatida bajarish</li>
                <li>• Odob-axloq me’yorlariga amal qilish</li>
                <li>• Obuna to‘lovini vaqtida to‘lash</li>
              </ul>
            </section>
          </div>

          <section className="pt-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">8. Javobgarlik</h2>
            <p className="text-sm italic">8.1. Usta bajargan ishning sifati uchun shaxsan javobgar. Platforma Ustalar tomonidan bajariladigan ishlar natijasi uchun javobgar emas.</p>
          </section>

          {/* Pastki qismdagi tugma - Sahifa tugashi */}
          <div className="pt-20 flex flex-col items-center">
            <button
              onClick={() => navigate("/dasturtolovi")}
              className="px-12 py-4 bg-gray-800 hover:bg-black text-white rounded-full font-bold shadow-xl transition-all active:scale-95"
            >
              Tasdiqlayman va qaytaman
            </button>
            <p className="mt-6 text-xs text-gray-400 font-mono tracking-widest">
              DENTAGO © 2024
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Shartnoma;
