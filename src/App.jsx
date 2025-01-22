import { useState } from 'react';
import { johnDoe } from './data/cvData';
import './App.css';
import Card from './components/card';
import GeneralInfoSection from './components/CVsections/generalInfoSection';
import GeneralInfoBuilderSection from './components/builderSections/generalInfoBuilderSection';
import Accordion from './components/accordion';
import EducationSection from './components/CVsections/educationSection';

const InputSectionTypes = {
  GeneralInfo: 'GeneralInfo',
  Education: 'Education',
  Work: 'Work',
};

function App() {
  const [cvData, setCvData] = useState({
    generalInfo: { ...johnDoe.generalInfo },
    education: [...johnDoe.education],
    work: [],
  });

  const [activeSectionId, setActiveSectionId] = useState(undefined);

  const generateDefaultCV = () => {
    setCvData((prev) => ({
      ...prev,
      generalInfo: johnDoe.generalInfo,
      education: johnDoe.education,
    }));
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
        <Accordion
          title="General Info"
          handleSelect={() => handleSelect(InputSectionTypes.GeneralInfo)}
          isExpanded={activeSectionId === InputSectionTypes.GeneralInfo}
        >
          <GeneralInfoBuilderSection
            generalInfo={cvData.generalInfo}
            handleChange={(data) => handleChange('generalInfo', data)}
            handleSubmit={() => handleSubmit('generalInfo')}
            handleRemove={() => handleRemove('generalInfo')}
          />
        </Accordion>
      </aside>
      <main>
        <GeneralInfoSection {...cvData.generalInfo} />
        <EducationSection education={cvData.education}></EducationSection>
      </main>
    </>
  );
}

export default App;
