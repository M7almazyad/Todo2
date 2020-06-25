import React, {Component} from "react";
import './Todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

class Todos extends Component{
state={
    flag : true,
}

     Flag=()=>{
    let isEdit=this.state.flag
       this.setState({
         flag:!isEdit
       })
    }
    updateTodo=(e)=>{
        e.preventDefault();
        let todoUp=this.props.todo;
        todoUp.content=this.input.value
        this.props.editTodo(this.props.todo.id,todoUp);
        this.Flag();
    }


    renderTodo=()=>{
    return(
        <div>
            <div className="row " key={this.props.todo.id}>
                <div className="col-7 ">
                    <p >- {this.props.todo.content} </p>
                </div>
                <div>
                    {console.log(this.props.todo.content)}
                </div>
                <div className="col-5  text-right">
                <FontAwesomeIcon className="fontIcon mr-2 " icon={faCheck} color='#23df23' size='10rem'
                                 onClick={()=>{this.props.doneTodo(this.props.todo.id)}} style={{cursor: 'pointer'}} />

                <FontAwesomeIcon className="fontIcon mr-2" icon={faEdit} color='white' size='10rem'
                                 onClick={()=>{this.Flag()}} style={{cursor: 'pointer'}} />

                <FontAwesomeIcon className="fontIcon mr-2" icon={faTrash} color='red' size='10rem'
                                 onClick={()=>{this.props.deleteTodo(this.props.todo.id)}} style={{cursor: 'pointer'}} />
                </div>
                </div>

        </div>
    )
    }



    renderUpdate=()=> {
    return(
        <form onSubmit={this.updateTodo}>
            <div >
                <input className="mr-auto pl-2 mb-0 " type="text" ref={(v)=>{this.input=v}} defaultValue={this.props.todo.content}/>
                <button className="ml-2 " onClick={this.updateTodo}>Edit</button>
            </div>

        </form>
        )
    }



        render() {
    let {flag}=this.state
    return(
        <div>
            <div>
                {console.log(this.props.todo)}
                {flag ?this.renderTodo():this.renderUpdate()}
                <div className="hr"/>
            </div>
        </div>
    )
}


    }
export default Todos;
