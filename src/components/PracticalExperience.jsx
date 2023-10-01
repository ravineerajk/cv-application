// eslint-disable-next-line no-unused-vars
import { useState } from 'react';


function PracticalExperience() {
    const [editing, setEditing] = useState(true);
    const [experience, setExperience] = useState({
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        fromDate: '',
        toDate: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExperience(prev => ({ ...prev, [name]: value }));
    };

    const toggleEdit = () => {
        setEditing(!editing);
    };

    return editing ? (
        <div>
            <h3>Practical Experience</h3>
            <input name="companyName" value={experience.companyName} onChange={handleInputChange} placeholder="Company Name"/>
            <input name="positionTitle" value={experience.positionTitle} onChange={handleInputChange} placeholder="Position Title"/>
            <textarea name="responsibilities" value={experience.responsibilities} onChange={handleInputChange} placeholder="Main Responsibilities"></textarea>
            <input name="fromDate" value={experience.fromDate} onChange={handleInputChange} placeholder="From Date (e.g., Jan 2020)"/>
            <input name="toDate" value={experience.toDate} onChange={handleInputChange} placeholder="To Date (e.g., Dec 2021)"/>
            <button onClick={toggleEdit}>Submit</button>
        </div>
    ) : (
        <div>
            <h3>Practical Experience</h3>
            <p>Company Name: {experience.companyName}</p>
            <p>Position Title: {experience.positionTitle}</p>
            <p>Responsibilities: {experience.responsibilities}</p>
            <p>Worked From: {experience.fromDate} - To: {experience.toDate}</p>
            <button onClick={toggleEdit}>Edit</button>
        </div>
    );
}

export default PracticalExperience;
