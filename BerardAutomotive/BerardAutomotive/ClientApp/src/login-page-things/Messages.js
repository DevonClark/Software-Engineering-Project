import React, { useState, useEffect } from 'react'
import { Table, Checkbox, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'

export const Messages = () => {

    const [getThing, setGetThing] = useState({
        col: [{
            name: "name",
            phone: "phone",
            time: "Time",
            email: "email",
            note: "note",
        }],
        data: [],
    });

    useEffect(() => {

        axios.get('/api/Appointment')
            .then((r) => {
                setGetThing((table) => {
                    const callData = { ...table };
                    r.data.map((d) => {
                        callData.data = [...callData.data, d];
                    })
                    return callData;
                });
            });
    }, []);

    const rows = getThing.data;
    console.log(getThing);


    return (
        <>
            <div className='messages'>
                <h1>Appointments</h1>
            </div>
            <div>
                <Table compact celled definition>
                    <Table.Header>

                        <Table.HeaderCell />
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Apt Date/Time</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Reason for Apt</Table.HeaderCell>

                    </Table.Header>

                    <Table.Body>
                        {rows.map((row) => (
                            <Table.Row>
                                <Table.Cell >

                                </Table.Cell>
                                <Table.Cell>{row.name}</Table.Cell>
                                <Table.Cell>{row.time}</Table.Cell>
                                <Table.Cell>{row.email}</Table.Cell>
                                <Table.Cell>{row.phone}</Table.Cell>
                                <Table.Cell>{row.note}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell colSpan='6'>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        </>
    );
}


