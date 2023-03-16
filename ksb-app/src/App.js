// import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {Typography} from '@material-ui/core'; 
// import NavBar from './components/NavBar';
// import Home from "./pages/home";
// import Knowledge from "./pages/knowledge";
// import Skill from "./pages/skill";
// import Behaviour from "./pages/behaviour";
// import Grid from './components/Grid';
// import Footer from './components/Footer'

// import SecurityIcon from '@material-ui/icons/Security';
// import EventNoteIcon from '@material-ui/icons/EventNote';
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// import ImportExportIcon from '@material-ui/icons/ImportExport';
// import ComputerIcon from '@material-ui/icons/Computer';
// import HttpIcon from '@material-ui/icons/Http';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main:"#2e1667",
//     },
//     secondary: {
//       main:"#c7d8ed",
//     },
//   },
//   typography: {
//     fontFamily: [
//       'Roboto'
//     ],
//     h4: {
//       fontWeight: 600,
//       fontSize: 28,
//       lineHeight: '2rem',
//       },
//     h5: {
//       fontWeight: 100,
//       lineHeight: '2rem',
//     },
//   },
// });

// const styles = makeStyles({
//   wrapper: {
//     width: "65%",
//     margin: "auto",
//     textAlign: "center"
//   },
//   bigSpace: {
//     marginTop: "5rem"
//   },
//   littleSpace:{
//     marginTop: "2.5rem",
//   },
//   grid:{
//     display: "flex", 
//     justifyContent: "center",
//     alignItems: "center",
//     flexWrap: "wrap", 
//   },
// })

import './App.css';
import ResponsiveAppBar from './components/NavBar';
import {Route, Routes} from "react-router"
import Home from './components/Home'
import Knowledge from './components/Knowledge';
import Skill from './components/Skill';
import Behaviour from './components/Behaviour';


function App() {
  // const classes = styles();
  return(
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Knowledge" element={<Knowledge />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Behaviour" element={<Behaviour />} />
      </Routes>
    </div>
  )
}

export default App;
