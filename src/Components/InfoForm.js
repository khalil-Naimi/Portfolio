import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm(props) {
  const [selectState, setSelectState] = useState("DESKTOP APPLICATION");
  const selectchange = (event) => {
    setSelectState(event.target.value);
    props.SetClientInfoState({
      ...props.ClientInfoState,
      clientInfo:
      {
        ...props.ClientInfoState.clientInfo,
        servies:event.target.value,
      },
    });
  };

  const valuechange = (event) => {
    if (event.target.id === "firstName") {
      props.SetClientInfoState({
        ...props.ClientInfoState,
        clientInfo:
        {
          ...props.ClientInfoState.clientInfo,
          firstName:event.target.value,
        },
      });
    } else if (event.target.id === "lastName") {
      props.SetClientInfoState({
        ...props.ClientInfoState,
        clientInfo:
        {
          ...props.ClientInfoState.clientInfo,
          lastName:event.target.value,
        },
      });
    } else if (event.target.id === "Email") {
      props.SetClientInfoState({
        ...props.ClientInfoState,
        clientInfo:
        {
          ...props.ClientInfoState.clientInfo,
          email:event.target.value,
        },
      });
    }
    console.log(props.ClientInfoState);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Client Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={valuechange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={valuechange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="Email"
            onChange={valuechange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            id="Services"
            required
            name="Services"
            label="Services"
            value={selectState}
            fullWidth
            onChange={selectchange}
          >
            <MenuItem value={"DESKTOP APPLICATION"}>
              DESKTOP APPLICATION
            </MenuItem>
            <MenuItem value={"WEB APPLICATION"}>WEB APPLICATION</MenuItem>
            <MenuItem value={"MOBILE APPLICATION"}>MOBILE APPLICATION</MenuItem>
            <MenuItem value={"HOSTING SERVER"}>HOSTING SERVER</MenuItem>
            <MenuItem value={"MAINTENANCE"}>MAINTENANCE</MenuItem>
            <MenuItem value={"LEARN TO CODING"}>LEARN TO CODING</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="SaveInfo" value="yes" />}
            label="Use this Info for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
