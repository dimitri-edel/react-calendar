import React, { Component } from 'react'

export class CalendarDay extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <h1>{this.props.selectedDate}</h1>
                {
                    this.props.objChecker.map(obj=>{
                        return <p>{obj}</p>
                    })
                }
            </div>
        )
    }
}

export default CalendarDay