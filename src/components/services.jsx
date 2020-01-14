import React from "react"
import Service from "./service"

import webApps from "../images/services/web.png"
import mobileApps from "../images/services/app.png"
import chatbots from "../images/services/chatbot.png"
import desktop from "../images/services/desktop.png"
import cloud from "../images/services/cloud.png"
import extra from "../images/services/extra.png"

const Services = () => (
  <section className="section" id="services">
    <div className="container has-text-centered">
      <h1 className="title section-title">
        {"{"} Servicios {"}"}
      </h1>
      <div className="columns has-text-centered">
        <Service
          serviceImage={webApps}
          title="Plataformas Web"
          description="Desde un ecommerce hasta una plataforma completa"
        />
        <Service
          serviceImage={mobileApps}
          title="Apps Móviles"
          description="Haz realidad tus apps en iOS y Android"
        />
      </div>
      <div className="columns">
        <Service
          serviceImage={chatbots}
          title="Chatbots"
          description="Ya sea que necesites un chatbot para Messenger, WhatsApp o integrarlo a un asistente de voz"
        />
        <Service
          serviceImage={cloud}
          title="Soluciones Cloud"
          description="Te ayudamos a dar el paso a tu Cloud de preferencia"
        />
      </div>
      <div className="columns">
        <Service
          serviceImage={desktop}
          title="Aplicaciones de Escritorio"
          description="¡Con instaladores para todas las plataformas!"
        />
        <Service
          serviceImage={extra}
          title="Y lo que tengas en mente..."
          description="Tú dinos lo que necesitas y lo haremos realidad"
        />
      </div>
    </div>
  </section>
)

export default Services
