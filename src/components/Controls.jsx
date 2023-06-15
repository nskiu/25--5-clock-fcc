const Controls = ({ session, breaks, handleControls }) => {
  return (
    <>
      <div className="main-title">25 + 5 Clock</div>
      <div className="labels">
        <div className="controls">
          <div id="break-label">Break Length</div>
          <div className="length-control">
            <i
              className="fas fa-chevron-down"
              id="break-decrement"
              onClick={handleControls}
            ></i>

            <div id="break-length">{breaks}</div>
            <i
              className="fas fa-chevron-up"
              id="break-increment"
              onClick={handleControls}
            ></i>
          </div>
        </div>
        <div className="controls">
          <div id="session-label">Session Length</div>
          <div className="length-control">
            <i
              className="fas fa-chevron-down"
              id="session-decrement"
              onClick={handleControls}
            ></i>
            <div id="session-length">{session}</div>

            <i
              className="fas fa-chevron-up"
              id="session-increment"
              onClick={handleControls}
            >
              {" "}
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Controls;
