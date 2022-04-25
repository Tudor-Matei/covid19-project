import { Icon } from "@iconify/react";
import React, { Dispatch, ReactElement, SetStateAction, useCallback, useState } from "react";

const tacklingMethodsInfoStore: Map<string, ReactElement> = new Map<string, ReactElement>([
  [
    "mask wearing",
    <p key="key__mask-wearing">
      Măștile pot filtra particule de mărimi similare cu virusul SARS-COV-2. S-a remarcat științific eficacitatea
      măștilor cu privire la prevenirea infectării.{" "}
      <a href="https://www.cdc.gov/mmwr/volumes/71/wr/mm7106e1.htm">Un studiu</a> arată că măștile chirurgicale reduc,
      în medie, șansa intrării în contact cu virusul cu până la 66%. Cele mai eficiente tipuri de măști sunt N95, care
      scad șansa infectării chiar cu 83%.
    </p>,
  ],
  [
    "social distancing",
    <p key="key__social-distancing">
      Virusul emis de persoanele bolnave pe care nazală sau orală nu se deplasează, în condiții optime, prea departe.
      Astfel, este recomandată păstrarea distanței sociale de cel puțin un metru.
    </p>,
  ],
  [
    "hand washing",
    <p key="key__hand-washing">
      <a href="https://www.newsweek.com/how-long-does-omicron-last-surfaces-does-disinfectant-kill-covid-variant-1677158">
        Un studiu
      </a>{" "}
      arată că SARS-COV-2 poate supraviețui pe suprafețele din plastic până la 8 zile, și pe pielea nedezinfectată până
      la 21 de ore, în cazul variantei Omicron, care este cea mai răspândită. Dezinfectarea mâinilor după atingerea
      diverselor obiecte din spații publice reprezintă un act important.
    </p>,
  ],
  [
    "vaccination",
    <p key="key__vaccination">
      Vaccinul este cea mai potentă unealtă pentru a opri răspândirea, a diminua efectele în cazul unei infecții, și cel
      mai important, a preveni moartea. Din cele peste 400 de milioane de cazuri confirmate la nivel mondial,
      vaccinurile au salvat sute de milioane de vieți.
    </p>,
  ],
]);

export default function TacklingMethodsController() {
  const [currentInformationKey, setInformationKey] = useState<string>("");
  return (
    <>
      <div
        className={`tackling-methods__buttons ${
          currentInformationKey !== "" ? "tackling-methods__buttons--active" : ""
        }`}
      >
        {[
          { iconName: "healthicons:ppe-face-mask-outline", topic: "Purtarea măștii", informationKey: "mask wearing" },
          { iconName: "ri:pin-distance-line", topic: "Distanțarea socială", informationKey: "social distancing" },
          { iconName: "ph:hand-soap-light", topic: "Spălarea mâinilor", informationKey: "hand washing" },
          { iconName: "healthicons:syringe-vaccine", topic: "Vaccinarea", informationKey: "vaccination" },
        ].map(({ iconName, topic, informationKey }, index) => (
          <TacklingMethodButton
            key={`tackling-method-key__${informationKey}`}
            icon={iconName}
            topic={topic}
            informationKey={informationKey}
            invertedOrder={index % 2 !== 0}
            toggled={currentInformationKey === informationKey}
            setInformationKey={setInformationKey}
          />
        ))}
      </div>
      {currentInformationKey !== "" && (
        <div className="tackling-methods__information-expanded">
          {tacklingMethodsInfoStore.get(currentInformationKey)}
        </div>
      )}
    </>
  );
}
function TacklingMethodButton({
  icon,
  topic,
  informationKey,
  invertedOrder = false,
  toggled = false,
  setInformationKey,
}: // setState
{
  icon: string;
  topic: string;
  informationKey: string;
  invertedOrder?: boolean;
  toggled?: boolean;
  setInformationKey: Dispatch<SetStateAction<string>>;
}) {
  return (
    <button
      className={`tackling-methods__button ${invertedOrder ? "tackling-methods__button--inverted" : ""} ${
        toggled ? "tackling-methods__button--toggled" : ""
      }`}
      onClick={useCallback(() => (!toggled ? setInformationKey(informationKey) : setInformationKey("")), [toggled])}
    >
      <div className="tackling-methods__button-title">
        <Icon icon={icon} className="tackling-methods__button-icon" />
        <h4>{topic}</h4>
      </div>

      <div className="tackling-methods__button-click-icon">
        <Icon icon="ic:baseline-ads-click" className="tackling-methods__button-icon" />
      </div>
    </button>
  );
}
