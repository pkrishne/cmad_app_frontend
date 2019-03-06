import React from 'react';
import { 
    translate,
    Datagrid,
    Edit,
    Create,
    EditButton,
    Filter,
    List,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    CheckboxGroupInput,
    RadioButtonGroupInput,
    ReferenceArrayInput,
    SelectArrayInput
} from 'admin-on-rest';


const UserFilter = (props) => (
    <Filter {...props}>
     <TextInput label="pos.search" source="q" alwaysOn />
           
    </Filter>
);

const device = (props) => (
    <ReferenceInput reference="device" />
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" label="User ID"/>
            <TextInput source="password" label="Password" type="password" />
            <TextInput source="first_name" label="First Name"/>
            <TextInput source="last_name" label="Last Name" />
            <TextInput source="email" label="Email" />
            <BooleanInput label="Administrator" source="isAdmin" />

            <ReferenceArrayInput label="Managed Devices" source="managed_devices_ip_list" reference="device" allowEmpty>
                <SelectArrayInput optionText="id" />
            </ReferenceArrayInput>
            
        </SimpleForm>
    </Create>
);

export const UserList = (props) => (
    <List {...props} filters={<UserFilter />} sort={{ field: 'ip_address', order: 'DESC' }}>
        <Datagrid >
            
            <TextField source="id" title="User ID"/>
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="email" />
            
            <EditButton />
        </Datagrid>
    </List>
);

const UserTitle = translate(({ record, translate }) => <span>{translate('Edit User', { smart_count: 1 })} #{record.reference}</span>);

export const UserEdit = translate(({ translate, ...rest }) => (
    <Edit title={<UserTitle />} {...rest}>
        <SimpleForm>
            <TextField source="first_name" />
            <TextField source="last_name" />
            <div style={{ clear: 'both' }} />
        </SimpleForm>
    </Edit>
));
