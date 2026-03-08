/* 
Tutorial Step Viewer (Guarded Navigation)

Goal:
Show steps one by one
Prevent going before first step
Prevent going past last step
Disable buttons accordingly
*/

import { useState } from "react";

export default function TutorialViewer() {

    // Dummy data of tutorial steps
    const steps = [
        "Install Node.js",
        "Create a React project",
        "Learn Component",
        "Learn State & Events",
        "Build your first app",
    ];

    const [index, setIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    
    let totalSteps = steps.length;

    // Navigation Gurads
    const hasPrev = index > 0; // if current index greater than 0 then we can get to a previous value
    const hasNext = index < steps.length - 1; // if current index less than steps length then we can get to a next value
    const isLastStep = index === totalSteps - 1;

    function handlePrevClick() {
        if(hasPrev) {
            setIndex(index - 1);
            setFinished(false); // reset congrats banner
        }
    }

    function handleNextClick() {
        if(hasNext) {
            setIndex(index + 1);
            setFinished(false); // reset congrats banner
        }
    }

    function handleFinish() {
        if(isLastStep) {
            setFinished(true);
        }
    }

    

    // UI Return
    return (
        <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
            <h2>RactJs Learning Steps</h2>
            <p>
                Step {index + 1} of {totalSteps}
            </p>

            {/* Show the step description */}
            <h3>{steps[index]}</h3>

            <div style={{ marginTop: "20px"  }}>

                <button 
                    onClick={handlePrevClick}
                    disabled={!hasPrev}
                >
                    Previous
                </button>

                <button
                    onClick={handleNextClick}
                    disabled={!hasNext}
                >
                    Next
                </button>

                {isLastStep && (
                    <button onClick={handleFinish}>
                        Mark as Finished
                    </button>
                )}

            </div>
            
            {/* Show conditional message below the UI */}
            {finished && (
                <h2 style={{
                    background: "green",
                    color: "white",
                    padding: "30px",
                    marginTop: "40px"
                }}
                
                >
                    Congratulations! You learned to make your first react app.
                </h2>
            )}

        </div>
    );

} // TutorialViewer() Ends


