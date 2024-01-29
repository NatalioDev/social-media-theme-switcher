// Importar el manejador de temas 
import { useTheme } from "../../context/UseTheme.tsx";
// Importar estilos de CardSm.css
import "./CardSm.css"

// Declaramos tipos para las propiedades del componente
type Props = {
  key: number,
  increase: boolean,
  title: string,
  icon: string,
  views: number | string,
  percentage: string,
}

// Componente funcional que representa una tarjeta sm
export default function Overview({title, icon, views, percentage, increase}: Props) {

// Obtener el estado del tema mediante useTheme
  const { theme} = useTheme();

  return (
    <>
        {/* Sección que contiene la información de la tarjeta sm */}
        <article 
          // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
          className={`article-social-overview ${theme.name === "dark" ? "dark-article-social-overview" : "light-article-social-overview"} `}>
            
            {/* Título que muestra el nombre de usuario de la tarjeta */}
            <h4 
              // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
              className={`title-overview ${theme.name === "dark" ? "dark-title-overview" : "light-title-overview"} `}>
                {title}
            </h4>
            {/* Icono de la red social de la tarjeta sm */}
            <img src={icon} alt="icon" className="img-overview" />
            {/* Título que muestra la cantidad de seguidores de la tarjeta sm */}
            <h2 
              // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
              className={`views-overview ${theme.name === "dark" ? "dark-views-overview" : "light-views-overview"} `}
            >
              {views}
            </h2>
            {/* Título que muesta los seguidores del día de la tarjeta sm */}
            <h6
              // Maneja los estilos según sean crecientes o decreciente los seguidores 
              className={`percentage-overview ${increase ? 'increase' : 'decrease'}`}>
                {/* Spans dinámicos para mostrar un icono decreciente o creciente según la información que reciba */}
                {increase ? (
                    <span className="percentage-icon-up"></span>
                ) : (
                    <span className="percentage-icon-down"></span>
                )}
                {percentage}
            </h6>
        </article>
    </>
  )
}
