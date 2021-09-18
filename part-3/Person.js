
const Person = (props) => {

    let hobby = props.hobbies.map(h => <li>{h}</li>);

    let msg, name;
    msg = (props.age < 18 ? "You must be 18" : "Please Go! Vote");

    name = (props.name.length > 8 ? props.name.slice(0, 7) : props.name);
    return (
        <div>
            <p>Learn Some Information About This Person</p>
            <ul>
                <li> Name : {name} </li>
                <li>age  :{props.age}</li>
                <ul><b> hobbies</b>
                    <li> {hobby}</li>
                </ul>
            </ul>
            <h3>{msg}</h3>

        </div>
    )
}