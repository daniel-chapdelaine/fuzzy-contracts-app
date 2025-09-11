import { useEffect, useState } from 'react';
import { fetchDataFromServer } from '../api';
import { NewPerson, Person } from '../types';

function Demo() {
  const [data, setData] = useState<Person | null>(null);
  // const [data, setData] = useState<NewPerson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const storedShouldAdjust = localStorage.getItem('shouldAdjust') === 'true' || false;
  const [shouldAdjust, setShouldAdjust] = useState<boolean>(storedShouldAdjust);
  const toggleAdjust = () => setShouldAdjust(prev => !prev);

  useEffect(() => {
    localStorage.setItem('shouldAdjust', shouldAdjust.toString());
    fetchDataFromServer(shouldAdjust)
      .then(async(result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [shouldAdjust]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error?.message}</div>;

  return (
    <>
      <h2 style={{fontSize: '18px'}}>Demo</h2>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
        <h3 style={{fontSize: '20px'}}>User Profile</h3>
        <div style={{display: 'flex', gap: '1rem'}}>
          <div>
            <img
              src={require('../images/jeff.png')}
              alt="profile pic"
              style={{
                width: '120px',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>
          <div style={{paddingTop: '1rem'}}>
            <div style={{fontWeight: 600}}>{data?.name}</div>
            {/* for Person schema */}
            <div style={{paddingTop: '.5rem'}}>{data?.facts.birth_date}</div>
            {/* for NewPerson schema */}
            {/* <div style={{paddingTop: '.5rem'}}>{data?.favorite_date}</div> */}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'end',  marginTop: '7rem', borderTop: '1px solid black', paddingTop: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '18px' }}>
            AI Adjust Data
            <button
              onClick={toggleAdjust}
              style={{
                width: '2.5rem',
                height: '2.5rem',
                marginLeft: '.25rem',
                backgroundImage: shouldAdjust ? `url(${require('../images/checked.png')})` : `url(${require('../images/unchecked.png')})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            />
          </label>  
        </div>
        <div
          style={{
            marginTop: '1rem',
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
              width: '150px'
            }}
          >
            AI adjusted
          </th>
          <td style={{ border: '1px solid #ccc', padding: '0.25rem 0.5rem' }}>
            {data?.metadata.aiAdjusted}
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
            width: '150px'
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
            width: '150px'
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
    </>
  );
}

export default Demo;