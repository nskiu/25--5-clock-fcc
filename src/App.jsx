import { useEffect, useRef, useState } from "react";
import Controls from "./components/Controls";
import Timer from "./components/Timer";

const App = () => {
  const [session, setSession] = useState(25);
  const [breaks, setBreaks] = useState(5);
  const [label, setLabel] = useState("Session");
  const [timer, setTimer] = useState({ min: 25, sec: 0 });
  const [active, setActive] = useState(false);

  const timerId = useRef(timer);

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
        setSession(25);
        setBreaks(5);
        setActive(false);
    }
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setTimer((prev) => {
        if (prev.sec === 0 && prev.min === 0) {
          console.log("Beep");
          if (label === "Session") {
            setLabel("Break");
            return { min: breaks, sec: 0 };
          } else {
            setLabel("Session");
            return { min: session, sec: 0 };
          }
        } else if (prev.sec === 0 && prev.min > 0) {
          return { min: prev.min - 1, sec: 59 };
        } else {
          return { min: prev.min, sec: prev.sec - 1 };
        }
      });
    }, 1000);
  };

  const stopTimer = () => {};

  useEffect(() => {
    if (active) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [active]);

  useEffect(() => {
    setTimer({ min: session, sec: 0 });
  }, [session]);

  return (
    <div>
      <Controls
        session={session}
        breaks={breaks}
        handleControls={handleControls}
      />
      <Timer timer={timer} label={label} handleTimer={handleTimer} />
    </div>
  );
};

export default App;
