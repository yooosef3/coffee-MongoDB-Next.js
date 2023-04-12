import { FiShare2 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FiWifi } from "react-icons/fi";
import React from 'react';

const Values = () => {
    return (
        <div className="bg-white py-16 md:py-20 lg:py-28">
            <h1 className="text-[#53a16e] font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-4">ارزشهای <span className="text-black">اصلی</span></h1>
            <p className="text-gray-500 text-center">
            Humblebrag gochujang pabst، استاد پاکسازی فرانزن وکسیلولوژی
            </p>
            <div className="flex flex-col lg:flex-row lg:justify-center gap-10 xl:gap-20 items-center w-[94%] md:w-[700px] lg:w-[920px] xl:w-[1200px] mx-auto mt-8 lg:mt-12">
                <div className="flex flex-col items-center gap-1">
                    <FiWifi className="text-[#53a16e] text-5xl mb-3" />
                    <h1 className="text-black text-2xl font-medium">زندگی شبانه</h1>
                    <p className="text-gray-500">استاد تمیز کردن فرنزن پرنده بروکلین.</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FiTrash2 className="text-[#53a16e] text-5xl mb-3" />
                    <h1 className="text-black text-2xl font-medium">کروز و تورهای آبی</h1>
                    <p className="text-gray-500">نشانه شناسی دیرینه تجارت مستقیم پایدار.</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <FiShare2 className="text-[#53a16e] text-5xl mb-3" />
                    <h1 className="text-black text-2xl font-medium">پیاده روی</h1>
                    <p className="text-gray-500">قهوه آیفون etsy بدون گلوتن.</p>
                </div>
            </div>
        </div>
    );
};

export default Values;