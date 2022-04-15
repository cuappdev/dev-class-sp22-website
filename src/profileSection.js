import React from "react"
import Profile from "./Profile"

export default ({ subteam, dataList }) => (
    <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-light">{subteam}</h1>
            </div>
        </div>
        <div className={dataList.length <= 2 ? "container px-4 mb-5 col-md-7" : "container px-4 mb-5"}>
            <div className="row gx-5">
                {
                    dataList.map(obj => <Profile image={obj.image} funFact={obj.fact} />)
                }
            </div>
        </div>
    </>
)