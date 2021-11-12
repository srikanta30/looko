
import { Header } from "../Utils/Header"
import Button from "../Utils/Button";
import BottomNav from "../Utils/BottomNav";
import "./Refer.css"

import refer from "./refer.png"
const Refer = () => {
    return (

        <div className="refer_container">

            <Header />

            <div className="invite_heading">
                <h3>
                    Invite your friends to upgrade style on LookO
                </h3>

            </div>

            <div className="refer_img">
                <img src={refer} alt="refer_img" />
            </div>




            <div className="send_code">
                <p>Send invite with referral code and look good together</p>

                <p>
                    90olhd
                </p>

                <Button text={"SEND"} />



            </div>












            <BottomNav />

        </div>
    )
}


export { Refer }

