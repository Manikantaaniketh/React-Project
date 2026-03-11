import React from 'react'
import "./Farm.css"
import Card from '../Card/Card'
import FarmImg from "../../assets/farm.png"
import FarmImg1 from "../../assets/farm1.png"
import FarmImg2 from "../../assets/farm2.png"

import Farmh from "../../assets/farmh.png"
import Farmh1 from "../../assets/farmh1.png"
import Farmh2 from "../../assets/farmh2.png"

import fh from "../../assets/fh.png"
import fh1 from "../../assets/fh1.png"
import fh2 from "../../assets/fh2.png"

function Farm() {
    return (
        <div id='farm'>
            <Card id="f1" image1={FarmImg} image2={FarmImg1} image3={FarmImg2} title={"Lush Green Farmhouse"} location={"Hampy, India"} price={5000} description={"Beautiful farmhouse with sunset views and organic garden."} leaseType={"Short-Stay"} />
            <Card id="f2" image1={Farmh} image2={Farmh1} image3={Farmh2} title={"Cozy Country Farm"} location={"Goa, India"} price={4500} description={"Lush green valley views and peaceful environment."} leaseType={"Short-Stay"} />
            <Card id="f3" image1={fh} image2={fh1} image3={fh2} title={"Rustic Riverside Farm"} location={"Bangalore, India"} price={5500} description={"Relax by the river in this classic rustic farmhouse."} leaseType={"Short-Stay"} />
        </div>
    )
}

export default Farm
