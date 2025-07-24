import { useEffect, useState } from 'react';
import { fetchDataFromServer } from './api';
import { Person } from './types';

function App() {
  const [data, setData] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchDataFromServer()
      .then(async(result) => {
        console.log('result', result);
             
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error?.message}</div>;

  return (
    <div style={{ padding: '2rem 4rem', maxWidth: '750px'}}>
      <h1>Profile</h1>
      <div style={{fontWeight: 600}}>{data?.name}</div>
      <div style={{paddingTop: '.5rem'}}>{data?.facts.birth_date}</div>
      {/* for NewPerson schema */}
      {/* <div style={{paddingTop: '.5rem'}}>{data?.favorite_date}</div> */}

      <div
        style={{
          marginTop: '3rem',
          backgroundColor: 'lightgray',
          padding: '.25rem .5rem',
        }}
      >
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
        <tbody>
          <tr>
        <th
          style={{
            whiteSpace: 'nowrap',
            textAlign: 'left',
            border: '1px solid #ccc',
            padding: '0.25rem 0.5rem',
          }}
        >
          AI adjusted
        </th>
        <td style={{ border: '1px solid #ccc', padding: '0.25rem 0.5rem' }}>
          {data?.metadata.aiAdjusted ? 'Yep' : 'Nope'}
        </td>
          </tr>
          {data?.metadata.question && (
        <tr>
          <th
            style={{
          whiteSpace: 'nowrap',
          textAlign: 'left',
          border: '1px solid #ccc',
          padding: '0.25rem 0.5rem',
            }}
          >
            AI question
          </th>
          <td style={{ border: '1px solid #ccc', padding: '0.25rem 0.5rem' }}>
            {data.metadata.question}
          </td>
        </tr>
          )}
          {data?.metadata.answer && (
        <tr>
          <th
            style={{
          whiteSpace: 'nowrap',
          textAlign: 'left',
          border: '1px solid #ccc',
          padding: '0.25rem 0.5rem',
            }}
          >
            AI answer
          </th>
          <td style={{ border: '1px solid #ccc', padding: '0.25rem 0.5rem' }}>
            {data.metadata.answer}
          </td>
        </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;