function UserInfo(props){
    return (
        <div className="personalinfo">
            <h2>Personal Info</h2>
            <h4>
                name : {props.name}
            </h4>
            <h4>
                email : {props.email}
            </h4>
            <h4>
                Phone Number : {props.number}
            </h4>
        </div>
    )
}

export  default UserInfo;