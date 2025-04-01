
function Student(props) {
    return(
        <div id="namee">
            <h1>Name:{props.name}</h1>
            <h2>Age:{props.age}</h2>
            <h3>Marks:{props.marks}</h3>
        </div>
    );
}

export default Student