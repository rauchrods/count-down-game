import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
import { createPortal } from "react-dom";

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevVal) => prevVal - 10);
    }, 10);
  }

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if(timeRemaining<=0){
    clearInterval(timer.current); 
    dialog.current.showModal();
  }

  function handlereset(){
    setTimeRemaining(targetTime * 1000);
  }

  function handleStop() {
    dialog.current.showModal();
    clearInterval(timer.current);
  }

  return (
    <>
       <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handlereset}/>
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerIsActive && <p>You lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ``}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
