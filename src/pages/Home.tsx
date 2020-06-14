import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MyCard from "../components/MyCard";
import Logo from "../logo.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 240,
      width: 250,
      background: "#CCFFFF",
      textAlign: "center",
    },
  })
);

interface ILink {
  path: string;
  label: string;
  overview: string;
}

const links: ILink[] = [
  {
    path: "/about",
    label: "About",
    overview: "このサイトについて",
  },
  {
    path: "/admin",
    label: "React Admin",
    overview: "React Adminのサンプル",
  },
];

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <h2>Welome to React Sandbox!!</h2>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {links.map((link, index) => (
                <Grid key={index} item>
                  <Link to={link.path}>
                    <MyCard
                      image={Logo}
                      title={link.label}
                      overview={link.overview}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
