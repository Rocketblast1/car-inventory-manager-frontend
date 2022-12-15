import React from 'react'

export default function CarCard(props) {
  return (
    <div>
         <a href={"#" + props.id} className='list-group-item list-group-item-action' style={{ flex: 1, display: "flex", flexDirection: "row" }} >
                <img alt='Car' src='https://picsum.photos/200' />
                <div>
                    <div>
                        Make: {props.make}
                    </div>
                    <div>
                        Model: {props.model}
                    </div>
                    <div>
                        Year: {props.year}
                    </div>
                    <div>
                        Price: {props.price}
                    </div>
                    
                </div>
            </a>
    </div>
  )
}
