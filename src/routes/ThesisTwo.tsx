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
          A total of 3 PRs and they must be released in this order. But what if there was an
          easier way. My question is could an AI middleware on the front end determine that the
          shape was slightly off and reshape it to the one we would expect.
        </p>
        <ul>
          <li>❌ Tedious (multiple PRs)</li>
          <li>❌ Error-prone (mistakes can break apps)</li>
          <li>❌ Slow (blocking PR releases)</li>
        </ul>
        <p>
          But what if we could adjust object 1 into object 2's shape or vice versa on the fly to ensure that the client keeps operating
          if either the client:
        </p>
        <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: '4px' }}>
          <code>{`{name: "Gibraltar", bar_date: "12-12-90"} ⇄ {name: "Gibraltar", foo_date: "12-12-90"}`}</code>
        </pre>
      </div>
    </div>
  );
}

export default ThesisTwo;