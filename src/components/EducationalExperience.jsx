import { useState } from 'react';


function EducationalExperience() {
    const [editing, setEditing] = useState(true);
    const [education, setEducation] = useState({
        school: '',
        studyTitle: '',
        studyDate: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEducation(prev => ({ ...prev, [name]: value }));
    };

    const toggleEdit = () => {
        setEditing(!editing);
    };

    return editing ? (
        <div>
            <h3>Educational Experience</h3>
            <input name="school" value={education.school} onChange={handleInputChange} placeholder="School Name"/>
            <input name="studyTitle" value={education.studyTitle} onChange={handleInputChange} placeholder="Title of Study"/>
            <input name="studyDate" value={education.studyDate} onChange={handleInputChange} placeholder="Date of Study"/>
            <button onClick={toggleEdit}>Submit</button>
        </div>
    ) : (
        <div>
            <h3>Educational Experience</h3>
            <p>School: {education.school}</p>
            <p>Title of Study: {education.studyTitle}</p>
            <p>Date of Study: {education.studyDate}</p>
            <button onClick={toggleEdit}>Edit</button>
        </div>
    );
}

export default EducationalExperience;
