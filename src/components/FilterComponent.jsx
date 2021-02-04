import React, {useState} from 'react';
import { makeStyles, withStyles,InputLabel,MenuItem ,FormControl,Select,NativeSelect,InputBase} from '@material-ui/core';


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 13,
    padding: '8px 15px 8px 8px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const handleSelectChange =(e)=>{
    console.log(e.target.value)
}

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = useState('');
  const [gender,setGender] = useState([]);

const PaymentMethods = ['Paypal','Paystack','Money order','check','cc'];
const genders = ['Male','Female','Prefer to skip'];

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
        <h4>Select Filter</h4>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Type</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleSelectChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>Select Filter</em>
          </MenuItem>
          <MenuItem value={'Gender'}>Gender</MenuItem>
          <MenuItem value={'Payment Method'}>Payment Method</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
