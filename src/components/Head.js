import React from "react";
import { Link } from "react-router-dom";

class Head extends React.Component {
  render() {
    return (
      <div class="page-home">
        <header class="page-header">
          <div class="page-header__inner">
            <div class="page-header__sidebar">
              {/* <div class="page-header__menu-btn">
                <button class="menu-btn ico_menu is-active"></button>
              </div> */}
              <div class="page-header__logo ml-4">
                <Link to="/" class="text-link">
                  <img src="assets/img/logo.png" alt="logo" />
                </Link>
                <span class="page-header__logo_text">AnyWhereKey </span>
              </div>
            </div>

            <div class="page-header__content">
              <div class="page-header__search">
                <div class="search">
                  <div class="search__input">
                    <i class="ico_search"></i>
                    <input type="search" name="search" placeholder="Search" />
                  </div>
                  <div class="search__btn">
                    <button type="button">
                      <i class="ico_microphone"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="page-header__action">
                <Link to="/" class="action-btn">
                  <i class="ico_home"></i>
                </Link>
                <Link to="/game-store" class="action-btn">
                  <i class="ico_store"></i>
                </Link>
                <Link to="/admin-product" class="action-btn">
                  <i class="ico_community"></i>
                </Link>
                {/* <Link to="/login" type="submit" class="btn" style={{ backgroundColor: "#012738", color: "white" }}><span>Login</span></Link> */}
                <a class="action-btn" href="#!">
                  <i class="ico_message"></i>
                  <span></span>
                </a>
                <a class="action-btn" href="#!">
                  <i class="ico_notification"></i>
                  <span></span>
                </a>
                <a class="profile" href="#!">
                  <img src="assets/img/profile.png" alt="profile" />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Head;
