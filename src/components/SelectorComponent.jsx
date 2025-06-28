import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {AppBar,Box,InputLabel,FormControl,Select,MenuItem} from '@mui/material';
const SelectorComponent = (props)=>{
    return (
        <Box sx={{ maxWidth: 120, minWidth:80, padding:0 }}>
            <FormControl fullWidth size="small" sx={{
                    '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white',
                    },
                    },
                    '& .MuiInputLabel-root': {
                    color: 'white',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white',
                    },
                    '& .MuiSelect-icon': {
                    color: 'white',
                    },
                }}>
                <InputLabel id="demo-simple-select-autowidth-label" sx={{ color: 'white' }}>{props.title}</InputLabel>
                <Select labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={props.val}
                    label={props.title}
                    onChange={props.handleChange}
                    sx={{ color: 'white' }}>
                    {
                        props.title==="genre" ? props.menuItems.map((val,idx)=>{
                            return <MenuItem key={idx} value={val}>{val}</MenuItem>
                        }) :  props.menuItems.map((val,idx)=>{
                            return <MenuItem key={idx} value={val}>{val}+</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    )
}
export default SelectorComponent
