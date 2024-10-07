import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='vh-100' style={{background:"silver"}}>
    <div className='container row'>
    <div className='col-sm-6 col-12 p-5'>
        <img className='me-5' src="https://static.vecteezy.com/system/resources/previews/010/869/741/non_2x/faq-concept-illustration-people-looking-through-magnifying-glass-at-interrogation-point-searching-solutions-useful-information-customer-support-solving-problem-free-png.png" width='100%' height='100%' alt="" />
    </div>
    <div className=' mt-5 col-12 col-sm-6 align-items-center justify-content-center d-flex'>
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <Link to='/create' className='btn btn-dark px-4 '>Add New Contact</Link>
        <Link to='/home' className='btn btn-dark  mt-5 px-5'>View Contact</Link>
        </div>
    </div>
    
    </div>
    
         
    </div>
    </>
  )
}

export default Landing