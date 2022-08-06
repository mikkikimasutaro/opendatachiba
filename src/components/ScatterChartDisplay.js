import React from 'react';
import { CartesianGrid,XAxis,YAxis,ZAxis,Tooltip,ResponsiveContainer,ScatterChart,Scatter,Label } from 'recharts';


class ScatterChartDisplay extends React.Component {
    constructor(props) {
        super(props);
      }

      render() {
        return (
          <div>
          <h3>散布図</h3>
          <div style={{ height: '400px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 0, right: 10, bottom: 20, left: 25 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey={this.props.xAxis.field} 
              name={this.props.xAxis.headerName} 
              type="number" >
              <Label value={this.props.xAxis.headerName} offset={5} position="bottom" />
            </XAxis>            
            <YAxis 
              dataKey={this.props.yAxis.field} 
              name={this.props.yAxis.headerName} >
              <Label value={this.props.yAxis.headerName} offset={15} angle={-90} position="left" />                
            </YAxis>
            <ZAxis dataKey="industry" name="業種" type="category" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.props.data} fill="#8884d8" />
          </ScatterChart>
          </ResponsiveContainer>
          </div>
          </div>
        );
      }
}

export default ScatterChartDisplay;
