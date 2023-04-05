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
            // console.log('last',carousel.current.props.children.length)
            carousel.current.goTo(0);
        }
        return
    }
    return (
        <>
            <Carousel ref={carousel} itemPosition={3} onPrevStart={onPrevStart} itemsToShow={1} onNextStart={onNextStart} enableMouseSwipe disableArrowsOnEnd={false}>
                <div className="project">
                        <img className="m-auto w-100" onClick={()=>window.open(('https://ourmovies.vercel.app/'))} src={imdb} class="card-img-top" alt="imdb" />
                        
                </div>
                <div className="project">
                    {/* <div>
                         <img src={marketplace} alt={marketplace} width='50%' /> 
                    </div>
                    <div><h2>Ecom local Project</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minus eius nam veniam soluta expedita. Omnis doloribus fugiat excepturi eum dolor deserunt. Quos et nulla eligendi quas facilis, adipisci odio ducimus, in beatae doloremque eveniet. Minus, eligendi nulla fugit ratione esse, numquam mollitia quae aliquid, commodi assumenda in quidem aspernatur.</p>
                    </div> */}
                    <img className="m-auto w-100" src={processing} width="150px" alt='processing' />
                    <p>Ecom Project Processing...</p>
                </div>

                <div className="project">
                    {/* <div></div>
                    <h2>Movies App</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minus eius nam veniam soluta expedita. Omnis doloribus fugiat excepturi eum dolor deserunt. Quos et nulla eligendi quas facilis, adipisci odio ducimus, in beatae doloremque eveniet. Minus, eligendi nulla fugit ratione esse, numquam mollitia quae aliquid, commodi assumenda in quidem aspernatur.</p>
                 */}
                    <img className="m-auto w-100" src={processing} width="150px" alt='processing' />
                    <p>Ecom Local Project Processing...</p>
                </div>
            </Carousel>

            <button className="cta" onClick={() => navigateTo('/home')}>
                <span className="spanbtx">{'< '}BACK</span>
            </button>

        </>
    );

}
export default Projects;
