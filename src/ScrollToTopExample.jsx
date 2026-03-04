import { useRef } from "react";

function ScrollToSection() {

  // 1️⃣ Create refs for each section
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);

  // 2️⃣ Scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div>

      {/* Navigation Headings */}
      <div style={{ position: "fixed", top: 0, background: "#fff", width: "100%" }}>
        <h2 
          style={{ cursor: "pointer" }} 
          onClick={() => scrollToSection(sectionOneRef)}
        >
          Go to Section 1
        </h2>

        <h2 
          style={{ cursor: "pointer" }} 
          onClick={() => scrollToSection(sectionTwoRef)}
        >
          Go to Section 2
        </h2>
      </div>

      {/* Add spacing because nav is fixed */}
      <div style={{ height: "100px" }}></div>

      {/* Section 1 */}
      <div 
        ref={sectionOneRef} 
        style={{ height: "600px", background: "lightblue" }}
      >
        <h1>Section 1</h1>
      </div>

      {/* Section 2 */}
      <div 
        ref={sectionTwoRef} 
        style={{ height: "600px", background: "lightcoral" }}
      >
        <h1>Section 2</h1>
      </div>

    </div>
  );
}

export default ScrollToSection;