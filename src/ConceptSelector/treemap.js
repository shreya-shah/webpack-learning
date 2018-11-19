import React from 'react';
import axios from 'axios';
import TreeMap from 'react-d3-treemap';
import "react-d3-treemap/dist/react.d3.treemap.css";
import {data} from '../../countries.ts'

export default class UserTreeMap extends React.Component {
    
    constructor(){
        this.param = {height=500,
        width=800,
        data={data}
    }

    
    render() {
        return (
            <TreeMap
                // height={500}
                // width={800}
                // data={data}
            />
        );
    }
}