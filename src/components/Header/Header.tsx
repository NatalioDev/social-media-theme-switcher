// Importar estilos de Header.css
import './Header.css'

// Importar el manejador de temas 
import { useTheme } from '../../context/UseTheme.tsx'

// Componente funcional para el encabezado
export default function Header() {

  // Obtener el estado y funciones del tema mediante useTheme
  const { theme, toggleTheme } = useTheme();

  return (
    <header >
        {/* Sección del contenido del encabezado*/}
        <section className='section-header'>
          {/* Titulo y estadísticas del encabezado */}
            <div
              // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
              className={`header-social ${theme.name === "dark" ? "dark-header" : ""} `}
            >
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>
            {/* Modo oscuro */}
            <div className='header-dark-mode'>
              {/* Etiqueta para el interruptor de cambio de tema  */}
              <label 
                // Esto mejora la accesibilidad y la usabilidad.
                htmlFor="toggle-switch"
                
                // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
                className={`toggle-switch-label ${theme.name === "dark" ? "dark-mode" : ""}`}
              >
                Dark Mode
              </label>

              {/* Botón que maneja el cambio de tema*/}
              <button 
                
                // Identificador único al botón
                id='toggle-switch'
                
                // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
                className={`toggle-switch-button ${theme.name === "dark" ? "dark-mode" : ""}`}
                
                // Etiqueta accesible para describir la función del botón
                aria-label="dark mode toggle switch" 
                
                // Ajusta el atributo aria-pressed según el estado del tema. Indica si el botón está "presionado" (o activo) cuando el tema es oscuro
                aria-pressed={theme.name === "dark"}
                
                // Manejador de evento para cambiar el tema al hacer clic en el botón
                onClick={toggleTheme}
              >
                {/* Indicador visual del cambio de tema */}
                <span 
                  aria-hidden='false'
                  // Aplicamos estilos dinámicos según el estado del tema (claro u oscuro)
                  className={`toggle-switch-span ${theme.name === "dark" ? "dark-mode" : ""}`}
                >
                </span>
              </button>
            </div>
        </section>
    </header>
  )
}
