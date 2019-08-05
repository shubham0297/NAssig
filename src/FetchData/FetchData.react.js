import React from 'react';
import DisplayResult from '../DisplayResult/DisplayResult.react'


class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            dataFetched:[],                             // to store the json response
            isLoaded:false
        }
    }

    
    componentDidMount(){
        // console.log(this.props.url_to_fetch)
        fetch(this.props.url_to_fetch).then(response=>response.json()).then(resp=>{this.setState({dataFetched:resp.items,isLoaded:true})});
        // console.log("Component Mounted on fetch page");
    }

    shouldComponentUpdate(props,state){
        // console.log(props.url_to_fetch)
        //  console.log("should update on fetch page")
        fetch(props.url_to_fetch).then(response=>response.json()).then(resp=>{state.dataFetched=resp.items;state.isLoaded=true});
        // console.log(state.response);
        // console.log("Fetch");
        //this.render();
        //);
        
        return true;
    }
    render() {
        if(this.state.isLoaded){
            return (
                <div>
                    <DisplayResult dataList={this.state.dataFetched}></DisplayResult>             {/*Passing data retreived to Display component to display*/}  
                  {}
                </div>
            );
        }
        else{
            return (
                <div>
                    <h3>  Fetching result ... </h3>
                     <p>
                        {this.props.url_to_fetch}
                    </p> 
                </div>
            );
        }
    }
}


export default FetchData;