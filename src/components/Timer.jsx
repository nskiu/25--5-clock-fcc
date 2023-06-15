const Timer = ({ active, beep, timer, handleTimer }) => {
  return (
    <>
      <div className="timer">
        <div id="timer-label">{timer.label}</div>
        <div id="time-left" className={timer.min < 1 ? "one-min" : ""}>
          {timer.min < 10 ? "0" + timer.min : timer.min}:
          {timer.sec < 10 ? "0" + timer.sec : timer.sec}
        </div>
      </div>
      <div className="timer-control">
        {active ? (
          <i className="fas fa-pause" id="start_stop" onClick={handleTimer}></i>
        ) : (
          <i className="fas fa-play" id="start_stop" onClick={handleTimer}></i>
        )}
        <i className="fas fa-stop" id="reset" onClick={handleTimer}></i>
        <audio
          ref={beep}
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>
      </div>
    </>
  );
};

export default Timer;
