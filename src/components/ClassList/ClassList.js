import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state={
      students:[]
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res=>{
      // console.log(res.data)
      this.setState({
        students: res.data
      })
    })
    console.log("match.props @ ClassList", this.props.match.params.class)
  }

  render() {
    let mapped = this.state.students.map((val,i,arr) => {
      let {first_name, last_name, id} = val
      return(
        <Link to={`/student/${id}`}>
          <h3 >
            {first_name} {last_name}
          </h3>
        </Link>
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
          {mapped}
        <Link to="/"><button><h1>BACK TO HOME!</h1></button></Link>
      </div>
    )
  }
}