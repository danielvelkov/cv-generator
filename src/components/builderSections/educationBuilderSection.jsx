import { useState } from 'react';
import '../../styles/inputSection.css';
import Accordion from '../accordion';

export default function EducationBuilderSection({
  education,
  handleChangeForElement,
  handleAddElement,
  handleRemoveElement,
}) {
  const defaultDateStr = '2001-01-01';
  const [nextId, setNextId] = useState(Math.max(...education.map((e) => e.id)));
  const [selectedId, setSelectedId] = useState();
  function createNewEducation() {
    setNextId(nextId + 1);
    return {
      id: nextId + 1,
      school: '',
      degree: '',
      from: '',
      to: '',
      city: '',
      state: '',
    };
  }

  return (
    <>
      <ul>
        {education.map((e, i) => {
          return (
            <li className="sub-section" key={e.id}>
              <Accordion
                title={(education[i].school || null) ?? 'Education #' + e.id}
                isExpanded={selectedId === e.id}
                handleSelect={() => {
                  if (selectedId === e.id) setSelectedId();
                  else setSelectedId(e.id);
                }}
              >
                <hr></hr>
                <form>
                  <label>
                    {' '}
                    School name:{' '}
                    <input
                      required
                      type="text"
                      name="school"
                      value={education[i].school}
                      onChange={(data) => {
                        handleChangeForElement(data, e.id);
                      }}
                    />{' '}
                  </label>{' '}
                  <label>
                    {' '}
                    Title of Study:{' '}
                    <input
                      required
                      type="text"
                      name="degree"
                      value={education[i].degree}
                      onChange={(data) => {
                        handleChangeForElement(data, e.id);
                      }}
                    />{' '}
                  </label>{' '}
                  <label>
                    {' '}
                    Start Date:{' '}
                    <input
                      required
                      type="date"
                      name="from"
                      value={
                        education[i].from
                          ? new Date(education[i].from)
                              .toISOString()
                              .split('T')[0]
                          : defaultDateStr
                      }
                      onChange={(data) => {
                        handleChangeForElement(data, e.id);
                      }}
                    />{' '}
                  </label>{' '}
                  <label>
                    {' '}
                    End Date:{' '}
                    <input
                      required
                      type="date"
                      name="to"
                      value={
                        education[i].to
                          ? new Date(education[i].to)
                              .toISOString()
                              .split('T')[0]
                          : defaultDateStr
                      }
                      onChange={(data) => {
                        handleChangeForElement(data, e.id);
                      }}
                    />{' '}
                  </label>
                  <label>
                    {' '}
                    State:{' '}
                    <input
                      required
                      type="text"
                      name="state"
                      value={education[i].state}
                      onChange={(data) => {
                        handleChangeForElement(data, e.id);
                      }}
                    />{' '}
                  </label>
                  <label>
                    {' '}
                    City:{' '}
                    <input
                      required
                      type="text"
                      name="city"
                      value={education[i].city}
                      onChange={(data) => {
                        handleChangeForElement(data, e.id);
                      }}
                    />{' '}
                  </label>
                  <button onClick={() => handleRemoveElement(e.id)}>
                    Remove <span>&#128465;</span>
                  </button>
                </form>
              </Accordion>
            </li>
          );
        })}
      </ul>
      <div className="button-container">
        <button
          className="add-element-button"
          onClick={() => {
            const newEducation = createNewEducation();
            setSelectedId(newEducation.id);
            handleAddElement(newEducation);
          }}
        >
          <span>+</span>
        </button>
      </div>
    </>
  );
}
