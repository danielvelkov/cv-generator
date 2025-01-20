import { useState } from 'react';
import { johnDoe } from './data/cvData';
import './App.css';
import Card from './components/card';
import GeneralInfoSection from './components/CVsections/generalInfoSection';

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

  return (
    <>
      <aside>
        <Card title={'CV Generator'}>
          <p>Generate your CV, by adding sections.</p>
          <button onClick={GenerateDefaultCV}>Generate example CV</button>
        </Card>
      </aside>
      <main>
        <GeneralInfoSection {...generalInfo}></GeneralInfoSection>
      </main>
    </>
  );
}

export default App;
