import { Icon } from "@iconify/react";
import React from "react";
import { useInView } from "react-intersection-observer";
import StructureDescription from "../src/components/Structure/StructureDescription";
import "../src/css/Structure.css";

const steps: number[] = new Array<number>(100).fill(0).map((_, step) => step * 0.01);
export default function Structure({ landingImage }: { landingImage: string }) {
  const { ref, inView, entry } = useInView({ threshold: steps });
  return (
    <>
      <section
        className="landing landing-structure"
        style={{ background: `url(${landingImage}) center 100% / cover no-repeat` }}
      ></section>
      <div
        className="covid19-title"
        style={{
          transform: inView
            ? `translate(-${entry.intersectionRatio * 28}vw, ${entry.intersectionRatio * 100}vh)`
            : "initial",
          opacity: inView ? `${1 - entry.intersectionRatio}` : "1",
        }}
      >
        <div className="covid19-title__image"></div>
        <div className="covid19-title__curved-text"></div>
      </div>

      <section className="general-data" style={{ opacity: inView && entry.intersectionRatio > 0.9 ? "1" : "0" }}>
        <div className="general-data__covid19-image" ref={ref}>
          <div className="general-data__covid19-diameter-arrow">
            <Icon width="100" height="100" icon="twemoji:dna" />
          </div>
        </div>
        <StructureDescription align="left" title="Date Generale">
          Virusul SARS-CoV-2 are un diametru de 120 de nanometri, cu un înveliș din lipide, și un genom ARN de bază.
          ARN-ul servește drept schiță pentru producerea altor componente ale virusului
        </StructureDescription>
      </section>

      <section className="e-proteins">
        <StructureDescription align="left" title="Proteine E">
          Au rol important în infecție: facilitează asamblarea și eliberarea virusului din celula gazdă
        </StructureDescription>
        <div className="e-proteins__covid19-image">
          <div className="e-proteins__covid-19-image-ring"></div>
        </div>
      </section>

      <section className="membrane">
        <div className="membrane__covid19-image"></div>
        <StructureDescription align="center" title="Membrana">
          Membrana/proteina M oferă virusului forma sa
        </StructureDescription>
        <div className="membrane__covid19-image-band"></div>
      </section>

      <section className="nucleus">
        <div className="nucleus__covid19-image"></div>
        <StructureDescription align="right" title="Nucleu">
          Conține informațiile genetice de bază (ARN și nucleoproteinele)
        </StructureDescription>
      </section>

      <section className="nucleoproteins">
        <StructureDescription align="left" title="Nucleoproteine">
          Legate de ARN, ele oferă virusului structură, și capacitatea de a se replica
        </StructureDescription>
        <div className="nucleoproteins__covid19-image"></div>
      </section>

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
