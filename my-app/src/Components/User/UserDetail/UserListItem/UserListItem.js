import React from "react";

const UserListItem = (props) =>{

    //const [name, setName] = useState(props.Name);
    //console.log(`${name} from UserListItem`);
    return(
        <div>
            <p>{props.name} ({props.age})</p>
        </div>
    );
}

export default UserListItem;