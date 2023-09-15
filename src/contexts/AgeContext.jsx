import { createContext, useState } from "react";

export const AgeContext = createContext();

export const AgeContextProvider = (props) => {
  // INPUT D.O.B STATES
  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");

  // STATE TO CONFIRM THE ENTRY IS VALID AND READY TO CALCULATE
  const [daysValid, setDaysValid] = useState(false);
  const [monthsValid, setMonthsValid] = useState(false);
  const [yearsValid, setYearsValid] = useState(false);

  // AGE OUTPUT STATES
  const [daysOutput, setDaysOutput] = useState("--");
  const [monthsOutput, setMonthsOutput] = useState("--");
  const [yearsOutput, setYearsOutput] = useState("--");

  // STATE TO DISPLAY "FEILD MUST BE COMPLETE"
  const [errorDay, setErrorDay] = useState(false);
  const [errorMonth, setErrorMonth] = useState(false);
  const [errorYear, setErrorYear] = useState(false);

  // STATE TO DISPLAY "MUST BE A VAILD DATE"
  const [invalidDay, setInvalidDay] = useState(false);
  const [invalidMonth, setInvalidMonth] = useState(false);
  const [invalidYear, setInvalidYear] = useState(false);

  return (
    <AgeContext.Provider
      value={{
        days,
        setDays,
        months,
        setMonths,
        years,
        setYears,
        daysOutput,
        setDaysOutput,
        monthsOutput,
        setMonthsOutput,
        yearsOutput,
        setYearsOutput,
        errorDay,
        setErrorDay,
        errorMonth,
        setErrorMonth,
        errorYear,
        setErrorYear,
        invalidDay,
        setInvalidDay,
        invalidMonth,
        setInvalidMonth,
        invalidYear,
        setInvalidYear,
        daysValid,
        setDaysValid,
        monthsValid,
        setMonthsValid,
        yearsValid,
        setYearsValid,
      }}
    >
      {props.children}
    </AgeContext.Provider>
  );
};
