import { Fragment } from "react";

export default function CurriculumView({ data, gotoEdit }) {
    console.log("view data", data)
    return (<>
        <div className="curriculum">
            <h1>Curriculum Vitæ</h1>
            <h2>Personal information</h2>
            {data.personal.url && <img src={data.personal.url} alt="" />}
            <h3>Name: {data.personal.name + " " + data.personal.lastName}</h3>
            <h3>Email: {data.personal.email}</h3>
            <h3>Phone: {data.personal.phone}</h3>

            <hr />

            <h2>Educational Information</h2>
            {data.educational.map((item) => <div className="info-container" key={item.id}>
                <h3>School: {item.school}</h3>
                <h3>Degree: {item.degree}</h3>
                <h3>Period: {item.startDateStudy} – {item.endDateStudy}</h3>
            </div >)}

            <h2>Pratical Information</h2>
            {data.pratical.map((item) => <div className="info-container" key={item.id}>
                <h3>Company: {item.company}</h3>
                <h3>Position: {item.position}</h3>
                <h3>Responsibilities: {item.responsibilities}</h3>
                <h3>Period: {item.startDatePratical} – {item.endDatePratical}</h3>
            </div >)}


            <button onClick={gotoEdit}>Edit</button>
        </div>
    </>)

}