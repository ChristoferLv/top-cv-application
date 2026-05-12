import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import PersonalInformation from './components/PersonalInfo'
import './App.css'
import EducationalInformation from './components/EducationalInfo'
import PraticalInformation from './components/PraticalInfo'
import CurriculumView from './components/CVView'

function App() {
  const [personalInformation, setPersonalInformation] = useState({ id: 1, name: "", lastName: "", email: "", phone: "", picture: "", url:"" });
  const [educationalInformation, setEducationalInformation] = useState([{ id: 0, school: "", degree: "", startDateStudy: "", endDateStudy: "" }]);
  const [praticalInformation, setPraticalInformation] = useState([{ id: 0, company: "", position: "", responsibilities: "", startDatePratical: "", endDatePratical: "" }]);

  const [isEditing, setIsEditing] = useState(true);

  console.log(personalInformation)
  console.log("educational arr", educationalInformation)
  console.log(praticalInformation)
  console.log({ ...personalInformation, ...educationalInformation, ...praticalInformation })
  // console.log(personalInformation.picture.split("\\").at(-1))

  function handleEditing() {
    setIsEditing(!isEditing);
    window.scrollTo(0, 0);
  }

  function handleAddMore(sectionName) {
    if (sectionName == "educational") {
      setEducationalInformation([...educationalInformation, { id: educationalInformation.length, school: "", degree: "", startDateStudy: "", endDateStudy: "" }])
    }
    if (sectionName == "pratical") {
      setPraticalInformation([...praticalInformation, { id: praticalInformation.length, company: "", position: "", responsibilities: "", startDatePratical: "", endDatePratical: "" }])
    }
  }

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} event 
   */
  function handlePersonalInfo(event) {
    if (event.target.name == "picture") {
      const url = URL.createObjectURL(event.target.files[0]);
      setPersonalInformation({ ...personalInformation, "picture": event.target.value.split("\\").at(-1), "url": url });
      return;
    }
    const whoChanged = event.target;
    setPersonalInformation({ ...personalInformation, [whoChanged.name]: whoChanged.value });
  }

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} event 
   */
  function handleEducationalInfo(event) {
    const whoChanged = event.target;
    const id = event.target.parentElement.parentElement.id;
    setEducationalInformation(
      educationalInformation.map((item) => {
        if (item.id == id)
          return { ...(educationalInformation[id]), [whoChanged.name]: whoChanged.value }
        return item
      })
    );
  }

  /**
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} event 
   */
  function handlePraticalInfo(event) {
    const whoChanged = event.target;
    const id = event.target.parentElement.parentElement.id;
    setPraticalInformation(
      praticalInformation.map((item) => {
        if (item.id == id)
          return { ...(praticalInformation[id]), [whoChanged.name]: whoChanged.value }
        return item
      })
    );
  }

  return (
    <>
      <header>
        <p>
          -⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎻⎺⎺⎻- CV GENERATOR -⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎻⎺⎺⎻-
        </p>
      </header>
      {isEditing ? (<>
        <section>
          <PersonalInformation data={personalInformation} handler={handlePersonalInfo} />
        </section>

        <hr />

        <section>
          <h1>Educational Information</h1>

          {educationalInformation.map((item, index) => <><EducationalInformation key={item.id} data={item} handler={handleEducationalInfo} />{(index < educationalInformation.length - 1) && <hr />}</>)}

          <button onClick={() => handleAddMore("educational")}> + </button>
        </section>

        <hr />

        <section>
          <h1>Practical Experience</h1>

          {praticalInformation.map((item, index) => <><PraticalInformation key={item.id} data={item} handler={handlePraticalInfo} />{(index < praticalInformation.length - 1) && <hr />} </>)}

          <button onClick={() => handleAddMore("pratical")}> + </button>
        </section>

        <button onClick={handleEditing}>Finish</button></>) :
        (<><CurriculumView data={
          { "personal": personalInformation, "educational": educationalInformation, "pratical": praticalInformation }
        } gotoEdit={handleEditing} /></>)}



    </>
  )
}

export default App
