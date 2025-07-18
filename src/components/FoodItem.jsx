import React from "react";
import MeasurementInput from "./MeasurementInput";

export default function FoodItem({
  foodName,
  calorieValue,
  foodMeasurement,
  fatValue,
  proteinValue,
  carbValue,
  foodImgPath,
  className,
}) {
  const logFood = () => null;

  return (
    <div className="log-food">
      <img className={className} src={foodImgPath} alt={foodName} />
      <section>
        <h3>{foodName}</h3>
        <p>
          {calorieValue} cals / {foodMeasurement}
        </p>
        <ul>
          <li>{fatValue}% fat</li>
          <li>{proteinValue}% protein</li> <li>{carbValue}% carbs</li>
        </ul>
        <MeasurementInput />
      </section>
    </div>
  );
}
