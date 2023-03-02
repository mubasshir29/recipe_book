import React from 'react'

function CategoryBox({category}) {
  return (
    <div className='relative w-62 h-64 bg-slate-200'>
      <img src={category.image} className="object-cover" />
        <div className='absolute bottom-0 w-full h-12 bg-slate-300  opacity-50 flex flex-col items-center justify-center'>
          <p>Category name</p>
        </div>
    </div>
  )
}

export default CategoryBox