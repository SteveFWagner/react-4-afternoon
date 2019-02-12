import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


 
export default class Student extends Component {
  constructor() {
    super()
    this.state={
      studentInfo:{},
      class:``
    }
  }

  componentDidMount(){

    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res=>{
      console.log(res)
      this.setState({
        studentInfo: res.data,
        class: res.data.class
      })
    })
    // console.log("Current state @ student",this.state)
  }

  render() {
    let {first_name, last_name, grade,email} = this.state.studentInfo
    
    console.log(this.props)
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{first_name} {last_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
        <Link to={`/classlist/${this.state.class}`}><button><h1>BACK!</h1></button></Link>
      </div>
    )
  }
}