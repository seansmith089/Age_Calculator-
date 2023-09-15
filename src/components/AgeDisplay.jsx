import { useContext } from "react";
import { AgeContext } from "../contexts/AgeContext";

function AgeDisplay() {
    const { daysOutput, monthsOutput, yearsOutput } = useContext(AgeContext);

    return (
      <div className="age_display_wrapper">
        <div className="year_output_wrapper">
          <h1>
            <span className="purple_txt">{yearsOutput}</span>years
          </h1>
        </div>
        <div className="month_output_wrapper">
          <h1>
            <span className="purple_txt">{monthsOutput}</span>months
          </h1>
        </div>
        <div className="day_output_wrapper"></div>
        <h1>
          <span className="purple_txt">{daysOutput}</span>days
        </h1>
      </div>
    );
}

export default AgeDisplay;