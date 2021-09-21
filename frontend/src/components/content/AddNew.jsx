import React from 'react';
import './addNew.css'
import axios from 'axios'

//-----------------------------------------------------------------------------------
//                            ADICIONAR HORA E DATA                                     
//-----------------------------------------------------------------------------------

const initialState = {
    car:{
        time: "",
        placa: "",
        tipoLavagem: "basica",
        nome: "",
        numero: "",
        pagamento: false
    }
}

const baseUrl = "http://localhost:3001/cars"

class AddNew extends React.Component {

    state = {...initialState}

    clear(){
        this.setState({...initialState})
    }

    save(){
        const car = this.state.car
        //const method = car.id ? 'put' : 'post'
        //const url = car.id ? `${baseUrl}/${car.id}` : baseUrl
        axios.post(baseUrl, car)
            .then(resp => {
                this.setState({ car: initialState.car })
            })

    }

    updateField(event) {
        const car = { ...this.state.car }
        car[event.target.name] = event.target.value
        this.setState({ car })
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
                    <select className="select" value={this.state.tipoLavagem} onChange={e => this.updateField(e)}>
                        <option value="basica">Básica</option>
                        <option value="completa">Completa</option>

                    </select>
                </div>
                <br />
                <div className="row">
                    <label>Pagamento realizado:
                        <input  className="check" 
                                    type="checkbox" 
                                    name="pagamento" 
                                    value={this.state.car.pagamento}
                                    onChange={e => this.updateField(e)}/>
                    </label>
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
        </div>;
    }
}
 
export default AddNew;