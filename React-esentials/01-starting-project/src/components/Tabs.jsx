/*A Tabs le vamos a agregar otra prop que llamaremos buttonsContainer
donde la idea es agregar una envoltura a nuestros buttons

const Tabs = ({ children, buttons }) => {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
};

export default Tabs;
*/
const Tabs = ({ children, buttons, buttonsContainer = "menu" }) => {
  const ButtonContainer = buttonsContainer;
  //Si buttonsContainer no existe, le asignamos un valor
  //por defecto: buttonsContainer = "menu"
  //ButtonContainer debe comenzar con mayúsculas para poder utilizarla como etiqueta HTML
  //También podríamos haber enviado y recibido a buttonsContainer con mayúsculas
  //y no nos haría falta una variable intermedia
  //const Tabs = ({ children, buttons, ButtonContainer }) => {

  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
