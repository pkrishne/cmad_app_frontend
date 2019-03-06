import React from 'react';
import { 
    translate,
    Datagrid,
    Edit,
    Create,
    EditButton,
    Filter,
    List,
    SimpleForm,
    TextField,
    TextInput,
} from 'admin-on-rest';


const DeviceFilter = (props) => (
    <Filter {...props}>
     <TextInput label="pos.search" source="q" alwaysOn />
            
    </Filter>
);

export const DeviceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" label="IP Address"/>
            <TextInput source="device_type" label="Device Type"/>
            <TextInput source="device_name" label="Device Name" />
        </SimpleForm>
    </Create>
);

export const DeviceList = (props) => (
    <List {...props} filters={<DeviceFilter />} sort={{ field: 'ip_address', order: 'DESC' }}>
        <Datagrid >
            
            <TextField source="id" />
            <TextField source="device_type" />
            <TextField source="device_name" />
            <EditButton />
        </Datagrid>
    </List>
);

const DeviceTitle = translate(({ record, translate }) => <span>{translate('Device', { smart_count: 1 })} : {record.id}</span>);

export const DeviceEdit = translate(({ translate, ...rest }) => (
    <Edit title={<DeviceTitle />} {...rest}>
        <SimpleForm>
            <TextField source="device_type" />
            <TextField source="device_name" />
            <div style={{ clear: 'both' }} />
        </SimpleForm>
    </Edit>
));
