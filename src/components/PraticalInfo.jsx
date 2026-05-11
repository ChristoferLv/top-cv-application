export default function PraticalInformation({ data, handler: handlePraticalInfo }) {
    return <>
        <h1>Practical Experience</h1>
        <div className="inputs">
            <label>
                Company name
                <input type="text" name="company" id="" value={data.company} onChange={handlePraticalInfo} />
            </label>
            <label>
                Position title
                <input type="text" name="position" id="" value={data.position} onChange={handlePraticalInfo} />
            </label>
            <label>
                Main responsibilities of your jobs
                <input type="text" name="responsibilities" id="" value={data.responsibilities} onChange={handlePraticalInfo} />
            </label>
            <label>
                Start Date
                <input type="text" name="startDatePratical" id="" value={data.startDatePratical} onChange={handlePraticalInfo} />
            </label>
            <label>
                End Date
                <input type="text" name="endDatePratical" id="" value={data.endDatePratical} onChange={handlePraticalInfo} />
            </label>
        </div>
    </>
}