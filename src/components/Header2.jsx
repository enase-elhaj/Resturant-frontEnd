
import './homepage2.css';

import {Link} from 'react-router-dom';

// import { ReactComponent as icon_17_x2 } from './assets/vectors/icon_17_x2.svg';

export default function Header2(){
    return (
    
    <div className="homepage">
        <div class="hero">
          <div className="header">
          <div className="top-bar">
            <div className="info-1">
              <div className="call-1">
                <div className="icon-outlinephone-1">
                  <img className="icon-13" src={'/assets/vectors/icon_17_x2.svg'} alt='oo' />        
                </div>
                <span className="container-28">
                (414) 857 - 0107
                </span>
              </div>
              <div className="mail-1">
                <div className="icon-outlinemail-1">
                  <img className="icon-14" src={'/assets/vectors/icon_8_x2.svg'} />
                </div>
                <span className="yummybistrobliss">
                yummy@bistrobliss
                </span>
              </div>
            </div>
            <div className="social-1">
              <div className="container-24">
                <div className="logo-twitter-21">
                  <img className="vector-20" src={"/assets/vectors/vector_51_x2.svg"}/>
                </div>
              </div>
              <div className="container-25">
                <div className="logo-fb-simple-21">
                  <img className="vector-21" src={"/assets/vectors/vector_36_x2.svg"} />
                </div>
              </div>
              <div className="container-26">
                <div className="logo-instagram-11">
                  <img className="group-3" src={"/assets/vectors/group_16_x2.svg"} />
                </div>
              </div>
              <div className="container-27">
                <div className="logo-github-11">
                  <img className="vector-25" src={"/assets/vectors/vector_34_x2.svg" }/>
                </div>
              </div>
            </div>
          </div>
          <div className="header-1">
            <div className="logo-1">
              <img className="japanese-food-1" src={"/assets/vectors/japanese_food_12_x2.svg"} />
              <div className="original-logo-1">
                <span className="cuisine-1">
                Bistro Bliss
                </span>
              </div>
            </div>
            <div className="menu-2">
                <div className="menu-3">
                  <span className="home-1">
                  <Link className="ref" to='/'> Home</Link>
                  </span>
                </div>

                <div className="menu-4">
                  <span className="about-2">
                  <Link className="ref" to="/about">About</Link>
                  </span>
                </div>

              <div className="menu-5">
                <span className="menu-6">
                <a className="ref" href="{{ url('menu') }}">Menu</a>
                </span>
              </div>

              {/* @if(!auth()->user()) */}
           
              <div className="menu-7">
                <span className="pages-1">
                <a className="ref" href="{{ url('register') }}">Register</a>
                </span>
              </div>
              <div className="menu-8">
                <span className="contact-1">
                <a className="ref" href="{{ url('login') }}">Login</a>
                </span>
              </div>
              {/* @else */}
              <div className="menu-7">
                <span className="pages-1">
                <a className="ref" href="{{ url('users') }}">Profile</a>
                </span>
              </div>
              <div className="menu-7">
                <span className="pages-1">
                <a className="ref" href="{{ url('logout') }}">Logout</a>
                </span>
              </div>
              {/* @endif */}

              {/* @if(auth()->user()&& auth()->user()->role=='admin') */}
              <div className="menu-7">
                <span className="pages-1">
                <a className="" href="{{ url('/booking/show') }}">Admin Panel</a>
                </span>
              </div>
              <div className="menu-7">
                <span className="pages-1">
                <a className="" href="{{ url('/menu/create') }}">create item</a>
                </span>
              </div>
              {/* @endif */}
            </div>
            {/* @if(auth()->user()) */}
            <div className="button-4">
              <div className="button-5">
                <span className="get-started-now-4">
                <Link className="ref" to="/booking">Book A Table</Link>
                </span>
              </div>
            </div>
            {/* @endif */}
          </div>
          </div>
        </div>
    </div>
    )
}