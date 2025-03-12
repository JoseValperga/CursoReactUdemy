import { useState } from "react";

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investmen</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investmen</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>{" "}
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return Investmen</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;

/*
    <form id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input type="number" id="initialInvestment" />
        </div>

        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input type="number" id="annualInvestment" />
        </div>

        <div>
          <label htmlFor="expectedReturn">Expected Return (%)</label>
          <input type="number" id="expectedReturn" />
        </div>

        <div>
          <label htmlFor="duration">Duration (Years)</label>
          <input type="number" id="duration" />
        </div>
      </div>
    </form>
    */
