import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import { HeaderComponent } from './components/HeaderComponent';
// import { ContentComponent } from './components/ContentComponent';
// import FooterComponent from './components/FooterComponent';
// import { NetflixNavbar } from './components/NetflixNavbar';
import { MapDemo4 } from './components/MapDemo4';
import { MapDemo5 } from './components/MapDemo5';
import { MapDemo6 } from './components/MapDemo6';
import { Route, Router, Routes } from 'react-router-dom';
import { NetflixHome } from './components/netflix/NetflixHome';
import { NetflixShows } from './components/netflix/NetflixShows';
import { NetflixMovies } from './components/netflix/NetflixMovies';
import { Navbar } from './components/Navbar';
import { Watch } from './components/netflix/Watch';
import { Error404 } from './components/Error404';
import { Teams } from './components/Ipl/Teams';
import { TeamDetails } from './components/Ipl/TeamDetails';
import { Sports } from './components/sports/Sports';
import { SportsDetails } from './components/sports/SportsDetails';
import { Students } from './components/students/Students';
import { StudentsResult } from './components/students/StudentsResult';
import { UseStateDemo1 } from './components/UseStateDemo1';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { UseStateDemo3 } from './components/UseStateDemo3';
import { UseStateDemo4 } from './components/UseStateDemo4';
import { UseStateDemo5 } from './components/UseStateDemo5';
import { UseStateDemo6 } from './components/UseStateDemo6';
import { UseStateDemo7 } from './components/UseStateDemo7';
import { Employees } from './components/Employees';
import { InputDemo1 } from './components/InputDemo1';
import { DependendDropDown } from './components/DependendDropDown';
import { InputDemo2 } from './components/InputDemo2';
import { Student } from './components/Student';
import { TableDemo1 } from './components/TableDemo1';
import { TableDemo2 } from './components/TableDemo2';
import { Book } from './components/Book';
import { FormDemo1 } from './components/form/FormDemo1';
import { FormDemo2 } from './components/form/FormDemo2';
import { FormDemo3 } from './components/form/FormDemo3';
import { FormDemo4 } from './components/form/FormDemo4';
import { PracticeForm } from './components/form/PracticeForm';
import { FormDemo5 } from './components/form/FormDemo5';
import { FormDemo6 } from './components/form/FormDemo6';
import { FormDemo7 } from './components/form/FormDemo7';
import { Common } from './components/Common';
import { FormDemo8 } from './components/form/FormDemo8';
import { UseMemodemo1 } from './components/UseMemodemo1';
import { FindBombGame } from './components/FindBombGame';
import { ApiDemo1 } from './components/api/ApiDemo1';
import { OmdbSearch } from './components/api/OmdbSearch';
import { MovieDetails } from './components/api/MovieDetails';
import { ApiDemo2 } from './components/api/ApiDemo2';
import { ApiDemo22 } from './components/api/ApiDemo22';
import { UseEffectDemo1 } from './components/UseEffectDemo1';
//import './App.css'

function App() {

  // var name="Purva";
  // var year=2026
  // var isActive=true;

  // var x;
  // var user={
  //   name:"Purva",
  //   age:20
  // }

  // var student={
  //   id:1,
  //   name:"jaladhi",
  //   isStudent:true,
  // }

  return (
    <div>
      {/* <h1>Hello</h1>
      <h1>Name: {name}</h1>
      <h2>Year: {year}</h2>
      <h2>isActive ?? :{isActive==true ? "active" :"not-active"}</h2>
      <h4>{user.name}</h4>
      <h4>{user.age}</h4>
      <h3>undefind :{x=="undefind" ? "undefined" :"defind"}</h3>
      <h3>student:</h3>
      <h3>id: {student.id} name : {student.name} isStudent: {student.isStudent==true ? "yes" :"no"}</h3> */}
      {/* <HeaderComponent></HeaderComponent> */}
        {/* <NetflixNavbar></NetflixNavbar>
      <ContentComponent></ContentComponent>
      <FooterComponent></FooterComponent> */}
      {/* <MapDemo4></MapDemo4> */}
      {/* <MapDemo5></MapDemo5> */}
      {/* <MapDemo6></MapDemo6> */}

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<MapDemo4/>}></Route>
        <Route path='/netflixhome' element={<NetflixHome/>}></Route>
        <Route path='/netflixshows' element={<NetflixShows/>}></Route>
        <Route path='/netflixmovies' element={<NetflixMovies/>}></Route>
        <Route path='/watch/:name' element={<Watch/>}></Route>
        <Route path='/*' element={<Error404/>}></Route>
        <Route path='/teams' element={<Teams/>}></Route>
        <Route path='/teamdetails/:id' element={<TeamDetails/>}></Route>
        <Route path='/sports' element={<Sports/>}></Route>
        <Route path='/sportsdetails/:id' element={<SportsDetails/>}></Route>
        <Route path='/students' element={<Students/>}></Route>
        <Route path='/studentsresults/:id' element={<StudentsResult/>}></Route>
        <Route path='/usestatedemo1' element={<UseStateDemo1/>}></Route>
        <Route path='/usestatedemo2' element={<UseStateDemo2/>}></Route>
        <Route path='/usestatedemo3' element={<UseStateDemo3/>}></Route>
        <Route path='/usestatedemo4' element={<UseStateDemo4/>}></Route>
        <Route path='/usestatedemo5' element={<UseStateDemo5/>}></Route>
        <Route path='/usestatedemo6' element={<UseStateDemo6/>}></Route>
        <Route path='/usestatedemo7' element={<UseStateDemo7/>}></Route>
        <Route path='/employees' element={<Employees/>}></Route>
        <Route path='/inputdemo1' element={<InputDemo1/>}></Route>
        <Route path='/dependenddropdown' element={<DependendDropDown/>}></Route>
        <Route path='/inputdemo2' element={<InputDemo2/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/table1' element={<TableDemo1/>}></Route>
        <Route path='/table2' element={<TableDemo2/>}></Route>
        <Route path='/book' element={<Book/>}></Route>
        <Route path='/formdemo1' element={<FormDemo1/>}></Route>
        <Route path='/formdemo2' element={<FormDemo2/>}></Route>
        <Route path='/formdemo3' element={<FormDemo3/>}></Route>
        <Route path='/formdemo4' element={<FormDemo4/>}></Route>
        <Route path='/practiceform' element={<PracticeForm/>}></Route>
        <Route path='/formdemo5' element={<FormDemo5/>}></Route>
        <Route path='/formdemo6' element={<FormDemo6/>}></Route>
        <Route path='/formdemo7' element={<FormDemo7/>}></Route>
        <Route path='/formdemo8' element={<FormDemo8/>}></Route>
        <Route path='/common' element={<Common/>}></Route>
        <Route path='/usememodemo1' element={<UseMemodemo1/>}></Route>
        <Route path='/findbombgame' element={<FindBombGame/>}></Route>
        <Route path='/apidemo1' element={<ApiDemo1/>}></Route>
        <Route path='/apidemo2' element={<ApiDemo2/>}></Route>
         <Route path='/apidemo22' element={<ApiDemo22/>}></Route>
        <Route path='/searchomdb' element={<OmdbSearch/>}></Route>
        <Route path='/moviedeatils/:imdbID' element={<MovieDetails/>}></Route>
        <Route path='/useeffectdemo1' element={<UseEffectDemo1/>}></Route>
      </Routes>
    </div>
  )
}

export default App
