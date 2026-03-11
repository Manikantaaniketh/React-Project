import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineSecurity, MdPayment, MdAccountBalanceWallet, MdQrCodeScanner } from 'react-icons/md';
import { BsCreditCard2BackFill, BsShieldCheck } from 'react-icons/bs';
import './Payment.css';

function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const property = location.state?.property || {};

    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Calendar 
    const today = new Date().toISOString().split('T')[0];
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const basePerDay = parseInt(property.price?.toString().replace(/[^0-9]/g, '')) || 0;
    const nights = checkIn && checkOut
        ? Math.max(0, (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
        : 0;
    const baseAmount = basePerDay * (nights || 1);
    const serviceFee = Math.round(baseAmount * 0.12);
    const cleaningFee = Math.round(baseAmount * 0.05);
    const totalAmount = baseAmount + serviceFee + cleaningFee;
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiry: '',
        cvv: '',
        name: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);


        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);


            setTimeout(() => {
                navigate('/');
            }, 3000);
        }, 2500);
    };

    if (isSuccess) {
        return (
            <div className="payment-success-screen">
                <div className="success-icon-wrapper">
                    <BsShieldCheck className="success-check-icon" />
                </div>
                <h1>Payment Successful!</h1>
                <p>Congratulations! Your booking for <strong>{property.title}</strong> is confirmed.</p>
                <p className="redirect-note">Redirecting you to home page...</p>
            </div>
        );
    }

    return (
        <div id="PaymentPage">
            <div className="payment-container">


                <div className="payment-flow-side">
                    <div className="payment-header">
                        <h1>Secure Checkout</h1>
                        <p><MdOutlineSecurity /> Multi-layered encryption for your safety</p>
                    </div>

                    <div className="payment-methods">
                        <button
                            className={`method-tab ${paymentMethod === 'card' ? 'active' : ''}`}
                            onClick={() => setPaymentMethod('card')}
                        >
                            <BsCreditCard2BackFill /> Card
                        </button>
                        <button
                            className={`method-tab ${paymentMethod === 'upi' ? 'active' : ''}`}
                            onClick={() => setPaymentMethod('upi')}
                        >
                            <MdQrCodeScanner /> UPI
                        </button>
                        <button
                            className={`method-tab ${paymentMethod === 'net' ? 'active' : ''}`}
                            onClick={() => setPaymentMethod('net')}
                        >
                            <MdAccountBalanceWallet /> Net Banking
                        </button>
                    </div>

                    {paymentMethod === 'card' && (
                        <form className="payment-form" onSubmit={handlePayment}>
                            <div className="field-group">
                                <label>Cardholder Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="field-group">
                                <label>Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    maxLength="19"
                                    required
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-row">
                                <div className="field-group">
                                    <label>Expiry Date</label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        placeholder="MM/YY"
                                        maxLength="5"
                                        required
                                        value={formData.expiry}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="field-group">
                                    <label>CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        placeholder="xxx"
                                        maxLength="3"
                                        required
                                        value={formData.cvv}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <button type="submit" className={`pay-submit-btn ${isProcessing ? 'processing' : ''}`} disabled={isProcessing}>
                                {isProcessing ? 'Processing Transaction...' : `Pay ₹${property.price || '0'}`}
                            </button>
                        </form>
                    )}

                    {paymentMethod === 'upi' && (
                        <div className="upi-placeholder">
                            <MdQrCodeScanner className="big-icon" />
                            <p>Scan to Pay using any UPI App</p>
                            <div className="upi-apps-icons">
                                <span>GPay</span> <span>PhonePe</span> <span>Paytm</span>
                            </div>
                            <button className="pay-submit-btn" onClick={() => setIsSuccess(true)}>Confirm UPI Payment</button>
                        </div>
                    )}

                    {paymentMethod !== 'card' && paymentMethod !== 'upi' && (
                        <div className="upi-placeholder">
                            <MdAccountBalanceWallet className="big-icon" />
                            <p>Select your Bank to continue</p>
                            <select className="bank-select">
                                <option>SBI</option>
                                <option>HDFC</option>
                                <option>ICICI</option>
                                <option>Axis</option>
                            </select>
                            <button className="pay-submit-btn" onClick={() => setIsSuccess(true)}>Proceed to Net Banking</button>
                        </div>
                    )}
                </div>

                <div className="order-summary-side">
                    <div className="summary-card">
                        <h2>Order Summary</h2>
                        <div className="summary-property">
                            <img src={property.image1} alt={property.title} />
                            <div className="summary-info">
                                <h3>{property.title}</h3>
                                <p>{property.location}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="calendar-picker-section">
                            <h4 className="calendar-title">📅 Select Your Dates</h4>
                            <div className="calendar-row">
                                <div className="calendar-field">
                                    <label>Check-In</label>
                                    <input
                                        type="date"
                                        min={today}
                                        value={checkIn}
                                        onChange={e => { setCheckIn(e.target.value); setCheckOut(''); }}
                                        className="calendar-input"
                                    />
                                </div>
                                <div className="calendar-field">
                                    <label>Check-Out</label>
                                    <input
                                        type="date"
                                        min={checkIn || today}
                                        value={checkOut}
                                        onChange={e => setCheckOut(e.target.value)}
                                        className="calendar-input"
                                        disabled={!checkIn}
                                    />
                                </div>
                            </div>
                            {nights > 0 && (
                                <p className="nights-badge">🌙 {nights} night{nights > 1 ? 's' : ''} selected</p>
                            )}
                        </div>

                        <div className="summary-details">
                            <div className="detail-row">
                                <span>Lease Type</span>
                                <span>{property.leaseType || 'Short Stay'}</span>
                            </div>
                            <div className="detail-row">
                                <span>Base Amount {nights > 0 ? `(${nights} nights)` : ''}</span>
                                <span>₹{baseAmount.toLocaleString()}</span>
                            </div>
                            <div className="detail-row">
                                <span>Service Fee (12%)</span>
                                <span>₹{serviceFee.toLocaleString()}</span>
                            </div>
                            <div className="detail-row">
                                <span>Cleaning Fee (5%)</span>
                                <span>₹{cleaningFee.toLocaleString()}</span>
                            </div>
                            <div className="detail-row total-row">
                                <span>Total</span>
                                <span className="bold-price">₹{totalAmount.toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="secure-badge">
                            <BsShieldCheck /> SSL Secured Checkout
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Payment;
