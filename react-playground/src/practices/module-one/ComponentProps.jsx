// Props practice (Basic)
export default function ComponentProps(){
    // Parent Component
    const ParentComponent = () => {
        return (
            <div>
                <p>I am parent.</p>
                <p>Below is my Son, </p>
                <ChildComponent name="Henry" age={25} />
            </div>
        );
    };

    // Child Component
    const ChildComponent = ({name, age}) => {
        return (
            <div>
                <p> {name}</p>
                <p>He's {age} years old.</p>
            </div>
        )
    };

    // return the UI Component
    return ParentComponent();
} // ComponentProps Ends