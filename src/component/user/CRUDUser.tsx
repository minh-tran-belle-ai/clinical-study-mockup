import React from 'react';
import { useState } from 'react';
import * as userList from "./UserList.json";
import { SingleContainer, Single, UserComponent } from "./User.styles";
interface study {
    study: string
    progress: number
}
interface user {
    id: number
    name: string
    role: string
    email: string
    organization: string
    phone: string
    study: study[]
}
function User() {
    const [user, UserEdit] = useState(userList.user)
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
        let newUser = user
        let newUserSingle = { id: -1, name: "", role: "", email: "", organization: "", phone: "", study: [] };
        console.log(userNameNew)
        if (userNameNew != null && userNameNew != "") {
            newUserSingle.name = userNameNew;
        }
        if (userRoleNew != null && userRoleNew != "") {
            newUserSingle.role = userRoleNew;
        }
        if (userEmailNew != null && userEmailNew != "") {
            newUserSingle.email = userEmailNew;
        }
        if (userOrganizationNew != null && userOrganizationNew != "") {
            newUserSingle.organization = userOrganizationNew;
        }
        if (userPhoneNew != null && userPhoneNew != "") {
            newUserSingle.phone = userPhoneNew;
        }

        if (newUserSingle.name !== "") {
            newUserSingle.id = newUser.length
            newUser.push(newUserSingle)

        }
        UserEdit(newUser);
        addUserName("");
        addUserRole("");
        addUserEmail("");
        addUserOrganization("");
        addUserPhone("");

    }
    const DeleteFromUser = (userSingle: user) => {
        let newUser = user
        newUser.splice(newUser.indexOf(userSingle), 1)
        //pepega fix, better find a better way. Somehow without the below line it doesnt register as a state change
        newUser = newUser.concat()
        console.log(newUser)
        UserEdit(newUser);
        console.log(user)
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
                {user.map((userSingle) => (
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
                                {userSingle.study.map((singleStudy) =>
                                    singleStudy.study !== "" ?
                                        (<li>{singleStudy.study} - {singleStudy.progress}%</li>) : (<div />)

                                )}
                            </ul>
                            <button onClick={() => { }}>Remind</button>
                            <button onClick={() => DeleteFromUser(userSingle)}>Delete</button>
                        </div>
                        {/* <div className="inner-flex">
                            <div>
                                <h6>Study</h6>
                                <ul>{userSingle.study.map((studySingle) => (
                                    <li>{studySingle}</li>
                                ))}</ul>
                            </div>
                        </div> */}
                        {/* <div className="bottom top">
                            <input onChange={setTempStudy} placeholder="add study:" />
                            <button className="add" onClick={() => AddStudy(orgSingle)}>Add Study</button>
                        </div>
                        <div className="bottom">
                            <input onChange={setTempClinician} placeholder="add clinician:" />
                            <button className="add" onClick={() => AddClincian(orgSingle)}>Add Clinican</button>
                        </div>
                        <button className="warning" onClick={() => { DeleteFromOrg(orgSingle) }}>X</button> */}
                    </Single>
                ))}
            </SingleContainer>

        </UserComponent>
    );
}

export default User;