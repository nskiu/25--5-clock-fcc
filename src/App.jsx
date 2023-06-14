import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Timer from "./components/Timer";

const App = () => {
  const [session, setSession] = useState(25);
  const [breaks, setBreaks] = useState(5);
  const [label, setLabel] = useState("Session");
  const [timer, setTimer] = useState({ min: 25, sec: 0 });
  const [active, setActive] = useState(false);

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

  useEffect(() => {
    setTimer({ min: session, sec: "00" });
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
