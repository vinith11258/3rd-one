import React from 'react'
import { useState } from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import { BrowserRouter as Router, Link, Route, NavLink, Switch } from 'react-router-dom'

export default function App(){
    const [val, setVal] = useState(() => 10)
    return(
        <>
        <h3>I'm App component</h3>
        Number: <input type = 'number' value = {val} onChange = {(e) => {setVal(e.target.value)}} />
            <Router>
                <div>
                    <ul>
                        <li>
                            <button><NavLink  activeStyle = {{color : 'white', backgroundColor : 'green'}} to = '/page2'>Go to Page 2</NavLink></button>
                        </li>
                        <li>
                            <button><NavLink to = {`/page3/${val}`}>Go to Page 3 with {val} number</NavLink></button>
                        </li>
                    </ul>
                 </div>
                 <Switch>
                    <Route exact path = '/' component = {Page1}/>
                    <Route exact path = '/page2' component = {Page2} />
                    <Route exact path = '/page3/:id' component = {Page3} />
                    <Route>Error 404</Route>
                </Switch>
            </Router>
        </>
    )
}