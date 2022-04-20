function Skills(props){
    return (
        <div className="skills">
            <h2>Skills</h2>
            <h4>
            <ul>
                {props.skills.map(skill =>
                    (
                       <li>{skill}</li>
                    )
                 )}
            </ul>
            </h4>
        </div>
    )
}




export default Skills;