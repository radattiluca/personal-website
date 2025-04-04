import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  StyledContainerQ,
  StyledContainerQuestions,
  StyledContainerAnswer,
  StyledContainerX,
} from "./ContainerQuestions.style";

import iconXYellow from "../../assets/images/iconXYellow.png";
import pageCv1 from "../../assets/images/Curriculum Front End.png";
import pageCv2 from "../../assets/images/Curriculum Front End (2).png";

//import libraries
import { motion } from "framer-motion";

function ContainerQuestions(className, children) {
  const [openAnswFED, setOpenAnswFED] = useState(false);
  const [openAnswUXUI, setOpenAnswUXUI] = useState(false);
  const [openAnswOffer, setOpenAnswOffer] = useState(false);
  const [openAnswCertifications, setOpenAnswCertifications] = useState(false);
  const [openAnswBio, setOpenAnswBio] = useState(false);
  const [openAnswCV, setOpenAnswCV] = useState(false);
  const [colorQuestions, setColorQuestions] = useState("#c0cbb6");

  useEffect(() => {
    if (
      openAnswFED ||
      openAnswUXUI ||
      openAnswOffer ||
      openAnswCertifications ||
      openAnswBio ||
      openAnswCV
    ) {
      setColorQuestions("#026457"); // Cambia colore quando uno degli stati è true
    } else {
      setColorQuestions("#c0cbb6"); // Ritorna al colore originale se tutti sono falsi
    }
  }, [
    openAnswFED,
    openAnswUXUI,
    openAnswOffer,
    openAnswCertifications,
    openAnswBio,
    openAnswCV,
  ]);

  return (
    <div className={className}>
      <StyledContainerQuestions>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4
            onClick={() => setOpenAnswFED((curr) => !curr)}
            style={{ color: colorQuestions }}
          >
            Cos'è un Front End Developer?
          </h4>
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4
            onClick={() => setOpenAnswUXUI((curr) => !curr)}
            style={{ color: colorQuestions }}
          >
            Cos'è un UX/UI Designer?
          </h4>
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4
            onClick={() => setOpenAnswOffer((curr) => !curr)}
            style={{ color: colorQuestions }}
          >
            Cosa offro?
          </h4>
        </motion.div>
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
                  <li> Siti Web Moderni e Leggeri.</li>
                  <li> Prototipi Veloci per Idee o MVP</li>
                  <li> Esperienza Utente Curata</li>
                  <li>Modernizzazione di Vecchi Siti</li>
                  <li>Integrazione con strumenti esterni</li>
                </ul>
              </p>
            </StyledContainerAnswer>
          </>
        ) : (
          ""
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4
            onClick={() => setOpenAnswCertifications((curr) => !curr)}
            style={{ color: colorQuestions }}
          >
            Quale sono le mie certificazioni?
          </h4>
        </motion.div>
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
                      <span> Start2Impact </span>
                    </a>
                    - completato
                  </li>
                  <li>
                    Master in UX/UI Designer con
                    <a href="https://www.start2impact.it/" target="_blank">
                      <span> Start2Impact </span>
                    </a>
                    - in corso
                  </li>
                </ul>
              </p>
            </StyledContainerAnswer>
          </>
        ) : (
          ""
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4
            onClick={() => setOpenAnswBio((curr) => !curr)}
            style={{ color: colorQuestions }}
          >
            Qual'è la mia storia?
          </h4>
        </motion.div>
        {openAnswBio ? (
          <>
            <StyledContainerX>
              <img
                src={iconXYellow}
                alt="icon x close"
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
                ho affinato competenze tecniche e creative. In questo momento
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4
            onClick={() => setOpenAnswCV((curr) => !curr)}
            style={{ color: colorQuestions }}
          >
            Vuoi consultare il mio CV?
          </h4>
        </motion.div>
        {openAnswCV ? (
          <>
            <StyledContainerX>
              <img
                src={iconXYellow}
                alt="munu icon"
                onClick={() => setOpenAnswCV((curr) => !curr)}
              />
            </StyledContainerX>

            <StyledContainerAnswer>
              <img src={pageCv1} alt="curriculum vitae" />
              <img src={pageCv2} alt="curriculum vitae" />
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
