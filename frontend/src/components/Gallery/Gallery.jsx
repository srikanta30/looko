import { Header } from "../Utils/Header";
import Button from "../Utils/Button";
import BottomNav from "../Utils/BottomNav";
import {useState, useEffect} from "react";
import "./gallery.css";

function Gallery() {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    
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



    return (
        <div>
            <Header />
        <div className="centergallery">
            
            <input type='file' onChange={onSelectFile} />
            {selectedFile &&  <img src={preview} alt="preview"/> }
            <Button text="SHOW ME THE RESULT"/>
        </div>
        <BottomNav />
        </div>
    )
}

export default Gallery
