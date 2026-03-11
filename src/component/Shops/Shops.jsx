import React, { useContext, useMemo } from 'react'
import "./Shops.css"
import Card from '../Card/Card'
import { dataContext } from '../../Context/Usercontext'

import Cloth from "../../assets/cloth.png"
import Cloth1 from "../../assets/cloth1.png"
import Cloth2 from "../../assets/cloth2.png"

import Clothes from "../../assets/clothes.png"
import Clothes1 from "../../assets/clothes1.png"
import Clothes2 from "../../assets/clothes2.png"

import Dress from "../../assets/dress.png"
import Dress1 from "../../assets/dress1.png"
import Dress2 from "../../assets/dress2.png"

import Dressshop from "../../assets/dressshop.png"
import Dressshop1 from "../../assets/dressshop1.png"
import Dressshop2 from "../../assets/dressshop2.png"

import Shop from "../../assets/shop.png"
import Shop1 from "../../assets/shop1.png"
import Shop2 from "../../assets/shop2.png"

import Shops1 from "../../assets/shops1.png"
import Shops2 from "../../assets/shops2.png"
import Shops3 from "../../assets/shops3.png"

function Shops() {
    const { searchQuery } = useContext(dataContext);

    const shopsData = useMemo(() => [
        { id: "shop-1", image1: Cloth, image2: Cloth1, image3: Cloth2, title: "Premium Cloth Boutique", price: "40,000", priceUnit: "month", location: "Pune, India", description: "Prime location cloth boutique with high foot traffic." },
        { id: "shop-2", image1: Clothes, image2: Clothes1, image3: Clothes2, title: "Trendy Attire Store", price: "45,000", priceUnit: "month", location: "Hyderabad, India", description: "Spacious store perfect for trendy fashion retail." },
        { id: "shop-3", image1: Dress, image2: Dress1, image3: Dress2, title: "Elegant Dress Shop", price: "30,000", priceUnit: "month", location: "Surat, India", description: "Well-established dress shop in the textile hub." },
        { id: "shop-4", image1: Dressshop, image2: Dressshop1, image3: Dressshop2, title: "Designer Dress Studio", price: "40,000", priceUnit: "month", location: "Goa, India", description: "Boutique studio location ideal for designer wear." },
        { id: "shop-5", image1: Shop, image2: Shop1, image3: Shop2, title: "Prime Retail Space", price: "₹40,000", priceUnit: "month", location: "Medak, India", description: "Versatile retail space suitable for any business." },
        { id: "shop-6", image1: Shops1, image2: Shops2, image3: Shops3, title: "Spacious Commercial Shop", price: "32,000", priceUnit: "month", location: "Karimnagar, India", description: "Large commercial shop in a bustling market area." },
    ], []);

    const filteredShops = useMemo(() => {
        if (!searchQuery) return shopsData;
        const query = searchQuery.toLowerCase();
        return shopsData.filter(item =>
            item.location.toLowerCase().includes(query) ||
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
    }, [shopsData, searchQuery]);

    return (
        <div id='shops'>
            {filteredShops.length > 0 ? (
                filteredShops.map((item) => (
                    <Card key={item.id} {...item} />
                ))
            ) : (
                <div className="no-results-simple">
                    <h2>No shops found for "{searchQuery}"</h2>
                    <p>Try searching for a different location or property type.</p>
                </div>
            )}
        </div>
    )
}

export default Shops
