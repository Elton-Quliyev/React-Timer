import { useEffect, useState } from "react";

const TimeCounter = ({ deqiqe, saniye }) => {
  const [second, setSecond] = useState(saniye);
  const [minute, setMinute] = useState(deqiqe);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (second === 0 && minute === 0) {
        clearInterval(interval);
        setIsTimerRunning(false);
      } else {
        setSecond((second) => (second === 0 ? 59 : second - 1));
        setMinute((minute) =>
          second === 0 ? (minute > 0 ? minute - 1 : 0) : minute
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [second, minute]);

  const formattedSecond = second < 10 ? `0${second}` : `${second}`;
  const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;



  const handleRestart = () => {
    setSecond(saniye);
    setMinute(deqiqe);
    setIsTimerRunning(true);
  };
  return (
    <div>
      <h1>zaman: {formattedMinute} : {formattedSecond}</h1>
      {!isTimerRunning && <button onClick={handleRestart}>Yenidən Başla</button>}
    </div>
  );
};

export default TimeCounter;
