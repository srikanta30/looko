import { Header } from "../Utils/Header";
import BottomNav from "../Utils/BottomNav";
import './notification.css'

import redT from './icons/redT.svg'
import blueT from './icons/blueT.svg'
import forward from './icons/forward.svg'

function Notifications() {
  return (
    <div>
      <Header />
      <div>
        <div className="notificationbar">
          <img src={blueT} />
          <div>Hey! Check the latest funky T-Shirt</div>
          <img src ={forward} />
        </div>
        <div className="notificationbar">
          <img src={redT} />
          <div>Hey! Check the latest funky T-Shirt</div>
          <img src ={forward} />
        </div>
        <div className="notificationbar">
          <img src={blueT} />
          <div>Hey! Check the latest funky T-Shirt</div>
          <img src ={forward} />
        </div>
        <div className="notificationbar">
          <img src={redT} />
          <div>Hey! Check the latest funky T-Shirt</div>
          <img src ={forward} />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default Notifications;
