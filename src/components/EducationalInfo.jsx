export default function EducationalInformation({ data, handler: handleEducationalInfo, handleRemove }) {
    return <>
        <div className="inputs" id={data.id}>
            <label>
                School Name
                <input type="text" name="school" id="" value={data.school} onChange={handleEducationalInfo} required />
            </label>
            <label>
                Degree
                <input type="text" name="degree" id="" value={data.degree} onChange={handleEducationalInfo} required />
            </label>
            <label>
                Start date of study
                <input type="date" name="startDateStudy" id="" value={data.startDateStudy} onChange={handleEducationalInfo} required/>
            </label>
            <label>
                End date of study
                <input type="date" name="endDateStudy" id="" value={data.endDateStudy} onChange={handleEducationalInfo} />
            </label>
            <button onClick={() => handleRemove(data.id, "educational")}>Remove</button>
        </div>
    </>
}