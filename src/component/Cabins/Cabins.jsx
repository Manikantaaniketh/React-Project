import React from 'react'
import "./Cabins.css"
import Card from '../Card/Card'
import cabins from "../../assets/cabin.png"
import cabins1 from "../../assets/cabin1.png"
import cabins2 from "../../assets/cabin2.png"

function Cabins() {
    return (
        <div id='cabins'>
            <Card
                id="ca1"
                image1={cabins}
                image2={cabins1}
                image3={cabins2}
                title={"Cozy Wooden Cabin"}
                price={"6000"}
                location={"Old Manali, Himachal Pradesh"}
                description={"Cozy wooden cabin for a perfect hill stay."}
                leaseType={"Short-Stay"}
            />
        </div>
    )
}

export default Cabins
