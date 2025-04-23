import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { EventClickArg, DateSelectArg } from '@fullcalendar/core'

const CalendarWidget: React.FC = () => {
    const [events, setEvents] = useState([
        {
            id: '1',
            title: 'Réunion de coordination',
            start: '2025-04-25T10:00:00',
            end: '2025-04-25T12:00:00',
        },
        {
            id: '2',
            title: 'Formation coopérative',
            start: '2025-04-27',
        },
    ])

    const handleDateSelect = (selectInfo: DateSelectArg) => {
        const title = prompt('Nom de l’événement :')
        if (title) {
            const newEvent = {
                id: String(events.length + 1),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            }
            setEvents([...events, newEvent])
        }
    }

    const handleEventClick = (clickInfo: EventClickArg) => {
        if (window.confirm(`Supprimer l’événement '${clickInfo.event.title}' ?`)) {
            setEvents(events.filter(event => event.id !== clickInfo.event.id))
        }
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='card-title'>Calendrier des événements</h3>
            </div>
            <div className='card-body'>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView='dayGridMonth'
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                    selectable={true}
                    selectMirror={true}
                    events={events}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                    editable={true}
                    height='auto'
                />
            </div>
        </div>
    )
}

export { CalendarWidget }
