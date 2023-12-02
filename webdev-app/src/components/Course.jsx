import React from 'react'
import { Link } from 'react-router-dom'
// Based on the role given do it. Don't change it unless you are not assigned
const Course = () => {
  return (
    <>
    <div  className='pt-12'>
      <div className=' pl-16 font-bold font-serif'>
        <h1 className='text-5xl'>Choose Your Course</h1>
    </div>
    </div>
    <div className='flex justify-between pl-20 pr-20 pt-16 '>
    <Link to='/CSE'>
    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <img className="h-20" src="/src/assets/books.png" alt="" />
          <hr />
          <button><strong>CSE</strong></button>
        </button>
      </Link>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      <img className="h-20 flex pl-5" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>MECHANICAL</strong></button>
      </button>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      <img className="h-20 flex pl-5" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>ELECTRICAL</strong></button>
      </button>
    </div>
    <div className='flex justify-between pl-48 pr-52 pt-16 '>
    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      <img className="h-20" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>ELECTRICAL</strong></button>
    </button>
    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      <img className="h-20" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>ELECTRICAL</strong></button>
    </button>
    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      <img className="h-20" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>ELECTRICAL</strong></button>
    </button>
    </div>
    <div className='flex justify-between pl-20 pr-20 pt-16 '>
    <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      <img className="h-20" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>CSE</strong></button>
      </button>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      <img className="h-20" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>MECHANICAL</strong></button>
      </button>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      <img className="h-20" src="/src/assets/books.png" alt="" />
      <hr />
      <button><strong>ELECTRICAL</strong></button>
      </button>
    </div>
    </>
  )
}

export default Course
