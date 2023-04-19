import React, {useState, useEffect} from 'react';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    

    const handleChange = e => {
        const {userName, value} = e.target;
        setUser({...user, [userName]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.userName && user.profile) props.updateUser(user);
    }

    


    return (
        <form>
            <label>UserName</label>
            <input className="u-full-width" type="text" value={user.userName} name="userName" onChange={handleChange} />
            <label>Profile</label>
            <input className="u-full-width" type="text" value={user.profile} name="profile" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;