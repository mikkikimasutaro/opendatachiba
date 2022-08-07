import './Main.css';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Search from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ScatterChartDisplay from '../components/ScatterChartDisplay';
import DataGridDisplay from '../components/DataGridDisplay';
import BarChartDisplay from '../components/BarChartDisplay';
import ChibaMap from '../components/ChibaMap';


import populationJson from '../data/population/population_2021.json';

const fileList = ["2021年人口","test"];

async function fileOpen (input){
  //暫定対処
  return populationJson;
}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'city', headerName: '都市', width: 130 },
  { field: 'total', headerName: '総人口', width: 130 },
  { field: 'man', headerName: '男性人口', width: 130 },
  { field: 'woman', headerName: '女性人口', width: 130 },
  { field: 'foreigner_total', headerName: '外国人人口', width: 130 },
  { field: 'foreigner_man', headerName: '外国人男性人口', width: 130 },
  { field: 'foreigner_woman', headerName: '外国人女性人口', width: 130 },
  { field: 'area(km2)', headerName: '面積(km2)', width: 130 },
  { field: 'birth_total', headerName: '総誕生数', width: 130 },
  { field: 'birth_man', headerName: '男性誕生数', width: 130 },
  { field: 'birth_woman', headerName: '女性誕生数', width: 130 },
  { field: 'birth_japanese', headerName: '日本人誕生数', width: 130 },
  { field: 'birth_foreigner', headerName: '外国人誕生数', width: 130 },
  { field: 'death_total', headerName: '総死亡数', width: 130 },
  { field: 'death_man', headerName: '男性死亡数', width: 130 },
  { field: 'death_woman', headerName: '女性死亡数', width: 130 },
  { field: 'death_japanese', headerName: '日本人死亡数', width: 130 },
  { field: 'death_foreigner', headerName: '外国人死亡数', width: 130 },
  { field: 'movein_total', headerName: '総転入数', width: 130 },
  { field: 'movein_chiba_man', headerName: '千葉県内転入数（男性）', width: 130 },
  { field: 'movein_chiba_woman', headerName: '千葉県内転入数（女性）', width: 130 },
  { field: 'movein_nonchiba_man', headerName: '県外転入数（男性）', width: 130 },
  { field: 'movein_nonchiba_woman', headerName: '県外転入数（女性）', width: 130 },
  { field: 'movein_other_man', headerName: 'その他転入数（男性）', width: 130 },
  { field: 'movein_other_woman', headerName: 'その他転入数（女性）', width: 130 },
  { field: 'movein_chiba_japanese', headerName: '千葉県内転入数（日本人）', width: 130 },
  { field: 'movein_chiba_foreigner', headerName: '千葉県内転入数（外国人）', width: 130 },
  { field: 'movein_nonchiba_japanese', headerName: '県外転入数（日本人）', width: 130 },
  { field: 'movein_nonchiba_foreigner', headerName: '県外転入数（外国人）', width: 130 },
  { field: 'movein_other_japanese', headerName: 'その他転入数（日本人）', width: 130 },
  { field: 'movein_other_foreigner', headerName: 'その他転入数（外国人）', width: 130 },
  { field: 'moveout_total', headerName: '総転出数', width: 130 },
  { field: 'moveout_chiba_man', headerName: '千葉県内転出数（男性）', width: 130 },
  { field: 'moveout_chiba_woman', headerName: '千葉県内転出数（女性）', width: 130 },
  { field: 'moveout_nonchiba_man', headerName: '県外転出数（男性）', width: 130 },
  { field: 'moveout_nonchiba_woman', headerName: '県外転出数（女性）', width: 130 },
  { field: 'moveout_other_man', headerName: 'その他転出数（男性）', width: 130 },
  { field: 'moveout_other_woman', headerName: 'その他転出数（女性）', width: 130 },
  { field: 'moveout_chiba_japanese', headerName: '千葉県内転出数（日本人）', width: 130 },
  { field: 'moveout_chiba_foreigner', headerName: '千葉県内転出数（外国人）', width: 130 },
  { field: 'moveout_nonchiba_japanese', headerName: '県外転出数（日本人）', width: 130 },
  { field: 'moveout_nonchiba_foreigner', headerName: '県外転出数（外国人）', width: 130 },
  { field: 'moveout_other_japanese', headerName: 'その他転出数（日本人）', width: 130 },
  { field: 'moveout_other_foreigner', headerName: 'その他転出数（外国人）', width: 130 },
];

class Population extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      graphData: "",
      rows: [],
      columns: [],
      xAxis: "",
      yAxis: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    const xAxis = [];
    const yAxis = [];
    for (var index=2; index < columns.length; index++){ // ID,都市は除外
      xAxis.push(<MenuItem key={index+1} value={columns[index]}>{columns[index].headerName}</MenuItem>);
      yAxis.push(<MenuItem key={index+1} value={columns[index]}>{columns[index].headerName}</MenuItem>);
    }

    const handleClick = (event, value)  => {
      const tempRows = this.state.rows;
      if(this.state.xAxis == ""){
        console.log("xAxis is null.");
        return;
      }
      fileOpen(value).then(
        file => {
          // for ScatterChart
          this.setState({file: file});
          let graphData = file.filter(function( item ) {
            return item.city !== '県計';            
          });
          this.setState({graphData: graphData});
          //console.log(this.state);
  
          // for data grid
          let dataGridColumns = [];
          dataGridColumns.push(columns[0]); // ID
          dataGridColumns.push(columns[1]); // city
          dataGridColumns.push(columns[columns.indexOf(this.state.xAxis)]);
          if(this.state.yAxis !== ""){
            dataGridColumns.push(columns[columns.indexOf(this.state.yAxis)]);
          }
          this.setState({columns: dataGridColumns});
          // console.log(dataGridColumns);

          this.setState({rows: tempRows});  
          for (let index = 0; index < file.length; index++){
            // let row = file[index];
            let row = {};
            row.id = index;
            row.city = file[index].city;
            let rowX = this.state.xAxis.field;
            row[rowX] = file[index][rowX];
            if(this.state.yAxis !== ""){
              let rowY = this.state.yAxis.field;
              row[rowY] = file[index][rowY];
            }
            //console.log(row);
            tempRows.push(row);
          }

        }
        );
    } 

    const handleClickAddition = (event, value)  => {
      fileOpen(value).then(
        file => {
        }
        );
    } 
  
  return (
    <div >
      <h2>人口</h2>
      <FormControl sx={{ m: 1, width: 240 }}>
            <InputLabel htmlFor="xAxis-helper">表示データ1</InputLabel>
            <Select
              value={this.state.xAxis}
              onChange={this.handleChange}
              inputProps={{
                name: 'xAxis',
                id: 'xAxis-helper',
              }}
            >
            {xAxis}
            </Select>
      </FormControl>
    <FormControl sx={{ m: 1, width: 240 }}>
       <InputLabel htmlFor="yAxis-helper">表示データ2</InputLabel>
            <Select
              value={this.state.yAxis}
              onChange={this.handleChange}
              inputProps={{
                name: 'yAxis',
                id: 'yAxis-helper',
              }}
            >
            {yAxis}
            </Select>
    </FormControl>
    <Button onClick={handleClick}>
          データを表示
          <Search />
    </Button>

    <ChibaMap file={this.state.file} target={this.state.xAxis.field}/>
    <div style={{ height: '500px', width: '100%' }}>
    <DataGridDisplay rows={this.state.rows} columns={this.state.columns}/> 
    </div>
    <div style={{ height: '500px', width: '100%' }}>
    <BarChartDisplay data={this.state.graphData} xAxis={this.state.xAxis} primalyKey={"city"}/>
    </div>
    <div style={{ height: '500px', width: '100%' }}>
    <ScatterChartDisplay data={this.state.graphData} xAxis={this.state.xAxis} yAxis={this.state.yAxis} />
    </div>


    </div>
  );
  }
}

export default Population;
