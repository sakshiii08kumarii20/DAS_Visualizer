import React from 'react';
import BubbleSortVisualizer from './components/BubbleSortVisualizer';

function App() {
  return (
    <div className="App">
      <BubbleSortVisualizer />
      <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Offcanvas dark navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Let's Overview</a>
          </li>
          
         <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Time Complexcity
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Signly LinkedList</a></li>
              <li><a class="dropdown-item" href="#">Doubly LinkedList</a></li>
              <li><a class="dropdown-item" href="#">Circular LinkedList</a></li>
           
              
            </ul>
          </li>


          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             LinkedList
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Signly LinkedList</a></li>
              <li><a class="dropdown-item" href="#">Doubly LinkedList</a></li>
              <li><a class="dropdown-item" href="#">Circular LinkedList</a></li>
           
              
            </ul>
          </li>
        </ul>

        
        
      </div>
    </div>
  </div>
</nav>
    </div>
  );
}

export default App;
