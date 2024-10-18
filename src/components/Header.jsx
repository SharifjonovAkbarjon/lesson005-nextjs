"use client";
import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";
import { BsPersonExclamation } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import logo from "@/assets/furniro.png";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import i18n from "next-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { t } = useTranslation("Header");
  const router = useRouter();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    router.push(router.asPath);
    console.log(lang);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto py-6 flex items-center justify-between">
        <Link href="/">
          <div>
            <img src={logo.src} alt="Furniro" className="w-[180px] h-auto" />
          </div>
        </Link>
        <div className={`nav__collect flex gap-3 ${isMenuOpen ? "show" : ""}`}>
          <div className="flex items-center lg:gap-[75px] md:gap-[50px] sm:gap-9 gap-3">
            <Link
              className="text-[16px] font-[500] text-[#000000]"
              href="/shop"
            >
              {t("shop")}
            </Link>
            <Link
              className="text-[16px] font-[500] text-[#000000]"
              href="/about"
            >
              {t("about")}
            </Link>
            <Link
              className="text-[16px] font-[500] text-[#000000]"
              href="/contact"
            >
              {t("contact")}
            </Link>
            <Link
              className="text-[16px] font-[500] text-[#000000]"
              href="/login"
            >
              {t("login")}
            </Link>
          </div>
        </div>
        <div className="flex lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-3">
          <BsPersonExclamation className="text-black" />
          <GoSearch className="text-black" />
          <FaRegHeart className="text-black" />
          <FiShoppingCart className="text-black" />
        </div>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-[#fff] px-3 py-2 text-black"
        >
          <option value="en">EN</option>
          <option value="uz">UZ</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
