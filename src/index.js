import React from 'react'
import ReactDOM  from 'react-dom'
// import App from './App';
import Comp1 from './HigerOrderComp/Comp1'
import Comp2 from './HigerOrderComp/Comp2'

ReactDOM.render(
    <>
            <Comp1 />
            <Comp2 />
    </>,
    document.getElementById('root')
);