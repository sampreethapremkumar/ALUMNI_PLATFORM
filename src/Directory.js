import React from 'react';
import './Directory.css'; // External CSS file for styling

const mentors = [
    { name: 'Lucas', role: 'Senior UI/UX Designer', match: '92%', image: 'lucas.jpg' },
    { name: 'Sarah', role: 'Content Writer', match: '87%', image: 'sarah.jpg' },
    { name: 'Varun', role: 'Actor', match: '72%', image: 'varun.jpg' },
    { name: 'Pooja', role: 'Programmer', match: '80%', image: 'pooja.jpg' },
    { name: 'Sonica Agarwal', role: 'Affiliate Marketer', match: '90%', image: 'sonica.jpg' },
    { name: 'Sanjeev', role: 'Product Manager', match: '100%', image: 'sanjeev.jpg' }
];

const Directory = () => {
    return (
        <div className="directory-container">
            <div className="sidebar">
                <div className="profile">
                    <img src="/path-to-profile-image.jpg" alt="Profile" />
                    <h3>John Smith</h3>
                    <p>johnsmith@gmail.com</p>
                </div>
                <ul className="menu">
                    <li>Dashboard</li>
                    <li>Alumni Directories</li>
                    <li>Job Opportunities</li>
                    <li>News Updates</li>
                    <li>Event Calendars</li>
                </ul>
            </div>
            <div className="main-content">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by name, batch, or company"
                        className="search-input"
                    />
                    <button className="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <h2>Directory</h2>
                <p>Recommended Mentors For You</p>
                <div className="card-container">
                    {mentors.map((mentor, index) => (
                        <div className="card" key={index}>
                            <img src={`/path-to-images/${mentor.image}`} alt={mentor.name} />
                            <h3>{mentor.name}</h3>
                            <p>{mentor.role}</p>
                            <div className="match">
                                <span>{mentor.match} Match</span>
                            </div>
                            <button className="view-profile-btn">View Profile</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Directory;
