import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

import DentaGo from "../../assets/dentago.png";
// import Dentalist from "../../assets/dentalist.png";
// import Dentacrm from "../../assets/dentacrm.png";

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [showOfferModal, setShowOfferModal] = useState(false);

    const onSubmit = (data) => {
        setError('');
        if (data.username === '111' && data.password === '111') {
            setShowOfferModal(true);
        } else {
            setError('Login yoki parol xato! Faqat 111/111 ishlaydi.');
            reset();
        }
    };

    const handleAcceptOffer = () => {
        setShowOfferModal(false);
        navigate('/dasturtolovi');
    };

    const handleRejectOffer = () => {
        setShowOfferModal(false);
        setError('Oferta qabul qilinmadi. Tizimga kirish rad etildi.');
        reset();
    };

    return (
        <>
            <div className="flex min-h-screen w-full bg-white dark:bg-gray-900 overflow-hidden font-sans flex-col lg:flex-row">

                {/* Rasm qismi - Mobil uchun moslashtirildi */}
                <div className="w-full lg:w-3/5 h-48 sm:h-64 lg:h-auto relative">
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                        alt="Dental Office"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Rasm ustidagi ko'k rangli qatlam */}
                    <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
                </div>

                {/* Login form qismi */}
                <div className="w-full lg:w-2/5 flex flex-col justify-between p-6 md:p-12 lg:p-16 bg-white border-t lg:border-t-0 lg:border-l dark:border-gray-800">
                    <div className="w-full max-w-sm mx-auto my-auto py-4 lg:py-0">

                        {/* Logotiplar */}
                        <div className="flex gap-4 flex-wrap items-center justify-center mb-8">
                            <img src={DentaGo} alt="DentaGo" className="w-40 md:h-auto" />
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-[-40px]">
                            <div>
                                <label className="block text-sm font-medium text-black mb-1">
                                    Login <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    {...register('username', { required: 'Bu maydon toʻldirilishi shart' })}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="111"
                                />
                                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-black mb-1">
                                    Parol <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        {...register('password', { required: 'Bu maydon toʻldirilishi shart' })}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all pr-10"
                                        placeholder="111"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                            </div>

                            {error && (
                                <div className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/30 p-3 rounded-lg flex items-center gap-2">
                                    <AlertTriangle size={16} className="shrink-0" />
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all active:scale-95"
                            >
                                Kirish
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Oferta Modal - bir xil qoladi */}
            {showOfferModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col border dark:border-gray-800 overflow-hidden">

                        {/* Modal Header */}
                        <div className="p-6 border-b dark:border-gray-800 bg-blue-50/50 dark:bg-blue-900/20 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-blue-600" size={32} />
                                <div>
                                    <h2 className="text-xl font-bold dark:text-white leading-tight">
                                        DENTAGO PLATFORMASI
                                    </h2>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
                                        Zubtexniklar uchun ommaviy oferta shartnomasi
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <FileText className="text-gray-300 dark:text-gray-700" size={40} />
                            </div>
                        </div>

                        {/* Modal Scrollable Content */}
                        <div className="p-8 overflow-y-auto text-gray-700 dark:text-gray-300 text-[14px] leading-relaxed space-y-6">
                            <section>
                                <p className="mb-4 italic text-gray-600 dark:text-gray-400">
                                    Ushbu ommaviy oferta Dentago platformasi va unda ro‘yxatdan o‘tgan zubtexnik o‘rtasida tuziladi.
                                    Platformadan foydalanish orqali siz barcha shartlarni so'zsiz qabul qilasiz.
                                </p>
                            </section>

                            <section>
                                <h3 className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase text-xs tracking-widest">
                                    <CheckCircle2 size={16} /> 1. Umumiy qoidalar
                                </h3>
                                <div className="pl-6 space-y-1 border-l-2 border-blue-100 dark:border-gray-800">
                                    <p>1.1. <strong>Dentago</strong> — stomatologlar va zubtexniklar o‘rtasidagi raqamli ko'prik.</p>
                                    <p>1.2. Platforma zubtexnik xizmatlarini ko‘rsatmaydi, balki aloqa imkoniyatini beradi.</p>
                                </div>
                            </section>

                            <section>
                                <h3 className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase text-xs tracking-widest">
                                    <CheckCircle2 size={16} /> 2. Zubtexnikning majburiyatlari
                                </h3>
                                <div className="pl-6 space-y-2 border-l-2 border-blue-100 dark:border-gray-800">
                                    <p>3.1. Zubtexnik o‘z xizmatlari haqida <strong>haqqoniy ma’lumot</strong> berishi va buyurtmalarni <strong>sifatli</strong> bajarishi shart.</p>
                                    <p>3.2. Bajarilgan ish natijasi uchun zubtexnik <strong>to‘liq javobgar</strong> hisoblanadi.</p>
                                </div>
                            </section>

                            <section className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border dark:border-gray-700">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-2 uppercase text-xs tracking-widest">
                                    4. To'lovlar
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p>Oylik abonent to‘lovi:</p>
                                    <p className="text-xl font-black text-blue-600">200 000 so‘m</p>
                                </div>
                                <p className="text-[12px] mt-2 text-gray-500">Abonent to‘lovi buyurtmalar sonidan qat’i nazar undiriladi va qaytarilmaydi.</p>
                            </section>

                            <section>
                                <h3 className="flex items-center gap-2 font-bold text-red-600 mb-3 uppercase text-xs tracking-widest">
                                    <AlertTriangle size={18} /> 8. Javobgarlik va jazo choralari
                                </h3>
                                <div className="pl-6 space-y-3 border-l-2 border-red-200 dark:border-red-900/50">
                                    <p className="font-medium text-red-700 dark:text-red-400">
                                        8.1. Buyurtmani qabul qilib, uni asossiz bajarmaslik shartlarni qo‘pol ravishda buzish hisoblanadi.
                                    </p>
                                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
                                        <p className="mb-2"><strong>8.2. Bunday holatda Zubtexnik:</strong></p>
                                        <ul className="list-disc ml-5 space-y-1">
                                            <li>Moddiy va obro‘ga yetgan zararni qoplaydi.</li>
                                            <li>To'langan summa miqdorining <strong>10 baravari</strong> miqdorida jarima to'laydi.</li>
                                        </ul>
                                    </div>
                                    <p>8.4. Platforma akkauntni darhol bloklash va zararni <strong>sud tartibida</strong> undirish huquqiga ega.</p>
                                </div>
                            </section>

                            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl border border-yellow-200 dark:border-yellow-700/50">
                                <p className="text-center font-bold text-yellow-800 dark:text-yellow-200 text-sm">
                                    Diqqat: "Roziman" tugmasini bosish orqali siz ushbu ofertani rasman imzolagan hisoblanasiz.
                                </p>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t dark:border-gray-800 bg-gray-50 dark:bg-gray-900/80 flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={handleRejectOffer}
                                className="flex-1 py-3 px-6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                            >
                                Bekor qilish
                            </button>
                            <button
                                onClick={handleAcceptOffer}
                                className="flex-1 py-3 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                <CheckCircle2 size={20} />
                                Roziman
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
