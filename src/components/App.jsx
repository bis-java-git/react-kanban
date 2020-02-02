
import React from "react";
import uuid from 'uuid';

const uuidv4 = require('uuid/v4');

export default class app extends React.Component {
    render() {
        const notes = [
            {
                id: uuidv4(),
                task: 'Learn Webpack'
            },
        {
            id: uuidv4(),
            task: 'Learn React'
           },

        {
            id: uuidv4(),
            task: 'Hemant Task'
        }
        ];
        
        console.log(notes);

        return (
          
            <div>
                <ul>{ notes.map( note =>  
                    <li key={note.id}> {note.task}</li>
                          
                )}
                </ul>
            </div>
        );
    }
}
