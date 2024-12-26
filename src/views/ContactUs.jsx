import React from 'react';
import './contactUs.css';
export default function ContactUS() {

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-3">Contact Us</h2>
            <form className="mx-auto mt-4" style={{ maxWidth: '400px' }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className="form-control"
                        placeholder="Enter your phone"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="issue" className="form-label">
                        Issue
                    </label>
                    <input
                        type="text"
                        id="issue"
                        className="form-control"
                        placeholder="Describe your issue"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-sm w-50 me-2">
                        Send
                    </button>
                    <button type="reset" className="btn btn-primary btn-sm w-50">
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}