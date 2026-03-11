import React, { useContext, useMemo } from 'react'
import "./Houses.css"
import Card from '../Card/Card'
import { dataContext } from '../../Context/Usercontext'
import house from "../../assets/house.jpg"
import house1 from "../../assets/housekichen.jpg"
import house2 from "../../assets/houseliving.jpg"
import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import villa2 from "../../assets/villa3.jpg"
import village from "../../assets/farm.png"
import village1 from "../../assets/farm1.png"
import village2 from "../../assets/farm2.png"
import fh from "../../assets/fh.png"
import fh1 from "../../assets/fh1.png"
import fh2 from "../../assets/fh2.png"
import penthouse from "../../assets/pent-house.png"
import penthouse1 from "../../assets/pent-house1.png"
import penthouse2 from "../../assets/pent-house2.png"

function Houses() {
  const { searchQuery } = useContext(dataContext);

  const housesData = useMemo(() => [
    { id: "house-1", image1: house, image2: house1, image3: house2, title: "Classic Suburban House", price: "8000", location: "Jhansi, India", description: "Spacious 3BHK villa with a private garden and modern amenities.", priceUnit: "month" },
    { id: "house-2", image1: villa2, image2: villa, image3: villa1, title: "Modern Luxury Villa", price: "5000", location: "Jhansi, India", description: "Luxury 2BHK villa with state-of-the-art interiors and high security.", priceUnit: "month" },
    { id: "house-3", image1: village, image2: village1, image3: village2, title: "Rustic Village Farmhouse", price: "9000", location: "Jhansi, India", description: "Traditional style house with a large backyard, perfect for families.", priceUnit: "month" },
    { id: "house-4", image1: fh, image2: fh1, image3: fh2, title: "Cozy Holiday Cottage", price: "6000", location: "Goa, India", description: "Cozy 1BHK cottage near the beach, ideal for a peaceful getaway.", priceUnit: "month" },
    { id: "house-5", image1: penthouse, image2: penthouse1, image3: penthouse2, title: "Skyview Penthouse Suite", price: "₹7000", location: "Jhansi, India", description: "Exquisite penthouse featuring a private terrace with stunning city views.", priceUnit: "month" },
  ], []);

  const filteredHouses = useMemo(() => {
    if (!searchQuery) return housesData;
    const query = searchQuery.toLowerCase();
    return housesData.filter(item =>
      item.location.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  }, [housesData, searchQuery]);

  return (
    <div id='houses'>
      {filteredHouses.length > 0 ? (
        filteredHouses.map((item) => (
          <Card key={item.id} {...item} />
        ))
      ) : (
        <div className="no-results-simple">
          <h2>No houses found for "{searchQuery}"</h2>
          <p>Try searching for a different location or property type.</p>
        </div>
      )}
    </div>
  )
}

export default Houses
