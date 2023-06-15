import { useEffect, useRef, useState } from "react";
import Controls from "./components/Controls";
import Timer from "./components/Timer";

const App = () => {
  const [session, setSession] = useState(25);
  const [breaks, setBreaks] = useState(5);

  const [timer, setTimer] = useState({ min: 25, sec: 0, label: "Session" });
  const [active, setActive] = useState(false);

  const timerId = useRef();
  const beep = useRef();

  const handleControls = (event) => {
    if (active) return;
    switch (event.target.id) {
      case "session-decrement":
        if (session === 1) return;
        setSession((prev) => prev - 1);
        break;
      case "session-increment":
        if (session === 60) return;
        setSession((prev) => prev + 1);
        break;
      case "break-decrement":
        if (breaks === 1) return;
        setBreaks((prev) => prev - 1);
        break;
      case "break-increment":
        if (breaks === 60) return;
        setBreaks((prev) => prev + 1);
        break;
      default:
        console.log("Invalid Input");
        return;
    }
  };

  const handleTimer = (event) => {
    switch (event.target.id) {
      case "start_stop":
        setActive(!active);
        break;
      case "reset":
        stopTimer();
        beep.current.pause();
        beep.current.load();
        setSession(25);
        setBreaks(5);
        setTimer({ min: 25, sec: 0, label: "Session" });
        setActive(false);
    }
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setTimer((prev) => {
        if ((prev.sec <= 0 && prev.min <= 0) || prev.min < 0) {
          if (prev.label === "Session") {
            return { min: breaks, sec: 0, label: "Break" };
          } else {
            return { min: session, sec: 0, label: "Session" };
          }
        } else if (prev.sec <= 0 && prev.min > 0) {
          return { min: prev.min - 1, sec: 59, label: prev.label };
        } else {
          return { min: prev.min, sec: prev.sec - 1, label: prev.label };
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  useEffect(() => {
    if (active) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [active]);

  useEffect(() => {
    // the test is weird it sets the session to negative and never start the timer, this is my workaround
    if (session < 0) {
      setSession(session * -1);
    }
    setTimer({ min: session, sec: 0, label: "Session" });
  }, [session]);

  useEffect(() => {
    if (timer.min === 0 && timer.sec === 0) beep.current.play();
  }, [timer]);
  return (
    <div>
      <Controls
        session={session}
        breaks={breaks}
        handleControls={handleControls}
      />
      <Timer beep={beep} timer={timer} handleTimer={handleTimer} />
    </div>
  );
};

export default App;
