import React, { Component } from 'react'

class Task{
    constructor(){
        this.id = 0;
        this.name = "";
        this.priority = 0;
        this.status = 0;
        this.date = new Date();
    }
}

export class CalendarDay extends Component {
    constructor(props) {
        super(props)
        // this.datum = new Date(props.tasks[1].date);
        this.datum = new Date(props.selectedDate);        
    }   

    convertJSON(){
        const jsonObj = this.props.tasks;
        let convertedList = new Array();

        for(let i=0; i < jsonObj.length; i++){
            let t = new Task();
            t.id = jsonObj[i].id;
            t.name = jsonObj[i].name;
            t.priority = jsonObj[i].priority;
            t.status = jsonObj[i].status;
            t.date = new Date(jsonObj[i].date);
            convertedList.push(t);
        }

        return convertedList;
    }

    getTask(){
        let list = this.convertJSON();
        console.log(list);
        let selectedDate = new Date(this.props.selectedDate);
        
        for(let i=0; i < list.length; i++){            
            if(list[i].date.toDateString() === selectedDate.toDateString()){                
                return list[i];
            }
        }
        return null;
    }

    
    render() {
        return (
            <div>                
                {
                    this.getTask() == null ? (                        
                        <p>No Tasks for this day found!</p>
                    ) : (
                        <div>
                            <p>{this.getTask().date.toDateString()}</p>
                            <p>{this.getTask().name}</p>
                        </div>
                        )
                }
                
                <p>Selected date: {this.datum.toDateString()}</p>
            </div>
        )
    }
}

export default CalendarDay