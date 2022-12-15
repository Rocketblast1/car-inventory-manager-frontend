import React, { useState } from 'react';
import CarApi from './Apis/CarApi';

const AddCar = () => {

    const[Car, setCar] = useState({
        id: 0,
        make: '',
        model: '',
        year: '',
        color: '',
        
    })

    const handleChange = (event) => {
        setCar({
            ...Car,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {

        CarApi.add(Car)

        event.preventDefault()
    }

    const clearForm = () => {
        setCar({
            id: 0,
            make: '',
            model: '',
            year: '',
            color: ''
           
        })
    }

    return (
        <div>

            <div className='new-car-form border' 
                 style={{ width: "70%", 
                          margin: "0 auto",
                          padding: "1rem"
                        }}>

                <h2 className="display-5"
                    style={{marginBottom: "1rem"}}
                    >
                   Add Car
                </h2>

                <form onSubmit={ handleSubmit } >

                    {/* make INPUT */}
                    <div className='mb-3'>
                        <label htmlFor='car-make' 
                               className='form-label'>
                            Car Make
                        </label>
                        <input className='form-control'
                               type='text'
                               id='car-make'
                               name='make'
                               value={Car.make}
                               onChange={ handleChange }
                               required
                               />
                    </div>

                    {/* model INPUT */}
                    <div className='mb-3'>
                        <label htmlFor='car-model' 
                               className='form-label'>
                            Car Model
                        </label>
                        <input className='form-control'
                               type='text'
                               id='car-model'
                               name='model'
                               value={Car.model}
                               onChange={ handleChange }
                               required
                               />
                    </div>

                    {/* year input */}
                    <div className='mb-3'>
                        <label htmlFor='car-year' 
                               className='form-label'>
                            Car Year
                        </label>
                        <input className='form-control'
                               type='int'
                               id='car-year'
                               name='year'
                               value={Car.year}
                               onChange={ handleChange }
                               required
                               />
                        
                    </div>

                    {/* Color INPUT */}
                    <div className='mb-3'>
                        <label htmlFor='car-color' 
                               className='form-label'>
                            Car Color 
                        </label>
                        <input className='form-control'
                               type='text'
                               id='car-color'
                               name='color'
                               value={Car.color}
                               onChange={ handleChange }
                               required
                               />
                    </div>

                    

                    <button className='btn btn-primary'
                            type='submit'>
                        Add
                    </button>

                    <button className='btn btn-secondary'
                            style={{ marginLeft: "0.5rem" }}
                            onClick={ () => { clearForm() } } 
                            >
                        Clear 
                    </button>

                </form>

            </div>
            

        </div>
    );
};

export default AddCar;