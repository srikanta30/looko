import { Header } from "../Utils/Header";
import BottomNav from "../Utils/BottomNav";

import forward from './icons/forward.svg';
import searchicon from './icons/searchicon.svg'
import './history.css'
import demoimage from './demoimage.jpg';

function History() {
  return (
    <div>
      <Header />
      <div id="cont">
        <div className="searchbar">
          <table className="searchbar-cont">
            <tr>
              <td>
                <input type="text" placeholder="Search" className="search" />
              </td>
              <td>
                <a href="#"><img src={searchicon} alt=""/></a>
              </td>
            </tr>
          </table>
        </div>
        <div id="card-container">
          <div className="card">
            <img className="pfpimg" src={demoimage} alt="" />
            <div className = "content">
              <h5>Check your entire look</h5>
              <div>Date : 13-11-2021 </div>
              <div>Time : 07:53 PM </div>
            </div>
            <img src={forward} alt="" />
          </div>
          <div className="card">
            <img className="pfpimg" src="https://4.imimg.com/data4/ET/HI/MY-17368652/boys-designer-shirt-500x500.jpg" alt=""/>
            <div className = "content">
              <h5>Check your entire look</h5>
              <div>Date : 13-11-2021 </div>
              <div>Time : 12:50 PM </div>
            </div>
            <img src={forward} alt=""/>
          </div>
          <div className="card">
            <img className="pfpimg" src="https://m.media-amazon.com/images/I/71e+PwfDV8L._UL1500_.jpg" alt=""/>
            <div className = "content">
              <h5>Check your entire look</h5>
              <div>Date : 13-11-2021</div>
              <div>Time : 10:50 AM </div>
            </div>
            <img src={forward}  alt=""/>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default History;
