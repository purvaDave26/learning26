import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-lighth">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/netflixhome">Netflix Home </Link>
      </li>

      <li class="nav-item active">
        <Link class="nav-link" to="/netflixshows">Netflix Shows </Link>
      </li>
{/* 
      <li class="nav-item active">
              <Link class="nav-link" to="/netflixmovies">
                Netflix Movies
              </Link>
            </li>

    <li class="nav-item active">
              <Link class="nav-link" to="/Teams">
               Ipl
              </Link>
            </li>

     <li class="nav-item active">
              <Link class="nav-link" to="/Sports">
               Sports
              </Link>
            </li>

       <li class="nav-item active">
              <Link class="nav-link" to="/Students">
               Students
              </Link>
            </li> 

        <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo1">
               Usestate1
              </Link>
            </li>
          
            <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo2">
               Usestate2
              </Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo3">
               Usestate3
              </Link>
            </li>
         <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo4">
               Usestate4
              </Link>
            </li>
          <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo5">
               Usestate5
              </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo6">
               Usestate6
              </Link>
            </li>
        
         <li class="nav-item active">
              <Link class="nav-link" to="/usestatedemo7">
               Usestate7
              </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/employees">
               Employees
              </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/inputdemo1">
               input 1
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/dependenddropdown">
                Drop down
              </Link>
            </li>
            
            <li class="nav-item active">
              <Link class="nav-link" to="/inputdemo2">
               input demo2
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/student">
              Student
              </Link>
            </li>
             <li class="nav-item active">
              <Link class="nav-link" to="/table1">
              table 1
              </Link>
              
            </li>
            */}
             <li class="nav-item active">
              <Link class="nav-link" to="/table2">
              table 2
              </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/book">
              Book
              </Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo1">
              Form Demo1
              </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/formdemo2">
              Form Demo2
              </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/formdemo3">
              Form Demo3
              </Link>
            </li>

             <li class="nav-item active">
              <Link class="nav-link" to="/formdemo4">
              Form Demo4
              </Link>
            </li>
            
             <li class="nav-item active">
              <Link class="nav-link" to="/practiceform">
              practice form
              </Link>
            </li>
             <li class="nav-item active">
              <Link class="nav-link" to="/formdemo5">
              Form Demo5
              </Link>
            </li>
             <li class="nav-item active">
               <NavLink to="/formdemo6" className={({ isActive }) => (isActive ? "active-link" : "")} style={({ isActive }) =>
                ({color: isActive ? "blue" : "black"})}> Form Demo6</NavLink>
            </li>
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/formdemo7">
              Form Demo7
              </Link>
            </li> */}
            <li>
               <NavLink to="/formdemo7" className={({ isActive }) => (isActive ? "active-link" : "")} style={({ isActive }) =>
                ({color: isActive ? "blue" : "black"})}> Form Demo7</NavLink>
            </li>

             <li>
               <NavLink to="/formdemo8" className={({ isActive }) => (isActive ? "active-link" : "")} style={({ isActive }) =>
                ({color: isActive ? "blue" : "black"})}> Form Demo8</NavLink>
            </li>

              <li>
               <NavLink to="/usememodemo1" className={({ isActive }) => (isActive ? "active-link" : "")} style={({ isActive }) =>
                ({color: isActive ? "blue" : "black"})}> use memo demo 1</NavLink>
            </li>
            

            <li>
               <NavLink to="/findbombgame" className={({ isActive }) => (isActive ? "active-link" : "")} style={({ isActive }) =>
                ({color: isActive ? "blue" : "black"})}> find bomb game</NavLink>
            </li>

             <li>
               <NavLink to="/apidemo1" className={({ isActive }) => (isActive ? "active-link" : "")} style={({ isActive }) =>
                ({color: isActive ? "blue" : "black"})}> Api demo 1</NavLink>
            </li>

             <li>
               <NavLink to="/searchomdb" className={({ isActive }) => (isActive ? "active-link" : "")} style={({ isActive }) =>
                ({color: isActive ? "blue" : "black"})}> search moive</NavLink>
            </li>

            <li>
               <NavLink to="/apidemo2" className={({ isActive }) => (isActive ? "active-link" : "")} style={({ isActive }) =>
                ({color: isActive ? "blue" : "black"})}> Api demo 2</NavLink>
            </li>
             <li>
               <NavLink to="/apidemo22" className={({ isActive }) => (isActive ? "active-link" : "")} style={({ isActive }) =>
                ({color: isActive ? "blue" : "black"})}> Api demo 22</NavLink>
            </li>
            <li>
               <NavLink to="/useeffectdemo1" className={({ isActive }) => (isActive ? "active-link" : "")} style={({ isActive }) =>
                ({color: isActive ? "blue" : "black"})}>use effect demo</NavLink>
            </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
