import React from 'react'
import { AiFillWarning } from 'react-icons/ai'

export default function modals(props) {
  return (
    <div className='flex flex-col justify-evenly items-center w-[35%] h-[400px] mx-auto border absolute top-28 left-[32%] bg-white rounded-xl'>
        <AiFillWarning fill='red' size={80} />
        <div className='text-2xl font-bold'>
            Apakah anda yakin ingin menghapus {props.activity}
        </div>
        <div className='flex flex-row w-[400px] justify-between'>
            <button className='w-[120px] p-2 bg-gray-400 text-black'>
                Batal
            </button>
            <button className='w-[120px] p-2 bg-red-500 text-white'>
                Hapus
            </button>
        </div>
    </div>
  )
}
