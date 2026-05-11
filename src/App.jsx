import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import PersonalInformation from './components/PersonalInfo'
import './App.css'
import EducationalInformation from './components/EducationalInfo'
import PraticalInformation from './components/PraticalInfo'

function App() {
  const [personalInformation, setPersonalInformation] = useState({ name: "", lastName: "", email: "", phone: "" });
  const [educationalInformation, setEducationalInformation] = useState({ school: "", degree: "", startDateStudy: "", endDateStudy: "" })
  const [praticalInformation, setPraticalInformation] = useState({ company: "", position: "", responsibilities: "", startDatePratical: "", endDatePratical: "" })
  console.log(personalInformation)
  console.log(educationalInformation)
  console.log(praticalInformation)

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} event 
   */
  function handlePersonalInfo(event) {
    const whoChanged = event.target;
    setPersonalInformation({ ...personalInformation, [whoChanged.name]: whoChanged.value });
  }

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} event 
   */
  function handleEducationalInfo(event) {
    const whoChanged = event.target;
    setEducationalInformation({ ...educationalInformation, [whoChanged.name]: whoChanged.value });
  }

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} event 
   */
  function handlePraticalInfo(event) {
    const whoChanged = event.target;
    setPraticalInformation({ ...praticalInformation, [whoChanged.name]: whoChanged.value });
  }

  return (
    <>
      <header>
        <p>
          -⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎻⎺⎺⎻- CV GENERATOR -⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎻⎺⎺⎻-
        </p>
      </header>
      <section>
        <PersonalInformation data={personalInformation} handler={handlePersonalInfo} />
      </section>

      <hr />

      <section>
        <EducationalInformation data={educationalInformation} handler={handleEducationalInfo} />
      </section>

      <hr />

      <section>
        <PraticalInformation data={praticalInformation} handler={handlePraticalInfo} />
      </section>
    </>
  )
}

export default App
