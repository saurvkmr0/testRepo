import { addDoc, collection } from 'firebase/firestore';
import {db} from "../config/firebase";
import { Formik,Form, Field } from 'formik';
import React, { useState,useEffect } from 'react'

const AddNewContact = () => {
 
  const addContact= async(contact)=>{
    try {
      const contactRef = collection(db,"contacts");
      await addDoc(contactRef, contact);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-[348px] h-[248px] bg-white absolute top-[164px] px-4 py-5">
      <Formik
        initialValues={{
          name:"",
          email:""
        }}
        onSubmit={(values)=>
        {
          addContact(values);
          console.log(values);
        }} 
      >
        <Form className='flex flex-col'>
            <label htmlFor='name' className='text-base pb-2'>Name</label>
            <Field className='h-10 mb-5 pl-[14px] border' name='name' type='text'></Field>
            <label htmlFor='email' className='text-base pb-2'>Email</label>
            <Field className='h-10 mb-5 pl-[14px] border' name='email' type='email'></Field>
            <div className='flex justify-end'>
            <button className='text-base w-[120px] h-[31px] bg-[#FCCA3F] border' type='submit'> Add Contact</button>
            </div>
        </Form>
      </Formik>
    </div>
  )
}

export default AddNewContact