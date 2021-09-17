import React from 'react';
// import { HomeComponent } from "./Home.styles";
import { useState } from 'react'
import * as orga from "./OrganizationList.json"
import { OrganizationComponent, LogoImg, Single, SingleContainer } from "./Organization.styles";
interface org {
    name: string
    logo: string
    study: string[]
    clinician: string[]
}
function Organization() {
    const [org, OrgEdit] = useState(orga.org)
    const [orgNameNew, addOrgName] = useState("")
    const [orgLogoNew, addOrgLogo] = useState("")
    const [orgStudyNew, addOrgStudy] = useState([])
    const [tempStudy, addTempStudy] = useState("")
    const [orgClinicianNew, addOrgClinician] = useState([])
    const [tempClinician, addTempClinician] = useState("")
    const setName = (e: any) => {
        addOrgName(e.target.value)
    }
    const setLogo = (e: any) => {
        addOrgLogo(e.target.value)
    }
    const setClinician = (e: any) => {
        addOrgClinician(e.target.value)
    }
    const setTempClinician = (e: any) => {
        addTempClinician(e.target.value)
    }
    const setStudy = (e: any) => {
        addOrgStudy(e.target.value)
    }
    const setTempStudy = (e: any) => {
        addTempStudy(e.target.value)
    }
    const AddClincian = (orgSingle: org) => {
        let newClinician: Array<string> = orgSingle.clinician;
        console.log(newClinician)
        let newOrg = org
        if (newClinician.indexOf(tempClinician) === -1) {
            newClinician.push(tempClinician);
        }
        addTempClinician("")
        orgSingle.clinician = newClinician
        newOrg[newOrg.indexOf(orgSingle)] = orgSingle;
        OrgEdit(newOrg)
    }
    const AddStudy = (orgSingle: org) => {
        let newStudy: Array<string> = orgSingle.study;
        console.log(newStudy)
        let newOrg = org
        if (newStudy.indexOf(tempStudy) === -1) {
            newStudy.push(tempStudy);
        }
        addTempStudy("")
        orgSingle.study = newStudy
        newOrg[newOrg.indexOf(orgSingle)] = orgSingle;
        OrgEdit(newOrg)
    }
    const DeleteFromOrg = (orgSingle: org) => {
        let newOrg = org
        newOrg.splice(newOrg.indexOf(orgSingle), 1)
        //pepega fix, better find a better way. Somehow without the below line it doesnt register as a state change
        newOrg = newOrg.concat()
        console.log(newOrg)
        OrgEdit(newOrg);
        console.log(org)
    }
    const AddToOrg = () => {
        let newOrg = org
        let newOrgSingle = { name: "", logo: "", study: [], clinician: [] };
        console.log(orgNameNew)
        if (orgNameNew != null && orgNameNew != "") {
            newOrgSingle.name = orgNameNew;
        }
        if (orgLogoNew != null && orgLogoNew != "") {
            newOrgSingle.logo = orgLogoNew;
        }
        if (orgClinicianNew != null && orgClinicianNew != []) {
            newOrgSingle.clinician = [...orgClinicianNew];
        }

        if (newOrgSingle.name !== "") {
            newOrg.push(newOrgSingle)

        }
        OrgEdit(newOrg);
        addOrgName("");
        addOrgLogo("");
        addOrgClinician([]);
    }
    return (
        <OrganizationComponent>
            <h1>Add organization in</h1>
            <div className="form-flex">
                <div>
                    <label>organization name: </label>
                    <input onChange={setName} value={orgNameNew} />
                </div>
                <div>
                    <label>organization logo: </label>
                    <input onChange={setLogo} value={orgLogoNew} />
                </div>
                <div>
                    <label>organization study: </label>
                    <input onChange={setStudy} value={orgStudyNew} />
                </div>
                <div>
                    <label>add clinician in: </label>
                    <input onChange={setClinician} value={orgClinicianNew} />
                </div>
                <button onClick={() => AddToOrg()}>Add</button>
            </div>
            <h1>Organization list</h1>
            <SingleContainer>
                {org.map((orgSingle) => (
                    <Single>
                        <div className="header">
                            <LogoImg src={orgSingle.logo} />
                            <h1>{orgSingle.name}</h1>

                        </div>
                        <div className="inner-flex">
                            <div>
                                <h6>Study</h6>
                                <ul>{orgSingle.study.map((studySingle) => (
                                    <li>{studySingle}</li>
                                ))}</ul>
                            </div>
                            <div>
                                <h6>Clinician</h6>
                                <ul>{orgSingle.clinician.map((clinicianSingle) => (
                                    <li>{clinicianSingle}</li>
                                ))}</ul>
                            </div>
                        </div>
                        <div className="bottom top">
                            <input onChange={setTempStudy} placeholder="add study:" />
                            <button className="add" onClick={() => AddStudy(orgSingle)}>Add Study</button>
                        </div>
                        <div className="bottom">
                            <input onChange={setTempClinician} placeholder="add clinician:" />
                            <button className="add" onClick={() => AddClincian(orgSingle)}>Add Clinican</button>
                        </div>
                        <button className="warning" onClick={() => { DeleteFromOrg(orgSingle) }}>X</button>
                    </Single>
                ))}
            </SingleContainer>

        </OrganizationComponent>
    );
}

export default Organization;