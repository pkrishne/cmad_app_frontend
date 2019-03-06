import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';

import './App.css';

import authClient from './authClient';
import sagas from './sagas';
import themeReducer from './themeReducer';
import Login from './Login';
import Layout from './Layout';
import Menu from './Menu';
import DeviceIcon from 'material-ui/svg-icons/device/devices';
import customRoutes from './routes';
import translations from './i18n';

import {DeviceList, DeviceEdit, DeviceCreate} from './device';
import {UserList, UserEdit, UserCreate} from './user';

import {SyslogList} from './syslog';

import restClient from './restClient';

class App extends Component {


    render() {
        return (
            <Admin
                title="CMAD Sandboxers"
                restClient={restClient}
                customReducers={{ theme: themeReducer }}
                customRoutes={customRoutes}
                authClient={authClient}
                loginPage={Login}
                appLayout={Layout}
                menu={Menu}
                messages={translations}
            >
             <Resource name="syslog" list={SyslogList} />
             <Resource name="device" list={DeviceList} edit={DeviceEdit} create={DeviceCreate} remove={Delete} icon={DeviceIcon} />
             <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} />
            </Admin>
        );
    }
}

export default App;
