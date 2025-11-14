import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import SubscriptionSection from "../components/SubscriptionSection";
import Footer from "../components/Footer";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import blogss from "../assets/images/blogss.png";


export default function BlogDetail() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();

  const descriptionHTML = {
    en: `
      <p>
        In the dynamic world of gastronomy, every detail matters. Whether in a busy restaurant kitchen or in the quieter setting of a boutique hotel, the equipment used can make the difference between an ordinary meal and an unforgettable experience for the client.
      </p>
      <h2>Why are the right tools important?</h2>
      <p>
        Every professional chef knows: success is not determined solely by experience or creativity, but also by the tools available. The right equipment helps with:
      </p>
      <ul>
        <li>Precision in cutting, cooking, and presentation</li>
        <li>Increased efficiency and organization in the kitchen environment</li>
        <li>Safety and comfort during work</li>
        <li>Standardization of quality in every dish that comes out of the kitchen</li>
      </ul>
      <h2>Tools that no professional kitchen should be without:</h2>
      <h3>Professional knives</h3>
      <p>
        The foundation of every chef – high-quality knives provide control, precise cutting, and are designed for extended use without fatigue.
      </p>
      <h3>Stainless steel pans and pots</h3>
      <p>
        For uniform heat distribution, durability, and ease of cleaning – ideal for high-volume cooking kitchens.
      </p>
      <h3>Storage and refrigeration equipment</h3>
      <p>
        Industrial refrigerators, display coolers, and controlled storage devices are essential for freshness and food safety.
      </p>
      <h3>Advanced cooking equipment</h3>
      <p>
        Convection ovens, plancha, electric or gas grills – tools that help chefs achieve results at another level.
      </p>
      <h3>Measuring and auxiliary tools</h3>
      <p>
        Precise scales, kitchen thermometers, timers, and digital mixers – everything that helps in controlled and accurate preparation.
      </p>
      <h2>Conclusion: An investment that pays off every day</h2>
      <p>
        At Kulinare, we understand that every professional deserves the best tools to bring their art to the plate. That's why we have selected equipment and tools from the world's most renowned brands that guarantee longevity, performance, and high functionality.
      </p>
      <p>
        At the end of the day, the kitchen is the stage – and every chef needs the right tools to shine.
      </p>
    `,
    sq: `
      <p>
        Në botën dinamike të gastronomisë, çdo detaj ka rëndësi. Qoftë në një kuzhinë të zënë restoranti apo në një ambient më të qetë të një hoteli boutique, pajisjet që përdoren mund të bëjnë diferencën mes një ushqimi të zakonshëm dhe një përvoje të paharrueshme për klientin.
      </p>
      <h2>Pse janë të rëndësishme mjetet e duhura?</h2>
      <p>
        Çdo kuzhinier profesionist e di: suksesi nuk e përcakton vetëm përvoja apo kreativiteti, por edhe mjetet që ka në dispozicion. Pajisjet e duhura ndihmojnë në:
      </p>
      <ul>
        <li>Saktësinë e prerjes, gatimit dhe prezantimit</li>
        <li>Rritjen e efikasitetit dhe organizimit në ambientin e kuzhinës</li>
        <li>Sigurinë dhe komoditin gjatë punës</li>
        <li>Standardizimin e cilësisë në çdo pjatë që del nga kuzhina</li>
      </ul>
      <h2>Veglat që nuk duhet të mungojnë në asnjë kuzhinë profesionale:</h2>
      <h3>Thikat profesionale</h3>
      <p>
        Bazë e çdo kuzhinieri – thikat e cilësisë së lartë ofrojnë kontroll, prerje precize dhe janë të dizajnuara për përdorim të gjatë pa lodhje.
      </p>
      <h3>Tiganët dhe tenxheret çelik inox</h3>
      <p>
        Për shpërndarje uniforme të nxehtësisë, qëndrueshmëri dhe lehtësi në pastrim – ideale për kuzhina me volum të lartë gatimi.
      </p>
      <h3>Pajisjet për ruajtje dhe ftohje</h3>
      <p>
        Frigoriferët industrialë, vitrinat ftohëse dhe paisje për ruajtje të kontrolluar janë thelbësore për freski dhe siguri ushqimore.
      </p>
      <h3>Paisje për gatim të avancuar</h3>
      <p>
        Furra konvektive, plancha, grilë elektrike apo gazore – mjetet që ndihmojnë kuzhinierin të arrijë rezultate të një niveli tjetër.
      </p>
      <h3>Mjete matëse dhe ndihmëse</h3>
      <p>
        Peshore precize, termometra kuzhine, timer dhe miksues digital – çdo gjë që ndihmon në përgatitje të kontrolluar dhe të saktë.
      </p>
      <h2>Përfundim: Investimi që shpërblehet çdo ditë</h2>
      <p>
        Në Kulinare, ne e kuptojmë që çdo profesionist meriton mjetet më të mira për të sjellë artin e tij në pjatë. Prandaj kemi përzgjedhur pajisje dhe vegla nga brendet më të njohura botërore që garantojnë jetëgjatësi, performancë dhe funksionalitet të lartë.
      </p>
      <p>
        Në fund të ditës, kuzhina është skena – dhe çdo kuzhinier ka nevojë për veglat e duhura për të shkëlqyer.
      </p>
    `,
  };

  const blogs = [
    {
      id: 1,
      title: {
        en: "Precision and Performance: Essential Tools Every Chef Needs",
        sq: "Precizion dhe Performancë: Mjetet thelbësore që i nevojiten çdo shefi kuzhine",
      },
      description: descriptionHTML,
      quote: {
        en: "Tools that no professional kitchen should be without.",
        sq: "Veglat që nuk duhet të mungojnë në asnjë kuzhinë profesionale:",
      },
      created_by: "Admin",
      created_at: "15.05.2025",
      image_url: blog1,
      second_image_url: blogss,
    },
    {
      id: 2,
      title: {
        en: "Kitchen Innovation: Smart Investments That Pay Off",
        sq: "Kuzhina si Investim: Pse cilësia nuk është opsion",
      },
      description: descriptionHTML,
      quote: {
        en: "Tools that no professional kitchen should be without.",
        sq: "Veglat që nuk duhet të mungojnë në asnjë kuzhinë profesionale:",
      },
      created_by: "Admin",
      created_at: "15.05.2025",
      image_url: blog2,
      second_image_url: blogss,
    },
    {
      id: 3,
      title: {
        en: "The Chef’s Choice: How Tools Enhance Culinary Art",
        sq: "Zgjedhja e Shefit: Si veglat e duhura e rrisin artin e kuzhinës",
      },
      description: descriptionHTML,
      quote: {
        en: "Tools that no professional kitchen should be without.",
        sq: "Veglat që nuk duhet të mungojnë në asnjë kuzhinë profesionale:",
      },
      created_by: "Admin",
      created_at: "15.05.2025",
      image_url: blog3,
      second_image_url: blogss,
    },
  ];

  const blog = blogs.find((b) => b.id === parseInt(id));
  if (!blog) return <p className="text-center py-20">{t("blog.not_found")}</p>;

  const getLocalized = (field) =>
    typeof field === "object" ? field[i18n.language] ?? field.en : field;

  const title = getLocalized(blog.title);
  const description = getLocalized(blog.description);
  const quote = getLocalized(blog.quote);

  return (
    <>
      <Header />
      <section className="bg-white py-12 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#D2AF6E] mb-4">
            {title}
          </h1>

          <div className="flex items-center gap-6 mb-6 text-black text-base">
            <div className="text-center">
              <p className="text-sm font-normal text-black mb-1">{t("blog.author")}</p>
              <p className="font-bold text-lg">{blog.created_by}</p>
            </div>
            <div className="w-px h-10 bg-black" />
            <div className="text-center">
              <p className="text-sm font-normal text-black mb-1">{t("blog.published")}</p>
              <p className="font-bold text-lg">{blog.created_at}</p>
            </div>
          </div>

          <img
            src={blog.image_url}
            alt={title}
            className="w-full h-[420px] object-cover rounded-md mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-9 custom-blog-html">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            {(quote || blog.second_image_url) && (
              <div className="md:col-span-3 flex flex-col gap-4">
                {quote && (
                  <blockquote className="relative bg-[#55384C] text-white rounded text-[30px] leading-snug h-[450px] flex items-center justify-center px-6 py-8 font-semibold">
                    <span className="absolute top-4 left-4 text-[40px] leading-none">“</span>
                    <p className="text-center whitespace-pre-line">{quote}</p>
                    <span className="absolute bottom-4 right-4 text-[40px] leading-none">”</span>
                  </blockquote>
                )}
                {blog.second_image_url && (
                  <img
                    src={blog.second_image_url}
                    alt="Second"
                    className="rounded h-[450px] w-full object-cover"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      <SubscriptionSection />
      <Footer />
    </>
  );
}
