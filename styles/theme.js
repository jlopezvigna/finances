import { createTheme } from '@mui/material/styles';

// primary
// const green = '#0C3B2E';
// const pastel = '#6D9773';
// const brown = '#BB8A52';
// const yellow = '#FFBA00';

const main = '#12043E';
const secondary = '#7B5ECE';

// Base Colors
const black = '#000000';
const white = '#FFFFFF';
const red = '#E93E3E';

// Color Palettes
// pink
const pink900 = '#762436';
const pink800 = '#9A2F46';
const pink700 = '#BF3A57';
const pink600 = '#E34567';
const pink500 = '#E7637F';
const pink400 = '#EC8198';
const pink300 = '#F09EB0';
const pink200 = '#F5BCC8';
const pink100 = '#F9DAE1';
const pink50 = '#FEF8F9';
const pink25 = '#FFFCFC';
// purple
const purple900 = '#4F2C48';
const purple800 = '#5E3456';
const purple700 = '#7B4470';
const purple600 = '#8B5A81';
const purple500 = '#9A7092';
const purple400 = '#AA86A3';
const purple300 = '#B99CB3';
const purple200 = '#CEB9C9';
const purple100 = '#E0D3DD';
const purple50 = '#EEE7ED';
const purple25 = '#FBF9FA';
// gray
const gray900 = '#2D2D2D';
const gray800 = '#424242';
const gray700 = '#616161';
const gray600 = '#757575';
const gray500 = '#9E9E9E';
const gray400 = '#BDBDBD';
const gray300 = '#E0E0E0';
const gray200 = '#EEEEEE';
const gray100 = '#F5F5F5';
const gray50 = '#FAFAFA';
const gray25 = '#FDFDFD';
// teal
const teal900 = '#00616A';
const teal800 = '#008496';
const teal700 = '#008093';
const teal600 = '#0098AF';
const teal500 = '#08ADCA';
const teal400 = '#28C6E3';
const teal300 = '#4ED0EB';
const teal200 = '#81DEF1';
const teal100 = '#B3EBF7';
const teal50 = '#E0F7FC';
const teal25 = '#F7FDFD';
// green
const green900 = '#04634D';
const green800 = '#058165';
const green700 = '#07A07C';
const green600 = '#08BE94';
const green500 = '#30C8A5';
const green400 = '#57D3B6';
const green300 = '#7FDDC7';
const green200 = '#A6E8D8';
const green100 = '#CEF2EA';
const green50 = '#EDFCF7';
const green25 = '#F7FDFD';
// brown
const brown900 = '#322314';
const brown800 = '#523921';
const brown700 = '#72502D';
const brown600 = '#92673A';
const brown500 = '#B27D47';
const brown400 = '#C09468';
const brown300 = '#CEAC89';
const brown200 = '#DCC3AA';
const brown100 = '#E9DBCB';
const brown50 = '#F7F2ED';
const brown25 = '#FBF9F6';
// yellow
const yellow900 = '#988500';
const yellow800 = '#BDA600';
const yellow700 = '#E5C900';
const yellow600 = '#FFE000';
const yellow500 = '#FFE529';
const yellow400 = '#FFEA52';
const yellow300 = '#FFEF7A';
const yellow200 = '#FFF4A3';
const yellow100 = '#FFF9CC';
const yellow50 = '#FFFCE1';
const yellow25 = '#FFFEF3';
// orange
const orange900 = '#7C4C1E';
const orange800 = '#A36327';
const orange700 = '#C97B31';
const orange600 = '#EF923A';
const orange500 = '#F2A35A';
const orange400 = '#F4B579';
const orange300 = '#F7C699';
const orange200 = '#F9D8B8';
const orange100 = '#FCE9D8';
const orange50 = '#FEF8F2';
const orange25 = '#FFFCF9';
// sky
const blue900 = '#115585';
const blue800 = '#1670AD';
const blue700 = '#1C8AD6';
const blue600 = '#21A4FF';
const blue500 = '#45B3FF';
const blue400 = '#68C1FF';
const blue300 = '#8CD0FF';
const blue200 = '#AFDEFF';
const blue100 = '#D3EDFF';
const blue50 = '#F3FAFF';
const blue25 = '#F9FDFF';

const theme = createTheme({
  typography: {
    fontFamily: 'Open sans, Montserrat,  sans-serif',
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // borderRadius: '14px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: white,
        },
      },
    },
  },
  // overrides: {
  //   // Typography
  //   MuiTypography: {
  //     colorPrimary: {
  //       color: secondary,
  //     },
  //     h1: {
  //       fontSize: '3rem', // 48px
  //       fontWeight: 'normal',
  //       letterSpacing: '0rem',
  //     },
  //     h2: {
  //       fontSize: '2.5rem', // 40px
  //       fontWeight: 'normal',
  //       letterSpacing: '0rem',
  //     },
  //     h3: {
  //       fontSize: '2rem', // 32px
  //       fontWeight: 'bold',
  //       letterSpacing: '0rem',
  //     },
  //     h4: {
  //       fontSize: '1.5rem', // 24px
  //       fontWeight: 'bold',
  //       letterSpacing: '0rem',
  //     },
  //     h5: {
  //       fontSize: '1.5rem', // 24 px
  //       fontWeight: '400',
  //     },
  //     h6: {
  //       fontSize: '1.125rem', // 18px
  //       fontWeight: 'bold',
  //       lineHeight: '1.4rem',
  //     },
  //     subtitle1: {
  //       fontSize: '1rem', // 16px
  //       fontWeight: 'bold',
  //     },
  //     subtitle2: {
  //       fontSize: '0.875rem', // 14px
  //       fontWeight: 'bold',
  //     },
  //     body1: {
  //       // 16
  //       color: black,
  //       lineHeight: '1.4',
  //     },
  //     body2: {
  //       // 14
  //       color: black,
  //     },
  //     caption: {
  //       color: '#6D6D6D',
  //       letterSpacing: '0rem',
  //     },
  //     overline: {
  //       fontSize: '0.875rem', // 14px
  //       fontWeight: 'bold',
  //     },
  //   },
  // },
  // palette
  palette: {
    primary: {
      main: main,
      contrastText: white,
    },
    secondary: {
      main: secondary,
      contrastText: white,
    },
    // tertiary: {
    //   main: yellow,
    //   contrastText: white,
    // },
    text: {
      //   primary: white,
      white: white,
    },
    error: {
      main: red,
      contrastText: '#fff',
    },
  },
  colors: {
    // Main
    main,
    secondary,
    pink900,
    pink800,
    pink700,
    pink600,
    pink500,
    pink400,
    pink300,
    pink200,
    pink100,
    pink50,
    pink25,
    purple900,
    purple800,
    purple700,
    purple600,
    purple500,
    purple400,
    purple300,
    purple200,
    purple100,
    purple50,
    purple25,
    gray900,
    gray800,
    gray700,
    gray600,
    gray500,
    gray400,
    gray300,
    gray200,
    gray100,
    gray50,
    gray25,
    teal900,
    teal800,
    teal700,
    teal600,
    teal500,
    teal400,
    teal300,
    teal200,
    teal100,
    teal50,
    teal25,
    green900,
    green800,
    green700,
    green600,
    green500,
    green400,
    green300,
    green200,
    green100,
    green50,
    green25,
    brown900,
    brown800,
    brown700,
    brown600,
    brown500,
    brown400,
    brown300,
    brown200,
    brown100,
    brown50,
    brown25,
    yellow900,
    yellow800,
    yellow700,
    yellow600,
    yellow500,
    yellow400,
    yellow300,
    yellow200,
    yellow100,
    yellow50,
    yellow25,
    orange900,
    orange800,
    orange700,
    orange600,
    orange500,
    orange400,
    orange300,
    orange200,
    orange100,
    orange50,
    orange25,
    blue900,
    blue800,
    blue700,
    blue600,
    blue500,
    blue400,
    blue300,
    blue200,
    blue100,
    blue50,
    blue25,
  },
});
export default theme;
