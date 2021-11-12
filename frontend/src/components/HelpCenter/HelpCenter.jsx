
import { Header } from "../Utils/Header"
import Button from "../Utils/Button";
import BottomNav from "../Utils/BottomNav";

import "./HelpCenter.css";
const HelpCenter = () => {
    return (

        <div className="help-center-container">

        
                <Header />
          

            <div className="help-center-heading">
                <h3>Help Center</h3>
                <p>Please get in touch and we will be happy to help you</p>
            </div>

            <div className="border"></div>

            <div className="queries">
                <h3>Write your queries to us</h3>

                <input type="text" />

                <Button/>

               
            </div>

            <BottomNav />


        </div>




    )
}

export { HelpCenter };
