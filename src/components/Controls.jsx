const Controls = () => {
  return (
    <>
      <div className="main-title">25 + 5 Clock</div>
      <div className="labels">
        <div className="controls">
          <div id="break-label">Break Length</div>
          <div className="length-control">
            <button id="break-decrement">down</button>
            <div id="break-length">5</div>
            <button id="break-increment">up</button>
          </div>
        </div>
        <div className="controls">
          <div id="session-label">Session Length</div>
          <div className="length-control">
            <button id="session-decrement">down</button>
            <div id="session-length">25</div>
            <button id="session-increment">up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Controls;
