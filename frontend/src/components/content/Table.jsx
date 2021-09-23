import React from 'react';
import './table.css'
import axios from 'axios'

const initialState = {
    list: [],
    rowChecked: false
}

const baseUrl = "http://localhost:3001/cars"

class Table extends React.Component {

    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    edit(cars){

    }

    remove(cars){
        axios.delete(`${baseUrl}/${cars.id}`).then(resp=>{
            axios(baseUrl).then(resp => {
                this.setState({ list: resp.data })
            })
        })
    }

    rendertable(){
        console.log(this.state.list)
        return(
            <div className="Table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th><i className="fa fa-check-square text-success"></i></th>
                            <th>Hora</th>
                            <th>Placa</th>
                            <th>Lavagem</th>
                            <th>Nome</th>
                            <th>Número</th>
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
            //let classes = 'row '
            //const rowChecked = this.state.rowChecked 
            //classes += rowChecked ? 'checked' : ''
            return(
                <tr className = "row" key={cars.id}>
                    <th> <input type="checkbox" onClick={() => this.rowChecked()} /></th>
                    <th> {cars.time} </th>
                    <th> {cars.placa} </th>
                    <th> {cars.tipoLavagem} </th>
                    <th> {cars.nome} </th>
                    <th> {cars.numero} </th>
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

    rowChecked(){
        
    }

    render() { 
        return <div className="Main">
            {this.rendertable()}
        </div>;
    }
}
 
export default Table;