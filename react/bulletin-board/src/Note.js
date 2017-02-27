/*jshint esversion: 6 */

import React from "react";
import Draggable from 'react-draggable';
import './App.css';

export default class Note extends React.Component {
    constructor(){
        super();
        this.state = {editing: false};
        this.style = {
                right: this.randomBetween(0, window.innerWidth -150, 'px'),
                top: this.randomBetween(0, window.innerHeight -150, 'px')
            };
    }

    componentDidUpdate(){
        if(this.state.editing){
            this.refs.newText.focus();
            this.refs.newText.select();
        }
    }

    edit(){
        this.setState({editing: true});
    }

    save(){
        this.props.onChange(this.refs.newText.value, this.props.id);
        this.setState({editing: false});
    }

    randomBetween(x, y, s){
        return (x + Math.ceil(Math.random() * (y - x))) + s;
    }

    remove(){
        this.props.onRemove(this.props.id);
    }

    renderForm(){
        return(
            <div className="note" style = {this.style}>
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={this.save.bind(this)}>SAVE</button>
            </div>
        )
    }

    renderDisplay(){
        return (
        <div className ="note" style = {this.style}>
        <p>{this.props.children}</p>
            <span>
                <button onClick={this.edit.bind(this)}>EDIT</button>
                <button onClick={this.remove.bind(this)}>X</button>
            </span>
        </div>
        );
    }
    
    render() {
        return ( <Draggable>
        {(this.state.editing) ? this.renderForm() : this.renderDisplay()}
                                    </Draggable>
        );
    }
    
  }