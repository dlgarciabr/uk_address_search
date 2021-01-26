import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Address = ({ data: { postcode, city, street } }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Postcode: {postcode}
        </Typography>
        <Typography variant="h5" component="h2">
          {city}
        </Typography>
        <Typography variant="body2" component="p">
          {street}
          <br />
          {"other data"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Address;
