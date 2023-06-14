const Timer = ({ timer, label, handleTimer }) => {
  return (
    <>
      <div className="timer">
        <div id="timer-label">{label}</div>
        <div id="time-left">
          {timer.min}:{timer.sec >= 10 ? "0" + timer.sec : timer.sec}
        </div>
      </div>
      <div className="timer-control">
        <button id="start_stop" onClick={handleTimer}>
          start_stop
        </button>
        <button id="reset" onClick={handleTimer}>
          reset
        </button>
      </div>
    </>
  );
};

export default Timer;
