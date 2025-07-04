import React from 'react'
import './HomeScreen.css'
import Navber from '../../Componente/Navbar/Navbar'
import Banner from '../../Componente/Banner/Banner'
import Row from '../../Componente/Row/Row'
import Request from '../../API/request'
import axios from '../../API/axios'

const HomeScreen = () => {
  return (
    <div>
      <Navber/>
      <Banner/>
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchURL={Request.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row
        title={"Trending Now"}
        fetchURL={Request.fetchTrending}
        isLarge={false}
      />
      <Row
        title={"Comady"}
        fetchURL={Request.fetchComedyMovies}
        isLarge={false}
      />
      <Row
        title={"Horror"}
        fetchURL={Request.fetchHorrorMovies}
        isLarge={false}
      />
      <Row
        title={"Action"}
        fetchURL={Request.fetchActionMovies}
        isLarge={false}
      />

      <Row
        title={"Romance"}
        fetchURL={Request.fetchRomanceMovies}
        isLarge={false}
      />

      <Row
        title={"Documentaries"}
        fetchURL={Request.fetchDocumentaries}
        isLarge={false}
      />
    </div>
  )
}

export default HomeScreen
