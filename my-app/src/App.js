import logo from './logo-symbol.svg';
import './App.css';
import { useState } from 'react';
// import './index.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import { Typography, CardActionArea, CardContent, Card, Box, List, ListItemText, ListItem, Button, Drawer, AppBar, InputBase, Toolbar } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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
  const [page, setPage] = useState(1);
  const [color, setColor] = useState("");
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
  ];

  return (
    <div className="App font">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ justifyContent: "space-between", backgroundColor: "#24292e" }}>
          <img style={{ maxHeight: '50px' }} src={logo} alt="helpfulhuman_logo" />
          <InputBase
            style={{ backgroundColor: 'white' }}
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
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
      {curr === "main" && (
        <div style={{ marginTop: '200px', marginLeft: '500px' }}>
          {colors.slice(12 * page - 12, 12 * page).map(color => <div>
            <Card className={classes.root}>
              <CardActionArea>
                <div style={{ backgroundColor: color, height: 150, width: 150 }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {color}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>)}
          <Pagination count={10} page={page} onChange={handleChange} />
        </div>
      )}
    </div>
  );
}

export default App;
