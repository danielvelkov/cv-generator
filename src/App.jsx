import { useState } from 'react';
import { johnDoe } from './data/cvData';
import './App.css';
import Card from './components/card';
import GeneralInfoSection from './components/CVsections/generalInfoSection';
import GeneralInfoBuilderSection from './components/builderSections/generalInfoBuilderSection';
import Accordion from './components/accordion';
import EducationSection from './components/CVsections/educationSection';
import EducationBuilderSection from './components/builderSections/educationBuilderSection';
import WorkSection from './components/CVsections/workSection';
import WorkInfoBuilder from './components/builderSections/workInfoBuilder';

const InputSectionTypes = {
  GeneralInfo: 'GeneralInfo',
  Education: 'Education',
  Work: 'Work',
};

function App() {
  const [cvData, setCvData] = useState({
    generalInfo: { ...johnDoe.generalInfo },
    education: [...johnDoe.education],
    work: [...johnDoe.work],
  });

  const [activeSectionId, setActiveSectionId] = useState(undefined);

  const generateDefaultCV = () => {
    setCvData({
      generalInfo: johnDoe.generalInfo,
      education: johnDoe.education,
      work: johnDoe.work,
    });
  };

  const handleSelect = (id) => {
    setActiveSectionId((prevId) => (prevId === id ? undefined : id));
  };

  const handleChange = (section, data) => {
    setCvData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [data.target.name]: data.target.value },
    }));
  };

  const handleChangeForElement = (section, id, data) => {
    const copy = cvData[section].map((c) => {
      if (id === c.id) return { ...c, [data.target.name]: data.target.value };
      else return c;
    });
    setCvData((prev) => ({
      ...prev,
      [section]: copy,
    }));
  };

  const handleAddElement = (section, element) => {
    setCvData((prev) => ({
      ...prev,
      [section]: [...prev[section], element],
    }));
  };

  const handleRemoveElement = (section, id) => {
    setCvData((prev) => ({
      ...prev,
      [section]: prev[section].filter((e) => e.id !== id),
    }));
  };

  const handleSubmit = (section) => {
    console.log(cvData[section]);
  };

  const handleRemove = (section) => {
    const clone = { ...cvData[section] };
    Object.keys(clone).forEach((key) => {
      clone[key] = '';
    });
    setCvData((prev) => ({
      ...prev,
      [section]: clone,
    }));
  };

  return (
    <>
      <aside>
        <Card title="CV Generator">
          <p>
            Generate your CV. <br></br> One section at a time.
          </p>
          <button onClick={generateDefaultCV}>Generate example CV</button>
        </Card>
        <Card>
          <Accordion
            title="General Info"
            handleSelect={() => handleSelect(InputSectionTypes.GeneralInfo)}
            isExpanded={activeSectionId === InputSectionTypes.GeneralInfo}
          >
            <GeneralInfoBuilderSection
              generalInfo={cvData.generalInfo}
              handleChange={(data) => handleChange('generalInfo', data)}
              handleSubmit={(e) => {
                e.preventDefault();
                handleSubmit('generalInfo');
              }}
              handleRemove={() => handleRemove('generalInfo')}
            />
          </Accordion>
        </Card>
        <Card>
          <Accordion
            title="Education"
            handleSelect={() => handleSelect(InputSectionTypes.Education)}
            isExpanded={activeSectionId === InputSectionTypes.Education}
          >
            <EducationBuilderSection
              education={cvData.education}
              handleChangeForElement={(data, id) =>
                handleChangeForElement('education', id, data)
              }
              handleAddElement={(element) =>
                handleAddElement('education', element)
              }
              handleRemoveElement={(id) => handleRemoveElement('education', id)}
            />
          </Accordion>
        </Card>
        <Card>
          <Accordion
            title="Work Experience"
            handleSelect={() => handleSelect(InputSectionTypes.Work)}
            isExpanded={activeSectionId === InputSectionTypes.Work}
          >
            <WorkInfoBuilder
              work={cvData.work}
              handleChangeForElement={(data, id) =>
                handleChangeForElement('work', id, data)
              }
              handleAddElement={(element) => handleAddElement('work', element)}
              handleRemoveElement={(id) => handleRemoveElement('work', id)}
            />
          </Accordion>
        </Card>
      </aside>
      <main>
        <GeneralInfoSection {...cvData.generalInfo} />
        <div className="work-and-education">
          <WorkSection work={cvData.work} />
          <EducationSection education={cvData.education} />
        </div>
      </main>
    </>
  );
}

export default App;
