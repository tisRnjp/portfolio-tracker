import React from "react";
import { useState } from "react";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";

import AddStockForm from "./AddStockForm";

const AddStock = () => {
  
  const addStockForm = () => {
    return <AddStockForm />
  }

  const [formList, setFormList] = useState([]);
  
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Add Stock
          </Typography>

          {formList}

          <Button variant="contained" disableElevation startIcon={<AddIcon />} 
            onClick={() => {setFormList(formList.concat(<AddStockForm key={formList.length} />))}}
          >
            Add Transaction
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddStock;
