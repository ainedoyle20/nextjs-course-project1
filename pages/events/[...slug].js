import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';
import ResultsTitle from '../../components/events/results-title';
import EventList from '../../components/events/event-list';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage() {
    const router = useRouter();
    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className="center">Loading...</p>
    }

    const year = +filteredData[0];
    const month = +filteredData[1];

    if (isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12) {
        return (
            <Fragment>
                <ErrorAlert><p>Invalid filter. Please adjust your values.</p></ErrorAlert>
                <div className="center">
                        <Button link="/events">Return To All Events</Button>
                </div>
            </Fragment>
        );
    }

    const dateFilter = { year, month };

    const filteredEvents = getFilteredEvents(dateFilter);

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert><p>No events found for your chosen filter!</p></ErrorAlert>
                <div className="center">
                    <Button link="/events">Return To All Events</Button>
                </div>
            </Fragment>
            
        )
    }

    const date = new Date(year, (month-1));
    
    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList events={filteredEvents} />
        </Fragment>
    );
}

export default FilteredEventsPage;
