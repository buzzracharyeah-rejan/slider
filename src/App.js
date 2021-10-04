import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [value, setValue] = useState(0); 
  const [people, setPeople] = useState(data); 
  

  const checkValue = value => {
    if(value < 0) {
      return data.length - 1; 
    } else if(value === data.length - 1) {
      return 0; 
    }
    return value; 
  }

  const prev = () => {
    const newValue = checkValue(value - 1); 
    setValue(newValue); 
  }

  const next = () => {
    const newValue = checkValue(value + 1); 
    setValue(newValue); 
  }

  const {id, name, title, image, quote} = people[value]; 
  return (
    <main>
      <section className="section">
          <div className="title">
            <h3>
            <span className="text">/</span>
            reviews
            </h3>
          </div>
          <article className="section-center">
          <img src={image} alt={title} className="person-img" />
            <div>
              <h4>{name}</h4>
              <h4 className='title'>{title}</h4>
              <p className="text">{quote}</p>
              <span className="icon"><FaQuoteRight /></span>
            </div>
            <div className="">
              <FiChevronRight className='next'
               onClick= {() => next()}/>
              <FiChevronLeft className='prev'
               onClick= {() => prev()}/>
            </div>
          </article>
        </section>
    </main>
  
    )
}

export default App;
