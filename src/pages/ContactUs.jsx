import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import SubscriptionSection from "../components/SubscriptionSection";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Location from "../components/Location";

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className="bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-[#D2AF6E] mb-4">
            {t("contact.title")}
          </h2>
          <div className="border-b h-[2px] border-[#55384C] mb-8"></div>
        </div>
        <ContactForm />
        <Location />
      </section>
      <SubscriptionSection />
      <Footer />
    </>
  );
}
