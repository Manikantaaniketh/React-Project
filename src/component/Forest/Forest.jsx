import React from 'react'
import "./Forest.css"
import Card from '../Card/Card'
import Fh from "../../assets/fh.png"
import Fh1 from "../../assets/fh1.png"
import Fh2 from "../../assets/fh2.png"

import Foresthouse from "../../assets/forestHouse.png"
import Foresthouse1 from "../../assets/forestHouse1.png"
import Foresthouse2 from "../../assets/forestHouse2.png"

import ForestImg from "../../assets/forest.png"
import ForestImg1 from "../../assets/forest1.png"
import ForestImg2 from "../../assets/forest2.png"

import Foresth from "../../assets/foresth.png"
import Foresth1 from "../../assets/foresth1.png"
import Foresth2 from "../../assets/foresth2.png"

function Forest() {
    return (
        <div id='forest'>
            <Card id="fo1" image1={Fh} image2={Fh1} image3={Fh2} title={"Wilderness Forest Cabin"} price={"2000"} location={"Narsapur, Telangana"} description={"Stay amidst thick forests and wildlife."} leaseType={"Monthly"} />
            <Card id="fo2" image1={Foresthouse} image2={Foresthouse1} image3={Foresthouse2} title={"Hillside Forest Home"} price={"3000"} location={"Vikarabad, Telangana"} description={"Cool and misty stay in Ananthagiri Hills."} leaseType={"Yearly"} />
            <Card id="fo3" image1={ForestImg} image2={ForestImg1} image3={ForestImg2} title={"Deep Woods Retreat"} price={"3000"} location={"Nizamabad, Telangana"} description={"Deep forest adventure stay."} leaseType={"Yearly"} />
            <Card id="fo4" image1={Foresth} image2={Foresth1} image3={Foresth2} title={"Scenic Forest Outlook"} price={"6000"} location={"Somar Hill, Himachal Pradesh"} description={"Spectacular hill views from the forest edge."} leaseType={"Short-Stay"} />
        </div>
    )
}

export default Forest
