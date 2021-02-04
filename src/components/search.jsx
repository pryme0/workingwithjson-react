import React from 'react'
import { useLocation } from 'react-router-dom'
import {Button} from  '@material-ui/core';
import TableComp from './TableComponent';
import {Link } from 'react-router-dom';


const Search = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("search");
    const data = location.state.userData
    return (
        <div>
            <TableComp info={data}/> 
            <Link  to="/">
            <Button type="button" size="small">Go Back</Button>
            </Link>
            
        </div>
    )
}

export default Search
