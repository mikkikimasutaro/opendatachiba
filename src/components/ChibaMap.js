import React from 'react';
import { ReactSVG } from 'react-svg';

class ChibaMap extends React.Component {
    constructor(props) {
        super(props);
      }
    


      componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
        // console.log(prevState);
      }

      // shouldComponentUpdateでいろいろやるのはよろしくないらしいが、propsの変更によってSVGの描画を更新するのをどこで書けばいいかわからない。
      shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');

        let target = nextProps.target;
          let linkList = document.getElementById("chibaSVG").getElementsByTagName("a");
          for(let i = 0; i < linkList.length; i++){
            try {
  //          console.log(linkList[i]);
  //          console.log(linkList[i].getElementsByTagName("use")[0].getAttribute("oname"));
            let cityName = linkList[i].getElementsByTagName("use")[0].getAttribute("oname");
            let cityData = nextProps.file.find((v) => v.city == cityName);
            let opacityBase = nextProps.file.find((v) => v.city == "県計"); 
            let opacity = cityData[target] / opacityBase[target] * 10; // * 10 : adjustment
            console.log("cityName :" + cityName + ",cityData :" + cityData + ",opacity : " + opacity + ",opacityBase : " + opacityBase);
  
            linkList[i].setAttribute("fill" , "#f44336"); // #f44336 : MUI red 
            linkList[i].setAttribute("fill-opacity" , opacity);
                                    
          } catch (e) {
            console.log(e.message);
          }
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
