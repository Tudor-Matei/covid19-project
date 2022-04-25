import React from "react";
import bioNTechLogo from "url:../src/images/biontech-logo.png";
import bodilyAchesImage from "url:../src/images/bodily-aches.jpg";
import contactWithStuffImage from "url:../src/images/contact-w-stuff.jpg";
import coughingImage from "url:../src/images/coughing.jpg";
import covid19SecondImage from "url:../src/images/covid19-2.png";
import directContactImage from "url:../src/images/direct-contact.jpg";
import feverImage from "url:../src/images/fever.jpg";
import jjLogo from "url:../src/images/jj-logo.png";
import lackSmellTasteImage from "url:../src/images/lack-smell-taste.jpg";
import modernaLogo from "url:../src/images/moderna-logo.png";
import nauseaImage from "url:../src/images/nausea.jpg";
import pfizerLogo from "url:../src/images/pfizer-logo.png";
import stuffyNoseImage from "url:../src/images/stuffy-nose.jpg";
import tirednessImage from "url:../src/images/tiredness.jpg";
import troubleBreathingImage from "url:../src/images/trouble-breathing.jpg";
import ventilationImage from "url:../src/images/ventilation.jpg";
import SectionTransmission from "../src/components/Home/SectionTransmission";
import TacklingMethodsController from "../src/components/Home/TacklingMethods";
import TitleSeparator from "../src/components/Home/TitleSeparator";
import SideInformation from "../src/components/SideInformation";
import "../src/css/Home.css";

export default function Home({ landingImage }: { landingImage: string }) {
  return (
    <>
      <section
        className="landing landing-home"
        style={{ background: `url(${landingImage}) center center / cover no-repeat` }}
      >
        <div className="landing__covid-19-ring-image"></div>
      </section>
      <section className="introduction-description">
        <h1>COVID-19</h1>
        <p>
          COVID-19 reprezintă pandemia definitorie a secolului 21. Ea a reușit să aducă schimbări asupra societăților
          lumii, provocând un impact asupra multor aspecte cotidiene, într-o perioadă remarcabil de scurtă de timp.
        </p>
      </section>
      <TitleSeparator title="Ce este?" />
      <section className="about-covid19">
        <div className="about-covid19__covid19-w-rings">
          <img src={covid19SecondImage} />
          {Array(3)
            .fill(null)
            .map((_, counter) => (
              <div
                key={`ring-${counter}`}
                className="ring"
                style={{
                  borderWidth: ((counter + 1) * Math.LN10) / 1.7,
                  animationDuration: `${(counter + 1) * 15}s`,
                  animationDelay: `${(counter + 1) * 150}ms`,
                  borderStyle: "dashed", // dotted" : "dashed",
                  opacity: `.${10 - counter - 1}`,
                }}
              ></div>
            ))}
        </div>
        <div className="about-covid19__information">
          <p>
            <span>01. </span>COVID-19 este o boală foarte contagioasă cauzată de virusul SARS-CoV-2. Se crede că modul
            în care virusul a ajuns la om a fost prin intermediul liliecilor.
          </p>
          <p>
            <span>02. </span>SARS-CoV-2 este un virus al cărui mediu prielnic de reproducere este plămânul.
          </p>
          <p>
            <span>03. </span>Virusul acesta suferă mutații foarte ușor. Prin intermediul infecțiilor, pot apărea
            variante ale acestui virus care pot fi, potențial, mai contagioase, și mai periculoase.
          </p>
        </div>
      </section>
      <TitleSeparator title="Transmitere" />

      <section className="transmission">
        <SectionTransmission icon="bi:people" title="CONTACT DIRECT" image={directContactImage}>
          Persoanele infectate cu COVID-19 expiră picături și particule mici care conțin virusul, numite și aerosoli.
          Acestea pot fi respirate de alți oameni aflați în apropierea persoanei bolnave, facilitând transmiterea
          virusului.
        </SectionTransmission>
        <SectionTransmission icon="bi:wind" title="AERISIRE NEADECVATĂ" image={ventilationImage} invertedOrder>
          Din cauza eliminării continue a aerosolilor de către persoanele bolnave, locurile neaerisite pot aduna o
          cantitate semnificativă de particule cu virusul SARS-COV-2. Acestea rămân în aer, și pot infecta persoane și
          de la distanță.
        </SectionTransmission>
        <SectionTransmission icon="carbon:touch-1-down" title="CONTACT CU OBIECTE" image={contactWithStuffImage}>
          Persoanele se pot, de asemenea, infecta cu SARS-COV-2 prin atingerea obiectelor din jur care au fost potențial
          contaminate. Transmiterea se poate efectua mai departe prin atingerea ochilor, nasului, gurii, etc.
        </SectionTransmission>
      </section>
      <TitleSeparator title="Simptome" />

      <section className="symptoms">
        {[
          [feverImage, "Febră și/sau frisoane"],
          [tirednessImage, "Stare de oboseală"],
          [stuffyNoseImage, "Nas înfundat"],
          [coughingImage, "Tuse"],
          [lackSmellTasteImage, "Pierderea gustului și a mirosului"],
          [nauseaImage, "Stare de greață"],
          [troubleBreathingImage, "Dificultate în a respira"],
          [bodilyAchesImage, "Dureri de gât, cap și/sau mușchi"],
          ["", "Și altele..."],
        ].map(([imageUrl, imageDescription]: string[], index) => (
          <div
            className="symptoms__symptom"
            key={`symptom__${index}`}
            style={{ background: `url(${imageUrl}) center center / cover no-repeat var(--accent-primary-2-light-1)` }}
          >
            <p>{imageDescription}</p>
          </div>
        ))}
      </section>
      <SideInformation>
        <li>Persoana infectată nu va suferi, neapărat, toate simptomele cunoscute.</li>
        <li>
          În cazul în care individul suspect de COVID-19 nu prezintă semne de infectare, dar este însă confirmat
          pozitiv, atunci el este un pacient asimptomatic.
        </li>
        <li>
          În prezent, se remarcă o oarecare prevalență a cazurilor asimptomatice, în special la persoanele între 0 și 19
          ani.
        </li>
        <li>
          COVID-19 se transmite mai ușor, și cauzează simptome mai periculoase pentru sănătatea individului decât, de
          exemplu, gripa sezonieră. De asemenea, persoanele rămân infectate mai mult timp, sporind posibilitatea
          transmiterii.
        </li>
      </SideInformation>

      <TitleSeparator title="Metode de combatere" />
      <section className="tackling-methods">
        <div className="tackling-methods__pattern"></div>
        <TacklingMethodsController />
      </section>

      <TitleSeparator title="Vaccinuri" />
      <section className="vaccines">
        <div className="vaccine">
          <div className="vaccine__logo">
            <img src={pfizerLogo} />
            <img src={bioNTechLogo} />
          </div>
          <ul>
            <li>Autorizat pe piață în 11 decembrie, 2020</li>
            <li>Recomandat de la vârsta de 5 ani</li>
            <li>Vine în două doze inițiale separate de 21 de zile, și o a treia doză la 5 luni distanță</li>
            <li>Imunitatea intră în efect după două săptămâni de la ultima doză inițială</li>
          </ul>
        </div>
        <div className="vaccine">
          <div className="vaccine__logo">
            <img src={modernaLogo} />
          </div>
          <ul>
            <li>Autorizat pe piață în 18 decembrie, 2020</li>
            <li>Recomandat de la vârsta de 18 ani</li>
            <li>Vine în două doze inițiale separate de 28 de zile, și o a treia doză la 5 luni distanță</li>
            <li>Imunitatea intră în efect după două săptămâni de la ultima doză inițială</li>
          </ul>
        </div>
        <div className="vaccine">
          <div className="vaccine__logo">
            <img src={jjLogo} />
          </div>
          <ul>
            <li>Autorizat pe piață în 18 februarie, 2021</li>
            <li>Recomandat de la vârsta de 18 ani</li>
            <li>Vine în o singură doză</li>
            <li>Imunitatea intră în efect după două săptămâni de la ultima doză inițială</li>
          </ul>
        </div>
      </section>
    </>
  );
}
