//Transformamos export const TabButton = ({ children, onSelect, isSelected })
//para utilizar el forward de las props.
//También debemos transformar {<button className={isSelected ? "active" : undefined} onClick={onSelect}>
//y establecer onClick en lugar de onSelect desde donde se llame a TabButton
//No podemos hacer lo mismo con isSelect porque lo hemos establecido nosotros

export const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};
