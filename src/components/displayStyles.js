 import  {makeStyles} from '@material-ui/core';
import { FilterNone } from '@material-ui/icons';

 const useStyles = makeStyles((theme)=>({
    table: {
      minWidth: 100,
        background:"skyblue",
      width: 'auto',
      paddingRight: 4,
      paddingLeft: 4
    },
    gridClass:{
      maxWidth:'1140px',
      overflowX:'auto',
      margin:'0 auto',
      "&::-webkit-scrollbar": {
        display:'none',
      }
    },
    tableCell: {
      maxWidth:'30px!important',
        paddingRight: 4,
        paddingLeft: 4
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      root: {
          marginTop:'20px',
          marginBottom:'30px',
          marginLeft:'5px',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
        border:'2px solid black'
      }
  }));

  export default useStyles;