import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTemperaments } from "../actions"
import { CreateDiv } from "./CreateStyle"

function Create ({temperaments, getTemperaments}){
  let show = [];
  document.querySelectorAll('input[type=text]').forEach(i => i.value ? show.push(i.value) : null)

  const [searchTemperaments, setSearchTemperaments] = useState("")
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span: "",
    temperaments: []
  })

  useEffect(() => {
    getTemperaments()    
  }, [])

  function validate(input, name){
    let errors = {...error};
    if (name === "name"){
      if (!input[name]){
        errors[name] = `${name} is required`
      } else if (!/^[a-zA-Z]+$/.test(input[name])){
        errors[name] = `${name} can only contain letters`
      } else{
        delete errors[name];
      }
    } else{
      if (!input[name]){
        errors[name] = `${name} is required`
      } else if (!/^[0-9]+$/.test(input[name])){
        errors[name] = `${name} can only contain numbers`
      }else{
        delete errors[name];
      }
    }
    return errors;
  }

  function handleInputChange(e) {

    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setError(validate({
      ...input,
        [e.target.name]: e.target.value},
        e.target.name))
  }

  function handleCheck(e) {
    if (e.target.checked){
      setInput({
        ...input,
        temperaments: [...input.temperaments, parseInt(e.target.id)]
      })
    } else{
      setInput({
        ...input,
        temperaments: input.temperaments.filter(t => t !== parseInt(e.target.id))
      })
    }
  }

  function handleSearch(e){
    setSearchTemperaments(e.target.value)
  }

  async function handleSubmit(e){
    
    await fetch("http://localhost:3001/dog", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: input.name,
                            height: input.minHeight + "-" + input.maxHeight,
                            weight: input.minWeight + "-" + input.maxWeight,
                            life_span: input.life_span,
                            temperaments: input.temperaments})
    });
  }
  console.log(error)
  return (
    <CreateDiv>
      <h1>CREATE</h1>
        <form onSubmit={e => handleSubmit(e)}>
          <ul>
            <li>
              <label>Nombre:</label>
              <input className={error.name ? "danger" : "input"} type="text" name="name" onChange={e => handleInputChange(e)} value={input.name}/>
            </li>
            <li>
              <label>Altura:</label>
              <input className={error.minHeight ? "danger" : "input"} placeholder="min..." type="text" name="minHeight" onChange={e => handleInputChange(e)} value={input.minHeight}/>
              <input className={error.maxHeight ? "danger" : "input"} placeholder="max..." type="text" name="maxHeight" onChange={e => handleInputChange(e)} value={input.maxHeight}/>
            </li>
            <li>
              <label>Peso:</label>
              <input className={error.minWeight ? "danger" : "input"} placeholder="min..." type="text" name="minWeight" onChange={e => handleInputChange(e)} value={input.minWeight}/>
              <input className={error.maxWeight ? "danger" : "input"} placeholder="max..." type="text" name="maxWeight" onChange={e => handleInputChange(e)} value={input.maxWeight}/>
            </li>
            <li>
              <label>Años de vida:</label>
              <input className={error.life_span ? "danger" : "input"} type="text" name="life_span" onChange={e => handleInputChange(e)} value={input.life_span}/>
            </li>
            <li>  
              <label>Temperamentos:</label>
              <input type="search" name="temperaments" onChange={e => handleSearch(e)} value={searchTemperaments}/>
              <div id="container">
                <ul>
                  {temperaments ? temperaments.map(t => t.name.toLowerCase().indexOf(searchTemperaments.toLowerCase()) !== -1 ? <li key= {"l" + t.id} ><label><input id={t.id} name={t.name} onChange={e => handleCheck(e)} type="checkbox"/>{t.name}</label></li> : null) : "...Loading"}
                </ul>
              </div>
            </li>
          </ul>
          {show.length === 6 && Object.keys(error).length === 0 && input.temperaments.length ? <input type="submit" /> : <input type="submit" disabled="disabled" />}
        </form> 
    </CreateDiv>
  )
}

function mapStateToProps(state) {
  return {
    temperaments: state.temperaments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTemperaments: () => dispatch(getTemperaments())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);