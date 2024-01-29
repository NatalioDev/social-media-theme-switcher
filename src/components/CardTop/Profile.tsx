// Importar el manejador de temas 
import { useTheme } from "../../context/UseTheme.tsx";
// Importar estilos de Profile.css
import "./Profile.css"

// Declaramos tipos para las propiedades del componente
type Props = {
    id: number,
    increase: boolean,
    svg: string,
    user: string,
    followers: string | number,
    today: number,
    title: string
}

// Componente funcional que representa una tarjeta de perfil
export default function Profile({ svg, user, followers, title, today, increase }: Props) {

// Obtener el estado del tema mediante useTheme
  const { theme } = useTheme();


  return (
    <>  
    {/* Sección que contiene la información a mostrar de las tarjetas */}
        <article 
            // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
            className={` ${theme.name === "dark" ? "article-profile article" : "article-profile dark-mode article"}`}
        >
            {/* Sección que contiene el encabezado de la tarjeta */}
            <header className="article-header">

                {/* Etiqueta que muestra el icono de la tarjeta */}
                <img src={svg} alt="facebook icon" />

                {/* Título que muestra el nombre de usuario de la tarjeta */}
                <h4 
                    // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
                    className={` ${theme.name === "dark" ? "article-header-h4 dark-mode-h4" : "article-header-h4 light-mode-h4"}`}
                >
                    {user}
                </h4>
            </header>

            {/* Título que muestra la cantidad de seguidores de la tarjeta */}
            <h1 
                // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
                className={` ${theme.name === "dark" ? "article-h1 dark-mode-h1" : "article-h1 light-mode-h1"}`}
            >
                {followers}
            </h1>
            
            {/* Título que describe el numero de seguidores */}
            <h3 
                // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
                className={` ${theme.name === "dark" ? "article-h3 dark-mode-h3" : "article-h3 light-mode-h3"}`}
            >
                {title}
            </h3>
            
            {/* Título para mostrar los seguidores del día de la tarjeta */}
            <h6 
                // Maneja los estilos según sean crecientes o decreciente los seguidores 
                className={`article-h6 ${increase ? 'increase' : 'decrease'}`}>
                {/* Spans dinámicos para mostrar un icono decreciente o creciente según la información que reciba */}
                {increase ? (
                    <span className="icon-up"></span>
                ) : (
                    <span className="icon-down"></span>
                )}
                {today} Today
            </h6>
        </article>
    </>
  )
}
