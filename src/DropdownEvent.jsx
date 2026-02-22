import React from 'react';
function DropdownEvent() {
    const handleChange = (e) => {
        console.log("Selected value:", e.target.value);
    }
    return (
        <>
            <div>
                <select onChange={handleChange}>
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>

        </>
    )
}
export default DropdownEvent;