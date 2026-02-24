import React from "react";
function CheckboxEvent() {
    const handleChange = (e) => {
        console.log("checked value is:", e.target.value);
    }
    return (
        <>
            <input type="checkbox" onChange={handleChange} value="checkbox1" />
            <label htmlFor="checkbox1">Checkbox 1</label>
            <input type="checkbox" onChange={handleChange} value="checkbox2" />
            <label htmlFor="checkbox2">Checkbox 2</label>
            <input type="checkbox" onChange={handleChange} value="checkbox3" />
            <label htmlFor="checkbox3">Checkbox 3</label>
            <input type="checkbox" onChange={handleChange} value="checkbox4" />
            <label htmlFor="checkbox4">Checkbox 4</label>
            <input type="checkbox" onChange={handleChange} value="checkbox5" />
            <label htmlFor="checkbox5">Checkbox 5</label>

        </>
    )
}
export default CheckboxEvent;