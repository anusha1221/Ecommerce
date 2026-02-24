import React, { useState } from 'react';

export default function Accordian() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion-container">
            <style>{`
        .accordion-container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .accordion-item {
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .accordion-header {
          padding: 15px;
          background-color: #f0f0f0;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .accordion-content {
          padding: 15px;
          background-color: #fff;
        }
      `}</style>
            <h2>Accordion Example</h2>
            <div className="accordion-item">
                <div className="accordion-header" onClick={() => toggleAccordion(0)}>
                    <span>Section 1</span>
                    {/* <span>{activeIndex === 0 ? '-' : '+'}</span> */}
                </div>
                {activeIndex === 0 && (
                    <div className="accordion-content">
                        <p>This is the content of Section 1.</p>
                    </div>
                )}
            </div>
            <div className="accordion-item">
                <div className="accordion-header" onClick={() => toggleAccordion(1)}>
                    <span>Section 2</span>
                    {/* <span>{activeIndex === 1 ? '-' : '+'}</span> */}
                </div>
                {activeIndex === 1 && (
                    <div className="accordion-content">
                        <p>This is the content of Section 2.</p>
                    </div>
                )}
            </div>
            <div className="accordion-item">
                <div className="accordion-header" onClick={() => toggleAccordion(2)}>
                    <span>Section 3</span>
                    {/* <span>{activeIndex === 2 ? '-' : '+'}</span> */}
                </div>
                {activeIndex === 2 && (
                    <div className="accordion-content">
                        <p>This is the content of Section 3.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
