import React from 'react';
import './editForm.css'
import axios from 'axios'

const initialState = {
    car:{
        time: "",
        placa: "",
        tipoLavagem: "basica",
        nome: "",
        numero: "",
        pagamento: false,
        id: 0
    },
}

const baseUrl = "http://localhost:3001/cars"

class EditForm extends React.Component {

    state = {car: this.props.editingCar}

    clear(){
        this.setState({...initialState})
    }

    save(){
        var car = this.state.car       
        axios.put(`${baseUrl}/${this.state.car.id}`, car)
            .then(resp => {
                this.props.close()
                this.setState({ car: initialState.car })
            })

    }

    updateField(event) {
        const car = { ...this.state.car }
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        car[event.target.name] = value
        this.setState({ car })
    }

    renderForm(){
        return(
            <div className="editForm">
                <div className="editRow">
                    <label> Placa:</label>
                    <input  className="form-control" 
                            type="text" 
                            name="placa" 
                            value={this.state.car.placa}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a placa..."/>
                </div>
                <br />
                <div className="editRow">
                    <label>Nome:</label>
                    <input  className="form-control" 
                            type="text" 
                            name="nome" 
                            value={this.state.car.nome}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a nome..."/>
                </div>
                <br />
                <div className="editRow">
                    <label>Número:</label>
                    <input  className="form-control" 
                            type="text" 
                            name="numero" 
                            value={this.state.car.numero}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a número..."/>
                </div>
                <br />
                <div className="editRow">
                    <label>Tipo de lavagem:</label>
                    <br />
                    <select 
                        className="select" 
                        value={this.state.tipoLavagem} 
                        onChange={e => this.updateField(e)} 
                        name="tipoLavagem"
                        defaultValue={this.state.car.tipoLavagem}
                    >
                        <option value="basica">Básica</option>
                        <option value="completa">Completa</option>

                    </select>
                </div>
                <br />
                <div className="editRow">
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
        </div>;
    }
}

export default EditForm;