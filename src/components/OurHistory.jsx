import React from 'react'

function OurHistory() {
  return (
    <section className="bg-white py-12 px-6 text-center">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#D2AF6E] mb-6">
        Historia Jonë
      </h2>

      {/* Intro paragraph */}
      <p className="text-gray-800 max-w-3xl mx-auto mb-6">
        Që nga fillimet tona, kemi bashkëpunuar me marka dhe prodhues
        ndërkombëtarë të njohur, të cilët garantojnë:
      </p>

      {/* Bullet list */}
      <ul className="text-[#D2AF6E] list-disc list-inside space-y-2 mb-6">
        <li>Cilësi të lartë të produkteve</li>
        <li>Furnizim të qëndrueshëm</li>
        <li>Shërbim të shkëlqyer pas shitjes</li>
      </ul>

      {/* Closing paragraph */}
      <p className="text-gray-800 max-w-3xl mx-auto">
        Këto bashkëpunime na mundësojnë të sjellim produkte që i përgjigjen
        standardeve më të larta të tregut global dhe të përshtaten me kërkesat
        unike të klientëve tanë.
      </p>
    </section>
  )
}

export default OurHistory
