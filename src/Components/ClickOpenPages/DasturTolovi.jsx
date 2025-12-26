import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Navigatsiya uchun
import { IoMdArrowRoundBack } from "react-icons/io";

function DasturTolovi() {
  const navigate = useNavigate(); // Hookni chaqiramiz
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("To'lov ma'lumotlari:", data);
  };

  return (
    <div className="h-auto relative bg-[#F4F7FE] block p-4">
        {/* Orqaga tugmasi */}
        <button onClick={() => navigate(-1)} className='w-[65px] max-sm:w-[45px] max-sm:h-[45px] max-sm:text-[20px] flex items-center justify-center h-[65px] absolute left-0 top-0 bg-white rounded-2xl text-3xl shadow-sm' >
                    <IoMdArrowRoundBack />
                    </button>

                    <div className="flex items-center justify-center mt-20">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-200 p-8">


        {/* Sarlavha qismi */}
        <div className="mb-8 mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">To'lov ma'lumotlari</h2>
          <p className="text-gray-500 text-sm mt-1">Davom etish uchun karta ma'lumotlarini kiriting.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Karta egasi */}
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
              Karta egasi
            </label>
            <input
              {...register("fullName", { required: "Ism-sharif shart" })}
              placeholder="ABDULLO ALIYEV"
              className={`w-full px-4 py-3 bg-white border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} text-gray-800 rounded-lg focus:ring-1 focus:ring-gray-600 focus:border-gray-600 outline-none transition-all placeholder:text-gray-400`}
              />
          </div>

          {/* Karta raqami */}
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
              Karta raqami
            </label>
            <div className="relative">
              <input
                {...register("cardNumber", {
                    required: "Raqamni kiriting",
                    pattern: { value: /^[0-9]{16}$/, message: "16 ta raqam kiriting" }
                })}
                placeholder="0000 0000 0000 0000"
                className={`w-full px-4 py-3 bg-white border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} text-gray-800 rounded-lg focus:ring-1 focus:ring-gray-600 focus:border-gray-600 outline-none transition-all`}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                Muddati
              </label>
              <input
                {...register("expiry", { required: true })}
                placeholder="MM/YY"
                className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-1 focus:ring-gray-600 outline-none transition-all"
                />
            </div>
            <div className="w-1/2">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                CVV
              </label>
              <input
                {...register("cvv", { required: true, maxLength: 3 })}
                type="password"
                placeholder="***"
                className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg focus:ring-1 focus:ring-gray-600 outline-none transition-all"
                />
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-4 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-sm"
              >
              Tasdiqlash va to'lash
            </button>
          </div>
        </form>
      </div>
                </div>
    </div>
  );
}

export default DasturTolovi;
