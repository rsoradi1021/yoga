import React from 'react';
import './App.css';
import './App';

const YogaWebsite = () => {
  return (
    <div>
      <nav>
        <div className="nav__logo">
          <img src={require('./assets/logo.png')} alt="logo" />
          <span>YOGA</span>
        </div>
        <ul className="nav__links">
          <li className="link"><a href="#home">Home</a></li>
          <li className="link"><a href="#classes">Classes</a></li>
          <li className="link"><a href="#membership">Membership</a></li>
          <li className="link"><a href="#stories">About</a></li>
          <li className="link"><a href="#posts">Blog</a></li>
          <li className="link"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header id="home">
        <div className="section__container header__container">
          <div className="header__content">
            <h1>Effective YOGA</h1>
            <h2>Do yoga today for a better tomorrow</h2>
            <button className="btn">15 Days free trial</button>
          </div>
          <div className="header__image">
            <img src={require('./assets/header.jpg')} alt="header" />
          </div>
        </div>
      </header>
      <section className="section__container why__container">
        <div className="why__image">
          <img src={require('./assets/why.jpg')} alt="why yoga" />
        </div>
        <div className="why__content">
          <h2 className="section__header">Why You Should Go To Yoga</h2>
          <p>
            Engaging in yoga offers a holistic approach to wellness, encompassing
            both physical and mental benefits. Through a series of poses,
            stretches, and muscle strength. Its meditative aspects encourage
            mindfulness, reducing stress and anxiety while promoting a sense of
            inner peace.
          </p>
          <ul>
            <li>
              <span><i className="ri-checkbox-circle-fill"></i></span>
              Yoga boosts brain power
            </li>
            <li>
              <span><i className="ri-checkbox-circle-fill"></i></span>
              Yoga helps you breathe better
            </li>
            <li>
              <span><i className="ri-checkbox-circle-fill"></i></span>
              Yoga improves your strength
            </li>
            <li>
              <span><i className="ri-checkbox-circle-fill"></i></span>
              Yoga helps you focus
            </li>
            <li>
              <span><i className="ri-checkbox-circle-fill"></i></span>
              Yoga helps give meaning to your day
            </li>
          </ul>
        </div>
      </section>
      <section class="section__container classes__container" id="classes">
      <p class="section__subheader">YOGA CLASSES</p>
      <h2 class="section__header">Choose Your Level & Focus</h2>
      <div class="classes__grid">
        <div class="classes__image">
          <img src={require('./assets/classes-1.jpg')} alt="classes" />
          <div class="classes__content">
            <button class="btn classes__btn">View More</button>
          </div>
        </div>
        <div class="classes__image">
          <img src={require('./assets/classes-2.jpg')} alt="classes" />
          <div class="classes__content">
            <button class="btn classes__btn">View More</button>
          </div>
        </div>
        <div class="classes__image">
          <img src={require('./assets/classes-3.jpg')} alt="classes" />
          <div class="classes__content">
            <button class="btn classes__btn">View More</button>
          </div>
        </div>
        <div class="classes__image">
          <img src={require('./assets/classes-4.jpg')} alt="classes" />
          <div class="classes__content">
            <button class="btn classes__btn">View More</button>
          </div>
        </div>
        <div class="classes__image">
          <img src={require('./assets/classes-5.jpg')} alt="classes" />
          <div class="classes__content">
            <button class="btn classes__btn">View More</button>
          </div>
        </div>
        <div class="classes__image">
          <img src={require('./assets/classes-6.jpg')} alt="classes" />
          <div class="classes__content">
            <button class="btn classes__btn">View More</button>
          </div>
        </div>
      </div>
    </section>

    <section class="membership" id="membership">
      <div class="section__container membership__container">
        <p class="section__subheader">PRICING TABLE</p>
        <h2 class="section__header">Membership Cards</h2>
        <div class="membership__grid">
          <div class="membership__card">
            <h4>YEAR CARD</h4>
            <h2><sup>$</sup>499</h2>
            <h3>For 1 Year</h3>
            <h4>ENJOY ALL THE FEATURES</h4>
            <p>Onetime access to all club</p>
            <p>Group trainer</p>
            <p>Book a group class</p>
            <p>Fitness orientation</p>
            <button class="btn membership__btn">GET STARTED</button>
          </div>
          <div class="membership__card">
            <h4>MONTHLY CARD</h4>
            <h2><sup>$</sup>200</h2>
            <h3>For 1 Month</h3>
            <h4>ENJOY ALL THE FEATURES</h4>
            <p>Group classes</p>
            <p>Discuss fitness goals</p>
            <p>Group trainer</p>
            <p>Fitness orientation</p>
            <button class="btn membership__btn">GET STARTED</button>
          </div>
          <div class="membership__card">
            <h4>WEEKLY CARD</h4>
            <h2><sup>$</sup>85</h2>
            <h3>For 1 Week</h3>
            <h4>ENJOY ALL THE FEATURES</h4>
            <p>Access to yoga area</p>
            <p>Group trainer</p>
            <p>Group classes</p>
            <p>Fitness orientation</p>
            <button class="btn membership__btn">GET STARTED</button>
          </div>
        </div>
      </div>
    </section>

    <section class="section__container stories__container" id="stories">
      <p class="section__subheader">TESTIMONY</p>
      <h2 class="section__header">Successful Stories</h2>
      <div class="stories__grid">
        <div class="stories__card">
          <div class="stories__content">
            <span><i class="ri-double-quotes-l"></i></span>
            <p>
              This yoga website has been a game-changer for me. The variety of
              classes and guided sessions have not only improved my flexibility
              but also brought a sense of calm to my hectic days.
            </p>
          </div>
          <div class="stories__author">
            <img src={require('./assets/stories-1.jpg')} alt="author" />
            <div class="stories__author__details">
              <h4>Emily Williams</h4>
              <h6>Trainer</h6>
            </div>
          </div>
        </div>
        <div class="stories__card">
          <div class="stories__content">
            <span><i class="ri-double-quotes-l"></i></span>
            <p>
              The tailored sessions and expert guidance have not only eased my
              discomfort but also boosted my overall well-being. A fantastic
              resource for both beginners and experienced yogis.
            </p>
          </div>
          <div class="stories__author">
            <img src={require('./assets/stories-2.jpg')} alt="author" />
            <div class="stories__author__details">
              <h4>Ava Johnson</h4>
              <h6>Member</h6>
            </div>
          </div>
        </div>
        <div class="stories__card">
          <div class="stories__content">
            <span><i class="ri-double-quotes-l"></i></span>
            <p>
              The on-demand classes allow me to practice whenever I can, and the
              mindfulness exercises have brought a new level of clarity to my
              life.A must-visit for anyone seeking holistic wellness.
            </p>
          </div>
          <div class="stories__author">
            <img src={require('./assets/stories-3.jpg')} alt="author" />
            <div class="stories__author__details">
              <h4>Sophia Smith</h4>
              <h6>Member</h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="banner">
      <div class="section__container banner__container">
        <div class="banner__card">
          <h4>5,000</h4>
          <p>Happy Customers</p>
        </div>
        <div class="banner__card">
          <h4>4,560</h4>
          <p>Yoga Workshops</p>
        </div>
        <div class="banner__card">
          <h4>570</h4>
          <p>Years of Experience</p>
        </div>
        <div class="banner__card">
          <h4>900</h4>
          <p>Lesson Conducted</p>
        </div>
      </div>
    </section>

    <section class="posts" id="posts">
      <div class="section__container posts__container">
        <p class="section__subheader">BLOG</p>
        <h2 class="section__header">Recent Posts</h2>
        <div class="posts__grid">
          <div class="posts__card">
            <img src={require('./assets/posts-1.jpg')} alt="post" />
            <div class="posts__content">
              <div class="posts__date">
                <span>31</span>
                <div>
                  <p>2021</p>
                  <p>December</p>
                </div>
              </div>
              <h4>Unlocking Inner Peace</h4>
              <p>
                Dive into the practices that help you cultivate inner peace,
                reduce stress, and enhance your overall well-being.
              </p>
            </div>
          </div>
          <div class="posts__card">
            <img src={require('./assets/posts-2.jpg')} alt="post" />
            <div class="posts__content">
              <div class="posts__date">
                <span>25</span>
                <div>
                  <p>2022</p>
                  <p>March</p>
                </div>
              </div>
              <h4>From Desk to Mat</h4>
              <p>
                Learn incorporating simple yoga stretches and breathing
                techniques to counter effects of sedentary lifestyle.
              </p>
            </div>
          </div>
          <div class="posts__card">
            <img src={require('./assets/posts-3.jpg')} alt="post" />
            <div class="posts__content">
              <div class="posts__date">
                <span>06</span>
                <div>
                  <p>2022</p>
                  <p>August</p>
                </div>
              </div>
              <h4>Yoga Through the Ages</h4>
              <p>
                From prenatal yoga to gentle senior yoga, discover enhance
                flexibility and foster a lifelong love for well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section__container photos__container">
      <p class="section__subheader">GALLERY</p>
      <h2 class="section__header">See The Latest Photos</h2>
      <div class="photos__grid">
        <div class="photos__card">
        <img src={require('./assets/photos-1.jpg')} alt="photos"/>
        </div>
        <div class="photos__card">
        <img src={require('./assets/photos-2.jpg')} alt="photos"/>
        </div>
        <div class="photos__card">
        <img src={require('./assets/photos-3.jpg')} alt="photos"/>
        </div>
        <div class="photos__card">
        <img src={require('./assets/photos-4.jpg')} alt="photos"/>
        </div>
      </div>
    </section>

    <footer class="footer" id="contact">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo"><a href="#">Yoga</a></div>
        </div>
        <div class="footer__col">
          <p>203 Lal Streets Mountain View, San Francisco, California, USA</p>
        </div>
        <div class="footer__col">
          <div class="footer__socials">
            <a href="#"><i class="ri-twitter-fill"></i></a>
            <a href="#"><i class="ri-facebook-fill"></i></a>
            <a href="#"><i class="ri-instagram-line"></i></a>
          </div>
        </div>
      </div>
      <div class="section__container footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </footer>

    <script src="main.js"></script>
    </div>
  );
};

export default YogaWebsite;
