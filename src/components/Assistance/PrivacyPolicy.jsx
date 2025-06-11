// pages/PrivacyPolicy.js
import React from "react";
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <Container className="py-3">
        <h1>Privacy Policy</h1>
        <p>
          In conformità al Regolamento UE 2016/679 (GDPR), [NomeBrand] si
          impegna a proteggere la privacy degli utenti.
        </p>

        <h3>1. Titolare del trattamento</h3>
        <p>
          Il Titolare è [Nome azienda], con sede in [Indirizzo], email:
          [email@brand.it].
        </p>

        <h3>2. Tipi di dati raccolti</h3>
        <p>
          Nome, email, indirizzo IP, dati di navigazione. I dati sono raccolti
          tramite moduli di contatto e cookie.
        </p>

        <h3>3. Finalità</h3>
        <p>
          I dati sono utilizzati per: rispondere a richieste, elaborare ordini,
          migliorare i servizi, inviare comunicazioni commerciali (se
          autorizzate).
        </p>

        <h3>4. Conservazione</h3>
        <p>
          I dati sono conservati per il tempo necessario al raggiungimento delle
          finalità o fino alla richiesta di cancellazione.
        </p>

        <h3>5. Diritti dell’utente</h3>
        <p>
          Accesso, rettifica, cancellazione, limitazione, opposizione al
          trattamento. È possibile contattare il Titolare per esercitare i
          diritti.
        </p>

        <h3>6. Cookie</h3>
        <p>
          Questo sito utilizza cookie tecnici e, con consenso, cookie
          analitici/di marketing. Per maggiori dettagli consulta la Cookie
          Policy.
        </p>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
