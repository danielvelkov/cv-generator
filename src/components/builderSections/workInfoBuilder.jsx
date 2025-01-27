import { useState } from 'react';
import '../../styles/inputSection.css';
import Accordion from '../accordion';
import EntryList from '../entryList';

export default function WorkInfoBuilder({
  work,
  handleChangeForElement,
  handleAddElement,
  handleRemoveElement,
}) {
  const defaultDateStr = '2001-01-01';
  const [nextId, setNextId] = useState(Math.max(...work.map((e) => e.id)));
  const [selectedId, setSelectedId] = useState();
  function createWorkExperience() {
    setNextId(nextId + 1);
    return {
      id: nextId + 1,
      position: '',
      company: '',
      from: '',
      to: '',
      state: '',
      city: '',
      accomplishments: [],
    };
  }

  function getEventDataObject(targetName, targetValue) {
    return { target: { name: targetName, value: targetValue } };
  }

  const handleAddItem = (newItem, id) => {
    let data = getEventDataObject('accomplishments', [
      ...work.find((w) => w.id === id).accomplishments,
      newItem,
    ]);
    handleChangeForElement(data, id);
  };

  const handleRemoveItem = (index, id) => {
    let data = getEventDataObject('accomplishments', [
      ...work
        .find((w) => w.id === id)
        .accomplishments.filter((a, i) => i !== index),
    ]);
    handleChangeForElement(data, id);
  };

  const handleEditItem = (index, updatedItem, id) => {
    let data = getEventDataObject('accomplishments', [
      ...work
        .find((w) => w.id === id)
        .accomplishments.map((item, i) => (i === index ? updatedItem : item)),
    ]);

    handleChangeForElement(data, id);
  };

  return (
    <>
      <ul>
        {work.map((w, i) => {
          return (
            <li className="sub-section" key={w.id}>
              <Accordion
                title={(work[i].company || null) ?? 'Company #' + w.id}
                isExpanded={selectedId === w.id}
                handleSelect={() => {
                  if (selectedId === w.id) setSelectedId();
                  else setSelectedId(w.id);
                }}
              >
                <hr></hr>
                <form onSubmit={(e) => e.preventDefault()}>
                  <label>
                    {' '}
                    Company name:{' '}
                    <input
                      required
                      type="text"
                      name="company"
                      value={work[i].company}
                      onChange={(data) => {
                        handleChangeForElement(data, w.id);
                      }}
                    />{' '}
                  </label>{' '}
                  <label>
                    {' '}
                    Position:{' '}
                    <input
                      required
                      type="text"
                      name="position"
                      value={work[i].position}
                      onChange={(data) => {
                        handleChangeForElement(data, w.id);
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
                        work[i].from
                          ? new Date(work[i].from).toISOString().split('T')[0]
                          : defaultDateStr
                      }
                      onChange={(data) => {
                        handleChangeForElement(data, w.id);
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
                        work[i].to
                          ? new Date(work[i].to).toISOString().split('T')[0]
                          : defaultDateStr
                      }
                      onChange={(data) => {
                        handleChangeForElement(data, w.id);
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
                      value={work[i].state}
                      onChange={(data) => {
                        handleChangeForElement(data, w.id);
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
                      value={work[i].city}
                      onChange={(data) => {
                        handleChangeForElement(data, w.id);
                      }}
                    />{' '}
                  </label>
                  <label>
                    Accomplishments:
                    <EntryList
                      items={work[i].accomplishments}
                      onAddItem={(newItem) => handleAddItem(newItem, w.id)}
                      onRemoveItem={(index) => handleRemoveItem(index, w.id)}
                      onEditItem={(index, updatedItem) =>
                        handleEditItem(index, updatedItem, w.id)
                      }
                    ></EntryList>
                  </label>
                  <button onClick={() => handleRemoveElement(w.id)}>
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
            const newWorkExp = createWorkExperience();
            setSelectedId(newWorkExp.id);
            handleAddElement(newWorkExp);
          }}
        >
          <span>+</span>
        </button>
      </div>
    </>
  );
}
