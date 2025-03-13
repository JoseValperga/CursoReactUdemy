import { useState } from "react";

const UserInput = ({ onChange, userInput }) => {
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
              onChange("initialInvestment", event.target.value)
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
              onChange("annualInvestment", event.target.value)
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
              onChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
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
