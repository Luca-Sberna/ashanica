import React, { useState } from "react";
import styles from "./Assistance.module.css";
import Header from "../Header/Header";

const Support = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // qui puoi integrare l'invio via email API / form backend
    alert("Richiesta inviata! Ti risponderemo al più presto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.support}>
      <Header />

      <div className={`{styles.container} p-0`}>
        <h2>Assistenza Clienti</h2>
        <p className={styles.intro}>
          Il nostro team è qui per supportarti in ogni fase del tuo acquisto.
          Consulta le sezioni seguenti o inviaci direttamente una richiesta.
        </p>

        <section className={styles.section}>
          <h2>📦 Tempistiche di Consegna</h2>
          <p>
            Le spedizioni avvengono entro 24/48h lavorative. I tempi di consegna
            variano da 2 a 5 giorni lavorativi, a seconda della destinazione.
            Riceverai un codice di tracciamento via email appena il pacco sarà
            spedito.
          </p>
        </section>

        <section className={styles.section}>
          <h2>↩️ Resi & Rimborsi</h2>
          <p>
            Hai 14 giorni di tempo dalla ricezione per restituire il prodotto.
            Il rimborso verrà effettuato entro 7 giorni dalla ricezione del
            reso. Il prodotto deve essere integro e nella confezione originale.
          </p>
        </section>

        <section className={styles.section}>
          <h2>📋 Termini & Condizioni</h2>
          <ul>
            <li>
              Gli articoli devono essere restituiti in condizioni originali.
            </li>
            <li>Non si accettano resi su prodotti personalizzati.</li>
            <li>
              I costi di spedizione per il reso sono a carico del cliente.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>📨 Contattaci</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Il tuo nome"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="La tua email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Scrivi il tuo messaggio..."
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Invia Richiesta</button>
          </form>
        </section>
        <section className={styles.section}>
          <h2>📄 Informazioni Legali</h2>
          <p>
            Ai sensi del Regolamento UE 2016/679 (GDPR), garantiamo il
            trattamento dei dati personali in maniera conforme alla normativa
            vigente. Per maggiori dettagli consulta la nostra{" "}
            <a href="/policies">Privacy Policy</a> e le
            <a href="/conditions">Condizioni Generali</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Support;
