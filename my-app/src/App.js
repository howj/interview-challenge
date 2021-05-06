import logo from './logo-symbol.svg';
import './App.css';
import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import { Container, Grid, Typography, CardActionArea, CardContent, Card, Box, List, ListItemText, ListItem, Button, Drawer, AppBar, InputBase, Toolbar } from '@material-ui/core';

const drawerWidth = 240;
const swatches_per_page = 12;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  font: {
    fontFamily: "'Source Serif Pro', serif",
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#d1d5da',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputRoot: {
    backgroundColor: 'inherit',
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function App() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [currColor, setColor] = useState("");
  const [curr, setCurr] = useState("main");
  const handleChange = (event, value) => {
    setPage(value);
  };

  const colors = [
    "#088F8F",
    "#7393B3",
    "#0000FF",
    "#89CFF0",
    "#F0FFFF",
    "#00FFFF",
    "#084b8f",
    "#08088f",
    "#4b088f",
    "#8f088f",
    "#8f084b",
    "#73c6b6",
    "#239b56",
    "#839192",
    "#d7dbdd",
    "#76d7c4",
    "#ba4a00",
    "#7b7d7d",
    "#626567",
    "#424949",
    "#4d5656",
    "#1b2631",
    "#17202a",
    "#145a32",
    "#186a3b",
    "#7d6608",
    "#7e5109",
    "#784212",
    "#6e2c00",
    "#1b4f72",
    "#154360",
    "#4a235a",
    "#512e5f",
    "#78281f",
    "#641e16",
    "#8e44ad",
    "#2980b9",
    "#3498db",
    "#16a085",
    "#27ae60",
    "#1abc9c",
    "#d7dbdd",
    "#f7dc6f",
    "#e59866",
    "#f0b27a",
    "#f8c471",
    "#f4f6f7",
    "#9b59b6",
    "#58d68d",
    "#73c6b6",
    "#c39bd3",
    "#aed6f1",
    "#808b96",
    "#85929e",
    "#34495e",
    "#a04000",
    "#dc7633",
    "#bb8fce",
    "#7d3c98",
    "#229954",
    "#2e86c1",
    "#a569bd",
    "#e8daef",
    "#f5b7b1",
    "#aed6f1",
    "#aab7b8",
    "#212f3d",
    "#196f3d",
    "#b7950b",
    "#b3b6b7",
    "#229954",
    "#660000",
    "#CC0000",
    "#CC3300",
    "#CC6600",
    "#CC9900",
    "#CCCC00",
    "#00CCCC",
    "#0066CC",
    "#3300FF",
    "#333399",
    "#339999",
    "#339933",
    "#663366",
    "#6633CC",
    "#FF00FF",
    "#9900CC",
    "#990099",
    "#FF0066",
    "#CCFF66",
    "#CC9966",
    "#CC00CC",
    "#CC66CC",
    "#660099",
    "#66FFFF",
    "#003300",
    "#006633",
    "#66CCCC",
    "#00FFFF",
    "#0000FF",
    "#33CC33",
  ];

  return (
    <div className="App font">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ justifyContent: "space-between", backgroundColor: "#24292e" }}>
          <img style={{ maxHeight: '50px' }} src={logo} alt="helpfulhuman_logo" />
          <InputBase
            onChange={(event) => {
              if (event.target.value && event.target.value !== "") {
                setSearch(event.target.value);
                setCurr("detail");
                if (colors.find(color => color === event.target.value)) {
                  setColor(event.target.value);
                }
              } else {
                setSearch("");
                setCurr("main");
              }
            }}
            style={{ backgroundColor: 'white' }}
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'searchinput' }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div style={{ height: '100%', backgroundColor: '#e1e4e8' }} className={classes.drawerContainer}>
          <Box style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
            <Button
              variant="outlined"
              style={{ backgroundColor: '#fff', textTransform: 'none' }}
              onClick={() => { setCurr("detail"); setColor(colors[Math.floor(Math.random() * (colors.length - 1))]); }}
            >
              <strong>
                Random Color
              </strong>
            </Button>
          </Box>
          <List>
            {['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <Container style={{ marginTop: '100px', marginLeft: drawerWidth }}>
        {curr === "main" && (
          <>
            <Grid container spacing={2}>
              {colors.slice(swatches_per_page * page - swatches_per_page, swatches_per_page * page).map(color => <Grid item xs={3}>
                <Card onClick={() => { setCurr("detail"); setColor(color); }} className={classes.root}>
                  <CardActionArea>
                    <div style={{ backgroundColor: color, height: 150, width: 300 }} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {color}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>)}
            </Grid>
            <Box style={{ marginTop: '20px' }} display="flex" justifyContent="center">
              <Pagination count={Math.ceil(colors.length / swatches_per_page)} page={page} onChange={handleChange} />
            </Box>
          </>
        )}
        {curr === "detail" && search !== "" && !colors.find(color => color === search) && (
          <>
            {search} is not a color.
          </>
        )}
        {curr === 'detail' && (search === "" || (colors.find(color => color === search))) && (
          <>
            <Card className={classes.root}>
              <CardActionArea>
                <div style={{ backgroundColor: currColor, height: 600, width: 'auto' }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {currColor}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Box display="flex" justifyContent="center">
              <Button
                onClick={() => { setCurr("main"); setSearch(""); setColor(""); }}
                variant="outlined"
                style={{ width: '130px', marginTop: '20px', backgroundColor: '#fff', textTransform: 'none' }}
              >
                <strong>
                  Clear
              </strong>
              </Button>
            </Box>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
