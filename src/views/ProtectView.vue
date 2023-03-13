<template>
  <div class="header_section header_bg">
    <div class="container-fluid">
      <div class="main">
        <div class="logo">
          <router-link to="/">
            <a><img src="images/logo.png" /></a>
          </router-link>
        </div>
        <div class="menu_text">
          <ul>
            <div class="togle_">
              <div class="menu_main">
                <ul>
                  <li><a href="#">Login</a></li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-search" aria-hidden="true"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="myNav" class="overlay">
              <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
                >&times;</a
              >
              <div class="overlay-content">
                <router-link to="/">
                  <a>Home</a>
                </router-link>
                <router-link to="/protect">
                  <a>Protect</a>
                </router-link>
                <router-link to="/about">
                  <a>About</a>
                </router-link>
                <router-link to="/doctors">
                  <a>Doctors</a>
                </router-link>
                <router-link to="/news">
                  <a>News</a>
                </router-link>
              </div>
            </div>
            <span class="navbar-toggler-icon"></span>
            <span onclick="openNav()"
              ><img src="images/toogle-icon.png" class="toggle_menu"
            /></span>
            <span onclick="openNav()"
              ><img src="images/toogle-icon1.png" class="toggle_menu_1"
            /></span>
          </ul>
        </div>
      </div>
    </div>
    <!-- banner section start -->
    <div class="container">
      <div class="about_taital_main">
        <h2 class="about_tag">Protect Corona Virus</h2>
        <div class="about_menu">
          <ul>
            <router-link to="/">
              <a>Home</a>
            </router-link>
            <li>Protect</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- banner section end -->
  </div>
  <!-- header section end -->
  <!-- protect section start -->
  <div class="protect_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="protect_taital">How to Protect Yourself</h1>
          <p class="protect_text">
            English. Many desktop publishing packages and web page editors now
            use Lorem Ipsum as their default model text, and a search for
          </p>
        </div>
      </div>
      <div class="protect_section_2 layout_padding">
        <div class="row">
          <div class="col-md-6">
            <h1 class="hands_text">
              <a href="#">Wash your <br />hands frequently</a>
            </h1>
            <h1 class="hands_text_2">
              <a href="#">Maintain social <br />distancing</a>
            </h1>
            <h1 class="hands_text">
              <a href="#">Avoid touching eyes,<br />nose and mouth</a>
            </h1>
          </div>
          <div class="col-md-6">
            <div class="image_2"><img src="images/img-2.png" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- protect section end -->
  <!-- footer section start -->
  <div class="footer_section layout_padding margin_top90">
    <div class="container">
      <div class="footer_section_2">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <h2 class="useful_text">Resources</h2>
            <div class="footer_menu">
              <ul>
                <li><a href="#">What we do</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">Travel Advice</a></li>
                <li><a href="#">Protection</a></li>
                <li><a href="#">Care</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <h2 class="useful_text">About</h2>
            <p class="footer_text">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
            </p>
          </div>
          <div class="col-lg-3 col-sm-6">
            <h2 class="useful_text">Contact Us</h2>
            <div class="location_text">
              <ul>
                <li>
                  <a href="#"
                    ><i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span class="padding_15">Location</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-phone" aria-hidden="true"></i>
                    <span class="padding_15">Call +01 1234567890</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-envelope" aria-hidden="true"></i>
                    <span class="padding_15">demo@gmail.com</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <h2 class="useful_text">countrys</h2>
            <div class="map_image"><img src="images/map-bg.png" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- footer section end -->
  <!-- copyright section start -->
  <div class="copyright_section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <p class="copyright_text">
            © 2020 All Rights Reserved.<a href="https://html.design">
              Free html Templates</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
