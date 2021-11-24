import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllDogs, getSearch, getTemperaments } from "../../actions";
import Dogs from "../Dogs/Dogs";
import { HomeDiv, ChecksDiv } from "./HomeStyle";
import Loading from "../Loading";

function Home({
  dogs,
  loading,
  getAllDogs,
  getSearch,
  temperaments,
  getTemperaments,
}) {
  const [order, setOrder] = useState("nameAsc");
  const [filterTemperaments, setFilterTemperaments] = useState([]);
  const [filterDb, setFilterDb] = useState("off");
  const [searchTemperaments, setSearchTemperaments] = useState("");

  useEffect(() => {
    getAllDogs();
    getTemperaments();
  }, []);

  function handleChange(e) {
    e.preventDefault();
    if (e.target.value === "") {
      getAllDogs();
    } else {
      getSearch(e.target.value);
    }
  }

  function handleSelectChange(e) {
    e.preventDefault();
    setOrder(e.currentTarget.value);
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setFilterTemperaments([...filterTemperaments, e.target.name]);
    } else {
      setFilterTemperaments(
        filterTemperaments.filter((t) => t !== e.target.name)
      );
    }
  }

  function handleSearch(e) {
    setSearchTemperaments(e.target.value);
  }

  function handleSelectChangeDb(e) {
    e.preventDefault();
    setFilterDb(e.currentTarget.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setFilterTemperaments([]);
    document
      .querySelectorAll("[type=checkbox]")
      .forEach((c) => (c.checked = false));
  }

  return loading ? (
    <Loading />) : (
    <HomeDiv>
      <div id="order">
        <label>Order by: </label>
        <select
          name="select"
          defaultValue="nameAsc"
          onChange={(e) => handleSelectChange(e)}
        >
          <option value="nameAsc">Name (asc.)</option>
          <option value="nameDes">Name (des.)</option>
          <option value="weightAsc">Weight (asc.)</option>
          <option value="weightDes">Weight (des.)</option>
        </select>
      </div>
      <input
        id="searchBar"
        type="search"
        placeholder="search..."
        onChange={(e) => handleChange(e)}
      />
      <div id="containerD">
        <div id="off">
          <p>Filter by temperaments:</p>
          <ChecksDiv>
            <input
              id="searchT"
              type="search"
              name="temperaments"
              placeholder="search..."
              onChange={(e) => handleSearch(e)}
              value={searchTemperaments}
            />
            {temperaments && temperaments.map((t) => t.name.toLowerCase().indexOf(searchTemperaments.toLowerCase()) !== -1 ? (
                  <label className="label" key={`check${t.id}`}>
                    <input
                      className="checkbox"
                      id={t.id}
                      name={t.name}
                      onChange={(e) => handleCheck(e)}
                      type="checkbox"
                    />
                    {t.name}
                  </label>
                ) : null
              )}
          </ChecksDiv>
          <button id="cleanFilter" onClick={(e) => handleClick(e)}>
            Clean Filters
          </button>
          <div id="menu">
            <img src="./img/menu.png"/>
          </div>
        </div>
        <div>
          <center>
            <select
              name="select"
              id="apiDb"
              defaultValue="off"
              onChange={(e) => handleSelectChangeDb(e)}
            >
              <option value="off">All</option>
              <option value="db">Data Base</option>
              <option value="api">Api</option>
            </select>
          </center>
          {!dogs.res ? (
            <Dogs
              dogs={dogs}
              order={order}
              filterTemperaments={filterTemperaments}
              filterDb={filterDb}
            />
          ) : (<p style={{ width: "100vw" }}>{dogs.res}</p>)}
        </div>
      </div>
    </HomeDiv>
  );
}

function mapStateToProps(state) {
  return {
    dogs: state.dogs,
    loading: state.loading,
    temperaments: state.temperaments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllDogs: () => dispatch(getAllDogs()),
    getSearch: (s) => dispatch(getSearch(s)),
    getTemperaments: () => dispatch(getTemperaments()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
