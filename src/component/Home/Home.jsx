import React, { useContext, useMemo, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Home.css';
import Card from '../Card/Card';
import { dataContext } from '../../Context/Usercontext';

import interior1 from "../../assets/interior1.png"
import interior2 from "../../assets/interior2.png"
import interior3 from "../../assets/interior3.png"
import interior4 from "../../assets/interior4.png"

import houseRoom from "../../assets/houseroom.jpg"
import houseLiving from "../../assets/houseliving.jpg"
import houseKichen from "../../assets/housekichen.jpg"

import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import villa2 from "../../assets/villa3.jpg"

import FarmImg from "../../assets/farm.png"
import FarmImg1 from "../../assets/farm1.png"
import FarmImg2 from "../../assets/farm2.png"

import Farmh from "../../assets/farmh.png"
import Farmh1 from "../../assets/farmh1.png"
import Farmh2 from "../../assets/farmh2.png"

import fh from "../../assets/fh.png"
import fh1 from "../../assets/fh1.png"
import fh2 from "../../assets/fh2.png"

import penthouse from "../../assets/pent-house.png"
import penthouse1 from "../../assets/pent-house1.png"
import penthouse2 from "../../assets/pent-house2.png"

import house from "../../assets/house.jpg"
import house1 from "../../assets/housekichen.jpg"
import house2 from "../../assets/houseliving.jpg"

import Cloth from "../../assets/cloth.png"
import Clothes from "../../assets/clothes.png"
import Shop from "../../assets/shop.png"
import TentImage from "../../assets/tent.png"
import ten from "../../assets/ten.png"
import Poolh from "../../assets/poolh.png"

function Home() {
  const { addListing, addImage1, addImage2, addImage3, title, price, location, description, searchQuery, setSearchQuery } = useContext(dataContext);
  const [searchParams, setSearchParams] = useSearchParams();

  //filter state
  const allAmenities = [
    { label: '📶 WiFi', keyword: 'wifi' },
    { label: '🏊 Pool', keyword: 'pool' },
    { label: '🐾 Pet Friendly', keyword: 'pet' },
    { label: '🌿 Garden', keyword: 'garden' },
    { label: '🏡 Villa', keyword: 'villa' },
    { label: '🏕️ Farm', keyword: 'farm' },
    { label: '⛺ Tent', keyword: 'tent' },
    { label: '🛍️ Shop', keyword: 'shop' },
    { label: '🌊 Beach', keyword: 'beach' },
    { label: '🌆 City', keyword: 'urban' },
  ];
  const [activeAmenities, setActiveAmenities] = useState([]);

  const toggleAmenity = (keyword) => {
    setActiveAmenities(prev =>
      prev.includes(keyword) ? prev.filter(k => k !== keyword) : [...prev, keyword]
    );
  };
  const clearFilters = () => setActiveAmenities([]);

  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch && urlSearch !== searchQuery) {
      setSearchQuery(urlSearch);
    }
  }, [searchParams, setSearchQuery, searchQuery]);

  const staticListings = [
    {
      id: 1,
      image1: interior1,
      image2: interior2,
      image3: interior3,
      title: "Luxurious Interior Home",
      location: "Bangalore, India",
      price: 4500,
      description: "Experience modern living with premium interior designs and spacious layouts.",
      leaseType: "Monthly"
    },
    {
      id: 2,
      image1: houseRoom,
      image2: houseLiving,
      image3: houseKichen,
      title: "Cozy Suburban Residence",
      location: "Jhansi, India",
      price: 5000,
      description: "Perfect family house with separate living and kitchen areas, located in a quiet area.",
      leaseType: "Yearly"
    },
    {
      id: 3,
      image1: villa,
      image2: villa1,
      image3: villa2,
      title: "Modern Luxury Villa",
      location: "Goa, India",
      price: 5000,
      description: "Beautiful villa with private access and stunning architecture for a perfect stay.",
      leaseType: "Short-Stay"
    },
    {
      id: 4,
      image1: interior4,
      image2: interior3,
      image3: interior2,
      title: "Urban Studio Loft",
      location: "Hyderabad, India",
      price: 3500,
      description: "Stay in the heart of the city with all modern amenities at your fingertips.",
      leaseType: "Monthly"
    },
    {
      id: 5,
      image1: FarmImg,
      image2: FarmImg1,
      image3: FarmImg2,
      title: "Lush Green Farmhouse",
      location: "Sipri Bazar, Jhansi",
      price: "3000",
      description: "Quite neighborhood with easy access to market.",
      leaseType: "Monthly"
    },
    {
      id: 6,
      image1: fh,
      image2: fh1,
      image3: fh2,
      title: "Rustic Beach Cottage",
      location: "Calangute, Goa",
      price: "6000",
      description: "Beach house perfect for vacations.",
      leaseType: "Short-Stay"
    },
    {
      id: 7,
      image1: house,
      image2: house1,
      image3: house2,
      title: "Classic Suburban House",
      location: "Civil Lines, Jhansi",
      price: "8000",
      description: "A luxurious 3BHK villa with a large garden.",
      leaseType: "Yearly"
    },
    {
      id: 8,
      image1: penthouse,
      image2: penthouse1,
      image3: penthouse2,
      title: "Skyview Penthouse Suite",
      location: "Elite Chauraha, Jhansi",
      price: "7000",
      description: "Breathtaking city views from the terrace.",
      leaseType: "Yearly"
    },
    {
      id: 9,
      image1: FarmImg,
      image2: FarmImg1,
      image3: FarmImg2,
      title: "Sunset Farm Retreat",
      location: "Hampy, India",
      price: 5000,
      description: "Beautiful farmhouse with sunset views and organic garden.",
      leaseType: "Short-Stay"
    },
    {
      id: 10,
      image1: Farmh,
      image2: Farmh1,
      image3: Farmh2,
      title: "Cozy Country Farm",
      location: "Goa, India",
      price: 4500,
      description: "Lush green valley views and peaceful environment.",
      leaseType: "Short-Stay"
    },
    {
      id: 11,
      image1: fh,
      image2: fh1,
      image3: fh2,
      title: "Rustic Riverside Farm",
      location: "Bangalore, India",
      price: 5500,
      description: "Relax by the river in this classic rustic farmhouse.",
      leaseType: "Short-Stay"
    },
    {
      id: 12,
      image1: Clothes,
      image2: Clothes,
      image3: Clothes,
      title: "Trendy Attire Store",
      location: "Hyderabad, India",
      price: 4500,
      description: "Spacious store perfect for trendy fashion retail.",
      leaseType: "Monthly"
    },
    {
      id: 13,
      image1: Cloth,
      image2: Cloth,
      image3: Cloth,
      title: "Premium Cloth Boutique",
      location: "Pune, India",
      price: 4000,
      description: "Prime location cloth boutique with high foot traffic.",
      leaseType: "Monthly"
    },
    {
      id: 14,
      image1: TentImage,
      image2: TentImage,
      image3: TentImage,
      title: "Starlight Safari Tent",
      location: "Ladakh, India",
      price: 2500,
      description: "Sleep under the stars in luxurious safari-style tents.",
      leaseType: "Short-Stay"
    },
    {
      id: 15,
      image1: ten,
      image2: ten,
      image3: ten,
      title: "Desert Mirage Camp",
      location: "Rajasthan, India",
      price: 2000,
      description: "Experience the desert life with modern comfort.",
      leaseType: "Short-Stay"
    },
    {
      id: 16,
      image1: Shop,
      image2: Shop,
      image3: Shop,
      title: "Prime Retail Space",
      location: "Medak, India",
      price: 4000,
      description: "Versatile retail space suitable for any business.",
      leaseType: "Monthly"
    },
    {
      id: 17,
      image1: Poolh,
      image2: Poolh,
      image3: Poolh,
      title: "Garden Pool House",
      location: "Bangalore, India",
      price: 5500,
      description: "Relax by the azure waters in this premium retreat.",
      leaseType: "Short-Stay"
    }
  ];

  const allListings = useMemo(() => {
    const userListings = addListing ? [{
      id: Date.now(),
      image1: addImage1 || interior1,
      image2: addImage2 || interior2,
      image3: addImage3 || interior3,
      title: title || "New Property",
      location: location || "Unknown Location",
      price: price || 0,
      description: description || "No description provided.",
      leaseType: "Monthly"
    }] : [];
    return [...staticListings, ...userListings];
  }, [addListing, addImage1, addImage2, addImage3, title, location, price, description]);

  const activeSearchQuery = searchParams.get('search') || searchQuery;

  const filteredListings = useMemo(() => {
    if (!activeSearchQuery) return allListings;
    const query = activeSearchQuery.toLowerCase();
    return allListings.filter(listing =>
      listing.location.toLowerCase().includes(query) ||
      listing.title.toLowerCase().includes(query) ||
      listing.description?.toLowerCase().includes(query)
    );
  }, [allListings, activeSearchQuery]);

  //filter on top of search filter
  const displayListings = useMemo(() => {
    if (activeAmenities.length === 0) return filteredListings;
    return filteredListings.filter(listing => {
      const haystack = `${listing.title} ${listing.description} ${listing.location}`.toLowerCase();
      return activeAmenities.some(keyword => haystack.includes(keyword));
    });
  }, [filteredListings, activeAmenities]);

  return (
    <div id='home'>
      <div className="amenity-filter-bar">
        <div className="amenity-chips">
          {allAmenities.map(a => (
            <button
              key={a.keyword}
              className={`amenity-chip ${activeAmenities.includes(a.keyword) ? 'active' : ''}`}
              onClick={() => toggleAmenity(a.keyword)}
            >
              {a.label}
            </button>
          ))}
        </div>
        {activeAmenities.length > 0 && (
          <button className="clear-amenity-btn" onClick={clearFilters}>✕ Clear Filters</button>
        )}
      </div>

      {displayListings.length > 0 ? (
        displayListings.map((listing) => {
          const priceUnit = listing.leaseType === 'Short-Stay' ? 'day' : 'month';
          return (
            <Card
              key={listing.id}
              id={listing.id}
              image1={listing.image1}
              image2={listing.image2}
              image3={listing.image3}
              title={listing.title}
              location={listing.location}
              price={listing.price}
              description={listing.description}
              leaseType={listing.leaseType}
              priceUnit={priceUnit}
            />
          );
        })
      ) : (
        <div className="no-results">
          <div className="no-results-icon">🏠</div>
          <h2>No results found for "{activeAmenities.length > 0 ? activeAmenities.join(', ') : searchQuery}"</h2>
          <p>We couldn't find any properties. Try another city or clear your filters.</p>
          <button className="clear-search-btn" onClick={() => { clearFilters(); window.location.reload(); }}>
            Explore All Properties
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
