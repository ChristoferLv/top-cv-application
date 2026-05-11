export default function PersonalInformation({ data, handler: handlePersonalInfo }) {
    return <>
        <h1>Personal Information</h1>
        <div className="inputs">
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
                <input type="text" name="phone" id="prone" value={data.phone} onChange={handlePersonalInfo} />
            </label>
        </div>
    </>
}