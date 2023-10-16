import { useState } from "react";
import "./AgeCalculator.css";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(0);

  const CalculateAge = () => {
    const today = new Date();
    const recivedDate = new Date(birthdate);
    let age = today.getFullYear() - recivedDate.getFullYear();
    const monthDiff = today.getMonth() - recivedDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < recivedDate.getDate())
    ) {
      age--;
    }
    setAge(age);
  };


  return (
      <div className="App">
          <p> Age Calculator</p>
          <p>Enter your date of birth</p>
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />

          <br />
          <button onClick={CalculateAge}>Calculate Age</button>
          <p className="result">{age > 0 ? `Your Age  ${age}` : ""}</p>
      </div>
  );
};

export default AgeCalculator;