import { Link } from "react-router-dom";
import { useState } from "react";
import {
  StyledContainerQ,
  StyledContainerQuestions,
  StyledContainerAnswer,
} from "./ContainerQuestions.style";

function ContainerQuestions(className, children) {
  const [openAnswFED, setOpenAnswFED] = useState(false);
  const [openAnswUXUI, setOpenAnswUXUI] = useState(false);
  const [openAnswOffer, setOpenAnswOffer] = useState(false);
  const [openAnswCertifications, setOpenAnswCertifications] = useState(false);
  const [openAnswBio, setOpenAnswBio] = useState(false);

  return (
    <div className={className}>
      <StyledContainerQuestions>
        <h3 onClick={() => setOpenAnswFED((curr) => !curr)}>
          Cos'è un Front End Developer?
        </h3>
        {openAnswFED ? (
          <StyledContainerAnswer>
            <p>
              Il Front End Developer è la persona che crea la parte visibile di
              un sito web o di un'app. In pratica, è quello che si occupa di
              tutto ciò con cui gli utenti interagiscono: pulsanti, testi,
              immagini, animazioni e il modo in cui si muovono tra le pagine.
            </p>
          </StyledContainerAnswer>
        ) : (
          ""
        )}

        <h3 onClick={() => setOpenAnswUXUI((curr) => !curr)}>
          Cos'è un UX/UI Designer?
        </h3>
        {openAnswUXUI ? (
          <StyledContainerAnswer>
            <p>
              Un UX/UI designer si occupa di progettare l’esperienza utente(UX)
              e l’interfaccia grafica(UI). Studia il comportamento degli utenti,
              crea wireframe e prototipi, sceglie colori, font e layout per
              rendere il prodotto intuitivo e accattivante. Dopodichè passa il
              lavoro al Front End Developer che renderà possibile e tangibile
              l'idea.
            </p>
          </StyledContainerAnswer>
        ) : (
          ""
        )}

        <h3 onClick={() => setOpenAnswOffer((curr) => !curr)}>Cosa offro?</h3>
        {openAnswOffer ? (
          <StyledContainerAnswer>
            <p>
              <ul>
                <li> Studio del target</li>
                <li> Restyling e creazione interfaccia</li>
                <li> Progettazione sito web</li>
              </ul>
            </p>
          </StyledContainerAnswer>
        ) : (
          ""
        )}

        <h3 onClick={() => setOpenAnswCertifications((curr) => !curr)}>
          Quale sono le mie certificazioni?
        </h3>
        {openAnswCertifications ? (
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
        ) : (
          ""
        )}

        <h3 onClick={() => setOpenAnswBio((curr) => !curr)}>
          Qual'è la mia storia?
        </h3>
        {openAnswBio ? (
          <StyledContainerAnswer>
            <p>
              Cliccando sul seguente <Link to={"/info"}>link</Link> verrai
              indirizzato verso la pagina Info del sito.
            </p>
          </StyledContainerAnswer>
        ) : (
          ""
        )}
      </StyledContainerQuestions>
    </div>
  );
}

export default ContainerQuestions;
