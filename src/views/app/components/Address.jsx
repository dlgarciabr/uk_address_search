import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Address = ({
  data: {
    postcode,
    admin_district,
    region,
    referenceDistanceKm,
    referenceDistanceMi,
  },
}) => {
  return (
    <Card style={{ marginBottom: "10px" }}>
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
        <Typography variant="h7" color="textSecondary" gutterBottom>
          Distance to London Heathrow airport: {referenceDistanceKm} Km /{" "}
          {referenceDistanceMi} mi
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Address;
