import React from 'react';
import FetchData from '../FetchData/FetchData.react';



class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            url:"https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30"
        }
    }
  
    // Using REST parameter
    changeURL=(...language)=>{                                 
        // console.log(language.length);
        if(language.length===1)
        {
            this.setState({url:"https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30"}, () => console.log(this.state.url));
            console.log("All");
        }
        else
        { 
            console.log(language[0])
            var new_url = "https://api.github.com/search/repositories?q=language:" +language[0]+"&sort=stars&per_page=30";
            this.setState({url:new_url}, () => console.log(this.state.url));
           // console.log(this.state.url)
        }

    }
    // componentDidMount(){
    //     // console.log("Component Mounted on Home Page");
    // }
    // componentDidUpdate(){
    //     console.log("Component Updated on Home Page")
    //     console.log(this.state.url)

    // }
    //  shouldComponentUpdate(props,state){
    //     console.log("should update on home page");
        
    //     return true;
    //  }

    render() {
        return (
            <div >
                <h1>Most popular Repositories on Github</h1>
                <div className="container">
                    <ul className="flex-center">
                        <li><button onClick={this.changeURL} className="btn-clear nav-link">All</button></li>
                        <li><button onClick={this.changeURL.bind(this,'Ruby')} className="btn-clear nav-link">Ruby</button></li>
                        <li><button onClick={this.changeURL.bind(this,"Java")} className="btn-clear nav-link">Java</button></li>
                        <li><button onClick={this.changeURL.bind(this,"JavaScript")} className="btn-clear nav-link">JavaScript</button></li>
                        <li><button onClick={this.changeURL.bind(this,"Python")} className="btn-clear nav-link">Python</button></li>
                        <li><button onClick={this.changeURL.bind(this,"Cpp")} className="btn-clear nav-link">C++</button></li>
                        <li><button onClick={this.changeURL.bind(this,"C")} className="btn-clear nav-link">C</button></li>
                    </ul>
                    <br></br>
                    <ul className="grid space-around">
                    <FetchData url_to_fetch={this.state.url}></FetchData>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomePage;