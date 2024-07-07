// import React, { useState } from 'react';

// const Form = () => {
//   const [inputValue, setInputValue] = useState({
//     name: "",
//     number: "",
//     email: "",
//     password: ""
//   });

//   const [error, setError] = useState({
//     nameerror: "",
//     numbererror: "",
//     emailerror: "",
//     passworderror: ""
//   });

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setInputValue((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//     validateInput(name, value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();

    
//     // Check if any of the input fields are empty
//     if (!inputValue.name || !inputValue.number || !inputValue.email || !inputValue.password) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (error.nameerror || error.numbererror || error.emailerror || error.passworderror) {
//       alert("Please fill the form correctly");
//     } else {
//       console.log(inputValue); // Log form values on submission
//       alert("Form submitted successfully");
//       // You can also submit the form data to an API or perform other actions here
//     }
//   }

//   function validateInput(name, value) {
//     let emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//     let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}$/;
//     let nameRegex = /^[a-zA-Z\s]+$/; // Allow alphabets and spaces in name
//     let numberRegex = /^[0-9]{10}$/;

//     switch (name) {
//       case "name":
//         setError((prev) => ({
//           ...prev,
//           nameerror: value.trim() === "" ? "This field is required" : value.split(' ').length < 2 ? "Write your Full Name" : !value.match(nameRegex) ? "Write your Full Name" : ""
//         }));
//         break;
//       case "number":
//         setError((prev) => ({
//           ...prev,
//           numbererror: value.trim() === "" ? "This field is required" : !value.match(numberRegex) ? "Write a valid number" : ""
//         }));
//         break;
//       case "email":
//         setError((prev) => ({
//           ...prev,
//           emailerror: value.trim() === "" ? "This field is required" : !value.match(emailRegex) ? "Email should contain @ and tld should be included" : ""
//         }));
//         break;
//       case "password":
//         setError((prev) => ({
//           ...prev,
//           passworderror: value.trim() === "" ? "This field is required" : !value.match(passRegex) ? "Password should contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be 8-15 characters long" : ""
//         }));
//         break;
//       default:
//         break;
//     }
//   }


//   return (
//     <>
//     <div className="main">
//       <div className="" >

//         <form onSubmit={handleSubmit}>

//           <h1 className="h1">Form Validation</h1>

//           <div className='form'>

//             <label htmlFor="fullname">Full Name : </label>
//             <input type="text" name="name" id="fullname" className="" onChange={handleInput} /> <br />
//             <p className='error'>{error.nameerror}</p>

//             <label htmlFor="number">Phone Number : </label>
//             <input type="text" name="number" id="number" className='' placeholder='' onChange={handleInput} /> <br />
//             <p className='error'>{error.numbererror}</p>

//             <label htmlFor="email">Email : </label>
//             <input type="email" name="email" id="email" className='' placeholder='' onChange={handleInput} /> <br />
//             <p className='error'>{error.emailerror}</p>

//             <label htmlFor="password">Password : </label>
//             <input type="password" name="password" id="password" className="" placeholder="" onChange={handleInput} />
//             <p className='error'>{error.passworderror}</p>

//           </div>

//           <br />
//           <button type='submit' className='btn'>Submit</button>

//         </form>
//         </div>
//         </div>
//     </>
//   );
//  }

//  export default Form;

 import React, { useState } from 'react';

 const Form = () => {
   const [inputValue, setInputValue] = useState({
     name: "",
     number: "",
     email: "",
     password: ""
   });
 
   const [error, setError] = useState({
     nameerror: "",
     numbererror: "",
     emailerror: "",
     passworderror: ""
   });
 
   const [submitted, setSubmitted] = useState(false);
 
   const handleInput = (e) => {
     const { name, value } = e.target;
     setInputValue((prev) => ({
       ...prev,
       [name]: value
     }));
     validateInput(name, value);
   }
 
   const handleSubmit = (e) => {
     e.preventDefault();
     
     // Check if any of the input fields are empty
     if (!inputValue.name || !inputValue.number || !inputValue.email || !inputValue.password) {
       alert("Please fill all fields");
       return;
     }
 
     // Check if there are any validation errors
     if (error.nameerror || error.numbererror || error.emailerror || error.passworderror) {
       alert("Please fill the form correctly");
     } else {
       console.log(inputValue); // Log form values on submission
       setSubmitted(true); // Set submitted state to true
     }
   }
 
   function validateInput(name, value) {
     let emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
     let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}$/;
     let nameRegex = /^[a-zA-Z\s]+$/; // Allow alphabets and spaces in name
     let numberRegex = /^[0-9]{10}$/;
 
     switch (name) {
       case "name":
         setError((prev) => ({
           ...prev,
           nameerror: value.trim() === "" ? "This field is required" : value.split(' ').length < 2 ? "Write your Full Name" : !value.match(nameRegex) ? "Write your Full Name" : ""
         }));
         break;
       case "number":
         setError((prev) => ({
           ...prev,
           numbererror: value.trim() === "" ? "This field is required" : !value.match(numberRegex) ? "Write a valid number" : ""
         }));
         break;
       case "email":
         setError((prev) => ({
           ...prev,
           emailerror: value.trim() === "" ? "This field is required" : !value.match(emailRegex) ? "Email should contain @ and tld should be included" : ""
         }));
         break;
       case "password":
         setError((prev) => ({
           ...prev,
           passworderror: value.trim() === "" ? "This field is required" : !value.match(passRegex) ? "Password should contain at least 1 digit, 1 lowercase letter, 1 uppercase letter, 1 special character, and be 8-15 characters long" : ""
         }));
         break;
       default:
         break;
     }
   }
 
   // Render a success message and hide the form if submitted is true
   if (submitted) {
     return (
       <div className="main">
         <div className="success">
           <p className='p'><i class="fa-solid fa-circle-check"></i></p>
           <h1 className='h1'>Form Submitted Successfully!</h1>
         </div>
       </div>
     );
   }
 
   // Render the form if not submitted
   return (
     <div className="main">
       <form onSubmit={handleSubmit}>
 
         <h1 className="h1">Form Validation</h1>
 
         <div className='form'>
 
           <label htmlFor="fullname">Full Name : </label>
           <input type="text" name="name" id="fullname" className="" onChange={handleInput} />
           <br />
           <p className='error'>{error.nameerror}</p>
 
           <label htmlFor="number">Phone Number : </label>
           <input type="text" name="number" id="number" className="" onChange={handleInput} />
           <br />
           <p className='error'>{error.numbererror}</p>
 
           <label htmlFor="email">Email : </label>
           <input type="email" name="email" id="email" className=""  onChange={handleInput} />
           <br />
           <p className='error'>{error.emailerror}</p>
 
           <label htmlFor="password">Password : </label>
           <input type="password" name="password" id="password" className=""  onChange={handleInput} />
           <br />
           <p className='error'>{error.passworderror}</p>
 
         </div>
 
         <br />
         <button type='submit' className='btn'>Submit</button>
 
       </form>
     </div>
   );
 }
 
 export default Form;
 