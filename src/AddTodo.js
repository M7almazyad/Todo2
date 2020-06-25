import React, {Component} from 'react';
import './AddTodo.css'
import { useAlert } from 'react-alert'

class AddTodo extends Component{
    state={
        content:'',
    }
    handleChange =(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })

    }
    handleUpdate =(todo)=> {
    this.setState({
        content:todo.content
    })
    }

        render() {
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <div className="row" >
                    <input className="ml-2 col-8" type="text" onChange={this.handleChange} value={this.state.content}/>
                    {/*<a className="waves-effect waves-light btn blue"onClick={this.handleSubmit} >Add</a>*/}
                    <button className=" ml-2 " id="add">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo;
