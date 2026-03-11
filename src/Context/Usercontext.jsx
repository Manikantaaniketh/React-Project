import React, { createContext, useState } from 'react'
export let dataContext = createContext()
function Usercontext({ children }) {
  let [title, setTitle] = useState("")
  let [addListing, setaddListing] = useState(false)
  let [addImage1, setaddImage1] = useState(null)
  let [addImage2, setaddImage2] = useState(null)
  let [addImage3, setaddImage3] = useState(null)
  let [price, setprice] = useState(null)
  let [location, setlocation] = useState("")
  let [description, setDescription] = useState("")
  let [searchQuery, setSearchQuery] = useState("")
  let [shortlist, setShortlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('shortlist') || '[]')
    } catch { return [] }
  })

  const toggleShortlist = (listing) => {
    setShortlist(prev => {
      const exists = prev.find(item => item.id === listing.id)
      const updated = exists
        ? prev.filter(item => item.id !== listing.id)
        : [...prev, listing]
      localStorage.setItem('shortlist', JSON.stringify(updated))
      return updated
    })
  }

  let value = {
    title, setTitle,
    addListing, setaddListing,
    addImage1, setaddImage1,
    addImage2, setaddImage2,
    addImage3, setaddImage3,
    price, setprice,
    location, setlocation,
    description, setDescription,
    searchQuery, setSearchQuery,
    shortlist, toggleShortlist
  }
  return (
    <div>
      <dataContext.Provider value={value}>
        {children}
      </dataContext.Provider>
    </div>
  )
}

export default Usercontext
