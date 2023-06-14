import { useState } from "react";
import Controls from "./components/Controls";
import Timer from "./components/Timer";

const App = () => {
  const [session, setSession] = useState(25);
  const [breaks, setBreaks] = useState(5);
  const [timer, setTimer] = useState({ min: 25, sec: "00" });

  const handleControls = (event) => {
    const controlID = event.target.id;
    switch (controlID) {
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
  return (
    <div>
      <Controls
        session={session}
        breaks={breaks}
        handleControls={handleControls}
      />
      <Timer timer={timer} />
    </div>
  );
};

export default App;
