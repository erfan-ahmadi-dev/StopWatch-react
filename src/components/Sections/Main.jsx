import React, { useEffect, useState } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import LabItem from "../Lab/LabItem";
import CounterText from "../Texts/CounterText";
function Main() {
  const [lab, setLab] = useState([]);
  const [time, setTime] = useState(0);
  const [playPause, setPlay] = useState("Start");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // * Calulate Time
  const minutes = String(Math.floor((time % 360000) / 6000)).padStart(2, "0");
  const seconds = String(Math.floor((time % 6000) / 100)).padStart(2, "0");
  const milliseconds = String(time % 100).padStart(2, "0");

  // * Start and Stop Text
  const startAndStop = () => {
    setIsRunning(!isRunning);
    if (isRunning) {
      setPlay("Start");
    } else {
      setPlay("Stop");
    }
  };

  // *Reset Timer
  const reset = () => {
    setTime(0);
    setPlay("Start");
    setIsRunning(false);
  };
  const addLab = () => {
    const newLab = `${minutes}:${seconds}:${milliseconds}`;
    if (lab.at(-1) !== newLab) {
      setLab((prevLab) => [...prevLab, newLab]);
    }
  };
  return (
    <div className="w-2/5 h-4/5 flex flex-col gap-8 items-center text-white overflow-y-scroll no-scrollbar relative">
      <div className=" w-full items-center flex flex-col gap-8 sticky top-0 bg-[#212121] z-50">
        <CounterText
          minutes={minutes}
          second={seconds}
          milisecond={milliseconds}
        />
        <div className=" flex gap-4">
          <ButtonPrimary
            text={playPause}
            color="bg-green-500"
            func={startAndStop}
          />
          <ButtonPrimary text="Lab" color="bg-sky-500" func={addLab} />
          <ButtonPrimary text="Reset" color="bg-red-500" func={reset} />
        </div>
      </div>
      <div className="w-3/4 px-8 flex flex-col gap-4 justify-center items-center">
        <LabItem firstText="Lab" seconText="Time" />
        {lab.length > 0
          ? lab.map((item) => {
              return (
                <LabItem
                  firstText={lab.indexOf(item) + 1}
                  seconText={item}
                  key={lab.indexOf(item)}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Main;
