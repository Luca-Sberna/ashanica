// pages/Condizioni.js (o CondizioniGenerali.js)
import React from "react";
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";

const GeneralCondition = () => {
  return (
    <div>
      <Header />
      <Container className="py-3">
        <h1>Condizioni Generali di Vendita</h1>
        <p>
          Le presenti Condizioni Generali regolano l’acquisto di prodotti
          effettuato sul sito [NomeBrand.it] da parte di utenti finali.
        </p>

        <h3>1. Oggetto</h3>
        <p>
          La vendita è disciplinata dal D.Lgs. 206/2005 (Codice del Consumo).
          L'acquisto sul sito implica l'accettazione totale delle presenti
          condizioni.
        </p>

        <h3>2. Prodotti e disponibilità</h3>
        <p>
          Le immagini dei prodotti sono illustrative. La disponibilità può
          variare e non è garantita fino alla conferma d’ordine.
        </p>

        <h3>3. Prezzi e modalità di pagamento</h3>
        <p>
          I prezzi sono espressi in Euro e comprensivi di IVA. I metodi di
          pagamento accettati sono indicati durante il checkout.
        </p>

        <h3>4. Consegna</h3>
        <p>
          I tempi di consegna stimati sono di 3-7 giorni lavorativi. I tempi
          possono variare per cause indipendenti dalla nostra volontà.
        </p>

        <h3>5. Diritto di recesso</h3>
        <p>
          Il cliente ha 14 giorni per esercitare il diritto di recesso, come
          previsto dal Codice del Consumo. Il reso è accettato solo se il
          prodotto è integro e non utilizzato.
        </p>

        <h3>6. Garanzia legale</h3>
        <p>
          Tutti i prodotti godono della garanzia legale di conformità prevista
          dal Codice del Consumo (24 mesi).
        </p>

        <h3>7. Limitazione di responsabilità</h3>
        <p>
          Il venditore non è responsabile per danni indiretti derivanti dall’uso
          dei prodotti acquistati.
        </p>
      </Container>
    </div>
  );
};

export default GeneralCondition;
