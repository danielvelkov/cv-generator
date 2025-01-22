import '../../styles/educationSection.css';
export default function EducationSection({ education = [] }) {
  return (
    <>
      <h2>Education</h2>
      <ul className="education-list">
        {education.map((e, index) => {
          const yearFrom = new Date(e.from).getFullYear();
          const yearTo = new Date(e.to).getFullYear();
          return (
            <li key={index}>
              {yearFrom} - {yearTo}
              <h3>
                <b>
                  {e.degree} - {e.school}
                </b>
              </h3>
              <i>{e.state + ' ' + e.city}</i>
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </>
  );
}
