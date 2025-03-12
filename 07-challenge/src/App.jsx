import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

const INITIAL_USER_INPUT = {
  initialInvestment: 1,
  annualInvestment: 2,
  expectedReturn: 3,
  duration: 4,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);
  return (
    <main>
      <Header />
      <UserInput />
    </main>
  );
}

export default App;
