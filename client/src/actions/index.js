export function getTemperaments(){
  return function(dispatch) {
    return fetch("http://localhost:3001/temperament")
      .then(response => response.json())
      .then(json => {
      dispatch({ type: "GET_TEMPERAMENTS", payload: json });
      });
  };
}

export function getAllDogs(){
  return async function(dispatch) {
    const response = await fetch("http://localhost:3001/dogs")
    .then(response => response.json())
    
    dispatch({ type: "GET_ALL_DOGS", payload: response });
  };
}

export function getDetail(id){
  return function(dispatch) {
    return fetch(`http://localhost:3001/dogs/${id}`)
      .then(response => response.json())
      .then(json => {
      dispatch({ type: "GET_DETAIL", payload: json });
      });
  };
}

export function getSearch(payload){
  return function(dispatch) {
    return fetch(`http://localhost:3001/dogs?name=${payload}`)
      .then(response => response.json())
      .then(json => {
      dispatch({ type: "GET_SEARCH", payload: json });
      });
  };
}