import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import PersonalInformation from './components/PersonalInfo'
import './styles/App.css'
import EducationalInformation from './components/EducationalInfo'
import PraticalInformation from './components/PraticalInfo'
import CurriculumView from './components/CVView'

function App() {
  const [personalInformation, setPersonalInformation] = useState({ id: 1, name: "", lastName: "", email: "", phone: "", picture: "", url: "" });
  const [educationalInformation, setEducationalInformation] = useState([{ id: 0, school: "", degree: "", startDateStudy: "", endDateStudy: "" }]);
  const [praticalInformation, setPraticalInformation] = useState([{ id: 0, company: "", position: "", responsibilities: "", startDatePratical: "", endDatePratical: "" }]);

  const [educationalCounter, setEducationalCounter] = useState(0);
  const [praticalCounter, setPraticalCounter] = useState(0);

  const [isEditing, setIsEditing] = useState(true);

  // console.log(personalInformation)
  console.log("educational arr", educationalInformation)
  console.log("counter", educationalCounter)
  // console.log(praticalInformation)

  function handleEditing() {
    if (isEditing) {
      const inputs = document.querySelectorAll("input");
      console.log(inputs)
      const allValid = Array.from(inputs).every((input) => input.reportValidity());
      if (allValid) {
        setIsEditing(false);
        window.scrollTo(0, 0);
      }
    } else {
      setIsEditing(true);
      window.scrollTo(0, 0);
    }
  }

  function handleAddMore(sectionName) {
    if (sectionName == "educational") {
      const newId = educationalCounter + 1;
      setEducationalInformation([...educationalInformation, { id: newId, school: "", degree: "", startDateStudy: "", endDateStudy: "" }]);
      setEducationalCounter(newId);
    }
    if (sectionName == "pratical") {
      const newId = praticalCounter + 1;
      setPraticalInformation([...praticalInformation, { id: newId, company: "", position: "", responsibilities: "", startDatePratical: "", endDatePratical: "" }])
      setPraticalCounter(newId);
    }
  }

  function handleRemove(id, sectionName) {
    if (sectionName == "educational") {
      setEducationalInformation([...educationalInformation.filter((item) => item.id != id)]);
    }
    if (sectionName == "pratical") {
      setPraticalInformation([...praticalInformation.filter((item) => item.id != id)])
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
    console.log("handle educational", id, whoChanged)
    setEducationalInformation(
      educationalInformation.map((item) => {
        if (item.id == id)
          return { ...item, [whoChanged.name]: whoChanged.value }
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
          return { ...item, [whoChanged.name]: whoChanged.value }
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

          {educationalInformation.map((item, index) => <Fragment key={"frag-" + item.id}><EducationalInformation key={item.id} data={item} handler={handleEducationalInfo} handleRemove={handleRemove} />{(index < educationalInformation.length - 1) && <hr />}</Fragment>)}

          <button onClick={() => handleAddMore("educational")}> + </button>
        </section>

        <hr />

        <section>
          <h1>Practical Experience</h1>

          {praticalInformation.map((item, index) => <Fragment key={"frag-" + item.id}><PraticalInformation key={item.id} data={item} handler={handlePraticalInfo} handleRemove={handleRemove} />{(index < praticalInformation.length - 1) && <hr />} </Fragment>)}

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
