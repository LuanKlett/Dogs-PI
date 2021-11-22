import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { connect } from "react-redux";
import { getTemperaments } from "../actions"
import { CreateDiv } from "./CreateStyle"

function Create ({temperaments, getTemperaments}){
  let show = [];
  document.querySelectorAll('input[type=text]').forEach(i => i.value && i.name !== "image" ? show.push(i.value) : null)

  let history = useHistory ();

  const [searchTemperaments, setSearchTemperaments] = useState("")
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    life_span: "",
    temperaments: [],
    image: ""
  })

  useEffect(() => {
    getTemperaments()    
  }, [])

  function validate(input, name){
    let errors = {...error};
    if (name === "name"){
      if (!input[name]){
        errors[name] = `${name} is required`
      } else if (!/^[a-zA-Z À-ÿ\u00f1\u00d1]+$/.test(input[name])){
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
    e.preventDefault()
    const post = await fetch("http://localhost:3001/dog", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: input.name,
                            height: input.minHeight + "-" + input.maxHeight,
                            weight: input.minWeight + "-" + input.maxWeight,
                            life_span: input.life_span,
                            temperaments: input.temperaments,
                            image: input.image})
    })
    const content = await post.json();
    history.push(`/detail/${content.id}`)
  }
  console.log(error)
  return (
    <CreateDiv>
      <h1>Add Breed:</h1>
        <form onSubmit={e => handleSubmit(e)}>
          <ul>
            <li>
              <label>Name:</label>
              <input className={error.name ? "danger" : "input"} type="text" placeholder="..." name="name" onChange={e => handleInputChange(e)} value={input.name}/>
            </li>
            <li>
              <label>Height:</label>
              <input className={error.minHeight ? "danger" : "input"} placeholder="min..." type="text" name="minHeight" onChange={e => handleInputChange(e)} value={input.minHeight}/>
              <input className={error.maxHeight ? "danger" : "input"} placeholder="max..." type="text" name="maxHeight" onChange={e => handleInputChange(e)} value={input.maxHeight}/>
            </li>
            <li>
              <label>Weight:</label>
              <input className={error.minWeight ? "danger" : "input"} placeholder="min..." type="text" name="minWeight" onChange={e => handleInputChange(e)} value={input.minWeight}/>
              <input className={error.maxWeight ? "danger" : "input"} placeholder="max..." type="text" name="maxWeight" onChange={e => handleInputChange(e)} value={input.maxWeight}/>
            </li>
            <li>
              <label>Life Span:</label>
              <input className={error.life_span ? "danger" : "input"} type="text" placeholder="..." name="life_span" onChange={e => handleInputChange(e)} value={input.life_span}/>
            </li>
            <li>  
              <label>Search temperaments:</label>
              <input type="search" name="temperaments" placeholder="..." onChange={e => handleSearch(e)} value={searchTemperaments}/>
              <center>
                <div id="container">
                  <ul>
                    {temperaments ? temperaments.map(t => t.name.toLowerCase().indexOf(searchTemperaments.toLowerCase()) !== -1 ? <li key= {"l" + t.id} ><label><input id={t.id} name={t.name} onChange={e => handleCheck(e)} type="checkbox"/>{t.name}</label></li> : null) : "...Loading"}
                  </ul>
                </div>
              </center>
            </li>
            <li>
              <label>Pic:</label>
              <input type="text" placeholder="..." name="image" onChange={e => setInput({...input, [e.target.name]: e.target.value})} value={input.image}/>
            </li>
          </ul>
          {show.length === 6 && Object.keys(error).length === 0 && input.temperaments.length ? <input type="submit" value="Send"/> : <input type="submit" disabled="disabled" value="Send"/>}
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