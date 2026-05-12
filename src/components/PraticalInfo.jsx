export default function PraticalInformation({ data, handler: handlePraticalInfo, handleRemove }) {
    return <>
        <div className="inputs" id={data.id}>
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
            <button onClick={()=>handleRemove(data.id, "pratical")}>Remove</button>
        </div>
    </>
}