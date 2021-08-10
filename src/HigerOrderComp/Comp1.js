import React from 'react'
import Hcomp from './Hcomp';

function Comp1(props){
    return(
        <>
        <div>Comp 1 and the name is: {props.name}</div>
        </>
    );
}

export default Hcomp(Comp1)