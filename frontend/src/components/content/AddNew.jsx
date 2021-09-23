import React from 'react';
import './addNew.css'
import axios from 'axios'

import ConfMessage from './widgets/ConfMessage';

//-----------------------------------------------------------------------------------
//                                                                
//-----------------------------------------------------------------------------------

const initialState = {
    car:{
        time: "",
        placa: "",
        tipoLavagem: "basica",
        nome: "",
        numero: "",
        pagamento: false
    },
    confMessage: [false,'']
}

const baseUrl = "http://localhost:3001/cars"

class AddNew extends React.Component {

    state = {...initialState}

    clear(){
        this.setState({...initialState})
    }

    save(){
        var car = this.state.car
        //const method = car.id ? 'put' : 'post'
        //const url = car.id ? `${baseUrl}/${car.id}` : baseUrl
        var now = new Date()
        var min = ''
        if(now.getMinutes() < 10){
            min = `0${now.getMinutes()}`
        }else{
            min = now.getMinutes()
        }
        car.time = `${now.getHours()}:${min}`
        console.log(car)        
        axios.post(baseUrl, car)
            .then(resp => {
                this.setState({ car: initialState.car })
                this.setState({ confMessage: [true,car.placa] })
            })

    }

    updateField(event) {
        const car = { ...this.state.car }
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        car[event.target.name] = value
        this.setState({ car })
    }

    renderMessage(){
        if(this.state.confMessage[0]){
            return (<ConfMessage placa={this.state.confMessage[1]}click={e=>this.destroyMessage(e)}></ConfMessage>)
        }else{
            return
        }
    }

    destroyMessage(){
        this.setState({ confMessage: [false,''] })
    }

    renderForm(){
        return(
            <div className="Form">
                <div className="row">
                    <label> Placa:</label>
                    <input  className="form-control" 
                            type="text" 
                            name="placa" 
                            value={this.state.car.placa}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a placa..."/>
                </div>
                <br />
                <div className="row">
                    <label>Nome:</label>
                    <input  className="form-control" 
                            type="text" 
                            name="nome" 
                            value={this.state.car.nome}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a nome..."/>
                </div>
                <br />
                <div className="row">
                    <label>Número:</label>
                    <input  className="form-control" 
                            type="text" 
                            name="numero" 
                            value={this.state.car.numero}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a número..."/>
                </div>
                <br />
                <div className="row">
                    <label>Tipo de lavagem:</label>
                    <br />
                    <select className="select" value={this.state.tipoLavagem} onChange={e => this.updateField(e)} name="tipoLavagem">
                        <option value="basica">Básica</option>
                        <option value="completa">Completa</option>

                    </select>
                </div>
                <br />
                <div className="row">
                    <label>Pagamento realizado:
                    </label>
                        <input  className="check" 
                                    type="checkbox" 
                                    name="pagamento" 
                                    checked={this.state.car.pagamento}
                                    onChange={e => this.updateField(e)}/>
                </div>

                <hr />

                <div className="rowButton">
                        <button className="btn btn-primary"
                            onClick={e=>this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secundary ml-2"
                            onClick={e=>this.clear(e)}>
                            Cancelar
                        </button>
                </div>

            </div>
        )
    }

    render() { 
        return <div className="Main">
            {this.renderForm()}
            {this.renderMessage()}
        </div>;
    }
}
 
//<ConfMessage placa="KDC8924" click={e=>this.destroyMessage(e)}></ConfMessage>
export default AddNew;