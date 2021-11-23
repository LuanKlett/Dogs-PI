import React, {useState, useEffect} from 'react';
import Dog from "./Dog"
import { DogsDiv, BtnDiv } from "./DogsStyle"

export default function Dogs({dogs, order, filterTemperaments, filterDb}){
  function p (){
    let dogPages = [...sort];
    let arr = []
    while(dogPages.length > 0){
      arr.push(dogPages.slice(0, 8))
      dogPages = dogPages.slice(8, dogPages.length - 1)
    }
    return arr;
  }

  function orderSort(arr, order){
    switch (order){
      case "nameDes":
        return arr.sort(function(one, two){
          let a = one.name.toLowerCase()
          let b = two.name.toLowerCase()

          if (a < b){
            return 1;
          }
          if (a > b){
            return -1
          }
          return 0;
        })

      case "weightDes":
        return arr.sort(function(one, two){
          let a = parseInt(one.weight)
          let b = parseInt(two.weight)
          console.log()

          if (a < b){
            return 1;
          }
          if (a > b){
            return -1
          }
          return 0;
        })

      case "weightAsc":
        return arr.sort(function(one, two){
          let a = parseInt(one.weight)
          let b = parseInt(two.weight)

          if (a > b){
            return 1;
          }
          if (a < b){
            return -1
          }
          return 0;
        })

      default:
        return arr.sort(function(one, two){
          let a = one.name.toLowerCase()
          let b = two.name.toLowerCase()

          if (a > b){
            return 1;
          }
          if (a < b){
            return -1
          }
          return 0;
        })
    }
  }

  function filterDogsByTemperament(arr){
    filterTemperaments.forEach(t => arr = arr.filter(d => d.temperament && d.temperament.includes(t) === true)) 
    return arr;
  }

  function filterDogsByDb(arr){
    switch(filterDb){
      case "api":
        return arr.filter(d => d.db !== true)
      case "db":
        console.log(arr.filter(d => d.db === true))
        return arr.filter(d => d.db === true)
      default:
        return arr
    }
  }

  function handleClick(e){
    e.preventDefault();
    setPageNumber(parseInt(e.target.value))
  }

  function handleArrow(e){
    if (e.target.value === "<" && pageNumber > 0) setPageNumber(pageNumber - 1)
    if (e.target.value === ">" && pageNumber < pages.length - 1) setPageNumber(pageNumber + 1)
  }

  function createButtons(){
    return pages.map((e, i) => pageNumber !== i ? <button key={`btn${i}`} className="btn" value={i} onClick={e => handleClick(e)}>{i + 1}</button> : <button key={`btn${i}`} id="active" className="btn" value={i} onClick={e => handleClick(e)}>{i + 1}</button>)
  }
  
  const [sort, setSort] = useState(orderSort(filterDogsByDb(filterDogsByTemperament(dogs)), order))
  const [pages, setPages] = useState(p())
  const [pageNumber, setPageNumber] = useState(0)
  const [buttons, setButtons] = useState(createButtons())

  useEffect(() => {
    setButtons(createButtons())
  }, [pageNumber])

  useEffect(() =>{
    setSort(orderSort(filterDogsByTemperament(filterDogsByDb(dogs)), order))
  }, [order, filterTemperaments, dogs, filterDb])

  useEffect(()=>{ 
    setPages(p())
  }, [sort, order])

  useEffect(() => {
    setPageNumber(0)
  }, [filterTemperaments, filterDb])

  useEffect(() => {
    setButtons(createButtons())
  }, [pages])

  if (pages.length){
  return(
    <div>
      <DogsDiv>
        {pages[pageNumber].map(d => <Dog key={d.id} name={d.name} image={d.image} weight={d.weight} temperament={d.temperament} id={d.id} />)}
      </DogsDiv>
      <BtnDiv>
        <button className="btn" value="<" onClick={e => handleArrow(e)}>{"<"}</button>
          {buttons}
        <button className="btn" value=">" onClick={e => handleArrow(e)}>{">"}</button>
      </BtnDiv>
    </div>
  )
  } else{
    return(
      <p style={{width: "100vw"}}>No se encontraron resultados</p>
    )
  }
}