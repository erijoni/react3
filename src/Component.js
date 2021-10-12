import React from 'react'
import Button from './Button'
const Component = ({title,price,info}) => {
    return (
        <div class="wrapper">
            <div class="box">
              <div className="box1">
                  <div className="title">{title}</div>
                     <div className="price">{price}</div>
                    <p className="info">{info}</p>
                 <div className="btn">
                     <Button />
                 </div>
              </div>
            </div>
            </div>
    )
}

export default Component
