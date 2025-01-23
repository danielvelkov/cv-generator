import '../../styles/displaySection.css';
export default function WorkSection({ work = [] }) {
  return (
    <div>
      <h2>Work Experience</h2>
      <ul className="display-list">
        {work.map((w, index) => {
          let yearFrom = '';
          if (w.from) yearFrom = new Date(w.from).getFullYear();
          let yearTo = 'present';
          if (w.to) yearTo = new Date(w.to).getFullYear();
          return (
            <li
              style={{
                display: 'flex',
                gap: '1em',
                flexWrap: 'wrap',
              }}
              key={index}
            >
              <div
                style={{
                  flex: '1',
                }}
              >
                {yearFrom || yearTo ? (
                  <div>
                    {yearFrom} - {yearTo}
                  </div>
                ) : (
                  ''
                )}
                {w.state || w.city ? <i>{w.state + ' ' + w.city}</i> : ''}
              </div>
              <div
                style={{
                  flex: '3',
                  
                }}
              >
                <h3>{w.position}</h3>
                <h4>{w.company}</h4>
                <ul>
                  {w.accomplishments.map((a, i) => (
                    <li key={i}>
                      <p>{a}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
