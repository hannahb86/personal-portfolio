import React from 'react'

const ContactForm = () => {
  return (
    <div id='contact' className='max-w-[700px] m-auto md:p-40 py-16'>
        <h1 className='text-4xl font-bold text-center text-indigo-900'>Contact</h1>
        <form action='https://getform.io/f/b000d23a-326d-489e-99a7-f8faa9818df3' method='POST' encType='multipart/form-data'>

            <div className='grid md:grid-cols-2 gap-4 w-[700px] py-2 px-4'>

                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' id='name' required />
                </div>

                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone' />
                </div>
            </div>
                <div className='flex flex-col py-2 px-4'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' required />
                </div>

                <div className='flex flex-col py-2 px-4'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' required />
                </div>

                <div className='flex flex-col py-2 px-4'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'></textarea>
                </div>
                
                <div className='flex flex-col py-2 px-4'>
                    <button className='bg-indigo-900 text-white mt-4 w-full rounded-lg p-4'>Send Message</button>
                </div>
                
            
        </form>

    </div>
  )
}

export default ContactForm
