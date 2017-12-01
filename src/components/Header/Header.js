import React from 'react';

export default Header = () =>
  <nav class="navbar  navbar-default">
    <div class="container">
      <div class="menu-content">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="top-social-icons list-inline pull-right">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li class="top-search">
              <a href="#" class="sactive">
                <i class="fa fa-search"></i>
              </a>
            </li>
          </ul>
          <ul class="nav navbar-nav text-uppercase pull-left">
            <li class="dropdown">
              <a>Home</a>
            </li>
            <li><a href="about-me.html">About me</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </nav>