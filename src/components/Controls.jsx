const Controls = ({ session, breaks, handleControls }) => {
  return (
    <>
      <div className="main-title">25 + 5 Clock</div>
      <div className="labels">
        <div className="controls">
          <div id="break-label">Break Length</div>
          <div className="length-control">
            <button id="break-decrement" onClick={handleControls}>
              down
            </button>
            <div id="break-length">{breaks}</div>
            <button id="break-increment" onClick={handleControls}>
              up
            </button>
          </div>
        </div>
        <div className="controls">
          <div id="session-label">Session Length</div>
          <div className="length-control">
            <button id="session-decrement" onClick={handleControls}>
              down
            </button>
            <div id="session-length">{session}</div>
            <button id="session-increment" onClick={handleControls}>
              up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Controls;
