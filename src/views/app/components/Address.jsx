import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Address = ({ data: { postcode, admin_district, region } }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Postcode: {postcode}
        </Typography>
        <Typography variant="h5" component="h2">
          City: {admin_district}
        </Typography>
        <Typography variant="body2" component="p">
          Region: {region}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Address;
