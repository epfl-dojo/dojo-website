import React, { Component } from 'react';
import TimelineItem from './partials/TimelineItem';

class Timeline extends Component {
    render()  {
        let events = this.props.events;

        console.log(events);
        if (events.length > 0) {
        return(

            <TimelineItem event={events[0]} />
        )} else {
            return null
        }

    }
}

export default Timeline;