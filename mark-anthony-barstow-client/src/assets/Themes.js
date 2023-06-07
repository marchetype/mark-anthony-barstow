import React from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider, useTheme } from '@emotion/react';

    let darkcoral = '#FF5F00';
    let oceangreen = '#00B694';
    let brightcoral = '#FF8F5F';
    let deepseafoam = '#00877D';
    let burntorange ='#FFA55F';
    let slategray = '#5F5F5F';
    let tealgray = '#455759';
    let rustorange = '#D56C2E';
    let warmcoral = '#FF6F4F';
    let charcoal = '#2C2C2C';
    let brightgray1 = '#F0F0F0';
    let brightgray2 = '#E8EBED';
    let brightgray3 = '#E0E0E0';
    let brightgray4 = '#D3D3D3';
    let brightgray5 = '#C0C0C0';
    let brightgray6 = '#B5B5B5';

const Themes = createTheme({
    palette: {
        primary: {
            lighter: brightgray3,
            light: brightgray6,
            dark: slategray,
            darker: charcoal,  
        },
        secondary:{
            light: oceangreen,
            dark:deepseafoam,
            darker: tealgray,
        } ,
        tertiary:{
            lighter: burntorange,
            light: brightcoral,
            dark: darkcoral,
            darker: rustorange,
        } ,
        
    }
})

export default Themes;