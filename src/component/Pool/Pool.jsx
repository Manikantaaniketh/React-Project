import React from "react";
import "./Pool.css";
import Card from "../Card/Card";
import PoolImage from "../../assets/pool.png";
import PoolImage1 from "../../assets/pool1.png";
import PoolImage2 from "../../assets/pool2.png";

import Poolh from "../../assets/poolh.png";
import Poolh1 from "../../assets/poolh1.png";
import Poolh2 from "../../assets/poolh2.png";

import Poolho1 from "../../assets/poolho1.png";
import Poolho2 from "../../assets/poolho2.png";
import Poolho3 from "../../assets/poolho3.png";

function Pool() {
    return (
        <div id="pool">
            <Card id="p1" image1={PoolImage} image2={PoolImage1} image3={PoolImage2} title={"Sunset Pool Villa"} location={"Goa, India"} price={6500} description={"Modern villa with a stunning infinity pool."} leaseType={"Short-Stay"} />
            <Card id="p2" image1={Poolh} image2={Poolh1} image3={Poolh2} title={"Garden Pool House"} location={"Bangalore, India"} price={5500} description={"Relax by the azure waters in this premium retreat."} leaseType={"Short-Stay"} />
            <Card id="p3" image1={Poolho1} image2={Poolho2} image3={Poolho3} title={"Tropical Pool Oasis"} location={"Hyderabad, India"} price={4800} description={"Perfect family getaway with a large swimming pool."} leaseType={"Short-Stay"} />
        </div>
    );
}

export default Pool;
