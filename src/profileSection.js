import React from "react"
import Profile from "./Profile"
import HighHeader from "./App"

export default ({ subteam, dataList }) => (
    <>
        <div className="jumbotron jumbotron-fluid" title={subteam == "Android" ? "Best subteam" : null}>
            <div className="container">
                <h1 className="display-4 text-light" class="HighHeader">{subteam}</h1>
            </div>
        </div>
        <div className={dataList.length <= 2 ? "container px-4 mb-5 col-md-7" : "container px-4 mb-5"}>
            <div className="row gx-5">
                {
                    dataList.map(
                        obj => <Profile image={obj.image} funFact={obj.fact} major={obj.major} minor={obj.minor} name={obj.name}/>
                    )
                }
            </div>
        </div>
    </>
)