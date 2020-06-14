import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";

type Props = {
  record?: any;
  source: string;
};

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
  },
  icon: {
    width: "0.5em",
    paddingLeft: 2,
  },
});

const MyUrlField: React.FC<Props> = ({ record = {}, source }) => {
  const classes = useStyles();
  return (
    <a href={record[source]} className={classes.link}>
      {record[source]}
      <LaunchIcon className={classes.icon} />
    </a>
  );
};

export default MyUrlField;
