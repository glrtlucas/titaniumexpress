import React from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titlePage: {
    borderBottom: 1,
    borderBottomColor: "#e6e6e6",
    borderBottomStyle: "solid",
    paddingBottom: theme.spacing(1),
  },
  address: {
    width: "100%",
    marginBottom: theme.spacing(1),
  },
  address2: {
    flexGrow: 2,
  },
  pageContent: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  cta_button: {
    flexGrow: 1,
    flexBasis: 20,
  },
  cta_button_cancel: {
    marginRight: theme.spacing(1),
  },
  buttonsAction: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5)
  },
  address2_fields: {
    flexGrow: 1,
    display: 'flex',
  },
  address_number: {
    flexShrink: 1,
    flexBasis: 70,
  },
  address_address2: {
    flexGrow: 2
  }
}));

export default function NewOrderPage() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.titlePage}>Novo Pedido</h1>
      <div className={classes.pageContent}>
      <form className={classes.content} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Endereço de Coleta"
          variant="outlined"
          className={classes.address}
        />
        <div className={classes.address2_fields}>
          <TextField 
            id="outlined-basic" 
            label="Nº" 
            variant="outlined" 
            className={classes.address_number}
          />
          <TextField
            id="outlined-basic"
            label="Complemento"
            variant="outlined"
            className={classes.address_address2}
          />
        </div>
        <div className={classes.buttonsAction}>
          <Button
            variant="contained"
            color="cancel"
            className={classes.cta_button}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.cta_button}
          >
            Solicitar
          </Button>
        </div>
      </form>
      </div>
      
    </>
  );
}
