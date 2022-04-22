import React from "react"
import toySans from "./Toysans-Xe5d.ttf"
import p from "./App.css"

export default ({ image, funFact, name='I am nameless and afraid', major='', minor='' }) => (
    <div className="col">
        <div className="card border-0" class="shadow">
            <img
                src={image}
                className="card-img-top"
            />
            <div className="card-body">
                <p className="card-text" style={{fontSize:24}}>
                    <b>{name}</b>
                </p>
                <hr></hr>
                <p className="card-text">
                    {funFact}
                </p>
                { major != '' && (
                    <div>
                        <hr></hr>
                        <p className="card-text">                 
                            <b>Major: </b>{major}
                        </p>
                    </div>
                    ) 
                    
                }
                { minor != '' && (
                    <div>
                        <hr></hr>
                        <p className="card-text">
                            <b>Minor: </b>{minor}
                        </p>
                    </div>
                    ) 
                }
            </div>
        </div>
    </div>
)