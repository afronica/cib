import React, {
    Component
} from 'react';
/* import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'; */


class BuzzIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ibuzzindexs: []
        };
      }
      componentDidMount() {
        fetch('/api/buzzindex') // or whatever URL you want
        .then(res => {            
            return res.text()
         })
        .then(buzzindex => { 
            //console.log(buzzindex); 
            this.setState({ 
                ibuzzindexs: buzzindex })
         //});
         // .then((response) => response.json())
         // .then((response) => this.setState({
         //   movies: response,                   
          });
      }
            
    render() {
        return ( 
            <div className = "container-excelupload" >
                <div className = "header" > 
                    <p>Buzz Index </p>                      
                    <ul>                    
                      <li>
                        <span>{ this.state.ibuzzindexs }</span>                              
                      </li>                    
                    </ul>
                </div> 
            </div>
        )
    }
}

export default BuzzIndex;