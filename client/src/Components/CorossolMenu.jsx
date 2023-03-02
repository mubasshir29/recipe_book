import React from 'react'
import CategoryBox from './CategoryBox'
import image1 from './../Images/NonVeg_Biryani.jpg'
import image2 from './../Images/idli_dosa.jpg'
import image3 from './../Images/Aloo_Samosa_2.jpg'
import image4 from './../Images/Paneer-Butter-Masala-Nut-Free.jpg'
import image5 from './../Images/fuice_juice_blog_sm.jpg'

function CorossolMenu() {
  return (
    <div className='w-4/5 mx-auto flex justify-center gap-x-12 my-6 p-6'>
        <CategoryBox category={{image:image1, name: ""}}/>
        <CategoryBox category={{image:image2, name: ""}}/>
        <CategoryBox category={{image:image3, name: ""}}/>
        <CategoryBox category={{image:image4, name: ""}}/>
    </div>
  )
}

export default CorossolMenu