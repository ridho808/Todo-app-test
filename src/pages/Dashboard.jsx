import React, { Component } from 'react'
import Navigation from '../component/Navigation'
import Islus from '../assets/ilus.png'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            Data : [{}],
        }
        this.getDelete = this.getDelete.bind(this)
    }
   async FetchData (){
        try {
            const Respons = await axios.get('https://floating-mountain-35184.herokuapp.com/activity-groups')
            const Datas = Respons.data;
            setTimeout(()=>{
                this.setState({Data : Datas.data});
            },200)
            console.log(Datas.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    async getDelete(value){
       await axios.delete(`https://floating-mountain-35184.herokuapp.com/activity-groups/${value}`);
       
    }
    componentDidMount(){
        this.FetchData()
    }
  render() {
    return (
      <>
        <Navigation/>
        <main className='max-w-screen-xl mx-auto'>
            <div className='flex justify-end'>
                <Link to={'/add'} className='bg-sky-400 p-5 mt-4 font-bold text-white rounded-lg'> ADD ACTIVITY</Link>
            </div>
            {
                this.state.Data.length <= 1? 
            <div className='flex max-w-screen-xl flex-row mx-auto h-[90vh] justify-evenly items-center'>
                <img src={Islus} alt="ilustration" className='w-[400px] h-[250px]'/>
                <div className='w-[200px] h-[200px] border-[3px] border-sky-400 flex items-center justify-center'>
                    <AiOutlinePlus size={100} fill={'gray'}/>
                </div>
            </div> 
                :
            <div className='flex max-w-screen-xl flex-row flex-wrap justify-evenly'>
            {
                this.state.Data.map((res,i)=>{
                    return (
                        
                            <div   key={i} className='w-[300px] h-[200px] flex flex-col justify-between border-[4px] rounded-xl m-4 bg-white'>
                                <Link to={`/activity/${res.id}`} className='font-bold text-xl p-3 '>{res.email}</Link>
                                <p className='font-bold p-3'>{res.title}</p>
                                <div className='border-t-[3px] h-[34px] m-4 border-black flex flex-row justify-between'>
                                    <div>{res.created_at}</div>
                                    <button onClick={this.getDelete(res.id)} className='bg-gray-300 rounded-lg'><AiOutlineMinus size={30}/></button>
                                </div>
                            </div>
                    )
                })
            }
            </div>
            }
        </main>
      </>
    )
  }
}
