import React, { useRef } from "react";

function FileUpload() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();   // triggers hidden input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
  };

  return (
    <div>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Custom button */}
      <button onClick={handleButtonClick}>
       Hello Welcome!!
      </button>
    </div>
  );
}

export default FileUpload;