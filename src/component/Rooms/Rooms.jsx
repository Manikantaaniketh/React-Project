import React, { useContext, useMemo } from 'react'
import "./Rooms.css"
import Card from '../Card/Card'
import { dataContext } from '../../Context/Usercontext'

import Room from "../../assets/room.jpg"
import Room1 from "../../assets/room1.jpg"
import Room2 from "../../assets/room2.jpg"

import Roomhouse from "../../assets/roomhouse.png"
import Roomhouse1 from "../../assets/roomhouse1.png"
import Roomhouse2 from "../../assets/roomhouse2.png"

import Roomnew from "../../assets/roomimg.png"
import Roomnew1 from "../../assets/roomimg1.png"
import Roomnew2 from "../../assets/roomimg2.png"

import RoomsImg from "../../assets/rooms.png"
import Rooms1 from "../../assets/rooms1.png"
import Rooms2 from "../../assets/rooms2.png"

import Roomold from "../../assets/roomold.png"
import Roomold1 from "../../assets/roomhold1.png"
import Roomold2 from "../../assets/roomhold2.png"

function Rooms() {
  const { searchQuery } = useContext(dataContext);

  const roomsData = useMemo(() => [
    { id: "room-1", image1: Room, image2: Room1, image3: Room2, title: "Standard Classic Room", price: "3500", location: "Jhansi, India", description: "Comfortable and well-maintained rooms for a pleasant stay in Jhansi." },
    { id: "room-2", image1: Roomhouse, image2: Roomhouse1, image3: Roomhouse2, title: "Charming House Room", price: "2500", location: "KPHB, India", description: "Affordable and cozy room located in the heart of KPHB." },
    { id: "room-3", image1: Roomnew, image2: Roomnew1, image3: Roomnew2, title: "Modern New Age Room", price: "2000", location: "Uppal, India", description: "Conveniently located room in Uppal with easy access to transportation." },
    { id: "room-4", image1: Roomold, image2: Roomold1, image3: Roomold2, title: "Vintage Heritage Room", price: "2000", location: "L.B Nagar, India", description: "Spacious and affordable rooms in L.B Nagar, perfect for budget travelers." },
    { id: "room-5", image1: RoomsImg, image2: Rooms1, image3: Rooms2, title: "Premium Luxury Room", price: "₹2,300", location: "Naagole, India", description: "Experience comfort and elegance in these luxury rooms located in Naagole." },
  ], []);

  const filteredRooms = useMemo(() => {
    if (!searchQuery) return roomsData;
    const query = searchQuery.toLowerCase();
    return roomsData.filter(item =>
      item.location.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  }, [roomsData, searchQuery]);

  return (
    <div id='rooms'>
      {filteredRooms.length > 0 ? (
        filteredRooms.map((item) => (
          <Card key={item.id} {...item} />
        ))
      ) : (
        <div className="no-results-simple">
          <h2>No rooms found for "{searchQuery}"</h2>
          <p>Try searching for a different location or property type.</p>
        </div>
      )}
    </div>
  )
}

export default Rooms