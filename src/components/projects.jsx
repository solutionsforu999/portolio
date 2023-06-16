import { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
import marketplace from '../images&gifs/marketplace.JPG';
import processing from '../images&gifs/processing.gif';
import imdb from '../images&gifs/imdb.png';
import { Link } from "react-router-dom";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
]
const Projects = () => {
    const navigateTo = useNavigate();
    const carousel = useRef();
    const onPrevStart = (current, next) => {
        console.log('prev==>', current, next)
        carousel.current.goTo(carousel.current.props.children.length - 1);
        return
    }
    const onNextStart = (current, next) => {
        console.log('next==>', current, next)
        if (current.index === next.index) {
            carousel.current.goTo(0);
        }
        return
    }
    return (
        <>
            <Carousel ref={carousel} itemPosition={3} onPrevStart={onPrevStart} itemsToShow={1} onNextStart={onNextStart} enableMouseSwipe disableArrowsOnEnd={false}>
                
                <div class="bg-dark project">
                    <img style={{cursor:"pointer"}}  onClick={() => window.open(('https://ourmovies.vercel.app/'))} src={imdb} class="card-img-top" width='250px' alt="movies_db" />
                    <div class="card-body">
                        <p class="card-text">Movies DB..</p>
                    </div>
                </div>
                <div class="bg-dark project">
                    <img style={{cursor:"pointer"}} src={processing} class="card-img-top" width='250px' alt="movies_db" />
                    <div class="card-body">
                        <p class="card-text">Ecom Project Processing...</p>
                    </div>
                </div>
                <div class="bg-dark project">
                    <img style={{cursor:"pointer"}} src={processing} class="card-img-top" width='250px' alt="movies_db" />
                    <div class="card-body">
                        <p class="card-text">Ecom Project Processing...</p>
                    </div>
                </div>
            </Carousel>

            <button className="cta" onClick={() => navigateTo('/home')}>
                <span className="spanbtx">{'< '}BACK</span>
            </button>

        </>
    );

}
export default Projects;