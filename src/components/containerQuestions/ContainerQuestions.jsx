import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  StyledContainerQ,
  StyledContainerQuestions,
  StyledContainerAnswer,
  StyledContainerX,
} from "./ContainerQuestions.style";

import iconXYellow from "../../assets/images/iconXYellow.png";

function ContainerQuestions(className, children) {
  const [openAnswFED, setOpenAnswFED] = useState(false);
  const [openAnswUXUI, setOpenAnswUXUI] = useState(false);
  const [openAnswOffer, setOpenAnswOffer] = useState(false);
  const [openAnswCertifications, setOpenAnswCertifications] = useState(false);
  const [openAnswBio, setOpenAnswBio] = useState(false);
  const [colorQuestions, setColorQuestions] = useState("#c0cbb6");

  useEffect(() => {
    console.log("cambimo il colore");
    if (
      openAnswFED ||
      openAnswUXUI ||
      openAnswOffer ||
      openAnswCertifications ||
      openAnswBio
    ) {
      setColorQuestions("#004138"); // Cambia colore quando uno degli stati è true
    } else {
      setColorQuestions("#c0cbb6"); // Ritorna al colore originale se tutti sono falsi
    }
  }, [
    openAnswFED,
    openAnswUXUI,
    openAnswOffer,
    openAnswCertifications,
    openAnswBio,
  ]);

  return (
    <div className={className}>
      <StyledContainerQuestions>
        <h4
          onClick={() => setOpenAnswFED((curr) => !curr)}
          style={{ color: colorQuestions }}
        >
          Cos'è un Front End Developer?
        </h4>
        {openAnswFED ? (
          <>
            <StyledContainerX>
              <img
                src={iconXYellow}
                alt="munu icon"
                onClick={() => setOpenAnswFED((curr) => !curr)}
              />
            </StyledContainerX>

            <StyledContainerAnswer>
              <p>
                Il Front End Developer è la persona che crea la parte visibile
                di un sito web o di un'app. In pratica, è quello che si occupa
                di tutto ciò con cui gli utenti interagiscono: pulsanti, testi,
                immagini, animazioni e il modo in cui si muovono tra le pagine.
              </p>
            </StyledContainerAnswer>
          </>
        ) : (
          ""
        )}

        <h4
          onClick={() => setOpenAnswUXUI((curr) => !curr)}
          style={{ color: colorQuestions }}
        >
          Cos'è un UX/UI Designer?
        </h4>
        {openAnswUXUI ? (
          <>
            <StyledContainerX>
              <img
                src={iconXYellow}
                alt="munu icon"
                onClick={() => setOpenAnswUXUI((curr) => !curr)}
              />
            </StyledContainerX>

            <StyledContainerAnswer>
              <p>
                Un UX/UI designer si occupa di progettare l’esperienza
                utente(UX) e l’interfaccia grafica(UI). Studia il comportamento
                degli utenti, crea wireframe e prototipi, sceglie colori, font e
                layout per rendere il prodotto intuitivo e accattivante.
                Dopodichè passa il lavoro al Front End Developer che renderà
                possibile e tangibile l'idea.
              </p>
            </StyledContainerAnswer>
          </>
        ) : (
          ""
        )}

        <h4
          onClick={() => setOpenAnswOffer((curr) => !curr)}
          style={{ color: colorQuestions }}
        >
          Cosa offro?
        </h4>
        {openAnswOffer ? (
          <>
            <StyledContainerX>
              <img
                src={iconXYellow}
                alt="munu icon"
                onClick={() => setOpenAnswOffer((curr) => !curr)}
              />
            </StyledContainerX>

            <StyledContainerAnswer>
              <p>
                <ul>
                  <li> Studio del target</li>
                  <li> Restyling e creazione interfaccia</li>
                  <li> Progettazione sito web</li>
                </ul>
              </p>
            </StyledContainerAnswer>
          </>
        ) : (
          ""
        )}

        <h4
          onClick={() => setOpenAnswCertifications((curr) => !curr)}
          style={{ color: colorQuestions }}
        >
          Quale sono le mie certificazioni?
        </h4>
        {openAnswCertifications ? (
          <>
            <StyledContainerX>
              <img
                src={iconXYellow}
                alt="munu icon"
                onClick={() => setOpenAnswCertifications((curr) => !curr)}
              />
            </StyledContainerX>

            <StyledContainerAnswer>
              <p>
                <ul>
                  <li>
                    Master in Front End Development con
                    <a href="https://www.start2impact.it/" target="_blank">
                      <span> Start2Impact</span>
                    </a>
                  </li>
                  <li>
                    Master in UX/UI Designer con
                    <a href="https://www.start2impact.it/" target="_blank">
                      <span> Start2Impact</span>
                    </a>
                  </li>
                </ul>
              </p>
            </StyledContainerAnswer>
          </>
        ) : (
          ""
        )}

        <h4
          onClick={() => setOpenAnswBio((curr) => !curr)}
          style={{ color: colorQuestions }}
        >
          Qual'è la mia storia?
        </h4>
        {openAnswBio ? (
          <>
            <StyledContainerX>
              <img
                src={iconXYellow}
                alt="munu icon"
                onClick={() => setOpenAnswBio((curr) => !curr)}
              />
            </StyledContainerX>

            <StyledContainerAnswer>
              <p>
                Dopo un diploma da programmatore e un'esperienza nel settore
                della ristorazione, ho cercato un modo per esprimere la mia
                creatività rimanendo al passo con i tempi.
              </p>
              <p>
                Questo mi ha portato a specializzarmi nello sviluppo web con un
                master in Front End Development su Start2impact University, dove
                ho affinando competenze tecniche e creative. In questo momento
                sto ampliandola mia formazione con UX/UI Design per progettare
                esperienze intuitive ed efficaci.
              </p>
              <p>
                Vorrei lavorare su progetti innovativi con un impatto positivo
                sul sociale e sulla natura, in un ambiente dinamico dove
                crescere e contribuire attivamente.
              </p>
            </StyledContainerAnswer>
          </>
        ) : (
          ""
        )}
      </StyledContainerQuestions>
    </div>
  );
}

export default ContainerQuestions;
