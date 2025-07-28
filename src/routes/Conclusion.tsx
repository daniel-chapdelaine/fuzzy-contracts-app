function Conclusion() {
  return (
    <>
      <h2 style={{ fontSize: '18px' }}>Close</h2>

      <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.5' }}>
        <div> Did it work?</div>
        <div> How did it go?</div>
        <div style={{marginBottom: '3rem'}}>What are the pros and cons of adding AI into dataflow like this?</div>
        <div>
          <strong>Benefits:</strong>
          <ul>
            <li>Simpler development: Fewer PRs, less cognitive overhead</li>
            <li>Safer deployments: Less risk of downtime or client errors</li>
            <li>Faster feature delivery: No strict order constraints</li>
          </ul>
        </div>
        <div>
          <strong>Risks:</strong>
          <ul>
            <li>Incorrect Guess: Difficult to determine accuracy since there are no errors</li>
            <li>Performance Impact: Calling out to an api for small adjustments is expensive</li>
          </ul>
        </div>
        <div style={{marginTop: '3rem'}}> Questions?</div>
      </div>
    </>
  );
}

export default Conclusion;