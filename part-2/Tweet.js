
const Tweet = (props) => {
    return (
        < ul >
            < p > <b>Username :</b> {props.username} </p >
            <p><b>Name :</b> {props.name} </p>
            <p><b>Date :</b> {props.date} </p>
            <p><b>Tweet :</b> {props.tweet} </p>
        </ul >
    )
}