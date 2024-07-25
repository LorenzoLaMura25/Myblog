import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <>
    <div className="project-container">
      <div className="la-bruschetta">
        <h1>La Bruschetta</h1>
        <p>
          La seguente applicazione, sviluppata da me e un altro sviluppatore, 
          è dedicata al ristorante "La Bruschetta". È un'applicazione interamente frontend realizzata utilizzando React.js.
          Le librerie utilizzate includono:
          i18n per le traduzioni,
          react-router-dom per la gestione del routing,
          react-intersection-observer per l'osservazione delle intersezioni.
          L'applicazione è stata creata per soddisfare le esigenze del cliente, 
          consentendo la gestione delle prenotazioni che avvengono tramite WhatsApp Business.
        </p>
      </div>
    </div>
    </>
  )
}

export default Projects