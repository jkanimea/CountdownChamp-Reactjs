import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    //special method to mount before component run so there no recursive loops
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    //special method run after the component renders .. we put a time of 1 sec or 1000 millseconds
    componentDidMount() {
        setInterval(()=>this.getTimeUntil(this.props.deadline),1000)
    }

    leading0(num) {
        return num < 10 ? '0'+num : num;
    }

    getTimeUntil(deadline) {
       // console.log(deadline);
        const time = Date.parse(deadline) - Date.parse(new Date());
      //  console.log('time is ', time);
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

    //    console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
        this.setState({
            days,
            hours,
            minutes,
            seconds
        });
    }
    render() {
        return (
            <div>
                <div className='Clock-days'>{this.leading0(this.state.days)}</div>
                <div className='Clock-hours'>{this.leading0(this.state.hours)}</div>
                <div className='Clock-minutes'>{this.leading0(this.state.minutes)}</div>
                <div className='Clock-seconds'>{this.leading0(this.state.seconds)}</div>
            </div>
        )
    }
}

export default Clock;