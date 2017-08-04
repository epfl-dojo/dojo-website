import React, { Component } from 'react';

export default class TimelineItem extends Component {
    render () {
        let event = this.props.event;
        let types = event.types;

        return (
            <div className="timeline-item" >
                <div className="timeline-badge">
                    <img src="assets/dojo.png" alt=""/>
                </div>
                <div className="timeline-title">
                    Dojo { event.dojoid } ({ event.date })
                </div>
                {types.map(function(type){
                    return (
                        <Card type={type}/>
                    )
                })}
            </div>
        )
    }
}

class Card extends Component {
    render() {
        let type = this.props.type;

        return (
            <div className="card">
                <div className="card-title">
                    The {type.type} session
                </div>
                <img src={type.img} />
                    <div className="card-content">

                        <h5>{type.kick}</h5>

                        {type.desc ?
                        (<div>{type.desc}</div>)
                        :null}

                        {type.log ?
                        (<div className="logsnotes">{type.log}</div>)
                        :null}

                    </div>
            </div>
            )
        }
    }