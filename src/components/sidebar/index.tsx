"use client";
import Image from "next/image";
import brandLogo from "@/assets/images/shop-logo.png";
import { AiFillDashboard } from "react-icons/ai";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { FaBox, FaShoppingCart, FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState("/dashboard");
  const sidebarToggleHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const items = [
    { name: "داشبورد", href: "/dashboard", icon: <AiFillDashboard /> },
    { name: "محصولات", href: "/products", icon: <FaBox /> },
    { name: "سفارشات", href: "/orders", icon: <FaShoppingCart /> },
    { name: "مشتریان", href: "/users", icon: <FaUser /> },
  ];

  return (
    <>
      {sidebarOpen ? (
        <div className="w-64 h-screen bg-slate-100 p-2 transition-all duration-700">
          <div className="flex justify-between items-center gap-3">
            <Image src={brandLogo} alt="Brand Logo" width={48} height={48} />
            <h2 className="text-xl font-bold mt-4">فروشگاه نینجا</h2>
            <MdKeyboardArrowRight onClick={sidebarToggleHandler} />
          </div>
          {items.map((item) => (
            <Link key={item.name} href={item.href}>
              <div
                className={`flex items-center gap-2 p-2 hover:bg-slate-200 rounded-lg mt-2 ${activeItem === item.href ? "bg-slate-300 font-bold" : ""}`}
                onClick={() => setActiveItem(item.href)}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-18 h-screen bg-slate-100 p-2 transition-all duration-700">
          <div className="flex justify-between items-center gap-1">
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
