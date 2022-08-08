import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import {Tooltip,Legend,Bar,ResponsiveContainer,XAxis,YAxis,CartesianGrid,BarChart,Label,LabelList} from 'recharts';


function uniq(array) {
  const knownElements = new Set();
  for (const elem of array) {
    knownElements.add(elem); 
  }
  return Array.from(knownElements);
}

class BarChartDisplay extends React.Component {
    constructor(props) {
        super(props);
      }


     render() {

      const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{payload[0].payload[this.props.primalyKey]}</p>
              <p className="intro">{this.props.xAxis.headerName} : {this.props.data[label][this.props.xAxis.field]}</p>
            </div>
          );
        }
      
        return null;
      };
      
      let displayData = "項目を選択するとここにデータが表示されます。";
      if(this.props.data.length != 0){
        // データをグループ化
        if (this.props.groupBy){
          let groupArray = this.props.data.map((obj) => obj[this.props.groupBy]);
          groupArray = uniq(groupArray);
          // console.log(groupArray);

          let bar = [];
          // グループ毎のデータ作成
          for(var i = 0; i < groupArray.length; i++){
            bar[i] = this.props.data.filter(function( item ) {
              return item[this.groupBy] !== groupArray[i];            
            },this.props);
          }

          // データを結合 @ToDo
          console.log(bar);



        }
        displayData = <ResponsiveContainer height="100%" width="100%" >
          <BarChart data={this.props.data} margin={{ top: 0, right: 10, bottom: 20, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis hide="true"/>
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey={this.props.xAxis.field}  fill="#8884d8" legendType="cross" >
          </Bar>
          </BarChart>
          </ResponsiveContainer>
      }

        return (
          <div style={{ height: '100%', width: '100%' }}>
          <h3>棒グラフ</h3>
          {displayData}
          </div>
        );
      }
}

export default BarChartDisplay;
