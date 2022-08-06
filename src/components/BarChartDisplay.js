import React from 'react';
import {Tooltip,Legend,Bar,ResponsiveContainer,XAxis,YAxis,CartesianGrid,BarChart,Label,LabelList} from 'recharts';

class BarChartDisplay extends React.Component {
    constructor(props) {
        super(props);
      }


     render() {

      const CustomTooltip = ({ active, payload, label }) => {
        console.log(payload);
        // console.log(label);
      if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{payload[0].payload.city}</p>
              <p className="intro">{this.props.xAxis.headerName} : {this.props.data[label][this.props.xAxis.field]}</p>
            </div>
          );
        }
      
        return null;
      };
      

        return (
          <div style={{ height: '400px', width: '100%' }}>
          <h3>棒グラフ</h3>
          <ResponsiveContainer height="100%" width="100%" >
          <BarChart data={this.props.data} margin={{ top: 10, right: 10, bottom: 20, left: 10 }}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis hide="true"/>
           <YAxis />
           <Tooltip content={<CustomTooltip />} />
           <Bar dataKey={this.props.xAxis.field}  fill="#8884d8" label="給与総額" legendType="cross" >
             <LabelList dataKey="industry" position="center" angle="90" scaleToFit="true" />
           </Bar>
          </BarChart>
          </ResponsiveContainer>
          </div>
        );
      }
}

export default BarChartDisplay;
