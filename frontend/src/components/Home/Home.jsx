import './home.css';

function Home() {
    return (
        <div>
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
        </div>
    )
}

export default Home
