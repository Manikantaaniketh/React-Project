import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Card.css"
import { dataContext } from '../../Context/Usercontext'
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai"
import { BsShieldCheck } from "react-icons/bs"

const Card = ({ id, image1, image2, image3, title, price, location, description, leaseType, priceUnit = "day" }) => {
  const { shortlist, toggleShortlist } = useContext(dataContext);
  const [localStayDays, setLocalStayDays] = useState(1);

  const isShortlisted = shortlist.some(item => item.id === id);
  const navigate = useNavigate();

  //metrics based on title
  const rating = title ? (4.2 + (title.length % 8) / 10).toFixed(1) : "4.8";
  const reviews = title ? 10 + (title.length % 30) * 4 : 45;
  const hostNames = ["Rahul", "Priya", "Amit", "Sneha", "Vikram", "Anjali"];
  const hostName = title ? hostNames[title.length % hostNames.length] : "Rahul";

  //Robust price parsing to handle cases like "₹40,000" or simple numbers
  const basePrice = parseInt(price?.toString().replace(/[^0-9]/g, "")) || 0;
  const totalPrice = basePrice * localStayDays;

  const handleShortlist = (e) => {
    e.stopPropagation();
    toggleShortlist({ id, image1, image2, image3, title, price, location, description, leaseType });
  };

  const handlePay = (e) => {
    e.stopPropagation();
    navigate('/Payment', {
      state: {
        property: { id, image1, title, price: totalPrice.toLocaleString(), location, leaseType }
      }
    });
  };

  const unitLabel = priceUnit === "month" ? "Months" : "Days";

  return (
    <div className='card-container'>
      <div className='card-img-wrapper'>
        {leaseType && (
          <span className={`lease-badge lease-${leaseType.toLowerCase().replace('-', '')}`}>
            {leaseType}
          </span>
        )}

        <div className="card-images">
          <img src={image1} className='cardimg' alt={title} />
          <img src={image2} className='cardimg' alt={`${title} 2`} />
          <img src={image3} className='cardimg' alt={`${title} 3`} />
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h2 className='cardtitle'>{title}</h2>
          <button
            className={`heart-btn ${isShortlisted ? 'active' : ''}`}
            onClick={handleShortlist}
          >
            {isShortlisted ? <AiFillHeart className="heart-filled" /> : <AiOutlineHeart className="heart-empty" />}
          </button>
        </div>

        {location && <span className='cardlocation'>{location}</span>}

        <div className="card-trust-metrics">
          <div className="card-rating">
            <AiFillStar className="star-icon" />
            <span className="rating-score">{rating}</span>
            <span className="rating-count">({reviews} reviews)</span>
          </div>
          <div className="card-host">
            <div className="host-avatar">{hostName.charAt(0)}</div>
            <span className="host-name">Hosted by {hostName}</span>
            <BsShieldCheck className="verified-icon" title="Verified Host" />
          </div>
        </div>

        {description && <p className='carddescription'>{description}</p>}

        <div className="card-duration-card">
          <span className="duration-label-inline">{unitLabel} stay:</span>
          <div className="card-duration-controls">
            <button
              className="card-duration-btn"
              onClick={() => setLocalStayDays(Math.max(1, localStayDays - 1))}
            >-</button>
            <span className="card-duration-val">{localStayDays}</span>
            <button
              className="card-duration-btn"
              onClick={() => setLocalStayDays(localStayDays + 1)}
            >+</button>
          </div>
        </div>

        <div className="card-footer">
          <div className="price-container">
            <span className='cardprice'>₹{totalPrice.toLocaleString()}</span>
            <span className="price-label">
              {localStayDays > 1 ? `total for ${localStayDays} ${unitLabel.toLowerCase()}` : `per ${priceUnit}`}
            </span>
          </div>
          <div className="pay-action-group">
            <div className="secure-tag"><BsShieldCheck /> Secure</div>
            <button className="card-pay-btn" onClick={handlePay}>Book & Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card
