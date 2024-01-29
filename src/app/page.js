'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  let [display, setDisplay] = useState('none');

  function dropdown() {
    if (display === 'none') {
      setDisplay('flex');
    } else {
      setDisplay('none');
    }
  }

  function reset() {
    setDisplay('none');
  }

  return (
    <main className={styles.main}>

    <div className={styles.dropdown} style={{ display: `${display}` }}>
      <FontAwesomeIcon icon={faXmark} className={styles.xMark} onClick={reset} />
      <ul className={styles.ul}>
          <li className={styles.list_item}><a className={styles.link} href="#home">HOME</a></li>
          <li className={styles.list_item}><a className={styles.link} href="#service">SERVICES</a></li>
          <li className={styles.list_item}><a className={styles.link} href="#testimonial">CLIENTS</a></li>
          <li className={styles.list_item}><a className={styles.link} href="#contact">CONTACT</a></li>
      </ul>
    </div>

      <nav className={styles.nav}>
        <ul className={styles.logo}>
          <li style={{ float: 'left', color: '#ffffffd0' }}>
            <Image
               src="/ponto.svg"
               alt="image not found!"
               width={35}
               height={35}
            />
          </li>
          <li className={styles.name}>Ponto Pets</li>
        </ul>
        <ul className={styles.ulEle}>
          <li className={styles.list_item}><a className={styles.link} href="#home">HOME</a></li>
          <li className={styles.list_item}><a className={styles.link} href="#service">SERVICES</a></li>
          <li className={styles.list_item}><a className={styles.link} href="#testimonial">CLIENTS</a></li>
          <li className={styles.list_item}><a className={styles.link} href="#contact">CONTACT</a></li>
        </ul>
        <ul className={styles.login}>
          <li style={{ float: 'left' }}>
            <Image
               src="/profile-user.svg"
               alt="not found!"
               width={25}
               height={25}
            />
          </li>
          <li style={{ float: 'left', color: '#3A467C', marginLeft: '14px', transform: 'translateY(2px)', fontSize: '16px' }}>Log In</li>
        </ul>
        <div className={styles.hamburger}>
          <Image 
            src="/button.svg"
            alt="image not found"
            width={35}
            height={35}
            onClick={dropdown}
          />
        </div>
      </nav>

      <div className={styles.home} id="home">
        <div className={styles.top}>
          <h1 className={styles.h1}>The Best Pet Groomers in Town</h1>
          <p className={styles.sub_h1}>For a pawfect look and feel</p>
        </div>
        <Image className={styles.bg}
          src="/dogs&cats.webp"
          alt="image not found!"
          width={930}
          height={559}
        />
      </div>

      <div className={styles.service} id="service">
        <h1 className={styles.heading}>Your Pets deserves to be pampered!</h1>
        <ul>
          <li className={styles.item}>Bath or Shower</li>
          <li className={styles.item}>Hands-on-Pets Assessment</li>
          <li className={styles.item}>Safe Drying</li>
        </ul>
        <button className={styles.book}>BOOK AN APPOINTMENT</button>
        <div className={styles.img_container}>
          <div className={styles.image}>
            <Image className={styles.stock} style={{ borderRadius: '20px', objectFit: 'cover', objectPosition: 'center' }}
              src="/dog_bathing.jpg"
              alt=""
              width={265}
              height={250}
            />
          </div>
          <div className={styles.image}>
            <Image className={styles.stock} style={{ borderRadius: '20px', objectFit: 'cover', objectPosition: 'center' }}
              src="/cat.jpg"
              alt=""
              width={265}
              height={250}
            />
          </div>
          <div className={styles.image}>
            <Image className={styles.stock} style={{ borderRadius: '20px', objectFit: 'cover', objectPosition: 'center' }}
              src="/cat_ill.jpg"
              alt=""
              width={265}
              height={250}
            />
          </div>
          <div className={styles.image}>
            <Image className={styles.stock} style={{ borderRadius: '20px', objectFit: 'cover', objectPosition: 'center' }}
              src="/dog_ill.jpg"
              alt=""
              width={265}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className={styles.testimonial} id="testimonial">
        <h1 className={styles.heading}>What our Happy Clients say!</h1>
        <div className={styles.container}>
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={styles.pf}>
            <Image style={{ borderRadius: '50%' }}
              src="/pf1.webp"
              alt=""
              width={90}
              height={90}
            />
            </div>
            <div className={styles.content}>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</div>
            <div className={styles.author}>Dani, Pacific Heights</div>
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.pf}>
            <Image style={{ borderRadius: '50%' }}
              src="/tommy.png"
              alt=""
              width={90}
              height={90}
            />
            </div>
            <div className={styles.content}>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</div>
            <div className={styles.author}>Dani, Pacific Heights</div>
          </div>
          <div className={`${styles.card} ${styles.card1}`}>
          <div className={styles.pf}>
            <Image style={{ borderRadius: '50%' }}
              src="/charles.webp"
              alt=""
              width={90}
              height={90}
            />
            </div>
            <div className={styles.content}>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</div>
            <div className={styles.author}>Dani, Pacific Heights</div>
          </div>
        </div>
      </div>

      <div className={styles.chat}>Let's Chat</div>

      <div className={styles.footer} id="contact">
        <div className={styles.contact}>
          <ul className={styles.logo}>
          <li style={{ float: 'left', color: '#ffffffd0' }}>
            <Image
               src="/ponto.svg"
               alt="image not found!"
               width={35}
               height={35}
            />
          </li>
          <li className={styles.name}>Ponto Pets</li>
          </ul>
          <ul>
            <li className={styles.bold_text}>Address</li>
            <li className={styles.light_text}>500 Terry Francine Street,</li>
            <li className={styles.light_text}>San Francisco, CA 94158</li>
          </ul>
          <ul>
            <li className={styles.bold_text}>Contact</li>
            <li className={styles.light_text}>info@mysite.com</li>
            <li className={styles.light_text}>123-456-7890</li>
          </ul>
          <ul>
            <li className={styles.bold_text}>Socials</li>
            <li className={styles.light_text}>Facebook</li>
            <li className={styles.light_text}>Twitter</li>
            <li className={styles.light_text}>Instagram</li>
          </ul>
        </div>
        <div className={styles.copyright}>© 2035 by Ponto Pet. Powered and secured by Wix</div>
      </div>

    </main>
  );
}
