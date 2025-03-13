
export default function Button({ children, className, mode = 'filled', Icon, ...props}) {
    let cssClasses = `button ${mode}-button`;
   
    if (Icon) {
      cssClasses += ' icon-button';
    }
   
    if (className) {
      cssClasses += ' ' + className;
    }
   
    return (
      <button className={cssClasses} {...props}>
        {Icon && (
          <span className="button-icon">
            <Icon />
          </span>
        )}
        <span>{children}</span>
      </button>
    );
  }

  /*Explicacion de la solucion

1. **Parámetros (props) del componente**  
   - `children`: todo lo que se encuentre dentro de `<Button> ... </Button>` en el JSX donde se use este componente (normalmente texto o contenido).  
   - `className`: permite recibir una clase adicional opcional para personalizar más el botón.  
   - `mode = 'filled'`: define el **valor por defecto** de la prop `mode`. Si no se pasa ningún `mode`, usará `'filled'`. Así puedes tener, por ejemplo, `'outline'`, `'text'`, etc.  
   - `Icon`: un componente de ícono que, si se pasa, se renderiza dentro del botón.  
   - `...props`: captura el resto de propiedades (por ejemplo, `onClick`, `disabled`, `id`, etc.) y las pasa directamente al elemento `<button>`.  

2. **Construcción de clases (cssClasses)**  
   ```js
   let cssClasses = `button ${mode}-button`;
   ```
   - Empieza con `"button"` (clase base) y luego agrega `mode + '-button'`, por ejemplo, si `mode="filled"`, quedará `"button filled-button"`.  

   ```js
   if (Icon) {
     cssClasses += ' icon-button';
   }
   ```
   - Si hay un ícono (`Icon` no es `undefined`), añade la clase `icon-button` para poder aplicar estilos específicos cuando el botón tiene ícono.  

   ```js
   if (className) {
     cssClasses += ' ' + className;
   }
   ```
   - Si el usuario pasó una clase adicional `className`, se concatena también a la variable `cssClasses`.  
   - De este modo, el botón resultará con las clases CSS combinadas:  
     - `button`  
     - `<mode>-button` (por ejemplo, `filled-button`, `outline-button`, `text-button`, etc.)  
     - `icon-button` (solo si se pasó un ícono)  
     - y la clase que el usuario desee (`className`, si se especificó).

3. **Render del botón**  
   ```jsx
   return (
     <button className={cssClasses} {...props}>
       {Icon && (
         <span className="button-icon">
           <Icon />
         </span>
       )}
       <span>{children}</span>
     </button>
   );
   ```
   - Se crea un elemento `<button>` con todas las clases combinadas (`className={cssClasses}`).  
   - Se añaden también todas las props restantes (`...props`), por ejemplo, `onClick`, `disabled`, etc.  
   - **`{Icon && ...}`**: si existe `Icon`, renderiza un `<span>` con la clase `button-icon` que contiene la llamada al propio componente del ícono (`<Icon />`).  
   - Después, se muestra un `<span>` que contiene `children` (el contenido o texto del botón).  

### Resumen

En esencia, este componente **Button**:
- Aplica estilos dinámicamente según el `mode` que reciba (por defecto `'filled'`).
- Muestra un ícono opcional si se le pasa la prop `Icon`.
- Acepta clases extra (`className`) para personalizarlo aún más.
- Renderiza cualquier otro atributo que quieras pasar (por ejemplo, `disabled`, `onClick`) gracias a `...props`.
- El contenido que pongas dentro de `<Button>...</Button>` en tu JSX aparecerá dentro del botón como `children`.
  */