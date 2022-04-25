import { Icon } from "@iconify/react";
import React from "react";
import { useInView } from "react-intersection-observer";
import StructureDescription from "../src/components/Structure/StructureDescription";
import "../src/css/Structure.css";

const steps: number[] = new Array<number>(100).fill(0).map((_, step) => step * 0.01);
export default function Structure({ landingImage }: { landingImage: string }) {
  const { ref, inView, entry } = useInView({ threshold: steps });
  console.log(inView && entry.intersectionRatio);
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
        <div className="e-proteins__covid19-image"></div>
      </section>
    </>
  );
}
