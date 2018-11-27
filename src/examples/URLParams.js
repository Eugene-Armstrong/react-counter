import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const ParamsExample = ()=>(
    <BrowserRouter>
        <div>
            <h2>URl Params</h2>
            <ul>
                <li><Link to="/no1">No1</Link></li>
                <li><Link to="/no2">No2</Link></li>
                <li><Link to="/no3">No3</Link></li>
            </ul>
            <Route path="/:id" component={}/>
        </div>
    </BrowserRouter>
);