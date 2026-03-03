export default function FunctionalComponent() {

    // Composable function example
    const ParentClass = () => {
        return (
            <div style={{backgroundColor:'magenta'}}>
                <h1>Parent, Here.</h1>
                <ChildClass /> {/* Called Child Component Here. */}
            </div>
        );
    }

    const ChildClass = () => {
        return (
            <div style={{backgroundColor: 'firebrick'}}>
                <h3>Hello I'm Child.</h3>
            </div>
        );
    }

    // Return the UI component
    return ParentClass();
} // FunctionalComponent() Ends.