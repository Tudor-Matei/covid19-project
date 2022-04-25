import React, { useEffect, useState } from "react";
import "../src/css/Sources.css";
import * as sources from "../src/data/sources.json";

type SourcesType = {
  [topic: string]: { title: string; link: string }[];
};

export default function Sources({ landingImage }: { landingImage: string }) {
  const [sourcesObjectKeys, setSourcesObjectKeys] = useState<string[] | null>(null);
  useEffect(() => {
    setSourcesObjectKeys(Object.keys(sources));
  }, []);
  return (
    <>
      <section
        className="landing landing-sources"
        style={{ background: `url(${landingImage}) center 100% / cover no-repeat` }}
      >
        <div className="landing__title">
          <h1>Surse de informație</h1>
        </div>
      </section>
      <header className="sources-links">
        {sourcesObjectKeys === null
          ? "Se incarcă..."
          : sourcesObjectKeys.map((topic, keyIndex) => (
              <a key={`header-topic__${keyIndex}`} href={`#${topic}`}>
                {topic}
              </a>
            ))}
      </header>
      <section className="information-sources">
        {sourcesObjectKeys === null
          ? "Se incarcă..."
          : sourcesObjectKeys.map((topic, keyIndex) => {
              const informationTopic = (
                <div id={topic} className="information-sources__topic" key={`topic__${keyIndex}-t`}>
                  <h2>{topic}</h2>
                </div>
              );
              const links = (
                <div className="information-sources__source" key={`topic__${keyIndex}-i`}>
                  <ul>
                    {(sources as SourcesType)[topic].map(({ title, link }, sourceKeyIndex) => (
                      <li key={`source__${sourceKeyIndex}-li`}>
                        <a href={link} key={`source__${sourceKeyIndex}`}>
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );

              return [informationTopic, links];
            })}
      </section>
    </>
  );
}
