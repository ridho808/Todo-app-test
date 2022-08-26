import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navigation from '../component/Navigation';
import Islus from '../assets/ilus.png'

export default function Details() {
     const [Datas,setDatas] = useState([]);
     const [Activ,setActiv] = useState([]);
     const {id} = useParams();
     const Details = async ()=>{
      const res = await axios.get(`https://floating-mountain-35184.herokuapp.com/activity-groups/${id}`);
      setDatas([res.data.data]);
     }
     const Activity = async ()=>{
      const res = await axios.get(`https://floating-mountain-35184.herokuapp.com/todo-items?activity_group_id=999999`);
      setActiv([res.data.data]);
     }
     console.log(Datas)
     console.log(Activ,"active")
     useEffect(()=>{
      Details();
      Activity();
     },[])
  return (
      <>
        <Navigation/>
        <main>
          <div className='max-w-[70%] mx-auto flex justify-between flex-row mt-4'>
            <Link to={'/'} className='font-bold text-4xl'>{'<'} New Activity</Link>
            <Link to={'/add'} className='p-5 w-[200px] text-center font-bold text-2xl text-white bg-sky-400 rounded-[30px]'>Tambah</Link>
          </div>
          <div className='flex flex-row justify-center items-center h-[50vh] w-[90%] mx-auto mt-6 '>
              <img src={Islus} className='object-contain w-[400px]'/>
              <h1 className='text-5xl text-gray-800 font-extrabold'>Empety List.....</h1>
          </div>
        </main>
      </>
  )
}
