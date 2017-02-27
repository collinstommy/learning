/*jshint esversion: 6 */

import React from 'react';
import Note from './Note'; 
import './App.css';

export default class Board extends React.Component{
    constructor(){
        super();
        this.state = {
            notes: []
        };
    }

    componentDidMount(){
         if(this.props.count){
            var url = `https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`;
            fetch(url).then(results => results.json())
                .then(array => array[0])
                .then(text => text.split('. '))
                .then(array => array.forEach(
                    sentence => this.add(sentence)))
                .catch(function(err){
                    console.log(err);
                }); 
        }
    }

    add(text){
        var notes = [
            ...this.state.notes,
            {
                id: this.nextId(),
                note : text
            }
        ];
        this.setState({notes});
    }

    eachNote(note){
        return (<Note key={note.id} 
                        id={note.id}
                        onChange={this.update.bind(this)}
                        onRemove={this.remove.bind(this)}>{note.note}</Note>)
    }

    nextId(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId ++;
    }
    
    remove(id){
        var notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    update(newText, id){
        var notes = this.state.notes.map(
            note => (note.id !== id) ?
                note :
                {
                    id : note.id,
                    note: newText
                }
        );
        this.setState({notes});
    }
   
    render(){
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote.bind(this))}
                <button onClick={(() => this.add("new notes"))}>+</button>
            </div>
        )
    }
}

 Board.propTypes = {
                count : checkIfNum
 }

 function checkIfNum(props, propName) {  

  if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'number') {
        return new Error(propName + ' is not number');
    }
  }

   if (props[propName]) {
    let value = props[propName];
    if (value > 100) {
        return new Error(propName + ' too big');
    }
  }

  // assume all ok
  return null;
}