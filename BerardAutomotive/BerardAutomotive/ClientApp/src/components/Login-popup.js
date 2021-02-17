import React from 'react';
import ReactModalLogin from "react-modal-login";
import './login.css';

class LoginPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            loggedIn: null,
            loading: false,
            error: null,
            initialTab: null,
        };
    }

    onLogin() {
        console.log('__onLogin__');
        console.log('email: ' + document.querySelector('#email').value);
        console.log('password: ' + document.querySelector('#password').value);

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        if (!email || !password) {
            this.setState({
                error: true
            })
        } else {
            this.onLoginSuccess('form');
        }
    }

    openModal(initialTab) {
        this.setState({
            initialTab: initialTab
        }, () => {
            this.setState({
                showModal: true,
            })
        });
    }

    onLoginSuccess(method, response) {

        this.closeModal();
        this.setState({
            loggedIn: method,
            loading: false
        })
    }

    onLoginFail(method, response) {

        this.setState({
            loading: false,
            error: response
        })
    }

    startLoading() {
        this.setState({
            loading: true
        })
    }

    finishLoading() {
        this.setState({
            loading: false
        })
    }

    closeModal() {
        this.setState({
            showModal: false,
            error: null
        });
    }

    render() {
        const loggedIn = this.state.loggedIn
        // ? <div>
        //     <p>You are signed in with: {this.state.loggedIn}</p>
        //   </div>
        // : <div>
        //     <p>You are signed out</p>
        // </div>;

        const isLoading = this.state.loading;

        return (
            <div>
                <button onClick={() => this.openModal('login')}> Admin Login </button>

                <ReactModalLogin
                    visible={this.state.showModal}
                    onCloseModal={this.closeModal.bind(this)}
                    loading={isLoading}
                    error={this.state.error}
                    startLoading={this.startLoading.bind(this)}
                    finishLoading={this.finishLoading.bind(this)}
                    form={{
                        onLogin: this.onLogin.bind(this),

                        loginBtn: {
                            label: "Sign in"
                        },

                        loginInputs: [
                            {
                                containerClass: 'RML-form-group',
                                label: 'Username',
                                type: 'email',
                                inputClass: 'RML-form-control',
                                id: 'email',
                                name: 'email',
                                placeholder: 'Username',
                            },
                            {
                                containerClass: 'RML-form-group',
                                label: 'Password',
                                type: 'password',
                                inputClass: 'RML-form-control',
                                id: 'password',
                                name: 'password',
                                placeholder: 'Password',
                            }
                        ],
                    }}
                />
                {loggedIn}
            </div>
        )
    }
};

export default LoginPopup;