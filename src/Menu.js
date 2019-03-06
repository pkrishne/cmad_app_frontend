import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import AlarmIcon from 'material-ui/svg-icons/device/access-alarms';
import DeviceIcon from 'material-ui/svg-icons/device/devices';
import UserIcon from 'material-ui/svg-icons/social/person';
import { translate, MenuItemLink } from 'admin-on-rest';

const items = [
    { name: 'syslog', icon: <AlarmIcon /> },
    { name: 'user', icon: <UserIcon /> },
    { name: 'device', icon: <DeviceIcon /> },
    
];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        
        {items.map(item => (
            <MenuItemLink
                key={item.name}
                to={`/${item.name}`}
                primaryText={translate(`resources.${item.name}.name`, { smart_count: 2 })}
                leftIcon={item.icon}
                onClick={onMenuTap}
            />
        ))}
        <MenuItemLink
            to="/configuration"
            primaryText={translate('pos.configuration')}
            leftIcon={<SettingsIcon />}
            onClick={onMenuTap}
        />
        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate,
);

export default enhance(Menu);
