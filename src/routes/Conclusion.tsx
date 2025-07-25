function Conclusion() {
  return (
    <>
      <h2 style={{ fontSize: '18px' }}>Close</h2>

      <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.5' }}>
        <div style={{marginBottom: '3rem'}}> How did it go? Did it work? If it did:</div>
        <div>
          <strong>Benefits could be:</strong>
          <ul>
            <li>Simpler development: Fewer PRs, less cognitive overhead</li>
            <li>Safer deployments: Less risk of downtime or client errors</li>
            <li>Faster feature delivery: No strict order constraints</li>
            <li>Improved developer happiness: Reduced complexity and mental load</li>
          </ul>
        </div>
        <div>
          <strong>Risks:</strong>
          <ul>
            <li>What if the ai guesses incorrectly?</li>
            <li>Performance</li>
          </ul>
        </div>
        <div style={{marginTop: '3rem'}}> Questions?</div>
      </div>
    </>
  );
}

export default Conclusion;