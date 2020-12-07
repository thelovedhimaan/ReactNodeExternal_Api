import React, { useState } from 'react';
import './Form.css';

const axios = require('axios').default;
function Form() {
   const [state, setstate] = useState('');
   const [Result, setResult] = useState([]);
   const [Load, setLoad] = useState(false);
   const handleChange = (evt) => {
      setstate(evt.target.value);
   };
   const handleSubmit = (evt) => {
      setLoad(true);
      evt.preventDefault();
      axios
         .post('http://localhost:5000/', {
            Name: state,
         })
         .then((response) => {
            setLoad(false);
            setResult(response.data);
            console.log(response.data);
         })
         .catch((error) => {
            console.log(error);
            alert(error);
            setLoad(false);
         });
   };

   if (Load) {
      return (
         <div className="colors" style={{ paddingTop: '200px' }}>
            <div className="JokeList-spinner">
               <i className="far fa-8x fa-laugh fa-spin"></i>
               <h1 className="JokeList-title">Loading...</h1>
            </div>
         </div>
      );
   } else {
      return (
         <div className="container">
            <div>
               <h1>Enter Roll No</h1>
               <form onSubmit={handleSubmit}>
                  <input
                     className="button"
                     placeholder="Search"
                     value={state}
                     onChange={handleChange}
                  ></input>
                  <br></br>
                  <br></br>
                  <button className="button">Search</button>
               </form>
               <h2>{Result}</h2>
            </div>
         </div>
      );
   }
}
export default Form;
