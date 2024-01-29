// Importar estilos de SocialOverview.css
import "./SocialOverview.css"
// Importar componente CardSm
import CardSm from "./CardSm.tsx"
// Importar datos de las tarjetas CardSm
import dataCardSm from "../../data/DataCardSm.ts"
// Importar el manejador de temas 
import { useTheme } from "../../context/UseTheme.tsx";


// Componente funcional de la sección Social Overview
export default function SocialOverview() {

// Obtener el estado del tema mediante useTheme
  const { theme } = useTheme();


  return (
    <>
        {/* Sección que contiene la información de Social Overview */}
        <section className="section-social-overview">
            {/* Título de la sección */}
            <h2 
                // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
                className={`title-social-overview ${theme.name === "dark" ? "dark-title-social-overview" : "light-title-social-overview"} `}>
                Overview - Today
            </h2>
            {/* Sección que contiene las tarjetas sm */}
            <section className="container-social-overview">
                {/* Pasamos los datos necesarios al componente CardSm */}
                {dataCardSm.map(({id, title, icon, views, percentage, increase}) => (
                    <CardSm
                        key={id}
                        title={title}
                        icon={icon}
                        views={views}
                        percentage={percentage}
                        increase={increase}
                    />
                ))}
            </section>
        </section>
    </>
  )
}
