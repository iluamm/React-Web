import {React,Component} from "react";

class Home extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    render() {
        return (
            <div>
                <h1 style={{margin:"20%",color:"#0693E3"}}><p/>Home</h1>
            </div>
        );
    }
}
export default Home;