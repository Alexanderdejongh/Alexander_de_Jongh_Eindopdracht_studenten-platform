import React, {useContext} from 'react'
import Swiper from 'react-id-swiper';
import StudentProfile from './StudentProfile';
import {dataContext} from '../Data/Data';
import 'swiper/css/swiper.css';
// import 'Autoplay.css'

const Autoplay = () => {
    const [studentData] = useContext(dataContext)
    const params = 
    {
        direction: 'horizontal',
        autoplay: {
            delay: 20000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <Swiper {...params}>
                        {studentData.map(item =>{
                                return(
                                    <div className="swiper-slide">
                                    <StudentProfile 
                                        key={item.id} 
                                        name={item.name} 
                                        foto={item.picture} 
                                        story={item.story}/>
                                    </div>
                                    )
                                }
                            )
                        }
                        
                </Swiper>
            </div>
        </div>
    )
};

export default Autoplay