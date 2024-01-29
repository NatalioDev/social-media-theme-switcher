// Importar componente Profile
import Profile from "./Profile";
// Importar estilos CardTop.css
import "./CardTop.css"
// Importar datos de DataCard
import dataCard from "../../data/DataCard";

// Componente funcional
export default function SocialTop() {

  return (
    // Sección del contenido de las tarjetas principales
    <section className="section-social">
      {/* Pasamos los datos necesarios al componente Profile */}
      {dataCard.map(({id, svg, user, followers, title, today, increase}) => (
        <Profile
          id={id}
          svg={svg}
          user={user}
          followers={followers}
          title={title}
          today={today}
          increase={increase}
        />
      ))}
        
    </section>
  )
}
