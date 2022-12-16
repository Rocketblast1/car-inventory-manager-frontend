import React, { useState, useEffect } from 'react'
import CarCard from './../../Cards/CarCard';

export default function UserViewCars(props) {
    const [carList, setCarList] = useState([
        // Mock data :
        {id: 12314, make: "Toyota", model: "Elantra", year: "2019", price: 20000 }, 
        { id: 69246, make: "Honda", model: "Accord", year: "2022", price: 45000 },
        { id: 90535, make: "Mercedes", model: "GLK6", year: "2019", price: 35000  },
    ])

    useEffect(() => {
        //When the page begins to load, make a request to populate cars
        
        return () => {

        }
    }, [])

    return (
        <div className='list-group'>
            {carList.map((item, index) => (
                // Populate div with Car Cards
                <CarCard key={index} id={item.id} make={item.make} model={item.model} year={item.year} price={item.price} />
            ))}
        </div>
    )
}