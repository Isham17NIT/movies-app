import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const SelectorComponent = (props)=>{
    return (
        // <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-autowidth-label">{props.text}</InputLabel>
                <Select labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={props.title}
                    label={props.text}
                    onChange={props.handleChange}>
                    {
                        props.menuItems.map((val,idx)=>{
                            return <MenuItem key={idx} value={val}>{val}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    )
}
export default SelectorComponent
