import React, { Fragment } from "react";
import firstTimeCovid19Image from "url:../src/images/first-time-covid19.jpg";
import molnupiravirTreatmentImage from "url:../src/images/molnupiravir.jpg";
import paxlovidTreatmentImage from "url:../src/images/paxlovid.jpg";
import remdesivirTreatmentImage from "url:../src/images/remdesivir.jpg";
import swabImage from "url:../src/images/swab-image.jpg";
import IndiaSVG from "url:../src/svg/India.svg";
import SouthAfricaSVG from "url:../src/svg/SouthAfrica.svg";
import UKSVG from "url:../src/svg/UK.svg";
import RhombusLineSeparator from "../src/components/Evolution/RhombusLineSeparator";
import TitleSeparator from "../src/components/Evolution/TitleSeparator";
import VariantDetails from "../src/components/Evolution/VariantDetails";
import ThemedImage from "../src/components/ThemedImage";
import TopicTag from "../src/components/TopicTag";
import "../src/css/Evolution.css";
export default function Evolution({ landingImage }: { landingImage: string }) {
  return (
    <>
      <section
        className="landing landing-evolution"
        style={{ background: `url(${landingImage}) center center / cover no-repeat` }}
      >
        <TitleSeparator title="Situații epidemiologice" />
      </section>

      <TopicTag accent="primary-1">Istorie</TopicTag>
      <section className="history">
        <div className="history__events">
          <ThemedImage src={firstTimeCovid19Image} />
          <div className="history__event-description">
            <RhombusLineSeparator accent="primary-1" />
            <p>
              Prima dată când un coronavirus (familia de viruși din care SARS-CoV-2 face parte) a fost detectat la
              oameni a fost în 1965. Simptomele observate au fost asemănătoare unei răceli comune.
            </p>
            <RhombusLineSeparator accent="primary-1" invertedOrder />
          </div>
          <div className="history__event-description">
            <RhombusLineSeparator accent="primary-2" />
            <p>
              Mai târziu, în 2002, o epidemie a izbucnit în Sudul Chinei, și coronavirusul asociat s-a răspândit în 28
              de țări. Până în iulie 2003, 8000 de oameni au fost infectați, dintre care 774 au decedat.{" "}
            </p>
            <RhombusLineSeparator accent="primary-2" invertedOrder />
          </div>
          <ThemedImage src={swabImage} />
        </div>
      </section>

      <TopicTag accent="primary-1">Începuturi</TopicTag>
      <section className="beginnings">
        <div className="beginnings__block beginnings__china">
          {/* TODO: chrome doesnt display the flag, just the letters "CN". add icon */}
          <h1>🇨🇳</h1>
          <p>
            În decembrie 2019, primele cazuri de COVID-19 au fost identificate în Wuhan, China. Organizația Mondială a
            Sănătății a declarat epidemia de atunci ca fiind o situație de interes internațional, îngrijorătoare din
            punct de vedere al sănătății publice.
          </p>
        </div>
        <div className="beginnings__block beginnings__world">
          <h1>🌐</h1>
          <p>
            După creșterea semnificativă de cazuri în China, și răspândirea virusului și în alte țări, epidemia de
            COVID-19 a fost declarată în mod oficial, la data de 11 martie 2020, o pandemie, care persistă până în ziua
            de astăzi.
          </p>
        </div>
        <div className="beginnings__block beginnings__sickness">
          <h1>😷</h1>
          <p>
            Datorită capacității de transmitere excepționale a virusului SARS-CoV-2, și eșecul controlării acestei
            pandemii, au avut loc numeroase mutații care au afectat longevitatea situației epidemiologice curente.
          </p>
        </div>
      </section>

      <TitleSeparator title="Mutații" />
      <section className="mutations">
        <div className="mutations__paragraphs">
          <p>
            În timp ce virusul se divide, câteodată apar modificări, în cadrul procesului de copiere al instrucțiunilor
            din codul său genetic. Aceste modificări se numesc mutații.
          </p>
          <p>
            Mutațiile pot aduce schimbări majore în cadrul virusului, care alterează capacitatea de transmitere, doza
            virală eliminată de persoanele infectate, severitatea simptomelor, etc. Una sau mai multe mutații asupra
            unui virus caracterizează o „variantă” a acestui virus.{" "}
          </p>
          <p>
            Cu cât SARS-CoV-2 circula de la gazdă la gazdă, și se divide mai mult, cu atât șansele apariției unor
            variante care pot fi mai îngrijorătoare cresc.
          </p>
        </div>
        <div className="mutations__changing-covid19-image"></div>
      </section>
      <section className="variants">
        <VariantDetails variantType="Alpha" variantCodename="B.1.1.7" countryOfOriginSVG={UKSVG}>
          {[
            <Fragment key="Variant_Fragment_Alpha-1">
              <li key="Alpha_01">A fost detectată prima dată în Marea Britanie, în luna noiembrie a anului 2020</li>
              <li key="Alpha_02">
                Este considerată ca fiind în jur de 40% - 80% mai transmisibilă decât virusul inițial
              </li>
            </Fragment>,
            <Fragment key="Variant_Fragment_Alpha-2">
              <li key="Alpha_03">Este prima variantă a virusului considerată ca fiind “îngrijorătoare” </li>
              <li key="Alpha_04">
                Studii multiple au concluzionat că are o rată de mortalitate între 30% și 70% mai mare decât virusul
                inițial{" "}
              </li>
              <li key="Alpha_05">A suferit aproximativ 23 de mutații </li>
            </Fragment>,
          ]}
        </VariantDetails>
        <VariantDetails variantType="Delta" variantCodename="B.1.617.2" countryOfOriginSVG={IndiaSVG}>
          {[
            <Fragment key="Variant_Fragment_Delta-1">
              <li key="Delta_01">A fost detectată prima dată în Marea Britanie, în luna noiembrie a anului 2020</li>
              <li key="Delta_02">
                A înlocuit virusul inițial pe plan global pentru o perioadă de timp, din cauza transmisibilității
                deosebite, estimată ca fiind până la 50% mai transmisibilă decât varianta Alpha
              </li>
            </Fragment>,
            <Fragment key="Variant_Fragment_Delta-2">
              <li key="Delta_03">
                Mai multe surse și investigații au atestat că șansele de spitalizare și moarte au crescut. Universitatea
                din Toronto a găsit că infectarea cu Delta are un risc cu până la 137% mai mare de a aduce decesul
                persoanei infectate
              </li>
              <li key="Delta_04">A suferit aproximativ 13 mutații</li>
            </Fragment>,
          ]}
        </VariantDetails>{" "}
        <VariantDetails variantType="Omicron" variantCodename="B.1.1.529" countryOfOriginSVG={SouthAfricaSVG}>
          {[
            <Fragment key="Variant_Fragment_Omicron-1">
              <li key="Omicron_01">A fost detectată prima dată în Africa de Sud, în data de 24 noiembrie 2021</li>
              <li key="Omicron_02">Se multiplică în jur de 70 de ori mai rapid decât varianta Delta în plămâni</li>
            </Fragment>,
            <Fragment key="Variant_Fragment_Omicron-2">
              <li key="Omicron_03">
                În prezent, este varianta dominantă în lume, înlocuind varianta Delta datorită capacității de
                transmitere excepționale{" "}
              </li>
              <li key="Omicron_04">
                Se crede că imunitatea provenită de la contactul cu variantele trecute nu are un efect destul de
                considerabil pentru a preveni infectarea cu Omicron
              </li>
              <li key="Omicron_05">
                Infecțiile cu această variantă sunt cu aproximativ 90% mai puțin fatale decât Delta, cu o șansă mai mică
                de 50% de spitalizare
              </li>
              <li key="Omicron_06">
                Eficacitatea vaccinurilor, în general, este mai redusă din punct de vedere al prevenirii infecției cu
                Omicron, însă șansa de spitalizare este încă redusă considerabil, comparativ cu persoanele nevaccinate
              </li>
              <li key="Omicron_07">A suferit aproximativ 60 de mutații</li>
            </Fragment>,
          ]}
        </VariantDetails>
      </section>
      <TitleSeparator title="Tratamente descoperite" />
      <section className="treatments">
        {[
          { image: paxlovidTreatmentImage, text: "Paxlovid, dezvoltat de Pfizer" },
          { image: molnupiravirTreatmentImage, text: "Molnupiravir, devoltat de Merck" },
          {
            image: remdesivirTreatmentImage,
            text: "Remdesivir, dezvoltat de Gilead",
          },
        ].map(({ image, text }, index) => (
          <div
            key={`treatment__${index}`}
            className="treatments__treatment"
            style={{ background: `url(${image}) center center / cover no-repeat` }}
          >
            <p>{text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
