import React from 'react';
import {
withStyles,
TableCell,
TableRow
} from "@material-ui/core";

const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


const Row = ({user,idx}) => {
    return (
        
               <StyledTableRow key={idx}>
                  <StyledTableCell align="right">{idx}</StyledTableCell>
                  <StyledTableCell align="right">
                    {user.FirstName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.LastName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.Email}</StyledTableCell>
                  <StyledTableCell align="right">{user.Gender}</StyledTableCell>
                  <StyledTableCell align="right">
                    {user.UserName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.PhoneNumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.DomainName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.MacAddress}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.Longitude}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.Latitude}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.PaymentMethod}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.CreditCardNumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user.CreditCardType}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.URL}</StyledTableCell>
                  <StyledTableCell align="right">
                    {user.LastLogin}
                  </StyledTableCell>
                </StyledTableRow>
    )
}

export default Row





