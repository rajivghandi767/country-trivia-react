function Prompt() {
  return (
    <>
      <h1>What would you like to guess today?</h1>
      <button type="button" className="btn btn-primary">
        Countries
      </button>
      <button type="button" className="btn btn-secondary">
        Capitals
      </button>
    </>
  );
}

export default Prompt;
