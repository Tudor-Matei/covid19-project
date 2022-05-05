import { Icon } from "@iconify/react";
import React from "react";
import anxietyImage from "url:../src/images/anxiety.jpg";
import moneyImage from "url:../src/images/dollars.jpg";
import exhaustionImage from "url:../src/images/exhaustion.jpg";
import industrySparksImage from "url:../src/images/industry-sparks.jpg";
import worldFlagsImage from "url:../src/images/world-flags.jpg";
import ImageTextPane from "../src/components/Impact/ImageTextPane";
import TitleSeparator from "../src/components/Impact/TitleSeparator";
import ThemedImage from "../src/components/ThemedImage";
import TopicTag from "../src/components/TopicTag";
import "../src/css/Impact.css";

export default function Impact({ landingImage }: { landingImage: string }) {
  return (
    <>
      <section
        className="landing landing-impact"
        style={{ background: `url(${landingImage}) center 100% / cover no-repeat` }}
      >
        <TitleSeparator title="Social" />
      </section>
      <TopicTag accent="primary-2">Carantina</TopicTag>
      <section className="quarantine">
        <div className="quarantine__information-box">
          <p>
            În fața creșterii numerelor de cazuri COVID-19, guvernele lumii s-au îndreptat la metoda carantinei pe
            orașe, sau chiar regiuni întregi. Astfel, miliarde de oameni s-au trezit restricționați de la dreptul de a
            trăi o viață socială tradițională.{" "}
          </p>
        </div>
      </section>
      <div className="quarantine-effects__prequel">
        <p>
          Carantina în masă a forțat familii și comunități locale să petreacă mult mai mult timp împreună, fapt care a
          adus...
        </p>
      </div>

      <section className="quarantine-effects">
        <div className="quarantine-effects__points quarantine-effects__points--positives">
          <h2>Efecte pozitive</h2>
          <ul>
            <li>poluare redusă, deoarece mult mai puțini oameni mai mergeau la locurile de muncă</li>
            <li>un sens de empatie și ajutor reciproc sporit</li>
            <li>stabilirea legăturilor mai strânse între familie, prieteni și comunitate</li>
            <li>acordare de atenție asupra sănătății mentale și fizice a fiecăruia</li>
          </ul>
        </div>
        <h1>&</h1>
        <div className="quarantine-effects__points quarantine-effects__points--negatives">
          <h2>Efecte negative</h2>
          <ul>
            <li>
              creștere a violenței domestice, din cauza forțării familiilor de a fi împreună, acolo unde este cazul de
              agresivitate
            </li>
            <li>situații economice dificile</li>
            <li>
              stres psihologic în urma incertitudinii financiare/sociale, sau a lipsei de comunicare cu alți indivizi
            </li>
            <li>atrofiere a capacității de socializare și/sau comportare socială</li>
          </ul>
        </div>
        <Icon icon="uil:balance-scale" className="quarantine-effects__libra" />
      </section>
      <TopicTag accent="primary-1">Sănătatea mentală</TopicTag>
      <section className="mental-health">
        <div className="mental-health__pane">
          <p>
            Există multe perspective din care poate fi privită această pandemie, și din care se pot analiza diverse
            riscuri. În urma acestor incertitudini, oamenii dezvoltă un nivel ridicat de anxietate, și stres, care pot
            exacerba gândurile negativiste.
          </p>
          <ThemedImage src={anxietyImage} />
        </div>
        <div className="mental-health__pane">
          <ThemedImage src={exhaustionImage} />
          <p>
            Expunerea continuă la stresurile nesiguranței zilei de mâine a sporit degradarea sănătății mentale a multor
            oameni. Cei suferind de anxietate și depresie, fără acces la ajutor social, se află într-o situație foarte
            delicată.
          </p>
        </div>
      </section>

      <TopicTag accent="primary-2">Polarizarea socială</TopicTag>
      <section className="polarisation">
        <div className="polarisation__pro">
          <Icon icon="healthicons:syringe-vaccine" />
        </div>
        <div className="polarisation__con">
          <Icon icon="fa6-solid:people-group" />
        </div>
        <div className="polarisation__text">
          <p>
            Pandemia de COVID-19 reprezintă un eveniment unic în cadrul societății contemporane, digitalizate și
            interconectate. Consecințele acestei situații epidemiologice au putut fi resimțite și de către omul simplu,
            creându-se diverse opinii, și opoziții care au afectat psihicul social.
          </p>
        </div>
        <div className="polarisation__text">
          <p>
            Acest fapt a început să contureze tabere pro-vaccin și anti-vaccin, tabere care cred, și ascultă sfaturile
            experților, tabere care sunt fie indiferente de situația pandemică, fie se opun deciziilor guvernamentale cu
            privire la prevenirea infectării cu SARS-CoV-2, etc.
          </p>
        </div>
        <div className="polarisation__text">
          <p>
            Prin disponibilitatea serviciilor moderne de comunicare pe scară largă, și afectarea vieții normale a
            fiecărui individ, conflictele apărute în urma polarizării deosebite au dus la proteste și demonstrații pe
            plan mondial.
          </p>
        </div>
      </section>
      <TitleSeparator title="Economic" />

      <br className="economy-recession-sep" />
      <TopicTag accent="primary-1">Recesiunea</TopicTag>
      <section className="recession">
        <ImageTextPane src={moneyImage} accent="primary-1">
          <p>
            Schimbările aduse de pandemie au avut un impact masiv asupra PIB-ului mondial, cu consecințe care nu au mai
            fost întâlnite de la sfârșitul celui de-al doilea război mondial. Economia globală s-a micșorat cu
            aproximativ 3.5% în 2020.
          </p>
        </ImageTextPane>
        <ImageTextPane src={worldFlagsImage} accent="primary-2">
          <p>
            Aproape toate țările din cadrul Fondului Monetar Internațional au raportat o creștere negativă în 2020.
            Între timp, economia globală s-a recuperat într-o măsură semnificativă, însă efectele șocului economic văzut
            cel mai probabil vor persista pentru câțiva ani.
          </p>
        </ImageTextPane>

        <div className="recession__stocks-down">
          <p>
            Bursa globală a văzut cea mai devastatoare perioadă de la criza din 1987. În primele 3 luni din 2020,
            economiile celor mai bogate țări începeau să scadă cu 3.4% anual. Organizația Internațională a Muncii a
            estimat că aproximativ 400 de milioane de locuri de muncă cu normă întreagă s-au pierdut.
          </p>
          <div className="recession__stocks-down-image"></div>
        </div>
      </section>

      <TopicTag accent="primary-2">Deficite</TopicTag>
      <section className="shortages">
        <div className="shortages__goods-image">
          <Icon icon="fontisto:drug-pack" />
          <Icon icon="fluent:food-apple-20-filled" />
          <Icon icon="healthicons:syringe" />
        </div>
        <p>
          În primele faze ale pandemiei, deficitele de bunuri erau așteptate să apară din cauza cumpărăturilor făcute în
          panică, și creșterea nevoilor de resurse pentru a combate pandemia. Au fost raportate deficite de medicamente,
          și mâncare, pe scară largă.
        </p>
        <p>
          În desfășurarea accelerată a pandemiei, cererea pe piață a măștilor de protecție a crescut atât de mult, încât
          în unele țări, precum Taiwan, exportul de măști a fost interzis temporar, pentru a asigura nevoile propriilor
          cetățeni.
        </p>
        <div className="shortages__taiwan-image"></div>
      </section>

      <TopicTag accent="primary-1">Industria</TopicTag>
      <section className="industry">
        <div className="industry__general-information">
          <p>
            Din cauza carantinei globale, mulți oameni nu au mai fost chemați la locurile de muncă, ceea ce a pus o
            piedică în produsul de bunuri, afectând în același timp și lanțurile comerciale stabilite între producători.
          </p>
          <img src={industrySparksImage} className="industry__general-information-image" />
        </div>

        <h2>Printre cele mai afectate industrii se numără:</h2>
        <div className="industry__most-affected">
          <div className="industry__affected">
            <Icon icon="dashicons:car" />
            <p>Industria mașinilor</p>
          </div>
          <div className="industry__affected">
            <Icon icon="bxs:radio" />
            <p>Industria electronicelor</p>
          </div>
          <div className="industry__affected">
            <Icon icon="fa6-solid:mountain-city" />
            <p>Industria turismului</p>
          </div>
          <div className="industry__affected">
            <Icon icon="fa6-solid:bolt" />
            <p>Industria energiei</p>
          </div>
        </div>
      </section>
      <div className="tourism-industry-impact">
        <h1>Industria turismului</h1>
        <p>
          O atenție deosebită se poate oferi industriei turismului, care a fost o victimă majoră a pandemiei. Este
          evident că acest sector a fost cel mai afectat, din cauza răspândirii interumane a virusului SARS-CoV-2.
        </p>
        <p>
          Cele mai renumite țări din punct de vedere turistic, cum ar fi, Indonezia, Vietnam, Tailanda, etc., au avut o
          reducere cu până la 13.5% în numărul de turiști care au pătruns în țările lor, doar la începutul pandemiei.
          S-a estimat o pierdere de aproximativ 211 de miliarde de dolari, doar în zona Asiei Pacifice.
        </p>
      </div>
    </>
  );
}
