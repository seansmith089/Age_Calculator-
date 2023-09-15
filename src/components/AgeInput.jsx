import "../App.css"
import { useContext, useEffect, useState } from "react";
import { AgeContext } from "../contexts/AgeContext";

const redError = `hsl(0, 100%, 67%)`
const blackText = `hsl(0, 0%, 8%)`;
const details = `hsl(0, 0%, 73%)`;

function AgeInput() {
  const {
    days,
    setDays,
    months,
    setMonths,
    years,
    setYears,
    errorDay,
    errorMonth,
    errorYear,
    setErrorDay,
    setErrorMonth,
    setErrorYear,
    invalidDay,
    setInvalidDay,
    invalidMonth,
    setInvalidMonth,
    invalidYear,
    setInvalidYear,
    setDaysValid,
    setMonthsValid,
    setYearsValid,
    setDaysOutput,
    setMonthsOutput,
    setYearsOutput,
  } = useContext(AgeContext);

  function clearOutput() {
    setDaysOutput("--");
    setMonthsOutput("--");
    setYearsOutput("--");
  }

  function yearInput() {
    if (years > 1900 && years < 2023) {
      setYearsValid(true);
      setInvalidYear(false);
    } else if (years < 1900 || years > 2023) {
      setYearsValid(false);
      setInvalidYear(true);
    }
  }

  function monthInput() {
    if (months >= 1 && months <= 12) {
      setMonthsValid(true);
      setInvalidMonth(false);
    } else if (months < 1 || months > 12) {
      setMonthsValid(false);
      setInvalidMonth(true);
    }
  }

  function daysInput() {
    if (days >= 1 && days <= 31) {
      setDaysValid(true);
      setInvalidDay(false);
    } else if (days < 1 || days > 31) {
      setInvalidDay(true);
    }
  }

  useEffect(() => {
    yearInput();
    monthInput();
    daysInput();
  });

  // BLUR HANDLERS -----------------------------------------
  function blurYear(e) {
    setErrorYear(false)
    if (years === "" || years === "--" || isNaN(years)) {
      setErrorYear(true);
      setInvalidYear(false);
    }
  }

  function blurMonth(e) {
    setErrorMonth(false)
    if (months === "" || months === "--" || isNaN(months)) {
      setErrorMonth(true);
      setInvalidMonth(false)
    }
  }

  function blurDay(e) {
    setErrorDay(false)
    if (days === "" || days === "--" || isNaN(days)) {
      setErrorDay(true);
      setInvalidDay(false)
      
    }
  }

  // CHANGE HANDLERS -----------------------------------------

  function yearChangeHandler(e) {
    setErrorYear(false);
    setYears(parseInt(e.target.value));
  }

  function monthChangeHandler(e) {
    setErrorMonth(false);
    setMonths(parseInt(e.target.value));
  }

  function dayChangeHandler(e) {
    setErrorDay(false);
    setDays(parseInt(e.target.value));
  }

  // ON-CLICK HANDLERS -----------------------------------------

  function dayClick() {
    clearOutput();
    setInvalidDay(false);
  }

  function monthClick() {
    clearOutput();
    setInvalidMonth(false);
  }

  function yearClick() {
    clearOutput();
    setInvalidYear(false);
  }

  return (
    <div className="input_wrapper">
      <div className="day_input_wrapper">
        <label
          htmlFor="day_input"
          style={{ color: errorDay || invalidDay ? redError : blackText }}
        >
          DAY
        </label>
        <input
          value={days}
          type="number"
          id="day_input"
          placeholder="DD"
          onChange={(e) => dayChangeHandler(e)}
          onBlur={(e) => blurDay(e)}
          onClick={() => {
            dayClick();
          }}
          style={{
            border:
              errorDay || invalidDay
                ? `1px solid ${redError}`
                : `1px solid ${details}`,
          }}
        />
        {errorDay && <p className="day-error">This feild is required</p>}
        {invalidDay && <p className="day-invalid-error">Must be valid day</p>}
      </div>

      <div className="month_input_wrapper">
        <label
          htmlFor="month_input"
          style={{ color: errorMonth || invalidMonth ? redError : blackText }}
        >
          MONTH
        </label>
        <input
          value={months}
          type="number"
          id="month_input"
          placeholder="MM"
          onChange={(e) => monthChangeHandler(e)}
          onBlur={(e) => blurMonth(e)}
          onClick={() => monthClick()}
          style={{
            border:
              errorMonth || invalidMonth
                ? `1px solid ${redError}`
                : `1px solid ${details}`,
          }}
        />
        {errorMonth && <p className="month-error">This feild is required</p>}
        {invalidMonth && (
          <p className="month-invalid-error">Must be valid month</p>
        )}
      </div>

      <div className="year_input_wrapper">
        <label
          htmlFor="year_input"
          style={{ color: errorYear || invalidYear ? redError : blackText }}
        >
          YEAR
        </label>
        <input
          value={years}
          type="number"
          id="year_input"
          placeholder="YYYY"
          onChange={(e) => yearChangeHandler(e)}
          onBlur={(e) => blurYear(e)}
          onClick={() => yearClick()}
          style={{
            border:
              errorYear || invalidYear
                ? `1px solid ${redError}`
                : `1px solid ${details}`,
          }}
        />
        {errorYear == true && (
          <p className="year-error">This feild is required</p>
        )}
        {invalidYear && <p className="year-invalid-error">Must be 1900-2023</p>}
      </div>
    </div>
  );
}

export default AgeInput;