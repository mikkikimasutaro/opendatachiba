import {getDateDiff,formatDate,getAfterNdays} from '../DateUtil';
import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ChibaMap from '../components/ChibaMap';
import covid19JsonFile from '../data/covid19/covid19_infection_per100000perweek.json';



async function fileOpen (){
  //暫定対処
  return covid19JsonFile;
}

const columns = [
  { field: 'id', headerName: 'ID',width: "80"},
  { field: 'date', headerName: '日付', width: "150" },
  { field: '千葉市', headerName: '千葉市', width: "80" },
  { field: '市川市', headerName: '市川市', width: "80" },
  { field: '浦安市', headerName: '浦安市', width: "80" },
  { field: '習志野市', headerName: '習志野市', width: "80" },
  { field: '八千代市', headerName: '八千代市', width: "80" },
  { field: '鎌ケ谷市', headerName: '鎌ケ谷市', width: "80" },
  { field: '船橋市', headerName: '船橋市', width: "80" },
  { field: '柏市', headerName: '柏市', width: "80" },
  { field: '野田市', headerName: '野田市', width: "80" },
  { field: '流山市', headerName: '流山市', width: "80" },
  { field: '我孫子市', headerName: '我孫子市', width: "80" },
  { field: '成田市', headerName: '成田市', width: "80" },
  { field: '佐倉市', headerName: '佐倉市', width: "80" },
  { field: '四街道市', headerName: '四街道市', width: "80" },
  { field: '八街市', headerName: '八街市', width: "80" },
  { field: '印西市', headerName: '印西市', width: "80" },
  { field: '白井市', headerName: '白井市', width: "80" },
  { field: '富里市', headerName: '富里市', width: "80" },
  { field: '酒々井町', headerName: '酒々井町', width: "80" },
  { field: '栄町', headerName: '栄町', width: "80" },
  { field: '香取市', headerName: '香取市', width: "80" },
  { field: '神崎町', headerName: '神崎町', width: "80" },
  { field: '多古町', headerName: '多古町', width: "80" },
  { field: '東庄町', headerName: '東庄町', width: "80" },
  { field: '銚子市', headerName: '銚子市', width: "80" },
  { field: '旭市', headerName: '旭市', width: "80" },
  { field: '匝瑳市', headerName: '匝瑳市', width: "80" },
  { field: '東金市', headerName: '東金市', width: "80" },
  { field: '山武市', headerName: '山武市', width: "80" },
  { field: '大網白里市', headerName: '大網白里市', width: "80" },
  { field: '九十九里町', headerName: '九十九里町', width: "80" },
  { field: '芝山町', headerName: '芝山町', width: "80" },
  { field: '横芝光町', headerName: '横芝光町', width: "80" },
  { field: '茂原市', headerName: '茂原市', width: "80" },
  { field: '一宮町', headerName: '一宮町', width: "80" },
  { field: '睦沢町', headerName: '睦沢町', width: "80" },
  { field: '長生村', headerName: '長生村', width: "80" },
  { field: '白子町', headerName: '白子町', width: "80" },
  { field: '長柄町', headerName: '長柄町', width: "80" },
  { field: '長南町', headerName: '長南町', width: "80" },
  { field: '勝浦市', headerName: '勝浦市', width: "80" },
  { field: 'いすみ市', headerName: 'いすみ市', width: "80" },
  { field: '大多喜町', headerName: '大多喜町', width: "80" },
  { field: '御宿町', headerName: '御宿町', width: "80" },
  { field: '館山市', headerName: '館山市', width: "80" },
  { field: '鴨川市', headerName: '鴨川市', width: "80" },
  { field: '南房総市', headerName: '南房総市', width: "80" },
  { field: '鋸南町', headerName: '鋸南町', width: "80" },
  { field: '木更津市', headerName: '木更津市', width: "80" },
  { field: '君津市', headerName: '君津市', width: "80" },
  { field: '富津市', headerName: '富津市', width: "80" },
  { field: '袖ケ浦市', headerName: '袖ケ浦市', width: "80" },
  { field: '市原市', headerName: '市原市', width: "80" },
];

const firstDay = '2021/03/01';
const lastDay = '2022/08/05';

class Covid19 extends React.Component {
  dateDiff = 0;
  marks = [];

  constructor(props) {
    super(props);
    this.dateDiff = getDateDiff(lastDay,firstDay);
    console.log(this.dateDiff);
    this.marks.push({value: 0, label: firstDay});
    this.marks.push({value: this.dateDiff, label:lastDay});

    this.state = {
      file: "",
      sliderValue: this.dateDiff,
      target: lastDay
    };

  }

  componentDidMount() {
    fileOpen().then(
      file => {
        this.setState({file: file});
        //console.log(this.state);
    });
  }

  render() {
    const handleChange = (event, value)  => {
      this.setState({sliderValue: value});
      const target = getAfterNdays(firstDay,value);
      this.setState({target: target});
    } 

  return (
    <div>
      <h2>新型コロナ</h2>
      <p>人口10万人あたりの新規感染者数の週間平均</p>
      <Box sx={{ width: 300 ,margin: 'auto'}}>
      <Slider
        aria-label="Always visible"
        defaultValue={300}
        step={1}
        valueLabelDisplay="on"
        valueLabelFormat={this.state.target}
        marks={this.marks}
        value={this.state.sliderValue}
        onChange={handleChange}
        max={this.dateDiff}
      />
    </Box>

    <ChibaMap file={this.state.file} target={this.state.target} type="Covid19" />
    <img src="heatmap_color.png" alt="heartmap_color_covid19" />

   </div>

  );
  }
}

export default Covid19;
