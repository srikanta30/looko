import './Header.css'
import logo from './images/emojione_ok-hand.svg'

export const Header = () =>{

    return (
            <div id="headerbody" >
                <div id="iconbg">
                <img src={logo} />
                </div>
                <div id="logotext">LookO</div>
            </div>
    )
}