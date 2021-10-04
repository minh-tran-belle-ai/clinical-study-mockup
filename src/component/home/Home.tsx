import React, { useState } from 'react';
import { useSelector, } from 'react-redux';
import { HomeComponent, Noti, NotiMessage } from "./Home.styles";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import { AllState } from '../../redux/type';
function Home({ email, password }: { email: string, password: string }) {
    let role = email;
    const [notiMessage, changeNotiMessage] = useState(false)
    let notification = useSelector((initialState: AllState) => initialState.notifications)

    return (
        <HomeComponent>
            <h1>Welcome {email}</h1>
            <Noti onClick={() => changeNotiMessage(!notiMessage)}>
                {role === "admin" ?
                    <NotificationsOffIcon fontSize="large" color="disabled" /> : <span />
                }
                {role === "clinician" ?
                    <NotificationsActiveIcon fontSize="large" sx={{ color: "#ff5c33" }} /> : <span />
                }
                {role === "moderator" ?
                    <NotificationsOffIcon fontSize="large" color="disabled" /> : <span />
                }
            </Noti>
            {notiMessage && role === "clinician"  ?
                <NotiMessage>
                    <div>
                        {notification.map((singleNotifiation)=>(
                            <div className="single-msg">
                                <h6>From: {singleNotifiation.from}</h6>
                                <textarea disabled placeholder={`Message: ${singleNotifiation.message}`}></textarea>
                                <p>{singleNotifiation.date}</p>
                            </div>
                        ))}
                        
                    </div>
                </NotiMessage> : <span />}

            <div>notification</div>

        </HomeComponent>
    );
}

export default Home;