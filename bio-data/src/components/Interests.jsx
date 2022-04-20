function Interests(props) {
    return (
        <div className="interests">
            <h2>Interests</h2>
            <h4>
                <ul>
                    {props.interests.map(interest =>
                    (
                        <li>{interest}</li>
                    )
                    )}
                </ul>
            </h4>
        </div>
    )
}



export default Interests;