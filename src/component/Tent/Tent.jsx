import React from "react";
import "./Tent.css";
import Card from "../Card/Card";
import TentImage from "../../assets/tent.png";
import TentImage1 from "../../assets/tent1.png";
import TentImage2 from "../../assets/tent2.png";

import ten from "../../assets/ten.png";
import ten1 from "../../assets/ten1.png";
import ten2 from "../../assets/ten2.png";

import tentho from "../../assets/tentho.png";
import tentho1 from "../../assets/tentho1.png";
import tentho2 from "../../assets/tentho2.png";

function Tent() {
    return (
        <div id="tent">
            <Card id="t1" image1={TentImage} image2={TentImage1} image3={TentImage2} title={"Starlight Safari Tent"} location={"Ladakh, India"} price={2500} description={"Sleep under the stars in luxurious safari-style tents."} leaseType={"Short-Stay"} />
            <Card id="t2" image1={ten} image2={ten1} image3={ten2} title={"Desert Mirage Camp"} location={"Rajasthan, India"} price={2000} description={"Experience the desert life with modern comfort."} leaseType={"Short-Stay"} />
            <Card id="t3" image1={tentho} image2={tentho1} image3={tentho2} title={"Wilderness Edge Canvas"} location={"Coorg, India"} price={1800} description={"Quiet tents located at the edge of the wilderness."} leaseType={"Short-Stay"} />
        </div>
    );
}

export default Tent;
