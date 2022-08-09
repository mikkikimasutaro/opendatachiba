import React from 'react';
import { ReactSVG } from 'react-svg';

function getOpacity(value){
    if( 1 < value && value < 10){
      return 0.1;
    }
    if( 10 < value && value < 100){
      return 0.3;
    }
    if( 100 < value && value < 500){
      return 0.5;
    }
    if( 500 < value && value < 1000){
      return 0.7;
    }
    if( 1000 < value ){
      return 1;
    }

    return 0;
}

class ChibaMap extends React.Component {
    constructor(props) {
        super(props);
      }

      // shouldComponentUpdateでいろいろやるのはよろしくないらしいが、propsの変更によってSVGの描画を更新するのをどこで書けばいいかわからない。
      shouldComponentUpdate(nextProps, nextState){
        let target = nextProps.target;
        let linkList = document.getElementById("chibaSVG").getElementsByTagName("a");
        switch(nextProps.type){
          case "Population" :
            for(let i = 0; i < linkList.length; i++){
              try {
  //            console.log(linkList[i]);
              let cityName = linkList[i].getElementsByTagName("use")[0].getAttribute("oname");
              let cityData = nextProps.file.find((v) => v.city === cityName);
              let opacityBase = nextProps.file.find((v) => v.city === "県計"); 
              let opacity = cityData[target] / opacityBase[target] * 10; // * 10 : adjustment
              console.log("cityName :" + cityName + ",cityData :" + cityData + ",opacity : " + opacity + ",opacityBase : " + opacityBase);
  
              linkList[i].setAttribute("fill" , "#f44336"); // #f44336 : MUI red 
              linkList[i].setAttribute("fill-opacity" , opacity);
                                    
              } catch (e) {
                console.log(e.message);
              }
            } 
            break;
          case "Covid19" :
            for(let i = 0; i < linkList.length; i++){
              let cityName = linkList[i].getElementsByTagName("use")[0].getAttribute("oname");
              let cityData = nextProps.file.find((v) => v.date === target); //
              let opacityBase = 1000 // 分子が10万人あたりの感染者数のため。1000人でopacity=1
              let opacity = getOpacity(cityData[cityName]);


              linkList[i].setAttribute("fill" , "#f44336"); // #f44336 : MUI red 
              linkList[i].setAttribute("fill-opacity" , opacity);

              var svgText = cityName + " : " + cityData[cityName];
              var onClickStr = "document.getElementById('plate').setAttribute('visibility','visible'); document.getElementById('platetext').firstChild.nodeValue='" + svgText + "';this.setAttribute('stroke','deeppink');";

              linkList[i].setAttribute("onclick",onClickStr);
              linkList[i].setAttribute("onmousemove","document.getElementById('plate').setAttribute('transform','translate(500,750)')");
//              linkList[i].setAttribute("onmousemove","document.getElementById('plate').setAttribute('transform','translate('+(evt.layerX+75)+','+(evt.layerY-75)+')')");
              linkList[i].setAttribute("onmouseout","document.getElementById('plate').setAttribute('visibility','hidden');this.setAttribute('stroke','#f39ec0');");


              try {
              } catch (e) {
                console.log(e.message);
              }
            } 
            break;
          default:
            console.log("something wrong..");

        }
          
        return true;
      }
    

      render() {
        return (
          <div>
           <h3>ヒートマップ</h3>
            <ReactSVG id="chibaSVG" src="chiba.svg" />
         </div>
        );
      }
}

export default ChibaMap;
