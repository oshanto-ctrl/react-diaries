import React, { useCallback, useState, memo } from "react";

/*
    A big profile page (Parent).
    Inside, a BigForm (Child) and
    a simple Counter (Just a task.)

    If useCallback isn't used,
    every time clicking the Counter,
    the "Submit" function recreated.
    The BigForm sees a "new" function,
    thinks it's props changed, and 
    re-renders--even though the form had nothing
    to do with the counter.
*/

// 1. A heavy child component wrapped in React.memo
const ExpensiveForm = memo(({ onSubmit }) => {
    console.log("Rendering Expensive Form...(this is slow!)");
    return (
        <div style={{ border: '1px solid red', padding: "10px", margin: "10px" }}>
            <p>I am very heavy form with 50 inputs</p>
            <button
                onClick={onSubmit}
            >Submit Form</button>
        </div>
    );
});

const ProfilePage = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // 2. The Problem: This function is "new" on every render
    // 3. The Fix: Wrap it in useCallback
    const handleFormSubmit = useCallback( () => {
        console.log("Form Submitted with text: ", text);
    }, [text]); // Only change the function "recipe" if "text" changes.

    return (
        <div style={{ padding: "20px" }}>
            <h1>User Profile</h1>

        {/* Changing this state should not re-render the form */}
        <button
            onClick={() => setCount(count + 1)}
        >
            Re-render Parent (count: {count})
        </button>

        <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Type something..." 
        />

        {/* 4. Pass the memoized function from here */}
        <ExpensiveForm onSubmit={handleFormSubmit} />

        </div>
    );
};

export default ProfilePage;
