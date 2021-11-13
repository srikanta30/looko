import { Header } from "../Utils/Header";
import Button from "../Utils/Button";
import BottomNav from "../Utils/BottomNav";
import {useState, useEffect, useCallback} from "react";
import "./gallery.css";
import spinner from "./spinner.gif";
import Results from "../Results/Results";

function Gallery() {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState();
    const [result, setResult] = useState(false);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        
        setSelectedFile(e.target.files[0])
    }

    const handleResult = useCallback(() => {
        setResult(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [setResult, setLoading]);



    return (
        <>
          <div>{ result ? ( loading ? (
              <div className="loader">
                <img alt="loading" src={spinner} />
              </div>
            ) : (
                <div className="resultsdiv">
                  <Header/>
                  <img src={preview} alt="Captured_Photo" className="resultsphoto" />
                  <Results />
                </div>
              )) : (

        <div>
            <Header />
        <div className="centergallery">
            
            <input type='file' onChange={onSelectFile} />
            {selectedFile &&  <img src={preview} alt="preview"/> }
            <Button text="SHOW ME THE RESULT" handleClick={handleResult}/>
        </div>
        <BottomNav />
        </div>
    )}
    </div>
    </>
  )
}

export default Gallery
