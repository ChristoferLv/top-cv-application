import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

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
        <h1>Personal Information</h1>
        <div className="inputs">
          <label>
            Name
            <input type="text" name="name" id="name" onChange={handlePersonalInfo} />
          </label>
          <label>
            Last name
            <input type="text" name="lastName" id="lastName" onChange={handlePersonalInfo} />
          </label>
          <label>
            Email
            <input type="text" name="email" id="email" onChange={handlePersonalInfo} />
          </label>
          <label>
            Phone
            <input type="text" name="phone" id="prone" onChange={handlePersonalInfo} />
          </label>
        </div>
      </section>

      <hr />

      <section>
        <h1>Educational Information</h1>
        <div className="inputs">
          <label>
            School Name
            <input type="text" name="school" id="" onChange={handleEducationalInfo} />
          </label>
          <label>
            Degree
            <input type="text" name="degree" id="" onChange={handleEducationalInfo} />
          </label>
          <label>
            Start date of study
            <input type="text" name="startDateStudy" id="" onChange={handleEducationalInfo} />
          </label>
          <label>
            End date of study
            <input type="text" name="endDateStudy" id="" onChange={handleEducationalInfo} />
          </label>
        </div>
      </section>

      <hr />

      <section>
        <h1>Practical Experience</h1>
        <div className="inputs">
          <label>
            Company name
            <input type="text" name="company" id="" onChange={handlePraticalInfo}/>
          </label>
          <label>
            Position title
            <input type="text" name="position" id="" onChange={handlePraticalInfo}/>
          </label>
          <label>
            Main responsibilities of your jobs
            <input type="text" name="responsibilities" id="" onChange={handlePraticalInfo}/>
          </label>
          <label>
            Start Date
            <input type="text" name="startDatePratical" id="" onChange={handlePraticalInfo}/>
          </label>
          <label>
            End Date
            <input type="text" name="endDatePratical" id="" onChange={handlePraticalInfo}/>
          </label>
        </div>
      </section>
    </>
  )
}

export default App
