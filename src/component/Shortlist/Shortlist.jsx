import React, { useContext } from 'react'
import './Shortlist.css'
import Card from '../Card/Card'
import { dataContext } from '../../Context/Usercontext'
import { MdFavoriteBorder } from 'react-icons/md'

function Shortlist() {
    const { shortlist } = useContext(dataContext)

    return (
        <div id='shortlist'>
            <h2 className='shortlist-heading'>Your Shortlisted Properties</h2>
            {shortlist.length > 0 ? (
                <div className='shortlist-grid'>
                    {shortlist.map((listing, index) => (
                        <Card
                            key={index}
                            id={listing.id}
                            image1={listing.image1}
                            image2={listing.image2}
                            image3={listing.image3}
                            title={listing.title}
                            price={listing.price}
                            location={listing.location}
                            description={listing.description}
                            leaseType={listing.leaseType}
                        />
                    ))}
                </div>
            ) : (
                <div className='shortlist-empty'>
                    <MdFavoriteBorder className='shortlist-empty-icon' />
                    <h3>No properties shortlisted yet</h3>
                    <p>Click the ❤️ icon on any property to save it here.</p>
                </div>
            )}
        </div>
    )
}

export default Shortlist
