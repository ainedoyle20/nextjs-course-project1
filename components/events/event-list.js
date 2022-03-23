import EventItem from "./event-item";

import styles from './event-list.module.css';

function EventList(props) {
    const {events} = props;
    return (
        <ul className={styles.list}>
            {
                events.map(({ id, ...props }) => {
                    return <EventItem key={id} id={id} {...props}/>
                })
            }
        </ul>
    );
}

export default EventList;
