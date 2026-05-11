import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
            <input type="text" name="" id="" />
          </label>
          <label>
            educational
            <input type="text" name="" id="" />
          </label>
          <label>
            Email
            <input type="text" name="" id="" />
          </label>
          <label>
            Phone
            <input type="text" name="" id="" />
          </label>
        </div>
      </section>

      <hr />

      <section>
        <h1>Educational Information</h1>
        <div className="inputs">
          <label>
            School Name
            <input type="text" name="" id="" />
          </label>
          <label>
            Title of study
            <input type="text" name="" id="" />
          </label>
          <label>
            Fate of study
            <input type="text" name="" id="" />
          </label>
        </div>
      </section>

      <hr />

      <section>
        <h1>Practical Experience</h1>
        <div className="inputs">
          <label>
            Company name
            <input type="text" name="" id="" />
          </label>
          <label>
            Position title
            <input type="text" name="" id="" />
          </label>
          <label>
            Main responsibilities of your jobs
            <input type="text" name="" id="" />
          </label>
          <label>
            Start Date
            <input type="text" name="" id="" />
          </label>
          <label>
            End Date
            <input type="text" name="" id="" />
          </label>
        </div>
      </section>
    </>
  )
}

export default App
