import './homepage2.css';

export default function Footer(){
    return(

<div className="homepage">
    <div class="hero">
    <div class="footer">
        <div class="top">
          <div class="col-1">
            <div class="logo">
              <img class="japanese-food" src={"/assets/vectors/japanese_food_2_x2.svg"} />

              <div class="original-logo">
                <span class="cuisine">
                Bistro Bliss
                </span>
              </div>
            </div>
            <div class="in-the-new-era-of-technology-we-look-ain-the-future-with-certainty-and-pride-to-for-our-company-and">
            In the new era of technology we look a in the future with certainty and pride to for our company and.
            </div>
            <div class="social">
              <div class="container-20">
                <div class="logo-twitter-2">
                  <img class="vector-11" src={"/assets/vectors/vector_20_x2.svg"} />
                </div>
              </div>
              <div class="container-21">
                <div class="logo-fb-simple-2">
                  <img class="vector-12" src={"/assets/vectors/vector_33_x2.svg"} />
                </div>
              </div>
              <div class="container-22">
                <div class="logo-instagram-1">
                  <img class="group-2" src={"/assets/vectors/group_11_x2.svg" }/>
                </div>
              </div>
              <div class="container-23">
                <div class="logo-github-1">
                  <img class="vector-16" src={"/assets/vectors/vector_35_x2.svg"} />
                </div>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="col-21">
              <div class="pages">
              Pages
              </div>
              <div class="list">
                <div class="home">
                <a class="ref-2" href="{{ url('/') }}">Home</a>
                </div>
                <div class="about-1">
                <a class="ref-2" href="{{ url('about') }}">About</a>
                </div>
                <div class="menu-1">
                <a class="ref-2" href="{{ url('menu') }}">Menu</a>
                </div>
                <div class="pricing">
                Pricing
                </div>
                <div class="blog-1">
                Blog
                </div>
                <div class="contact">
                Contact
                </div>
                <span class="delivery">
                Delivery
                </span>
              </div>
            </div>
            <div class="col-31">
              <div class="utility-pages">
              Utility Pages
              </div>
              <div class="list-1">
                <div class="start-here">
                Start Here
                </div>
                <div class="styleguide">
                Styleguide
                </div>
                <div class="password-protected">
                Password Protected
                </div>
                <div class="not-found">
                404 Not Found
                </div>
                <div class="licenses">
                Licenses
                </div>
                <div class="changelog">
                Changelog
                </div>
                <span class="view-more">
                View More
                </span>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="follow-us-on-instagram">
            Follow Us On Instagram
            </div>
            <div class="img">
              <div class="container-5">
                <div class="mask-group">
                  <div class="pexels-steve-37898851">
                  </div>
                </div>
                <div class="mask-group-1">
                  <div class="eiliv-aceron-d-5-pb-kqj-0-lu-8-unsplash-1">
                  </div>
                </div>
              </div>
              <div class="container-55">
                <div class="mask-group-2">
                  <div class="pexels-ella-olsson-16407721">
                  </div>
                </div>
                <div class="mask-group-3">
                  <div class="pexels-ash-3764641">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="line-311">
          </div>
          <span class="copyright-2023-hashtag-developer-all-rights-reserved">
          Copyright © 2023 Hashtag Developer. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
</div>
)
}