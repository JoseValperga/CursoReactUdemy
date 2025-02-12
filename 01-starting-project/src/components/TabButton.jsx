export const TabButton = ({ children }) => {
  
  const handleClick = () => {
    console.log("Hizo click");
  };

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
};
