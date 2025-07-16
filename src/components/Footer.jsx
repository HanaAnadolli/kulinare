import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import Logo from "../assets/LOGO.png";
import BackToTop from '../components/BackToTop';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#55384C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Kulinare logo" className="h-10 w-auto" />
          </div>

          {/* Description */}
          <p className="text-gray-200 text-sm leading-relaxed">
            {t("footer.description")}
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-[#351F2E] hover:text-[#fff]">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-[#351F2E] hover:text-[#fff]">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#351F2E] hover:text-[#fff]">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" aria-label="TikTok" className="text-[#351F2E] hover:text-[#fff]">
              <FaTiktok size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="text-[#351F2E] hover:text-[#fff]">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("footer.infoTitle")}</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            Magjistralja Prishtinë–Ferizaj,<br />
            rrethi i QMI-së (te Pro Credit-i),<br />
            10000 Prishtinë
          </p>
          <div className="mt-4 space-y-2 text-gray-200 text-sm">
            <p>
              Tel: <a href="tel:+38345993366" className="hover:text-[#D2AF6E]">+383 45 99 33 66</a>
            </p>
            <p>
              Tel: <a href="tel:+38338600004" className="hover:text-[#D2AF6E]">+383 38 600 004</a>
            </p>
            <p>
              Viber: <a href="viber://chat?number=%2B38345993366" className="hover:text-[#D2AF6E]">+383 45 99 33 66</a>
            </p>
            <p>
              Email: <a href="mailto:info@kulinare.com" className="hover:text-[#D2AF6E]">info@kulinare.com</a>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 gap-8">
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.linksTitle")}</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <a href="/" className="hover:text-[#D2AF6E]">{t("nav.home")}</a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#D2AF6E]">{t("nav.about")}</a>
              </li>
              <li>
                <a href="/products" className="hover:text-[#D2AF6E]">{t("nav.products")}</a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-[#D2AF6E]">{t("nav.gallery")}</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#D2AF6E]">{t("nav.blog")}</a>
              </li>
              <li className="mt-2">
                <a href="/contact-us" className="text-white border-t border-gray-400 pt-2 hover:text-[#D2AF6E]">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy & Security */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.securityTitle")}</h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <a href="#" className="hover:text-[#D2AF6E]">{t("footer.terms")}</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D2AF6E]">{t("footer.privacy")}</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D2AF6E]">{t("footer.faq")}</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D2AF6E]">{t("footer.cookies")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider and Bottom Bar */}
      <div className="border-t border-gray-400" />
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <p className="text-gray-200 text-sm">
          {t("footer.copyright")}
        </p>
      </div>
      <BackToTop />
    </footer>
  );
}
