import React, {useState} from 'react';

const AddUserForm = (props) => {

    const initUser = {id: null, userName: "", profile: ""};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {userName, value} = e.target;
        setUser({...user, [userName]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.userName && user.profile) {
           handleChange(e, props.addUser(user));
        }
    }


    return (
        <form>
            <label>UserName</label>
            <input className="u-full-width" type="text" value={user.userName} name="userName" onChange={handleChange} />
            <label>Profile</label>
            <input className="u-full-width" type="text" value={user.profile} name="profile" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
        </form>
    )
}

export default AddUserForm;