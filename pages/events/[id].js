import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function SpecificEventPage() {
    const router = useRouter();
    const eventId = router.query.id;
    console.log('router.query: ', router.query);

    const specificEvent = getEventById(eventId);

    if (!specificEvent) {
        return <ErrorAlert><p>No Event Found</p></ErrorAlert>
    }
    
    return (
        <Fragment>
            <EventSummary title={specificEvent.title} />
            <EventLogistics date={specificEvent.date} address={specificEvent.location} image={specificEvent.image} imageAlt={specificEvent.title}/>
            <EventContent>
                <p>{specificEvent.description}</p>
            </EventContent>
        </Fragment>
    );
}

export default SpecificEventPage;
