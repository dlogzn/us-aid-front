import USAIDBANGLALOGO from "../assets/usaid-bangla.jpg";
import DILOGO from "../assets/democracy-nternation-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import ButtonLeft from "../components/ButtonLeft";

const Footer = () => {
    return (
        <>
        <div className="text-center my-6">
            <div className="container mx-auto">
                <div className="footer-top-part flex items-center justify-center flex-col md:flex-row gap-6 md:gap-28">
                    <div>
                        <img src={ USAIDBANGLALOGO } alt="USAID logo" className="w-[150px] md:w-[250px]" />
                    </div>
                    <div>
                        <img src={ DILOGO } alt="USAID logo" className="w-[150px] md:w-[250px]" />                    
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center bg-[#2E2E2E]">
            <div className="container mx-auto">
                <div className="footer-bottom-part pt-4 pb-6 text-white">
                    <div className="flex justify-end gap-4 mb-6 px-4 md:px-0">
                        <div><FaFacebookF className="text-white text-xl" /></div>
                        <div><TfiYoutube className="text-white text-xl" /></div>
                    </div>
                    <div className="mb-8 px-4 lg:px-0">
                        <p className="text-white text-center lg:text-left font-Kalpurush-bold text-xl lg:text-2xl">"এই ওয়েবসাইটটি আমেরিকান জনগণের মাধ্যমে ইউনাইটেড স্টেটস এজেন্সি ফর ইন্টারন্যাশনাল ডেভেলপমেন্ট(ইউএসএআইডি) এর সহযোগিতায় তৈরি করা হয়েছে। এখানে উল্লেখিত বিষয়বস্তুর দায়িত্ব একান্তই ডেমোক্রেসি ইন্টারন্যাশনালের এবং তা ইউএসএআইডি কিংবা যুক্তরাষ্ট্রের সরকারের মতামত কে প্রতিফলিত করে না।"</p>
                    </div>
                    <div className="flex justify-between flex-col lg:flex-row gap-2 lg:gap-0">
                        <div>
                            <p className="font-Kalpurush-bold">@copy 2024 ডেমোক্রেসি ইন্টারন্যাশনাল। সর্বস্বত্ব সংরক্ষিত।</p>
                        </div>
                        <div>
                            <p>Maintained by IT, Democracy International Inc</p>
                        </div>
                        <div className="flex justify-center gap-6 border-r-1">
                            <a href="" className="relative footer-menu-item font-Kalpurush-bold">আমাদের কথা</a>
                            <a href="" className="relative footer-menu-item font-Kalpurush-bold">যোগাযোগ</a>
                            <a href="" className="font-Kalpurush-bold">লগইন</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>        
        </>
    )
}

export default Footer