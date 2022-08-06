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

import workingJsonFile from '../data/working/working_2021.json';


async function fileOpen (input){
  //暫定対処
  return workingJsonFile;
}

const columns = [
  { field: 'id', headerName: 'ID',width: "80"},
  { field: 'industry', headerName: '業種', width: "150" },
  { field: 'officeScale', headerName: '事業所規模', width: "80" },
  { field: 'salaryTotal', headerName: '給与総額', width: "150" },
  { field: 'salaryWithoutBonus', headerName: '給与（残業込み）', width: "150" },
  { field: 'salaryBase', headerName: '給与（残業なし）', width: "150" },
  { field: 'salaryOvertime', headerName: '残業額', width: "150" },
  { field: 'salaryBonus', headerName: '賞与額', width: "150" },
  { field: 'salaryTotalMan', headerName: '男性給与総額', width: "150" },
  { field: 'salaryWithoutBonusMan', headerName: '男性残業額', width: "150" },
  { field: 'salaryBonusMan', headerName: '男性賞与額', width: "150" },
  { field: 'salaryTotalWoman', headerName: '女性給与総額', width: "150" },
  { field: 'salaryWithoutBonusWoman', headerName: '女性給与（残業込み）', width: "150" },
  { field: 'salaryBonusWoman', headerName: '女性賞与額', width: "150" },
  { field: 'salaryTotalFullTime', headerName: 'フルタイム給与総額', width: "150" },
  { field: 'salaryWithoutBonusFullTime', headerName: 'フルタイム給与（残業込み）', width: "150" },
  { field: 'salaryBonusFullTime', headerName: 'フルタイム賞与額', width: "150" },
  { field: 'salaryTotalPartTime', headerName: 'パートタイム給与総額', width: "150" },
  { field: 'salaryWithoutBonusPartTime', headerName: 'パートタイム給与（残業込み）', width: "150" },
  { field: 'salaryBonusPartTime', headerName: 'パートタイム賞与額', width: "150" },
  { field: 'workingDayTotal', headerName: '労働日数', width: "150" },
  { field: 'workingTimeTotal', headerName: '労働時間', width: "150" },
  { field: 'workingTimeScheduled', headerName: '基準内労働時間', width: "150" },
  { field: 'workingTimeOvertime', headerName: '残業時間', width: "150" },
  { field: 'workingDayTotalMan', headerName: '労働日数（男性）', width: "150" },
  { field: 'workingTimeTotalMan', headerName: '労働時間（男性）', width: "150" },
  { field: 'workingTimeScheduledMan', headerName: '基準内労働時間（男性）', width: "150" },
  { field: 'workingTimeOvertimeMan', headerName: '残業時間（男性）', width: "150" },
  { field: 'workingDayTotalWoman', headerName: '労働日数（女性）', width: "150" },
  { field: 'workingTimeTotalWoman', headerName: '労働時間（女性）', width: "150" },
  { field: 'workingTimeScheduledWoman', headerName: '基準内労働時間（女性）', width: "150" },
  { field: 'workingTimeOvertimeWoman', headerName: '残業時間（女性）', width: "150" },
  { field: 'workingDayTotalFulltime', headerName: '労働日数（フルタイム）', width: "150" },
  { field: 'workingTimeTotalFulltime', headerName: '労働時間（フルタイム）', width: "150" },
  { field: 'workingTimeScheduledFulltime', headerName: '基準内労働時間（フルタイム）', width: "150" },
  { field: 'workingTimeOvertimeFulltime', headerName: '残業時間（フルタイム）', width: "150" },
  { field: 'workingDayTotalParttime', headerName: '労働日数（パートタイム）', width: "150" },
  { field: 'workingTimeTotalParttime', headerName: '労働時間（パートタイム）', width: "150" },
  { field: 'workingTimeScheduledParttime', headerName: '基準内労働時間（パートタイム）', width: "150" },
  { field: 'workingTimeOvertimeParttime', headerName: '残業時間（パートタイム）', width: "150" },
  { field: 'employeeNumTotal', headerName: '従事者数', width: "150" },
  { field: 'employeeNumMan', headerName: '男性従事者数', width: "150" },
  { field: 'employeeNumWoman', headerName: '女性従事者数', width: "150" },
  { field: 'employmentRate', headerName: '入職率', width: "150" },
  { field: 'employmentRateYearOnYear', headerName: '入職率前年比', width: "150" },
  { field: 'turnoverRate', headerName: '離職率', width: "150" },
  { field: 'turnoverRateYearOnYear', headerName: '離職率前年比', width: "150" },
];


class Working extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
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
    for (var index=3; index < columns.length; index++){ // ID,業種,事業所規模は除外
      xAxis.push(<MenuItem key={index+1} value={columns[index]}>{columns[index].headerName}</MenuItem>);
      yAxis.push(<MenuItem key={index+1} value={columns[index]}>{columns[index].headerName}</MenuItem>);
    }

    const handleClick = (event, value)  => {
      const tempRows = [];
      fileOpen(value).then(
        file => {
          // for ScatterChart
          this.setState({file: file});
          //console.log(this.state);
  
          // for data grid
          let dataGridColumns = [];
          dataGridColumns.push(columns[0]); // ID
          dataGridColumns.push(columns[1]); // industory
          dataGridColumns.push(columns[2]); // officeScale
          dataGridColumns.push(columns[columns.indexOf(this.state.xAxis)]);
          this.setState({columns: dataGridColumns});
          console.log(dataGridColumns);

          this.setState({rows: tempRows});  
          for (let index = 0; index < file.length; index++){
//            let row = file[index];
            let row = {};
            row.id = index;
            row.industry = file[index].industry;
            row.officeScale = file[index].officeScale;
            let rowVar = this.state.xAxis.field;
            //console.log(rowVar);
            row[rowVar] = file[index][rowVar];
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
    <div>
      <h2>労働</h2>
    <form autoComplete="off">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="xAxis-helper">選択</InputLabel>
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
     </form>
        <Button onClick={handleClick}>
          データを表示
          <Search />
        </Button>

    <DataGridDisplay rows={this.state.rows} columns={this.state.columns}/> 
    <BarChartDisplay data={this.state.file} xAxis={this.state.xAxis}/>

    <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel htmlFor="yAxis-helper">選択</InputLabel>
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
    <Button onClick={handleClickAddition}>
       のデータと比較
       <Search />
     </Button>


    <ScatterChartDisplay data={this.state.file} xAxis={this.state.xAxis} yAxis={this.state.yAxis} />

   </div>

  );
  }
}

export default Working;
