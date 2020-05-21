import React, { Component } from 'react'
import Title from '../components/Title'

import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services : [
            {
                icon  : <FaCocktail />,
                title : "free cocktail",
                info : "lorem ipsum dolor" 
            },
            {
                icon  : <FaHiking />,
                title : "endless hicking",
                info : "lorem ipsum dolor" 
            },
            {
                icon  : <FaShuttleVan />,
                title : "Free Shuttle",
                info : "lorem ipsum dolor" 
            },
            {
                icon  : <FaBeer />,
                title : "Stronger Beer",
                info : "lorem ipsum dolor" 
            },
        ]
    }
    render() {
        return (
            
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {
                        this.state.services.map((item,index)=>{
                            return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                            );
                        })
                    }
                </div>
            </section>
            
        )
    }
}
