import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function PaymentForm(props) {
  const valuechange = (event) => {
    if (event.target.id === "cardName") {
      props.SetClientInfoState({
        ...props.ClientInfoState,
        ClientPaymentInfo: {
          ...props.ClientInfoState.ClientPaymentInfo,
          cardName: event.target.value,
        },
      });
    } else if (event.target.id === "cardNumber") {
      props.SetClientInfoState({
        ...props.ClientInfoState,
        ClientPaymentInfo: {
          ...props.ClientInfoState.ClientPaymentInfo,
          cardNumber: event.target.value,
        },
      });
    } else if (event.target.id === "expDate") {
      props.SetClientInfoState({
        ...props.ClientInfoState,
        ClientPaymentInfo: {
          ...props.ClientInfoState.ClientPaymentInfo,
          expiryDate: event.target.value,
        },
      });
    } else if (event.target.id === "cvv") {
      props.SetClientInfoState({
        ...props.ClientInfoState,
        ClientPaymentInfo: {
          ...props.ClientInfoState.ClientPaymentInfo,
          cvv: event.target.value,
        },
      });
    }
    console.log(props.ClientInfoState);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={valuechange}
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            onChange={valuechange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={valuechange}
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            onChange={valuechange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
