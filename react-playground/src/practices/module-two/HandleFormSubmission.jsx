/* Handling form submission in react */
export default function InputName(){

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents form's default behavior
        console.log(e.target.firstName.value);
    }

    // UI
    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <input type="text" name="firstName" />
                <button type="submit">Submit</button>
            </form>
        </>
    );


} // InputName() ENDS

