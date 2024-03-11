import React from "react"
import { tw } from "twind"

const MiniCalendar = () => {
  const currentDate = new Date();
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1)
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;
  const elapsedTime = currentDate - startOfYear;
  const percentElapsed = (elapsedTime / millisecondsInYear) * 100;
  return (
    <div>
      <h2 className={tw`text-center opacity-50`}>
        {percentElapsed.toFixed(2)} % of the year has passed
      </h2>
    </div>
  );
}

export default MiniCalendar
