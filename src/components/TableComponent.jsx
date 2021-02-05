import React, { useState } from "react";
import TableRows from "./TableRow";
import {
  TablePagination,
  MenuItem,
  InputLabel,
  Select,
  InputBase,
  Table,
  FormControl,
  TableBody,
  TableCell,
  IconButton,
  TableHead,
  TableRow,
  Paper,
  withStyles,
  Grid,

} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { Search } from "@material-ui/icons";
import styles from "./displayStyles";
import { useHistory } from "react-router-dom";
import BootstrapInput from "./FilterComponent";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TableComponent = ({ info }) => {
  const classes = styles();
  const [value, setValue] = useState("");
  const [optVal, setOptVal] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [val, setVal] = useState("");
  const [opt, setOpt] = useState([]);
  const history = useHistory();

  const handleSearch = (e) => {
    setValue(e.target.value);
    e.preventDefault();
    let searchResult = info.filter((d) => {
      let regex = new RegExp(`${value}`, "gi");
      return d.FirstName.match(regex) || d.LastName.match(regex);
    });
    setSearchValue(searchResult);
  };
  const location = useLocation();

  const PaymentMethods = [
    " ",
    "paypal",
    "paystack",
    "moneyorder",
    "check",
    "cc",
  ];
  const genders = [" ", "Male", "Female", "Prefer to skip"];

  const handleSelectChange = (e) => {
    if (e.target.value === "Gender") {
      setOpt(genders);
      setVal(e.target.value);
      setOptVal("");
      setSelectedFilter("Gender");
    } else if (e.target.value === "PaymentMethod") {
      setOpt(PaymentMethods);
      setSelectedFilter("PaymentMethod");
      setOptVal("");
      setVal(e.target.value);
    }
  };
  const handleSelectOption = (e) => {
    e.preventDefault();
    setOptVal(e.target.value);
    let filterOption = selectedFilter;
    if (selectedFilter === "Gender") {
      let searchResult = info.filter((d) => {
        let regex = new RegExp(`${e.target.value}`, "gi");
        return d.Gender.match(regex);
      });
      setSearchValue(searchResult);
    } else if (selectedFilter == "PaymentMethod") {
      let searchResult = info.filter((d) => {
        let regex = new RegExp(`${e.target.value}`, "gi");
        return d.PaymentMethod.match(regex);
      });

      setSearchValue(searchResult);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Grid container xs="12" xm="6">
      <Grid container>
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
                  onChange={handleSearch}
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
          <span style={{ margin: "auto", paddingLeft: "25px" }}>
            Select Filter
          </span>
          <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">Type</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={val}
              onChange={handleSelectChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="val">
                <em>Select Filter</em>
              </MenuItem>
              <MenuItem value={"Gender"}>Gender</MenuItem>
              <MenuItem value={"PaymentMethod"}>Payment Method</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-select-native">
              Options
            </InputLabel>
            <Select
              id="demo-customized-select-native"
              value={optVal}
              onChange={handleSelectOption}
              input={<BootstrapInput />}
            >
              {opt.map((optionItem) => (
                <option value={optionItem}>{optionItem}</option>
              ))}
            </Select>
          </FormControl>
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
            {searchValue.length < 1
              ? info
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, idx) => <TableRows user={user} idx={idx} />)
              : searchValue
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user, idx) => <TableRows user={user} idx={idx} />)}
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
