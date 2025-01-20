import { useState } from 'react';
import { johnDoe } from './data/cvData';
import './App.css';
import Card from './components/card';
import GeneralInfoSection from './components/CVsections/generalInfoSection';
import GeneralInfoBuilderSection from './components/builderSections/generalInfoBuilderSection';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    summary: '',
    email: '',
    phone: '',
    githubURL: '',
    imageURL: '',
    personalPageURL: '',
    linkedInURL: '',
  });

  function GenerateDefaultCV() {
    setGeneralInfo({ ...johnDoe.generalInfo });
  }

  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleGeneralInfoSubmit = (e) => {
    e.preventDefault();
    console.log(generalInfo);
  };

  return (
    <>
      <aside>
        <Card title={'CV Generator'}>
          <p>Generate your CV, by adding sections.</p>
          <button onClick={GenerateDefaultCV}>Generate example CV</button>
        </Card>
        <GeneralInfoBuilderSection
          generalInfo={generalInfo}
          handleChange={handleGeneralInfoChange}
          handleSubmit={handleGeneralInfoSubmit}
        ></GeneralInfoBuilderSection>
      </aside>
      <main>
        <GeneralInfoSection {...generalInfo}></GeneralInfoSection>
      </main>
    </>
  );
}

export default App;
