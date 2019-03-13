import React from 'react';
import { 
    translate,
    Datagrid,
    Edit,
    Create,
    EditButton,
    Filter,
    List,
    NullableBooleanInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    Toolbar,
    FunctionField,
    ToolbarGroup,
    FlatButton,
    ChevronLeft,ChevronRight
} from 'admin-on-rest';

import {Summary} from './summary';

class SyslogList extends React.Component {

    render() {
        const SyslogFilter = (props) => (
            <Filter {...props}>
             <TextInput label="pos.search" source="q" alwaysOn />
                    
            </Filter>
        );

        const {myOwnProp, ...props} = this.props;
            
        const PostPagination = ({ page, perPage, total, setPage }) => {
            const nbPages = Math.ceil(total / perPage) || 1;
            return (
                nbPages > 1 &&
                    <Toolbar>
                        <ToolbarGroup>
                        {page > 1 &&
                            <FlatButton primary key="prev" label="Prev" icon={<ChevronLeft />} onClick={() => setPage(page - 1)} />
                        }
                        {page !== nbPages &&
                            <FlatButton primary key="next" label="Next" icon={<ChevronRight />} onClick={() => setPage(page + 1)} labelPosition="before" />
                        }
                        </ToolbarGroup>
                    </Toolbar>
            );
        }

        return (
            <div>
            <Summary />
            <List {...props} filters={<SyslogFilter />}  >
            <Datagrid options={{ fixedHeader: true, height: 400 }} >
                
                <TextField source="source"  sortable={false}/>
                <FunctionField  render={record => ('new Date()')} label="Recieved Time" sortable={false}/>
                
           
                <TextField source="description" sortable={false}/>
                <TextField source="event_type" sortable={false}/>
               
               
            </Datagrid>
        </List>
        </div>
            );
    }
}

export {SyslogList};