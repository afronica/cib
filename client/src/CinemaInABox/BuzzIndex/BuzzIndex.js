import React, {
    Component
} from 'react';

import MovieDetail from '../MovieDetail/index';



class BuzzIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ibuzzindexs: [{"_id":"5bb484e74a9d722cdce19db1","S_No":"31","Movie":"Baar Baar Dekho","Year":"2016","Date_of_Release":"9-Sep-16","Quarter":"Q3","Genre":"Romantic","Director_1":"Nitya Mehra","Director_2":"","Director_3":"","Director_4":"","Director_5":"","Producer_1":"Hiroo Yash Johar","Producer_2":"Karan Johar","Producer_3":"Ritesh Sidhwani","Producer_4":"Farhan Akhtar ","Producer_5":"","Producer_6":"","Producer_7":"","Producer_8":"","Producer_9":"","Producer_10":"","Production_House_1":"Dharma Productions","Production_House_2":"Excel Entertainment","Production_House_3":"","Production_House_4":"","Production_House_5":"","Production_House_6":"","Production_House_7":"","Production_House_8":"","Production_House_9":"","Production_House_10":"","Distributed_By_1":"Eros International (India)","Distributed_By_2":"Fox Star Studios (Overseas)","Distributed_By_3":"","Distributed_By_4":"","Distributed_By_5":"","Actor_1":"Sidharth Malhotra","Actor_2":"","Actor_3":"","Actor_4":"","Actor_5":"","Actress_1":"Katrina Kaif","Actress_2":"","Actress_3":"","Actress_4":"","Actress_5":"","Week_Prior_1":"223","Week_Prior_2":"210","Week_Prior_3":"158","Week_Prior_4":"157","Movie_Buzzindex":"187","Day_1":"7","Weekend_1":"21","Week_1":"29","Lifetime_4":"31"},{"_id":"5bb484e74a9d722cdce19db8","S_No":"38","Movie":"Ae Dil Hai Mushkil","Year":"2016","Date_of_Release":"28-Oct-16","Quarter":"Q4","Genre":"Romantic","Director_1":"Karan Johar","Director_2":"","Director_3":"","Director_4":"","Director_5":"","Producer_1":"Apoorva Mehta ","Producer_2":"Hiroo Yash Johar","Producer_3":"Karan Johar","Producer_4":"","Producer_5":"","Producer_6":"","Producer_7":"","Producer_8":"","Producer_9":"","Producer_10":"","Production_House_1":"Dharma Productions","Production_House_2":"","Production_House_3":"","Production_House_4":"","Production_House_5":"","Production_House_6":"","Production_House_7":"","Production_House_8":"","Production_House_9":"","Production_House_10":"","Distributed_By_1":"Fox Star Studios","Distributed_By_2":"","Distributed_By_3":"","Distributed_By_4":"","Distributed_By_5":"","Actor_1":"Ranbir Kapoor","Actor_2":"Fawad Khan","Actor_3":"","Actor_4":"","Actor_5":"","Actress_1":"Anushka Sharma","Actress_2":"Aishwarya Rai Bachchan","Actress_3":"","Actress_4":"","Actress_5":"","Week_Prior_1":"243","Week_Prior_2":"117","Week_Prior_3":"182","Week_Prior_4":"177","Movie_Buzzindex":"180","Day_1":"13","Weekend_1":"36","Week_1":"80","Lifetime_4":"113"}]
        };
      }
      componentDidMount() {
        // fetch('/api/buzzindex') // or whatever URL you want
        // .then(res => {            
        //     return res.text()
        //  })
        // .then(buzzindex => { 
        //     //console.log(buzzindex); 
        //     this.setState({ 
        //         ibuzzindexs: buzzindex })
        //  //});
        //  // .then((response) => response.json())
        //  // .then((response) => this.setState({
        //  //   movies: response,                   
        //   });
      }
            
    render() {
        console.log(this.state)
        return ( 
            <div className = "container" >
                <div className="header" > 
                    <p>Buzz Index </p>                   
                </div> 
                <div className="content" style={{overflow: 'scroll'}}>
                    <div className="movie-listing">
                        <div className="movie-items movie-items-header">
                            <div>Movie</div>
                            <div>Actor_1</div>
                            <div>Actress_1</div>
                            <div>Date_of_Release</div>
                            <div>Director_1</div>
                            <div>Distributed_By_1</div>
                            <div>Distributed_By_2</div>
                            <div>Genre</div>
                            <div>Lifetime_4</div>
                            <div>Movie_Buzzindex</div>
                            <div>Producer_1</div>
                            <div>Producer_2</div>
                            <div>Producer_3</div>
                            <div>Producer_4</div>
                            <div>Production_House_1</div>
                            <div>Production_House_2</div>
                            <div>Quarter</div>
                            <div>Year</div>
                        </div>                    
                        {this.state.ibuzzindexs.map((movie) => <MovieDetail key={movie._id} movie={movie} />)} 
                    </div>
                </div>
        </div>
        )
    }
}

export default BuzzIndex;