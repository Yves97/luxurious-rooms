import React from 'react'

import {useContext} from 'react'

import {RoomContext} from '../context'
import Title from '../components/Title'


//get all unique value
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomList({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context

    //get unique type
    let types = getUnique(rooms,'type')

    //add all
    types =  ['all',...types]

    //map to jsx
    types = types.map((item,index)=>{
    return <option value={item} key={index} >{item}</option>
    })

    let people = getUnique(rooms,'capacity')
    people = people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">

                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select id="type" name="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type */}

                {/* guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select id="capacity" name="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end guest */}

                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">Room ${price}</label>
                    <input type="range"  name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                    
                </div>
                {/* end price */}

                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">Room size </label>
                    <div className="form-size">
                        <input type="number"  name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number"  name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />

                    </div>
                    
                </div>
                {/* end size */}

                {/* extras */}
                <div className="form-group">
                    {/* breackfast  */}
                    <div className="single-extra">
                        <input name="breakfast" id="breakfast" type="checkbox" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    
                    {/* pets  */}
                    <div className="single-extra">
                        <input name="pets" id="pets" type="checkbox" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end extras */}

            </form>
        </section>
    )
}
