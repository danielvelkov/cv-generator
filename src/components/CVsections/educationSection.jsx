import '../../styles/educationSection.css';
export default function EducationSection({ education = [] }) {
  return (
    <>
      <h2>Education</h2>
      <ul className="education-list">
        {education.map((e, index) => {
          let yearFrom = '';
          if (e.from) yearFrom = new Date(e.from).getFullYear();
          let yearTo = 'present';
          if (e.to) yearTo = new Date(e.to).getFullYear();
          return (
            <li key={index}>
              {yearFrom || yearTo ? (
                <div>
                  {yearFrom} - {yearTo}
                </div>
              ) : (
                ''
              )}
              {e.degree ? (
                <h3>
                  <b>{e.degree}</b>
                </h3>
              ) : (
                ''
              )}
              {e.school ? (
                <h4>
                  <b>{e.school}</b>
                </h4>
              ) : (
                ''
              )}
              {e.state || e.city ? <i>{e.state + ' ' + e.city}</i> : ''}
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </>
  );
}
