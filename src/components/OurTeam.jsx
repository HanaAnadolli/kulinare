import React from "react";
import { useTranslation } from "react-i18next";

import TeamMember1 from "../assets/images/team1.png";
import TeamMember2 from "../assets/images/team2.png";
import TeamMember3 from "../assets/images/team3.png";
import TeamMember4 from "../assets/images/team4.png";

export default function OurTeam() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Filan Fisteku",
      role: t("team.roles.ceo"),
      photo: TeamMember1,
    },
    {
      name: "Filan Fisteku",
      role: t("team.roles.ceo"),
      photo: TeamMember2,
    },
    {
      name: "Filan Fisteku",
      role: t("team.roles.manager"),
      photo: TeamMember3,
    },
    {
      name: "Filan Fisteku",
      role: t("team.roles.senior_director"),
      photo: TeamMember4,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[#D2AF6E] text-center mb-8">
          {t("team.title")}
        </h2>

        <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-visible">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-auto snap-center transform transition-transform duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00000033] rounded-lg overflow-hidden bg-white"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-medium text-[#55384C]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
