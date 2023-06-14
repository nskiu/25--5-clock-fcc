const Timer = () => {
  return (
    <>
      <div className="timer">
        <div id="timer-label">Session</div>
        <div id="time-left">60:00</div>
      </div>
      <div className="timer-control">
        <button id="start_stop">start_stop</button>
        <button id="reset">reset</button>
      </div>
    </>
  );
};

export default Timer;
