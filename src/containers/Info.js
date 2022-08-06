import './Info.css';
import React from 'react';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


class Info extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                   markdown: ""
                }
        }

          componentDidMount(){
                const markDownFile = require("../data/README.md");

                fetch(markDownFile)
                .then(response => {
                  return response.text()
                })
                .then(text => {
                  this.setState({
                    markdown: text
                  })
                })
            
          }


        render() {


                return (
                        <div>
                                <ReactMarkdown children={this.state.markdown} remarkPlugins={[remarkGfm]}/>
                        </div>
                );
        }

}

export default Info;