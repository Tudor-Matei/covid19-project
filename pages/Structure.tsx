import { Icon } from "@iconify/react";
import React from "react";
import { InView } from "react-intersection-observer";
import StructureDescription from "../src/components/Structure/StructureDescription";
import "../src/css/Structure.css";

export default function Structure({ landingImage }: { landingImage: string }) {
  return (
    <>
      <section
        className="landing landing-structure"
        style={{ background: `url(${landingImage}) center 100% / cover no-repeat` }}
      ></section>
      <div className="covid19-title">
        <div className="covid19-title__image"></div>
        <div className="covid19-title__curved-text"></div>
      </div>

      <InView threshold={0.8} triggerOnce>
        {({ ref, inView }) => (
          <section className="general-data" ref={ref}>
            <div className={`general-data__covid19-image ${inView ? "is-in-view" : ""}`}>
              <div className="general-data__covid19-diameter-arrow">
                <Icon width="100" height="100" icon="twemoji:dna" />
              </div>
            </div>
            <StructureDescription align="left" title="Date Generale">
              Virusul SARS-CoV-2 are un diametru de 120 de nanometri, cu un înveliș din lipide, și un genom ARN de bază.
              ARN-ul servește drept schiță pentru producerea altor componente ale virusului
            </StructureDescription>
          </section>
        )}
      </InView>

      <InView threshold={0.5} triggerOnce>
        {({ ref, inView }) => (
          <section className="e-proteins" ref={ref}>
            <StructureDescription align="left" title="Proteine E">
              Au rol important în infecție: facilitează asamblarea și eliberarea virusului din celula gazdă
            </StructureDescription>
            <div className={`e-proteins__covid19-image ${inView ? "is-in-view" : ""}`}>
              <div className="e-proteins__covid-19-image-ring"></div>
            </div>
          </section>
        )}
      </InView>

      <InView threshold={0.5} triggerOnce>
        {({ ref, inView }) => (
          <section className="membrane" ref={ref}>
            <div className={`membrane__covid19-image ${inView ? "is-in-view" : ""}`}></div>
            <StructureDescription align="center" title="Membrana">
              Membrana/proteina M oferă virusului forma sa
            </StructureDescription>
            <div className="membrane__covid19-image-band"></div>
          </section>
        )}
      </InView>

      <InView threshold={0.8} triggerOnce>
        {({ ref, inView }) => (
          <section className="nucleus" ref={ref}>
            <div className={`nucleus__covid19-image ${inView ? "is-in-view" : ""}`}></div>
            <StructureDescription align="right" title="Nucleu">
              Conține informațiile genetice de bază (ARN și nucleoproteinele)
            </StructureDescription>
          </section>
        )}
      </InView>

      <InView threshold={0.5} triggerOnce>
        {({ ref, inView }) => (
          <section className="nucleoproteins" ref={ref}>
            <StructureDescription align="left" title="Nucleoproteine">
              Legate de ARN, ele oferă virusului structură, și capacitatea de a se replica
            </StructureDescription>
            <div className={`nucleoproteins__covid19-image ${inView ? "is-in-view" : ""}`}></div>
          </section>
        )}
      </InView>

      <section className="spike-receptors">
        <div className="spike-receptors__covid19-image"></div>
        <StructureDescription align="right" title="Receptori spike">
          Receptorii spike/proteinele S ajută la cuplarea receptorilor de celulele care urmează să fie infectate. Are
          două subunități. Prin subunitatea S1, se cuplează de un receptor al celulei gazdă, iar prin subunitatea S2,
          își îmbină membrana proprie cu membrana gazdei, pentru a putea pătrunde în ea
        </StructureDescription>
      </section>
    </>
  );
}
