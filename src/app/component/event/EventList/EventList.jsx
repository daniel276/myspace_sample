import React, {Component} from 'react';
import EventListItem from './EventListItem/EventListItem';

class eventList extends Component {

    render() {

        const {events} = this.props;

        return (
            <div>
                {events.map((event) => (
                    <EventListItem key={event.id} event={event} />
                    ))}
            </div>
        )

    }

}

export default eventList;

