import './home.css';
import camera from './camera.svg';
import gallery from './gallery.svg';
import { Header } from '../Utils/Header';
import BottomNav from '../Utils/BottomNav';

function Home() {
    return (
        <div>
            <Header />
            <div className="subheader">
                <p>Get to know about your outfit in 10 seconds!</p>
            </div>
            <div className="border"></div>
            <div className="recommended">
                <p id="recommended-header">Recommended:</p>
                <ul>
                    <li>Try to add original photos taken from a camera.</li>
                    <li>To to avoid adding color filter image.</li>
                </ul>
            </div>
            <div className="border"></div>
            <div className="inputboxes">

                <h1>Add photo or video</h1>

                <div className="inputtypes">

                    <div className="icon-container">
                        <img src={camera} alt="camera" />
                        <p>Camera</p>
                    </div>

                    <div className="icon-container">
                        <img src={gallery} alt="gallery" />
                        <p>Gallery</p>
                    </div>

                </div>


            </div>
            <div className="blackspace"></div>
            <BottomNav />
        </div>
    )
}

export default Home
