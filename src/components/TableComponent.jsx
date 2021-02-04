import React, { useState } from "react";
import {
  TablePagination,
  MenuItem,
  InputLabel,
  Select,
  InputBase,
  Table,
  TableBody,
  TableCell,
  IconButton,
  TableHead,
  TableRow,
  Paper,
  withStyles,
  Grid,
  NativeSelect,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { Search } from "@material-ui/icons";
import styles from "./displayStyles";
import { useHistory } from "react-router-dom";
import FilterComponent from "./FilterComponent";
import { userContext } from "../App";
import spinner from "./loader";

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const TableComponent = ({ info }) => {
  const classes = styles();
  const [value, setValue] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    let searchResult = info.filter((obj) => obj.FirstName == value);
    history.push({
      pathname: "/search",
      search: `?${value}`,
      state: { userData: searchResult },
    });
  };
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Grid container xs="12" xm="6">
      <Grid className={classes.gridClass} container>
      <Grid item>
        {" "}
        <div className={classes.gridClass}>
          {location.pathname === "/search" ? (
            ""
          ) : (
            <Paper
              component="form"
              className={classes.root}
              onSubmit={handleSearch}
            >
              <InputBase
                style={{ width: 300, padding: "3px" }}
                name="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={classes.input}
                placeholder="Search User Data"
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <Search />
              </IconButton>
            </Paper>
          )}
        </div>
      </Grid>
      <Grid item>
      <FilterComponent style={{ textAlign: "left" }} />
      </Grid>
      </Grid>
     

      <div className={classes.gridClass}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Username</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Domain Name</StyledTableCell>
              <StyledTableCell align="right">MacAddress</StyledTableCell>
              <StyledTableCell align="right">Longitude</StyledTableCell>
              <StyledTableCell align="right">Latitude</StyledTableCell>
              <StyledTableCell align="right">Payment Method</StyledTableCell>
              <StyledTableCell align="right">Card Number</StyledTableCell>
              <StyledTableCell align="right">Card Type</StyledTableCell>
              <StyledTableCell align="right">URL</StyledTableCell>
              <StyledTableCell align="right">Last Login</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, idx) => (
                <StyledTableRow key={info.email}>
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
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={info.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </Grid>
  );
};

export default TableComponent;
