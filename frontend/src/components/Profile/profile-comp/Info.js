import React from 'react'

const Info = () => {
  return (
        <div className="ml-[0.1rem]">
            <h3 className="ml-[5.5rem] font-bold text-xl">Personal Information</h3>
            <table className="tab text-[1.1rem] rounded-[7px] p-3 text-center h-64 w-96 bg-[rgb(235, 233, 233)] shadow-lg transition duration-500 ease-in-out">
                <tr>
                <td>Name:</td>
                <td>David Smith</td>
                </tr>
                <tr>
                <td>E-Mail:</td>
                <td><a href="mailto:abcd@gmail.com" id="mail">abcd@gmail.com</a></td>
                </tr>
                <tr>
                <td>Phone:</td>
                <td>8989121212</td>
                </tr>
                <tr>
                <td>Address:</td>
                <td>Civil Lines, Lucknow</td>
                </tr>
            </table>
        </div>
  )
}

export default Info




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Info = () => {
//     const [personalInfo, setPersonalInfo] = useState({});

//     useEffect(() => {
//         // Fetch personal information from the backend when the component mounts
//         fetchPersonalInfo();
//     }, []);

//     const fetchPersonalInfo = async () => {
//         try {
//             // Make a GET request to fetch personal information from the backend API
//             const response = await axios.get('/api/personal-info'); // Replace '/api/personal-info' with your actual backend endpoint
//             // Assuming the response contains personal information in JSON format
//             setPersonalInfo(response.data);
//         } catch (error) {
//             console.error('Error fetching personal information:', error);
//         }
//     };

//     return (
//         <div className="ml-[0.1rem]">
//             <h3 className="ml-[5.5rem] font-bold text-xl">Personal Information</h3>
//             <table className="text-[1.1rem] rounded-[7px] p-3 text-center h-64 w-96 bg-[rgb(235, 233, 233)] shadow-lg transition duration-500 ease-in-out">
//                 <tr>
//                     <td>Name:</td>
//                     <td>{personalInfo.name}</td>
//                 </tr>
//                 <tr>
//                     <td>E-Mail:</td>
//                     <td><a href={`mailto:${personalInfo.email}`} id="mail">{personalInfo.email}</a></td>
//                 </tr>
//                 <tr>
//                     <td>Phone:</td>
//                     <td>{personalInfo.phone}</td>
//                 </tr>
//                 <tr>
//                     <td>Address:</td>
//                     <td>{personalInfo.address}</td>
//                 </tr>
//             </table>
//         </div>
//     );
// };

// export default Info;
