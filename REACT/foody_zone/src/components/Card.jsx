import React, { useState, useEffect } from 'react'
import Button from './Button'


const BASE_URL = "http://localhost:9000";

const Card = ({ searchData, btnValue }) => {

  const [foodData, setFoodData] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setFoodData(data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchFoodData();
  }, []);

  if (btnValue != 'all') {
    return(
    <>
        {foodData && foodData.filter(item => item.type.toLowerCase().includes(btnValue.toLowerCase()) && item.name.toLowerCase().includes(searchData.toLowerCase())).map(item => (
          <div className='glass-bg flex text-white border-solid border-white border-2 rounded-3xl' key={item.name}>
            <div><img className='food-img m-4' src={BASE_URL + item.image} /></div>
            <div className='w-44 py-4 flex flex-col justify-between'>
            <div>
              <h1 className='font-semibold text-base pb-2 bt-4 text-red-600'>{item.name}</h1>
              <p className='text-xs'>{item.text}</p>
              </div>
              <div className='flex justify-end mr-4'>
              <Button btnName={item.price.toFixed(2)} />
              </div>
            </div>
          </div>
        ))}

      </>
    )
  }

  else {
    return (
      <>
        {foodData && foodData.filter(item => item.name.toLowerCase().includes(searchData.toLowerCase())).map(item => (
          <div className='glass-bg flex text-white border-solid border-white border-2 rounded-3xl' key={item.name}>
            <div><img className='food-img m-4' src={BASE_URL + item.image} /></div>
            <div className='w-44 py-4 flex flex-col justify-between'>
              <div>
              <h1 className='font-semibold text-base pb-2 bt-4 text-red-600'>{item.name}</h1>
              <p className='text-xs'>{item.text}</p>
              </div>
              <div className='flex justify-end mr-4'>
              <Button btnName={item.price.toFixed(2)} />
              </div>
            </div>
          </div>
        ))}

      </>
    )
  }
}

export default Card;