"use client";
import Image from "next/image";
import brandLogo from "@/assets/images/shop-logo.png";
import { AiTwotoneDashboard } from "react-icons/ai";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const sidebarToggleHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const items = [
    { name: "داشبورد", href: "/dashboard", icon: <AiTwotoneDashboard /> },
    { name: "محصولات", href: "/products", icon: <AiTwotoneDashboard /> },
    { name: "سفارشات", href: "/orders", icon: <AiTwotoneDashboard /> },
    { name: "مشتریان", href: "/customers", icon: <AiTwotoneDashboard /> },
  ];

  return (
    <>
      {sidebarOpen ? (
        <div className="w-64 h-screen bg-slate-100 p-2">
          <div className="flex justify-center items-center gap-5">
            <Image src={brandLogo} alt="Brand Logo" width={48} height={48} />
            <h2 className="text-xl font-bold mt-4">فروشگاه نینجا</h2>
            <MdKeyboardArrowRight onClick={sidebarToggleHandler} />
          </div>
          {items.map((item) => (
            <Link key={item.name} href={item.href}>
              <div className="flex items-center gap-2 p-2 hover:bg-slate-200 rounded-lg mt-2">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-16 h-screen bg-slate-100 p-2">
          <div className="flex justify-center items-center gap-1">
            <Image src={brandLogo} alt="Brand Logo" width={36} height={36} />
            <MdKeyboardArrowLeft onClick={sidebarToggleHandler} />
          </div>
          {items.map((item) => (
            <Link key={item.name} href={item.href}>
              <div className="flex items-center gap-2 p-2 hover:bg-slate-200 rounded-lg mt-2">
                <span>{item.icon}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
export default Sidebar;
