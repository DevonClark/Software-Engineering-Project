import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Form as SUIForm, Button, Modal, Message } from 'semantic-ui-react';
import { Router, Switch, useHistory } from 'react-router-dom';
import './login.css'

const axios = require('axios');

export const NewLoginPopup = () => {
    const [showModal, setShowModal] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const history = useHistory();

    const onSubmit = (values) => {
        setLoading(true);
        console.log(values)
        axios
            .post('/api/Authentication/login', { ...values })
            .then(function (response) {
                setLoading(false);
                console.log(response);
                history.push({ pathname: '/login' });
                window.location.reload(false);

            })
            .catch(function (error) {
                setLoading(false);
                setError(error);
                console.log(error);
            });
    };

    return (
        <>
            <div >
                <Button onClick={() => setShowModal(true)}>Admin Login</Button>
                <Modal open={showModal} onClose={() => setShowModal(false)} size="tiny" className='pop'>
                    <Modal.Header>Log In</Modal.Header>
                    <Modal.Content>
                        <Form
                            onSubmit={onSubmit}
                            render={({ handleSubmit }) => (
                                <>
                                    <SUIForm onSubmit={handleSubmit}>
                                        <Field name="username" component="input" placeholder="Username" />
                                        <Field name="password" component="input" placeholder="Password" type="password" />
                                        <Modal.Actions>
                                            <Button type="submit" loading={loading}>
                                                Login
                      </Button>
                                        </Modal.Actions>
                                    </SUIForm>
                                </>
                            )}
                        />
                    </Modal.Content>
                </Modal>
            </div>
        </>
    );
};
