
import React, {Component} from "react";


export default class Hello extends Component

{
    constructor(){
        super();
        this.state = {color: "red", digit: 0, list:[
            {title: "Ночь"},
            {title: "Улица"},
            {title: "Фонарь"},
            {title: "Аптека"}]
        };

    }

    renderList(){
        return this.state.list.map((item, index)=>{
            return <div key = {`${item.title}${index}`}>{item.title}</div>
        })
    }


    componentDidMount(){
        setTimeout(() => {
            this.setState({digit: 10}); }, 5000);
    }
    

    render(){
        return<div>
            <div onClick={() => {this.setState( {color: "yellow"})} } style={{backgroundColor: this.state.color}}>
                Hello

            </div>
            <div>{this.state.digit}</div>

            {this.renderList()}
            <div>количество элементов массива = {this.state.list.length}</div>
            <div onClick={() => {delete this.state.list[3]} }>Нажмите сюда, если хотите удалить последний элемент списка</div>
            <div onClick={() => {this.state.list.push(3)}}>Нажмите сюда, если хотите добавить последний элемент списка</div>


            </div>

    }
}
