import React from "react";

export default function MeasurementInput() {
  return (
    <form action="POST" className="measurement">
      <label htmlFor="measurement-input"></label>
      <input
        type="number"
        name="measurement-input"
        id="measurement-input"
        placeholder="#"
        className="log-input"
        required
      />
      <input type="submit" value="Log" className="log-btn" />
    </form>
  );
}
