import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "Source", field: "source"},
                {headerName: "TimeStamp", field: "timestamp",cellRenderer: (data) => {
                    return data.value ? (new Date(data.value)).toLocaleDateString() : '';
               }},
                {headerName: "Description", field: "description"},
                {headerName: "Event_Type", field: "event_type"}

            ]
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/cmad_app/v1/event/?hours=10000')
          .then(result => result.json())
          .then(rowData => this.setState({ rowData }))
      }
    render() {
        return (
                <div 
                  className="ag-theme-balham"
                  
		            >
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            );
    }
}

export default Syslog;