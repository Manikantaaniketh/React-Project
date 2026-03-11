import React, { useContext, useState } from 'react'
import "./Listing.css"
import { IoMdAddCircleOutline } from "react-icons/io"
import { MdOutlineTitle, MdOutlineDescription, MdOutlineLocationOn, MdOutlineCurrencyRupee } from "react-icons/md"
import { BsImage } from "react-icons/bs"
import { dataContext } from '../../Context/Usercontext'

function Listing() {
  const {
    title, setTitle,
    setaddListing,
    setaddImage1, setaddImage2, setaddImage3,
    price, setprice,
    location, setlocation,
    description, setDescription
  } = useContext(dataContext)

  const [preview1, setPreview1] = useState(null)
  const [preview2, setPreview2] = useState(null)
  const [preview3, setPreview3] = useState(null)

  const handleImage = (e, setImg, setPreview) => {
    const file = e.target.files[0]
    if (file) {
      setImg(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setaddListing(true)
    alert("Your property has been listed successfully! 🏠👍")
  }

  return (
    <div id="Listing">
      <div className="listing-container">

        <div className="listing-form-side">
          <div className="listing-header">
            <h1>List Your Property</h1>
            <p>Fill in the details below to add your property to Lease Hub</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="listing-field">
              <label htmlFor="title">
                <MdOutlineTitle className="field-icon" /> Property Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="e.g. 2BHK Modern Flat in Hyderabad"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="listing-field">
              <label htmlFor="des">
                <MdOutlineDescription className="field-icon" /> Description
              </label>
              <textarea
                id="des"
                rows="4"
                placeholder="Describe your property — amenities, nearby locations, highlights..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="listing-row">
              <div className="listing-field">
                <label htmlFor="price">
                  <MdOutlineCurrencyRupee className="field-icon" /> Price / Month (₹)
                </label>
                <input
                  type="text"
                  id="price"
                  placeholder="e.g. 15,000"
                  required
                  value={price}
                  onChange={(e) => setprice(e.target.value)}
                />
              </div>
              <div className="listing-field">
                <label htmlFor="loc">
                  <MdOutlineLocationOn className="field-icon" /> Location
                </label>
                <input
                  type="text"
                  id="loc"
                  placeholder="e.g. Banjara Hills, Hyderabad"
                  value={location}
                  onChange={(e) => setlocation(e.target.value)}
                />
              </div>
            </div>

            <div className="listing-images-section">
              <label><BsImage className="field-icon" /> Property Images</label>
              <div className="listing-image-row">
                {[
                  { id: 'img1', label: 'Image 1', preview: preview1, handler: (e) => handleImage(e, setaddImage1, setPreview1) },
                  { id: 'img2', label: 'Image 2', preview: preview2, handler: (e) => handleImage(e, setaddImage2, setPreview2) },
                  { id: 'img3', label: 'Image 3', preview: preview3, handler: (e) => handleImage(e, setaddImage3, setPreview3) },
                ].map(({ id, label, preview, handler }) => (
                  <label key={id} className="img-upload-box" htmlFor={id}>
                    {preview
                      ? <img src={preview} alt={label} className="img-preview" />
                      : <div className="img-placeholder"><BsImage /><span>{label}</span></div>
                    }
                    <input type="file" id={id} accept="image/*" required onChange={handler} hidden />
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" id="listbtn">
              Add Listing <IoMdAddCircleOutline />
            </button>
          </form>
        </div>

        <div className="listing-info-side">
          <div className="listing-info-card">
            <h2>Why List on Lease Hub?</h2>
            <ul>
              <li>✅ Reach thousands of property seekers</li>
              <li>✅ Free to list — no hidden charges</li>
              <li>✅ Instant visibility on the platform</li>
              <li>✅ Easy management of your listings</li>
              <li>✅ Short-Stay, Monthly & Yearly options</li>
            </ul>
          </div>
          <div className="listing-tips-card">
            <h3>📸 Tips for a Great Listing</h3>
            <p>Upload clear, well-lit photos from multiple angles.</p>
            <p>Write a detailed description with nearby landmarks.</p>
            <p>Set a competitive price to attract more inquiries.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Listing
