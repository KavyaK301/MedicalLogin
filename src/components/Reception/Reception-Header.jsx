import * as React from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const lightColor = "rgba(255, 255, 255, 0.7)";

function Header(props) {
  const { onDrawerToggle } = props;
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Fixed tabValue check with '/reception/' prefix
  const tabValue = (() => {
    if (location.pathname.startsWith("/reception/registration")) return 0;
    if (location.pathname.startsWith("/reception/management")) return 1;
    if (location.pathname.startsWith("/reception/appointment")) return 2;
    if (location.pathname.startsWith("/reception/billing")) return 3;
    return false;
  })();

  const tabStyle = {
    color: lightColor,
    fontWeight: 500,
    "&:hover": {
      color: "#ffffff",
    },
    "&.Mui-selected": {
      color: "#ffffff",
    },
  };

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Link
                href="/"
                variant="body2"
                sx={{
                  textDecoration: "none",
                  color: lightColor,
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                {/* Optional link */}
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container spacing={5} sx={{ alignItems: "center" }}>
            <Grid item xs>
              <Typography
                color="inherit"
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: "0.3rem", // adjust spacing here
                  fontFamily: "'Roboto Slab', serif",
                }}
              >
                Reception
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={tabValue} textColor="inherit">
          <Tab
            label="Patient Registration"
            onClick={() => navigate("/reception/registration")}
            sx={tabStyle}
          />
          <Tab
            label="Patient Management"
            onClick={() => navigate("/reception/management")}
            sx={tabStyle}
          />
          <Tab
            label="Appointment"
            onClick={() => navigate("/reception/appointment")}
            sx={tabStyle}
          />
          <Tab
            label="Billing"
            onClick={() => navigate("/reception/billing")}
            sx={tabStyle}
          />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
