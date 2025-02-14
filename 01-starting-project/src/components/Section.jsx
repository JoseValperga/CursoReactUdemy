const Section = ({ title, children, ...props }) => {
  //...props le dice a JvaScrip que recolecte todas las otras props
  //que puedan ser cebidas en este componente y los fusione
  // en un objeto que podemos llamar "props". Cualquier nombre va bien
  //Es especialmente util para recibir configuraciones CSS. En este caso
  //estará recibiendo el id de <Section id="examples">

  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
