import React from 'react';

class SearchBar extends React.Component{

    state={term:''};//no es trabajo del searchbar hacer la busqueda con este term (lo que el usuario ingresa), por eso debeos pasarselo al componente padre(App)

    onFormSubmit=event=>{

        event.preventDefault();//para que la pagina no se refresque cada vez que presionamos enter
        this.props.onSubmit(this.state.term); //referencia a la funcion que esta en App.js como props de searchBar
    }

    render(){

        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Buscar productos, marcas y más...</label>
                        <input type="text" value={this.state.term} onChange={(event)=>this.setState({term: event.target.value})}/>
                    </div>
                </form>
            </div>
            );

    }

}
export default SearchBar;