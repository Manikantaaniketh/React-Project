import React, { useState } from 'react'
import "./Contact.css"
import { TbFileLike } from "react-icons/tb"
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn, MdHelpOutline, MdPayment, MdOutlineSecurity, MdHomeWork } from "react-icons/md"

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({ username: '', mail: '', subject: '', message: '' })

  const faqs = [
    { q: "How do I book a property?", a: "To book a property, simply click on the listing you like and use the contact form to reach out to the owner or manager directly." },
    { q: "How can I list my own home?", a: "Click on the 'List Your Home' button in the navigation bar, fill in the details, and your property will be live on Lease Hub instantly." },
    { q: "Is Lease Hub free to use?", a: "Yes, searching for properties and listing your basic home is completely free for all users." },
    { q: "How do I verify a listing?", a: "We recommend visiting the property in person and verifying all documents before making any payments." }
  ]

  const validate = () => {
    const newErrors = {}
    if (!form.username.trim()) {
      newErrors.username = 'Full name is required.'
    } else if (form.username.trim().length < 2) {
      newErrors.username = 'Name must be at least 2 characters.'
    }
    if (!form.mail.trim()) {
      newErrors.mail = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.mail)) {
      newErrors.mail = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message cannot be empty.'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const data = new FormData()
    data.append('username', form.username)
    data.append('mail', form.mail)
    data.append('subject', form.subject)
    data.append('message', form.message)

    fetch("https://formspree.io/f/mnnqkjyj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    }).then(res => {
      if (res.ok) {
        setSubmitted(true)
        setForm({ username: '', mail: '', subject: '', message: '' })
        setErrors({})
      }
    })
  }

  return (
    <div id='contact'>
      <div className="contact-header">
        <h1>Lease Hub Help Center</h1>
        <p>Find answers to common questions or reach out to our dedicated support team.</p>
      </div>

      <div className="help-center-content">

        <div className="support-categories">
          <div className="category-card">
            <MdHomeWork className="cat-icon" />
            <h3>Booking & Stays</h3>
            <p>Managing reservations, cancellations, and house rules.</p>
          </div>
          <div className="category-card">
            <MdHelpOutline className="cat-icon" />
            <h3>Hosting</h3>
            <p>How to list your property and manage tenant inquiries.</p>
          </div>
          <div className="category-card">
            <MdPayment className="cat-icon" />
            <h3>Payments</h3>
            <p>Information about rent, security deposits, and refunds.</p>
          </div>
          <div className="category-card">
            <MdOutlineSecurity className="cat-icon" />
            <h3>Trust & Safety</h3>
            <p>How we keep our community safe and verified.</p>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="direct-support-header">
          <h2>Still Need Help?</h2>
          <p>If you couldn't find your answer above, send us a message and we'll get back to you within 24 hours.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-card">
              <MdOutlinePhone className="info-icon" />
              <h3>Call Us</h3>
              <p>+91 9392776522</p>
              <p>Mon–Sat, 9am – 6pm</p>
            </div>
            <div className="info-card">
              <MdOutlineEmail className="info-icon" />
              <h3>Email Us</h3>
              <p>manikantabondugula@gmail.com</p>
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div className="contact-success">
                <TbFileLike className="success-icon" />
                <h2>Message Sent!</h2>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="list">
                    <label htmlFor="name1">Full Name <span className="required">*</span></label>
                    <input
                      name='username'
                      type="text"
                      id='name1'
                      placeholder="Your Name"
                      value={form.username}
                      onChange={handleChange}
                      className={errors.username ? 'input-error' : ''}
                    />
                    {errors.username && <span className="error-msg">{errors.username}</span>}
                  </div>
                  <div className="list">
                    <label htmlFor="mail">Email <span className="required">*</span></label>
                    <input
                      name='mail'
                      type="email"
                      id='mail'
                      placeholder="your@email.com"
                      value={form.mail}
                      onChange={handleChange}
                      className={errors.mail ? 'input-error' : ''}
                    />
                    {errors.mail && <span className="error-msg">{errors.mail}</span>}
                  </div>
                </div>

                <div className="list">
                  <label htmlFor="mess">How can we help? <span className="required">*</span></label>
                  <textarea
                    name='message'
                    id="mess"
                    rows="4"
                    placeholder="Describe your issue or question..."
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'input-error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-msg">{errors.message}</span>}
                </div>

                <button id="contactbtn" type="submit">
                  Send Message <TbFileLike />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
