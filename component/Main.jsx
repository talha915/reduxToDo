import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../css/Main.css';
import toDo from "../reducer/toDo";
import Searchbar from './Searchbar';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toDodata: "",
            toDo: [],
            isCheck: false
        }
    }

    checkTodo=()=>{
       this.props.dispatch({
           type: 'INSERT',
           data: this.state.toDodata
       })
    }


    toDoData = ()=>{
        console.log("To DO List: ", this.props.toDo);
        this.setState({
            isCheck: true
        })
    }

    delete=(i)=>{
        console.log("Delete the data",i);
        this.props.dispatch({
            type: 'DELETE',
            data: i
        })
    }

    render() {
        let count = this.props.count;
        console.log("Check?", this.state.isCheck);
        let datas = this.props.toDo.data;
        console.log("Datas", datas);
        const myList = datas.map((index, i)=>{
            return(
                <ul key={Math.random()}>
                    <li>
                        {index} <button className={"delete"} onClick={(e) => this.delete(i)}>X</button>
                    </li>
                </ul>
            )
        });
        return(
            <div className={"Main"}>
                <input className={"toDo"} type={"text"}
                       name={"text"}
                       placeholder={"Please Enter Data"}
                       onChange={e=>this.setState({toDodata: e.target.value})}
                />

                {/*<Searchbar searchProps={this.props.toDo}/>*/}
                <div>
                    <button type={"button"} className={"btn btn-primary"} onClick={this.checkTodo}>
                        Submit
                    </button>
                    <button type={"button"} className={"btn btn-warning"} onClick={this.toDoData}>
                        View
                    </button>
                </div>

                <div className={"toDoData"}>
                    Status: {this.state.isCheck ? myList: 'Nothing to Show'}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state)=>({
    count: state.testReducer.count,
    toDo: state.toDo
});

export default connect(mapStateToProps)(Main);
