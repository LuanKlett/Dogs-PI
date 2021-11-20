import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { getAllDogs, getSearch, getTemperaments } from "../actions"
import Dogs from "./Dogs"
import { HomeDiv } from "./HomeStyle"
import Loading from "./Loading";

function Home ({dogs, loading, getAllDogs, getSearch, temperaments, getTemperaments}){
  const [order, setOrder] = useState("nameAsc")
  const [filterTemperaments, setFilterTemperaments] = useState([])
  const [filterDb, setFilterDb] = useState("off")
  const [searchTemperaments, setSearchTemperaments] = useState("")

  useEffect(()=>{
    getAllDogs()
    getTemperaments()
  }, [])

  function handleChange(e){
    e.preventDefault();
    if (e.target.value === ""){
      getAllDogs()
    }else{
      getSearch(e.target.value)
    }
  }

  function handleSelectChange(e){
    e.preventDefault()
    setOrder(e.currentTarget.value)
  }

  function handleCheck(e) {
    if (e.target.checked){
      setFilterTemperaments([...filterTemperaments, e.target.name])
    } else{
      setFilterTemperaments(filterTemperaments.filter(t => t !== e.target.name))
    }
  }

  function handleSearch(e){
    setSearchTemperaments(e.target.value)
  }

  function handleSelectChangeDb(e){
    e.preventDefault()
    setFilterDb(e.currentTarget.value)
  }

  return (
    loading ? <Loading /> : (<HomeDiv>
      <div id="select">
        <label>Ordenar por: </label>
        <select name="select" onChange={e => handleSelectChange(e)}>
          <option value="nameAsc" selected>Nombre (asc.)</option>
          <option value="nameDes">Nombre (des.)</option>
          <option value="weightAsc">Peso (asc.)</option>
          <option value="weightDes">Peso(des.)</option>
        </select>
      </div>
      <input id="searchBar" type="search" placeholder="search..." onChange={e => handleChange(e)} />
      <div id="containerD">
        <div id="containerE">
          <p>Filtrar por temperamentos:</p>
          <div id="checks">
              <input type="search" name="temperaments" onChange={e => handleSearch(e)} value={searchTemperaments}/>
              {temperaments && temperaments.map(t => t.name.toLowerCase().indexOf(searchTemperaments.toLowerCase()) !== -1 ? <label key={`check${t.id}`}><input id={t.id} name={t.name} onChange={e => handleCheck(e)} type="checkbox"/>{t.name}</label> : null)}
          </div>
        </div>
        <div>
          <select name="select" onChange={e => handleSelectChangeDb(e)}>
            <option value="off" selected>Todos</option>
            <option value="db">Base de Datos</option>
            <option value="api">Api</option>
          </select>
          {dogs && <Dogs dogs={dogs} order={order} filterTemperaments={filterTemperaments} filterDb={filterDb}/>}
        </div>
      </div>
    </HomeDiv>)
  )
}

function mapStateToProps(state) {
  return {
    dogs: state.dogs,
    loading: state.loading,
    temperaments: state.temperaments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllDogs: () => dispatch(getAllDogs()),
    getSearch: s => dispatch(getSearch(s)),
    getTemperaments: () => dispatch(getTemperaments())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);