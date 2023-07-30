import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import NewsImg from '../assets/images/newsimg.jpg'
import './newspage.css';

const Newspage = () => {
    return (
    <>
        <div className='header' style={{ backgroundImage: `url(${NewsImg})` }}>  
            <Navbar/>
        </div>
        <div className='newsbody'>
            <div className="news-hero-text">
                <h1>This is the story about How Modi won 2019 loksabha election,a tale of Polarization and Developement</h1>
                <p>Modi won 2019 election by playing the cards of polarization and certain aspect of
                    nationalism, which is best defined by term 'Hindutava' which was coined by the Legendary 
                    indian freedom fighter Vinayak Savarkar.
                </p>
                <p1> Author name, data, time and so so</p1>
            </div>
            
            <p>This is going to be a vertical line. Just imagine it!</p>
            <div className="articles">
                <article>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a. Cumque itaque odit fugit? Asperiores aliquid reprehenderit quos neque nostrum, facere ab consequatur quod corrupti cupiditate provident sapiente quia distinctio?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore doloremque, laudantium necessitatibus ullam molestiae distinctio cum, perferendis iste error possimus eveniet quos, quaerat eaque. Ea quia odio aspernatur fugiat officiis.
                </article>
                <article>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae laborum asperiores voluptatum velit, quam sit consequatur! Nihil dolor libero ad architecto consectetur excepturi voluptas nobis minus id illum, sint voluptates.
                </article>
                <article>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore tempore, blanditiis, error illo voluptatibus amet quasi similique saepe a deleniti et quo voluptas suscipit vel ipsam, fuga excepturi dolorum! Ipsa?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae laborum asperiores voluptatum velit, quam sit consequatur! Nihil dolor libero ad architecto consectetur excepturi voluptas nobis minus id illum, sint voluptates.
                </article>
                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi omnis minus, pariatur accusamus minima neque expedita accusantium perferendis laboriosam eveniet dolor architecto magni hic quos saepe tempore officiis nesciunt.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae laborum asperiores voluptatum velit, quam sit consequatur! Nihil dolor libero ad architecto consectetur excepturi voluptas nobis minus id illum, sint voluptates.
                </article>
                <article>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae laborum asperiores voluptatum velit, quam sit consequatur! Nihil dolor libero ad architecto consectetur excepturi voluptas nobis minus id illum, sint voluptates.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quia quibusdam sit numquam aspernatur recusandae saepe deserunt reiciendis beatae soluta! Optio placeat quibusdam ullam unde rem eum cupiditate nostrum eligendi.
                </article>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Newspage;
