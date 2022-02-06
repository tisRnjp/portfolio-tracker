import React from "react";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Autocomplete, Box } from "@mui/material";

const AddStockForm = () => {
  const [qty, setQty] = useState(0);
  const [rate, setRate] = useState(0);
  const [script, setScript] = useState("");
  const scripts = [
    { label: "Agriculture Development Bank Ltd.", symbol: "ADBL" },
    { label: "National Life Insurance Co. Ltd.", symbol: "NLICL" },
    { label: "Himalayan Distillery Ltd.", symbol: "HDL" },
  ];

  //method to calculate commission

  return (
    <div>
      <Box py={2}>
        <Grid container spacing={2}>
          <Grid item>
            <Autocomplete
              size="small"
              id="scripts"
              options={scripts}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Script" />}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              id="outlined-basic"
              label="Rate"
              variant="outlined"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              id="outlined-basic"
              label="Total Amount"
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
              value={qty * rate}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddStockForm;
