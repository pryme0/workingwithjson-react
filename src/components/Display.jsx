import React from 'react'
import {TableCell,TableRow,withStyles} from '@material-ui/core';
// import {SearchIcon} from '@material-ui/icons'

import { useHistory } from 'react-router-dom';
import TableComp from './TableComponent';
import Spinner from './loader';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  

  
const Display = ({data}) => {
 
    return (
      <div>
       {data.length < 1 ?<Spinner/> : <TableComp info={data}/>
       }
        
      </div>
     
    )
}

export default Display
