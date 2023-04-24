import React from 'react'
import add_image from './../Images/Add_image.png'
function NewStory() {
  return (
    <div className='mt-[8vh] sm:mt-[8vh] w-screen sm:w-screen bg-slate-50 py-6'>
        
          <form className='w-full sm:w-[70rem] max-w-screen-xl mx-auto bg-slate-300/30 flex flex-col gap-6 px-10 py-12 rounded-xl'>
            <h3 className='font-bold text-2xl text-slate-500'>Add Story</h3>
            <input type='text' placeholder='Title' className='p-2 rounded-lg '></input>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your story here..."></textarea>
            <div className=' flex flex-col gap-2'>
              <div className='added_images flex'>
                <div className='relative bg-gray-300 w-28 h-28 flex items-center justify-center rounded-lg' >
                  <p className='text-lg w-14 text-gray-500 text-center'>Add images</p>
                </div>
              </div>
            </div>
            <button className='bg-blue-500 self-center py-3 px-6 rounded-lg text-white'>Save</button>
          </form>
        
    </div>
  )
}

export default NewStory