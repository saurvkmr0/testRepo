import React from 'react'
import Card from './Card'

const Content = ({searchData, btnValue}) => {
  return (
    <div className='content flex items-center justify-center pt-5'>
      <div className='card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
        <Card searchData={searchData} btnValue={btnValue}/>
      </div>
    </div>
  );
}

export default Content;