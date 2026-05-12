export default function CurriculumView({ data, gotoEdit }) {
    return (<>
        <div className="curriculum">
            <h1>Curriculum Vitæ</h1>
            <h2>Personal information</h2>
            <h3>Name: {data.name + " " + data.lastName}</h3>
            <h3>Email: {data.email}</h3>
            <h3>Phone: {data.phone}</h3>

            <hr />

            <h2>Educational Information</h2>
            <h3>School: {data.school}</h3>
            <h3>Degree: {data.degree}</h3>
            <h3>Period: {data.startDateStudy} – {data.endDateStudy}</h3>

            <h2>Pratical Information</h2>
            <h3>Company: {data.company}</h3>
            <h3>Position: {data.position}</h3>
            <h3>Responsibilities: {data.responsibilities}</h3>
            <h3>Period: {data.startDatePratical} – {data.endDatePratical}</h3>

            <button onClick={gotoEdit}>Edit</button>
        </div>
    </>)

}