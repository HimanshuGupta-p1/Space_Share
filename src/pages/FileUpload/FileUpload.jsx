import React, { useState } from "react";
import logo from "../../image/SpaceSharelogo.png"
import './FileUpload.css';



const FileUpload = () => {
    const [data, setData] = useState(null);
    console.log(data)
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>

            <section >
                <div className="glass-panel">
                    <h1>UPLOAD FILES</h1>
                    <h2>zxdeeudcnjTgnai5JtJ1y1MNfRJTfjYfi3Kxb3RqJGRq73ddKa61vPM3qV87c+Ki</h2>
                    <div className="main">
                        <input id="imgs" className="btn btn-danger" type="file" accept="image/png, image/jpeg,.txt,.doc" onChange={(e) => setData(e.target.files[0])} />
                        <button className="btn btn-primary" type="submit">Upload</button>
                    </div>
                    <div className="glass-toolbar">
                        <button className="glass-button"><b>Submit</b></button>
                        <button className="glass-button"><b>Reset</b></button>
                    </div>
                </div>


                <div className="d-flex flex-column justify-content-center w-100 h-100">

                    <div className="d-flex flex-column justify-content-center align-items-center">

                        <div className="btn-group my-5">


                        </div>
                        <a href="https://manuel.pinto.dev" className="text-decoration-none">
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="imag">

                    <img src={logo} alt="" />
                </div>
            </section>
        </div>
    )
}

export default FileUpload;
