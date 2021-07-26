import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core";
import NewOrderPage from "./pages/NewOrderPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00d8ff",
    },
    cancel: {
      main: "#e6e6e6",
    }
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    fontSize: '62.5%',
    padding: theme.spacing(2),
  },
  li: {
    listStyle: 'none',
  },
  a: {
    textDecoration: 'none',
  },

}));


function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <div className={classes.root}>
            <Route path="/" exact />
            <Route path="/novo-pedido" component={NewOrderPage} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
