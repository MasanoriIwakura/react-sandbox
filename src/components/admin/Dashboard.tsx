import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Dashboard = () => {
  return (
    <Card>
      <CardHeader title="Welcome to the administration" />
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
      <a href="/">
        <Button variant="contained">Go to Home</Button>
      </a>
    </Card>
  );
};

export default Dashboard;
