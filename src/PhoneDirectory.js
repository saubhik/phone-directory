import React, { Component } from 'react';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: "Saubhik Mukherjee",
                    phone: "1234567890"
                },
                {
                    id: 2,
                    name: "Mac Book Pro",
                    phone: "1234567899"
                }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }

    render() {
        return (
            <ShowSubscribers subscribersList={this.state.subscribersList} />
        )
    }
}

export default PhoneDirectory;
