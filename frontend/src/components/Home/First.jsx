
import './First.css'

export const First = () =>{


    return (
        <div id="body">
            <div id="title" onClick={()=>{
                document.getElementById("title").style.display="none";
                document.getElementById("subtitle").style.display="none";
            }}>LookO</div>
            <div id="subtitle">Upgrade your style with LookO</div>
            <div id="appname">Look Awesome</div>
        </div>
    )
}