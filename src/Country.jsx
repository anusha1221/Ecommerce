import React, { useState } from 'react';
//StatesDropdown based on country
function Country() {
    const Countries = ['USA', 'India', 'Australia'];
    const Districts = {
        USA: ['California', 'Texas', 'Florida'],
        India: ['Maharashtra', 'Karnataka', 'Tamil Nadu'],
        Australia: ['New South Wales', 'Victoria', 'Queensland']
    };
    const [selectedCountry, setSelectedCountry] = useState(Countries[0]);
    const [selectedDistrict, setSelectedDistrict] = useState(Districts[selectedCountry][0]);
    //for country change
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        console.log(e.target.value);
        setSelectedDistrict(Districts[e.target.value][0]);
    }
    //for distrtict change
    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
        console.log(e.target.value);
        setSelectedDistrict(e.target.value);
    }
    return (
        <>
            <div>
                <label htmlFor="country">Select Country:</label>
                <select id="country" value={selectedCountry} onChange={handleCountryChange}>
                    {Countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
                <label style={{marginLeft: "10px"}} htmlFor="district">Select District:</label>
                <select id="district" value={selectedDistrict} onChange={handleDistrictChange}>
                    {Districts[selectedCountry].map(district => (
                        <option key={district} value={district}>{district}</option>
                    ))}
                </select>
                <h4>Selected: {selectedCountry} - {selectedDistrict}</h4>
            </div>
        </>
    )
}
export default Country;