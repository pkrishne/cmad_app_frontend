import React from "react";
import Chart from "react-google-charts";
import restClient, {convertRESTRequestToHTTP} from '../restClient';

const pieOptions = {
    chartArea: {
      left: 76,
      top: 16,
      bottom: 16,
    },
    legend: {
      position: "right",
      alignment: "center",
      textStyle: {
        fontName: "Heebo, Arial",
        color: "233238",
        fontSize: 10,
      }
    },
    slices: [
      {color: "#FF7806"},
      {color: "#FF9C2E"},
      {color: "#FFC584"},
      {color: "#8B0000"}
    ],
    tooltip: {
      showColorCode: true,
      ignoreBounds: false,
      isHtml: true,
      textStyle: {
        fontName: "Heebo, Arial",
        fontSize: 14,
      },
    },
    backgroundColor: {
      fill: "none",
    },
    pieHole: 0.5,
    pieSliceText: "none",
  };

class Summary extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            counterData:[],
            data:[]
        }

    }
    
    componentDidMount() {
      restClient('GET_ONE','counter','')
      .then(response => this.setState({ data : response.data}))
      
    }
 
    render() {
        return (
            <div className="App">
            <Chart
                chartType="PieChart"
                data={[["Events", "Counters"], ["Error", this.state.data.error_count], ["Warning", this.state.data.warning_count],["Notification",this.state.data.notification_count],["Alert",this.state.data.alert_count],["Info",this.state.data.info_count],['Debug',this.state.data.debug_count]]}
                options={pieOptions}
                graph_id="PieChart"
                width={"70%"}
                height={"200px"}
                legend_toggle
            />
        </div>
        );
    }
}

export {Summary};
