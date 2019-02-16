import React, {Component} from 'react';
import {Segment, Item, Image, List } from 'semantic-ui-react';

class eventListAttendee extends Component {

    render() {

        const {attendee} = this.props;

        return (
                <List.Item>
                    <Image as='a' size='mini' circular src={attendee.photoURL}/>
                </List.Item>
        )

    }

}

export default eventListAttendee;

