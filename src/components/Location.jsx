import React from "react";
import { useTranslation } from "react-i18next";

export default function Location() {
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-lg font-semibold text-[#D2AF6E] mb-6">
          {t("location.title")}
        </h2>

        <div className="w-full rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1469.2145942122943!2d21.130970873245094!3d42.56741203577423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549d2fcaa0ded9%3A0x8ff62a2b3051cdc7!2sKulinare%20KS!5e0!3m2!1sen!2s!4v1750277635728!5m2!1sen!2s"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            title="Kulinare KS Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
