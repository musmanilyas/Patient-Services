// *https://www.registers.service.gov.uk/registers/country/use-the-api*
/*import 'isomorphic-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export default function Search() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState(["OldCare","StrokePatient","Physiotherapy","Other"]);
  const loading = open && options.length === 0;

/*  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3); // For demo purposes.
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map(key => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);*/

  /*React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 250 ,backgroundColor:'white',height:'20px',borderRadius:'20px'}}
      open={open}
     
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}

    /*getOptionSelected={(option, value) => option.name === value.name}*/
   /*   getOptionLabel={option => option}
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
         style={{backgroundColor:'white',textDecoration:'none'}}
          fullWidth
        
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="primary" size={10} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
*/


/* eslint-disable no-use-before-define *//* eslint-disable no-use-before-define */
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link } from 'react-router-dom';

export default function Search() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: option =><a className='hov' href={`/services/${option.title}`}>{option.title}</a> ,
  };


  const [value, setValue] = React.useState(null);

  return ( <React.Fragment>
    <div style={{width:280}} >
      <Autocomplete
        {...defaultProps}
       
        size='small'
        id="disable-close-on-select"
        disableCloseOnSelect
        
        renderInput={params => (
          <TextField {...params} label={<div><SearchIcon/> Services</div>}  style={{backgroundColor:'#1976D2'}}fullWidth />        )}
      />
    </div></React.Fragment>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Physiotherapy'},
  { title: 'OldCare' },
  { title: 'StrokePatient'},

];
