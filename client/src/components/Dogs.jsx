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
        return arr.filter(d => d.db === true)
      default:
        return arr
    }
  }

  function handleClick(e){
    e.preventDefault();
    setPageNumber(e.target.value)
  }

  function handleArrow(e){
    if (e.target.value === "<" && pageNumber > 1) setPageNumber(pageNumber - 1)
    if (e.target.value === ">" && pageNumber < pages.length - 1) setPageNumber(pageNumber + 1)
  }
  
  const [sort, setSort] = useState(orderSort(filterDogsByTemperament(filterDogsByDb(dogs)), order))
  const [pages, setPages] = useState(p())
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() =>{
    setSort(orderSort(filterDogsByTemperament(filterDogsByDb(dogs)), order))
  }, [order, filterTemperaments, dogs, filterDb])

  useEffect(()=>{ 
    setPages(p())
  }, [sort])

  useEffect(() => {
    setPageNumber(0)
  }, [filterTemperaments, filterDb])

  if (pages.length){
  return(
    <div>
      <DogsDiv>
        {pages[pageNumber].map(d => <Dog key={d.id} name={d.name} image={d.image} weight={d.weight} temperament={d.temperament} />)}
      </DogsDiv>
      <BtnDiv>
        <button className="btn" value="<" onClick={e => handleArrow(e)}>{"<"}</button>
        {pages.map((e, i) => <button key={`btn${i}`} className="btn" value={i} onClick={e => handleClick(e)}>{i + 1}</button>)}
        <button className="btn" value=">" onClick={e => handleArrow(e)}>{">"}</button>
      </BtnDiv>
    </div>
  )
  } else{
    return(
      <div>No se encontraron resultados</div>
    )
  }
}