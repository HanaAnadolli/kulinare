import React, { useState } from "react";
import axios from "axios";
import location from "../assets/icons/location.svg";
import phone from "../assets/icons/phone.svg";
import email from "../assets/icons/email.svg";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      await axios.post("https://kulinare.test/api/contact", formData);
      setSuccess(t("contact.success"));
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(t("contact.error"));
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Toasts */}
      {success && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow z-50 transition">
          {success}
        </div>
      )}
      {error && (
        <div className="fixed top-6 right-6 bg-red-600 text-white px-4 py-2 rounded shadow z-50 transition">
          {error}
        </div>
      )}

      {/* Left Column */}
      <div>
        <h2 className="text-lg font-semibold text-black mb-2">
          {t("contact.title2")}
        </h2>
        <p className="text-sm text-gray-700 mb-4">{t("contact.intro1")}</p>
        <p className="text-sm text-gray-700 mb-6">{t("contact.intro2")}</p>

        <div className="flex items-start gap-4 mb-6">
          <img src={location} alt="Address" className="w-[84px] h-[84px]" />
          <div>
            <p className="text-2xl font-semibold text-black">
              {t("contact.addressLabel")}
            </p>
            <p className="text-base text-gray-700">{t("contact.addressText")}</p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-6">
          <img src={phone} alt="Phone" className="w-[84px] h-[84px]" />
          <div>
            <p className="text-2xl font-semibold text-black">
              {t("contact.phoneLabel")}
            </p>
            <p className="text-base text-gray-700">045 993 366</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <img src={email} alt="Email" className="w-[84px] h-[84px]" />
          <div>
            <p className="text-2xl font-semibold text-black">
              {t("contact.emailLabel")}
            </p>
            <p className="text-base text-gray-700">shitja@kulinare.com</p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-lg font-medium block mb-1">
              {t("contact.firstName")}<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="text-lg font-medium block mb-1">
              {t("contact.lastName")}<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="text-lg font-medium block mb-1">
              {t("contact.email")}<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="text-lg font-medium block mb-1">
              {t("contact.phone")}<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-lg font-medium block mb-1">
            {t("contact.message")}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 h-32 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full border border-[#55384C] text-[#55384C] py-2 font-medium hover:bg-[#55384C] hover:text-white transition"
        >
          {t("contact.submit")}
        </button>
      </form>
    </div>
  );
}
