function ThesisTwo() {
  return (
    <div>
      <h2 style={{fontSize: '18px'}}>Thesis</h2>
      <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.5' }}>
        <ol>
          <li>Server side adds "bar_date" to the data sent to the client</li>
          <li>Client receives both dates but replaces all instances of "foo_date" with "bar_date"</li>
          <li>Server side removes unused "foo_date"</li>
        </ol>
        <p>
          This is a total of 3 PRs and they must be released in this order
        </p>
        <ul>
          <li>❌ Tedious (multiple PRs)</li>
          <li>❌ Error-prone (mistakes can break apps)</li>
          <li>❌ Slow (blocking PR releases)</li>
        </ul>
        <p>Is there was an easier way?</p>
      </div>
    </div>
  );
}

export default ThesisTwo;