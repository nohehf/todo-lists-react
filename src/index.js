// following this: https://reactjs.org/tutorial/tutorial.html

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
    constructor(props){
        super(props)
        this.createList = this.createList.bind(this)
        this.removeList = this.removeList.bind(this)
        this.state={
            lists : []
        }
    }

    createList(){
        let listName = prompt('Create list named: ','List')
        // let listName = 'nouvelle liste'
        this.setState(prevState => ({
            lists: [...prevState.lists,listName]
        }))
        
    }

    removeList(index) {
        this.state.lists.splice(index,1)
        this.setState({lists : this.state.lists})
    }

    render () {
        return (
            <div className= "App">
                {this.state.lists.map((element,index) => (
                    <List name = {element} index={index} removeList={this.removeList}/>
                ))}
                <Slot createList={this.createList}/>
            </div>
        )
    }
}

class Slot extends React.Component {
    render () {
        return (
            <div className="Slot" onClick={() => this.props.createList()}>
                <span className="material-icons">add</span>
            </div>
        )
    }
}

class List extends React.Component {
    constructor(props){
        super(props)
        this.removeElement = this.removeElement.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state={
            elements : []
        }

    }

    addElement(element) {
        this.setState(prevState => ({
            elements : [...prevState.elements,element]
        }))
    }

    removeElement(index) {
        this.state.elements.splice(index,1)
        this.setState({elements : this.state.elements})
        // this.setState({elements: [...this.state.elements].splice(0)})
        console.log(index)
    }

    onSubmit(event){
        event.preventDefault()
        this.addElement(this.state.newValue)
        this.setState({
            newValue : ''
        })
    }

    render() {
      return (
        <div className="List">
            <div className="ListTitle">
                <span className="material-icons delete" onClick = {() => this.props.removeList(this.props.index)}>delete</span>
                <h1>{this.props.name} :</h1>
            </div>
            <div class = "List-elements">
                {this.state.elements.map((element,index) => (
                    <ListItem name = {element} index= {index} remove = {this.removeElement} />
                ))}
            </div>

            <form ref='form' className='List-add-element' onSubmit={(event) => this.onSubmit(event)}>
                <input type='text' value = {this.state.newValue} onChange={event => {this.setState({newValue: event.target.value})}} onClick={() => {}}/>
                <span className="material-icons" onClick = {() => this.addElement(this.state.newValue)}>add</span>
            </form>

        </div>
      )
    }
}

class ListItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            done : false
        }
    }

    changeState(){
        const done = !(this.state.done)
        this.setState({done : done})
    }

    render() {
        return(
        <div className="ListItem">
            {!(this.state.done) ? 
            <span className="material-icons undone" onClick={() => {this.changeState()}}>clear</span> :
            <span className="material-icons done" onClick={() => {this.changeState()}}>done</span>
            }
            <div className = {this.state.done ? "ListItemText done" : "ListItemText undone" }>  {this.props.name}</div>
            {/* <button onClick={() => this.props.remove(this.props.index)}>x</button> */}
            <span className="material-icons delete" onClick={() => this.props.remove(this.props.index)}>delete</span>
        </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
