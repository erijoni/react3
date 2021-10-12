import React from 'react'
import data from './data'
import Component from './Component';

export const Info = () => {
    return (
        <section className="include" >
            {data.map((datas)=>{
                const {title,price,info}=datas;
                return(
                    <>
                    <Component title={title} price={price} info={info}/>
                    
                    </>
                )
            })}
        </section>
    )
}
export const Info1= ()=>{
    return (
        <section className="include" >
            {data.map((datas)=>{
                const {title,price,info}=datas;
                return(
                    <>
                    <Component title={price} price={title} info={info}/>
                    
                    </>
                )
            })}
        </section>
    )
}


