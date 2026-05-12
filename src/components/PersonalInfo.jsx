export default function PersonalInformation({ data, handler: handlePersonalInfo }) {

    function handleFileClick() {
        document.querySelector("#fileSelector").click();
    }

    return <>
        <h1>Personal Information</h1>
        <div className="inputs">
            <label>
                <img src={data.url || "../public/Portrait_Placeholder.png"} alt="" />
                <div className="picture-space">
                    <input type="file" name="picture" onChange={handlePersonalInfo} id="fileSelector" />
                    <button className="file" onClick={handleFileClick}>Select File</button>
                    <p>Selected file: {data.picture}</p>
                </div>
            </label>
            <label>
                Name
                <input type="text" name="name" id="name" value={data.name} onChange={handlePersonalInfo} />
            </label>
            <label>
                Last name
                <input type="text" name="lastName" id="lastName" value={data.lastName} onChange={handlePersonalInfo} />
            </label>
            <label>
                Email
                <input type="text" name="email" id="email" value={data.email} onChange={handlePersonalInfo} />
            </label>
            <label>
                Phone
                <input type="text" name="phone" id="phone" value={data.phone} onChange={handlePersonalInfo} />
            </label>
        </div>
    </>
}