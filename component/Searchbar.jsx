import React, {Component} from 'react';
import '../css/Sidebar.css';

class Searchbar extends Component {

    constructor(props) {
        super(props)
        this.state={
            isCheck: false
        }
    }

    toDoData = ()=>{
        console.log("To DO List: ", this.props.searchProps.data);
        this.setState({
            isCheck: true
        })
    }

    render() {
        console.log("Props from ", this.props.searchProps);
        return(
            <div>
                <input className={"toDo"} type={"text"}
                       name={"text"}
                       placeholder={"Please Enter Data"}
                       onChange={e=>this.setState({toDodata: e.target.value})}
                />

                <button type={"button"} className={"btn btn-warning"} onClick={this.toDoData}>
                    View
                </button>
            </div>
        );
    }
}

export default Searchbar;