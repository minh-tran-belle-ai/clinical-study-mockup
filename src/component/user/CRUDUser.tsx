import React from 'react';
import { useState } from 'react';
import { SingleContainer, Single, UserComponent } from "./User.styles";
import { useSelector, useDispatch } from 'react-redux';
import {AllState} from "../../redux/type.d"
import { ADD_USER, REMOVE_USER } from '../../redux/actionTypes';
function User() {
    const userRedux = useSelector((initialState: AllState)=>initialState.users)
    const dispatch = useDispatch();
    const [userNameNew, addUserName] = useState("")
    const [userRoleNew, addUserRole] = useState("")
    const [userEmailNew, addUserEmail] = useState("")
    const [userOrganizationNew, addUserOrganization] = useState("")
    const [userPhoneNew, addUserPhone] = useState("")
    const setName = (e: any) => {
        addUserName(e.target.value)
    }
    const setRole = (e: any) => {
        addUserRole(e.target.value)
    }
    const setEmail = (e: any) => {
        addUserEmail(e.target.value)
    }
    const setOrganization = (e: any) => {
        addUserOrganization(e.target.value)
    }
    const setPhone = (e: any) => {
        addUserPhone(e.target.value)
    }
    const AddToUser = () => {
        let newUserSingle = { id: -1, name: "", role: "", email: "", organization: "", phone: "", study: [] };
        console.log(userNameNew)
        if (userNameNew !== null && userNameNew !== "") {
            newUserSingle.name = userNameNew;
        }
        if (userRoleNew !== null && userRoleNew !== "") {
            newUserSingle.role = userRoleNew;
        }
        if (userEmailNew !== null && userEmailNew !== "") {
            newUserSingle.email = userEmailNew;
        }
        if (userOrganizationNew !== null && userOrganizationNew !== "") {
            newUserSingle.organization = userOrganizationNew;
        }
        if (userPhoneNew !== null && userPhoneNew !== "") {
            newUserSingle.phone = userPhoneNew;
        }
        dispatch({ type: ADD_USER, user: newUserSingle}) 
        addUserName("");
        addUserRole("");
        addUserEmail("");
        addUserOrganization("");
        addUserPhone("");
    }
    return (
        <UserComponent>
            <h1>Add User</h1>
            <div className="form-flex">
                <div>
                    <label>user name: </label>
                    <input onChange={setName} value={userNameNew} />
                </div>
                <div>
                    <label>user role: </label>
                    <input onChange={setRole} value={userRoleNew} />
                </div>
                <div>
                    <label>user email: </label>
                    <input onChange={setEmail} value={userEmailNew} />
                </div>
                <div>
                    <label>user organization: </label>
                    <input onChange={setOrganization} value={userOrganizationNew} />
                </div>
                <div>
                    <label>user phone: </label>
                    <input onChange={setPhone} value={userPhoneNew} />
                </div>
                <button onClick={() => AddToUser()}>Add</button>
            </div>
            <SingleContainer>
                <div className="header">
                    <p>Name</p>
                    <p>Basic Info</p>
                    <p>Organization</p>
                    <p>Current Study</p>
                    <p>Message</p>
                    <p>Delete</p>
                </div>
                {userRedux.map((userSingle, key) => (
                    <Single>
                        <div className="header">
                            <h3>{userSingle.name}</h3>
                            <ul>
                                <li>{userSingle.email}</li>
                                <li>{userSingle.phone}</li>
                                <li>{userSingle.role}</li>
                            </ul>

                            <p>{userSingle.organization}</p>
                            <ul>
                                {userSingle.study.map((singleStudy, keys) =>
                                    singleStudy.study !== "" ?
                                        (<li key={keys}>{singleStudy.study} - {singleStudy.progress}%</li>) : (<div />)

                                )}
                            </ul>
                            <button onClick={() => { }}>Remind</button>
                            <button onClick={() => dispatch({ type: REMOVE_USER, user:userSingle}) }>Delete</button>
                        </div>
                        
                    </Single>
                ))}
            </SingleContainer>

        </UserComponent>
    );
}

export default User;