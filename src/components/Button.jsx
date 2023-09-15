import buttonImage from "../images/icon-arrow.svg"
import { useContext } from "react";
import { AgeContext } from "../contexts/AgeContext";

const buttonGrey = `hsl(0, 0%, 73%)`;
const buttonPurple = `hsl(259, 100%, 65%)`;

function Button() {
    const {
      days,
      setDays,
      months,
      years,
      setDaysOutput,
      setMonthsOutput,
      setYearsOutput,
      setInvalidDay,
      daysValid,
      monthsValid,
      yearsValid,
      setDaysValid,
      setMonthsValid,
      setYearsValid,
    } = useContext(AgeContext);

    

     function calculateAge() {
        if(daysValid ==true && monthsValid ==true && yearsValid == true){
            if (
              (months == 12 ||
                months == 10 ||
                months == 8 ||
                months == 7 ||
                months == 5 ||
                months == 3 ||
                months == 1) &&
              (days > 31 || days <= 0)
            ) {
              setInvalidDay(true)
              setDays("");
            } else if (
              (months == 11 || months == 9 || months == 6 || months == 4) &&
              (days > 30 || days <= 0)
            ) {
              setInvalidDay(true);
              setDays("");
            } else if (months == 2 && (days > 28 || days <= 0)) {
              setInvalidDay(true);
              setDays("");
            } else {
              // CREATE A BIRTHDAY DATE VARIABLE
              let birthDate = new Date(years, months, days);

              let bd_day = birthDate.getDate();
              let bd_month = birthDate.getMonth();
              let bd_year = birthDate.getFullYear();

              // CREATE A TODAYS DATE VARIABLE
              let todaysDate = new Date();

              let today_day = todaysDate.getDate();
              let today_month = todaysDate.getMonth() + 1;
              let today_year = todaysDate.getFullYear();

              // STORE THE DIFFERENCE BETWEEN BIRTHDAY AND TODAY
              let difference_day, difference_month, difference_year;

              difference_year = today_year - bd_year;

              if (today_month >= bd_month) {
                difference_month = today_month - bd_month;
              } else {
                difference_year--;
                difference_month = 12 + today_month - bd_month;
              }

              if (today_day >= bd_day) {
                difference_day = today_day - bd_day;
              } else {
                difference_month--;
                difference_day =
                  getDaysInMonth(bd_year, bd_month) + today_day - bd_day;
              }
              if (difference_month < 0) {
                difference_month = 11;
                difference_year--;
              }

              function getDaysInMonth(year, month) {
                return new Date(year, month, 0).getDate();
              }

              setDaysOutput(difference_day);
              setMonthsOutput(difference_month);
              setYearsOutput(difference_year);

              setDaysValid(false)
              setMonthsValid(false)
              setYearsValid(false)
            }
            
        }
      setDaysValid(false);
      setMonthsValid(false);
      setYearsValid(false);
        
    }

        

    return (
      <div className="button_container">
        <div className="button_wrapper" onClick={() => calculateAge()}>
          <div
            className="button_body"
            style={{
              backgroundColor:
                daysValid === true && monthsValid === true && yearsValid === true
                  ? buttonPurple
                  : buttonGrey,
            }}
          ></div>
          <img src={buttonImage} alt="N" />
        </div>

        <div className="line"></div>
      </div>
    );
}

export default Button;