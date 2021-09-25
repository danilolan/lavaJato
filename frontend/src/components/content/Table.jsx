import React from 'react';
import './table.css'
import axios from 'axios'

import Modal from './widgets/Modal'
import EditForm from './widgets/EditForm'

const initialState = {
    list: [],
    rowChecked: false,
    rowCheckedList: [],
    modalIsOpen: false,
    editingCar: []
}

const baseUrl = "http://localhost:3001/cars"

class Table extends React.Component {

    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    
    
    rendertable(){
        return(
            <div className="Table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th><i className="fa fa-check-square text-success"></i></th>
                            <th>Hora</th>
                            <th>Placa</th>
                            <th>Nome</th>
                            <th>Número</th>
                            <th>Lavagem</th>
                            <th>Pagamento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
    
    renderRows(){ 
        return ( this.state.list.map(cars => {
            let classes = 'row '
            const index = this.state.rowCheckedList.indexOf(cars.id);
            if (index > -1) {
                classes += 'checked'
            }
            return(
                <tr className = {classes} key={cars.id}>
                    <th> <input type="checkbox" onChange={() => this.rowChecked(cars.id)} /></th>
                    <th> {cars.time} </th>
                    <th> {cars.placa} </th>
                    <th> {cars.nome} </th>
                    <th> {cars.numero} </th>
                    <th> {cars.tipoLavagem} </th>
                    <th> {cars.pagamento ? <i className="fa fa-check text-success"></i> : <i className="fa fa-times text-danger"></i>}</th>
                    <th> 
                        <button className="btn btn-warning"
                                onClick={() => this.edit(cars)}>
                                <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger"
                                onClick={() => this.remove(cars)}>
                                <i className="fa fa-trash"></i>
                        </button>
                    </th>
                </tr>
            )
        }))
    }
    
    rowChecked(id){
        let array = this.state.rowCheckedList
        const index = array.indexOf(id);
        if (index > -1) {
            array.splice(index, 1);
        }else{
            array.push(id)
        }
        this.setState({rowCheckedList: array})
        console.log(this.state.rowCheckedList)
    }
    
    edit(cars){
        this.setState({modalIsOpen: true})
        this.setState({editingCar: cars})
    }

    closeModal(){
        this.setState({modalIsOpen: false})
        this.componentWillMount()
    }
    
    remove(cars){
        axios.delete(`${baseUrl}/${cars.id}`).then(resp=>{
            axios(baseUrl).then(resp => {
                this.setState({ list: resp.data })
            })
        })
    }
    render() { 
        return <div className="Main">
            {this.rendertable()}
            <Modal isOpen={this.state.modalIsOpen} click={e=>this.closeModal(e)}>
                <EditForm editingCar= {this.state.editingCar} close={e=>this.closeModal(e)}></EditForm>
            </Modal>
        </div>;
    }
}

export default Table;