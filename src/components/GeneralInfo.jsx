import { useState } from 'react';


function GeneralInfo() {
   const [editing, setEditing] = useState(true);
   const [info, setInfo] = useState({
       name: '',
       email: '',
       phone: ''
   });

   const handleInputChange = (e) => {
       const { name, value } = e.target;
       setInfo(prevInfo => ({ ...prevInfo, [name]: value }));
   };

   const toggleEdit = () => {
       setEditing(!editing);
   };

   return editing ? (
       <div>
           <input name="name" value={info.name} onChange={handleInputChange} placeholder="Name"/>
           <input name="email" value={info.email} onChange={handleInputChange} placeholder="Email"/>
           <input name="phone" value={info.phone} onChange={handleInputChange} placeholder="Phone"/>
           <button onClick={toggleEdit}>Submit</button>
       </div>
   ) : (
       <div>
           <p>Name: {info.name}</p>
           <p>Email: {info.email}</p>
           <p>Phone: {info.phone}</p>
           <button onClick={toggleEdit}>Edit</button>
       </div>
   );
}

export default GeneralInfo;
