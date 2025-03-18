// page about

import { useContext } from "react";

// import libreries
import { Link } from "react-router-dom";

// import styles
import { GlobalStyles } from "../../GlobalStyles.style";
import { StyledAppContainer } from "../../components/app/App.style";
import { StyledNavbar } from "../../components/navbar/Navbar.style";
import {
  StyledPageInfo,
  StyledCircleContainerInfo,
  StyledTriangleContainerInfo,
  StyledContainerInfoAboutMe,
} from "./InfoPage.style";
import { StyledCv } from "../../components/curriculum/Cv.style";

// import store
import { Context } from "../../store/Context";

// import image
import iconCv from "../../assets/images/cv-icon.png";
import iconHome from "../../assets/images/home.png";

function InfoPage({ className, children }) {
  const { extendNavbar } = useContext(Context);
  const { openCV, setOpenCV } = useContext(Context);

  return (
    <StyledAppContainer>
      <div className={className}>
        <Link to={"/info"}>{children}</Link>
      </div>
      <GlobalStyles />
      <StyledNavbar
        extendNavbar={extendNavbar ? "300px" : "80px"}
      ></StyledNavbar>

      <StyledPageInfo>
        <StyledTriangleContainerInfo>
          <Link to={"/"}>
            <img src={iconHome} alt="icon home" />
          </Link>
        </StyledTriangleContainerInfo>

        <StyledContainerInfoAboutMe>
          <h3>Conosciamoci</h3>
          <p>
            Amo esplorare nuove esperienze e dare vita alle idee attraverso il
            digitale.
          </p>
          <p>
            Dopo aver conseguito un diploma da programmatore e lavorato come
            Barman qualificato, cercavo un modo per esprimere la mia creatività
            e rimanere al passo con i tempi. Questo mi ha portato a
            intraprendere un percorso nel mondo dello sviluppo web.
          </p>
          <p>
            Per questo ho seguito il master in Front End Development con
            Start2impact University, un percorso che mi sta permettendo di
            affinare competenze tecniche e creative nel mondo digitale. Inoltre,
            mi piacerebbe ampliare la mia formazione integrando competenze di
            UX/UI Design, per progettare esperienze utente intuitive ed
            efficaci.
          </p>
          <p>
            Cosa sto approfondendo?
            <ul>
              <li>
                ✔ <span>HTML5 & CSS3</span> → Creazione di interfacce web
                responsive e accessibili.
              </li>
              <li>
                ✔ <span>JavaScript</span> (Basics & Advanced) → Interattività e
                dinamismo nelle pagine web.
              </li>
              <li>
                ✔ <span>React.js</span> → Costruzione di interfacce scalabili e
                performanti.
              </li>
            </ul>
          </p>
          <p>
            Mi piacerebbe lavorare su progetti creativi ed entusiasmanti che
            abbiano un impatto positivo sul sociale e sulla natura. Sono alla
            ricerca di un ambiente innovativo e dinamico, dove poter crescere e
            contribuire con le mie competenze.
          </p>
        </StyledContainerInfoAboutMe>
        <StyledCircleContainerInfo onClick={() => setOpenCV((curr) => !curr)}>
          <img src={iconCv} alt="icon curriculum vitae" />
        </StyledCircleContainerInfo>
        {openCV && <StyledCv></StyledCv>}
      </StyledPageInfo>
    </StyledAppContainer>
  );
}

export default InfoPage;
