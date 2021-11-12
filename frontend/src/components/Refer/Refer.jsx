
import { Header } from "../Utils/Header"
import Button from "../Utils/Button";
import BottomNav from "../Utils/BottomNav";
import "./Refer.css"

import refer from "./refer.png"
const Refer = () => {

    const handleOnClick = () => {
        if (navigator.share) {
          navigator
            .share({
              title: "Check Out LookO, It's Awesome!",
              text: `Check Out LookO, It's Awesome!`,
              url: document.location.href,
            })
            .then(() => {
              console.log('Successfully shared');
            })
            .catch(error => {
              console.error('Something went wrong sharing the blog', error);
            });
        }
      };

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

                <Button text={"SEND"} handleClick={ handleOnClick }/>



            </div>












            <BottomNav />

        </div>
    )
}


export { Refer }

