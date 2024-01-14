import React, { Component } from 'react'
import Result from './Result'


class App extends Component{


// sorteio do número secreto (secret)
static defaultProps = {
    secret : Math.floor(Math.random() * 50) + 1
}


// declara props
constructor(props){
    super(props)
    this.state = { term : '' }


    this.handleChange = this.handleChange.bind(this)
}


// captura a troca de valores digitados pelo usuário
handleChange(event){
    this.setState({
    [event.target.name] : event.target.value
    })
}


// renderização
render(){
    return (
    // texto exibido
    // o input possui "handlechage", que dispara quando uma nova entrada for digitada
    <div>
        <div>
        <label htmlFor='term'>
            Escolha um Número de 1 a 50
        </label>
        </div>
        <input
        id='term'
        type='text'
        name='term'
        value={this.state.term}
        onChange={this.handleChange}
        />


        <Result term={this.state.term}
            secretNum={this.props.secret} />
    </div>
    )
}
}


// exporta o componente pra ser usado em outro arquivo
export default App