import React, { useState, useMemo, memo } from "react";

// 1. A Memoized Child Component
// React.memo tells this component: "Only re-render if PROPS actually changed"
const StatCard = memo (({stats }) => {
    console.log("Child StatCard rendering...");
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h4>Report Summary</h4>
            <p>Toal Reveneu:     ${stats.total}</p>
            <p>Highest Sale:    ${stats.max}</p>
        </div>
    );
});


const Dashboard = () => {
    const [salesData, setSalesData] = useState([120, 450, 300, 900, 150]);
    const [isDark, setIsDark] = useState(false);

    // 2. Heavy data processing: + Referential equality
    // Using useMemo to ensure 'stats' OBJECT stays same in memory
    // unless 'salesData' array changes.
    const stats = useMemo( () => {
        console.log("Heavy Stats Calculating...");
        const total = salesData.reduce((acc, curr) => acc + curr, 0);
        const max = Math.max(...salesData); // spread operator used

        // returning a NEW object
        return {total, max};
    }, [salesData]);

    const addSale = () => {
        setSalesData([...salesData, Math.floor(Math.random() * 1000)]);
    };

    return (
        <div style={{ background: isDark ? "#222" : "#fff", color : isDark ? "#fff" : "#000", padding: "20px" }}>
            {/*Button: Add random sales to salesData using addSale function */}
            <button
                onClick={addSale}
            >
                Add a Random Sale (Changes Data)
            </button>

            {/* Light-Dark toggle */}
            <button
                onClick={() => setIsDark(!isDark)}
            >
                Toggle Theme (UI Only)
            </button>

            {/* 3. Passing the memoized object to memoized child */}
            <StatCard stats={stats} />

            <p style={{marginTop: "20px"}}>
                Check the console! <br/>
                - Toggling Theme: No "Calculating" log, No "Child Card" log. <br/>
                - Adding Sale: Both logs appear

            </p>

        </div>
    );
};

export default Dashboard;
