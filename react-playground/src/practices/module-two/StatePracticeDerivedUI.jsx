/*
React component simulating an onboarding process.

We’ll use all the best practices we discussed:
- Guard logic (hasPrev, hasNext)
- Derived UI state (no unnecessary flags)
- Conditional rendering
- Clean, interview-ready structure
- useState with functional updates
*/
import { useState } from "react";

export default function Onboarding() {
    // Steps for onboarding
    const steps = [
        "Welcome to our App!",
        "Set up your profile",
        "Connect with friends",
        "Learn app features",
        "All set! You're ready to go"
    ];

    // Current step index
    const [stepIndex, setStepIndex] = useState(0);
    // Track if user completed last step
    const [completed, setCompleted] = useState(false);

    // Total steps length in process
    const totalSteps = steps.length;

    const isFirstStep = stepIndex === 0;
    const isLastStep = stepIndex === totalSteps - 1;

    // Guards (hasPrev, hasNext)
    const hasPrev = !isFirstStep;
    const hasNext = !isLastStep;

    // Handler functions
    const handleNext = () => {
        if(hasNext) {
            setStepIndex(i => i + 1);
            setCompleted(false); // reset completion if moving forward
        }
    };

    const handlePrev = () => {
        if(hasPrev) {
            setStepIndex(i => i - 1);
            setCompleted(false) // reset completion if moving backward
        }
    };

    const handleFinish = () => {
        if(isLastStep) {
            setCompleted(true); 
        }
    };

    return (
        <div style={{
            maxWidth: "400px", margin: "50px auto",
            textAlign: "center", fontFamily: "sans-serif"
        }}  
        >
            <h2>Onboarding Process</h2>

            <p>Step <u> {stepIndex + 1} of {totalSteps} </u></p>
            
            {/* Main steps */}
            <div style={{
                margin: "20px 0",
                minHeight: "50px"
            }}>
                <h3>{steps[stepIndex]}</h3>
            </div>

            {/* Button Handlers */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "20px"
            }}>
                <button 
                    onClick={handlePrev}
                    disabled={!hasPrev}
                >
                    Previous
                </button>

                <button
                    onClick={handleNext}
                    disabled={!hasNext}
                >
                    Next
                </button>

                {isLastStep && !completed && (
                    <button onClick={handleFinish}>
                        Finish & Save
                    </button>
                )}
            </div>
            
            {/* Congratulatorry banner, only appear if last step and finished */}
            {isLastStep && completed && (
                <h2 style={{
                    background: "green",
                    color: "white",
                    padding: "15px",
                    gap: "2px",
                    borderRadius: "5px"
                }}>
                    Congrats! You completed onboarding. See you on monday!
                </h2>
            )}
        </div>
    );
    

    

} // Onboarding() ENDS
