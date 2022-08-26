import axios from 'axios';
import React, { Component } from 'react'
import Navigation from '../component/Navigation'

export default class TambahActi extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            title : ''
        }
        this.changemail = this.changemail.bind(this);
        this.changetitle = this.changetitle.bind(this);
        this.SubmitEvent = this.SubmitEvent.bind(this);
    }
    changemail(e){
        this.setState({email : e.target.value});
    }
    changetitle(e){
        this.setState({title : e.target.value});
    }
    SubmitEvent(event){
        event.preventDefault();
        const activity ={
            email: this.state.email,
            title : this.state.title
        }
        console.log(activity)
        axios.post('https://floating-mountain-35184.herokuapp.com/activity-groups',activity);
        alert('activity Berhasil Ditambahkan')
        setTimeout(() => {
            window.location.href='/'
        },200)
    }
    render(){
        return (
            <>
                <Navigation/>
                <main>
                    <div className='max-w-screen-xl mx-auto'>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.SubmitEvent}>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input value={this.state.email} onChange={this.changemail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" required/>
                            </div>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Title
                            </label>
                            <input value={this.state.title} onChange={this.changetitle} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder='Title' required/>
                            </div>
                            <button type="submit" className="mt-6 bg-sky-400 w-[300px] self-center p-2 text-white rounded-lg">Create Activity</button>
                        </form>
                    </div>
                </main>
            </>        
        )
    }
}
