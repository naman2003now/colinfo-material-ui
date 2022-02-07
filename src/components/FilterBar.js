import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "./FilterBar.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

const drawerWidth = 300;

function FilterBar(props) {

  const applyFilters = () => {
    const fetchURL = "http://localhost:5000/predict?lrank=" + lrank + "&hrank=" + hrank + "&p1=" + priority2 + "&p2=" + priority1
    console.log(fetchURL)
    fetch(fetchURL).then(response => response.json()).then((data) => props.greet(data))
    props.greet()
  }

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [priority1, setpriority1] = React.useState("");

  const handlePriority1Change = (event) => {
    setpriority1(event.target.value);
  };

  const [priority2, setpriority2] = React.useState("");
  const [hrank, sethrank] = React.useState(1);
  const [lrank, setlrank] = React.useState(100000);

  const handlePriority2Change = (event) => {
    setpriority2(event.target.value);
  };

  const handleLChange = (event) => {
    setlrank(event.target.value)
  }

  const handleHChange = (event) => {
    sethrank(event.target.value)
  }




  const drawer = (
    <div className="whatDrawer">
      <Toolbar />
      <Typography varient="h1" fontSize={50} align="left">
        Filters
      </Typography>
      <Divider />
      <List align="left">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" align="left">
            Exam
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Mains" control={<Radio />} label="Mains" />
            <FormControlLabel
              value="Advanced"
              control={<Radio />}
              label="Advanced"
            />
          </RadioGroup>
        </FormControl>
        <Box>
          <TextField
            fullWidth
            id="lrank"
            value={lrank}
            onChange={handleLChange}
            label="Rank"
            variant="standard"
          />
          {/* <TextField
            fullWidth
            id="urank"
            value={hrank}
            onChange={handleHChange}
            label="Upper rank"
            variant="standard"
          /> */}
        </Box>
      </List>
      <Divider />
      <List>
        <InputLabel id="demo-simple-select-autowidth-label" align="left">
          Priority 1
        </InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={priority1}
          onChange={handlePriority1Change}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Electronics"}>EEE</MenuItem>
          <MenuItem value={"Electrical"}>ECE</MenuItem>
          <MenuItem value={"Chemical"}>VIT</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-autowidth-label" align="left">
          Priority 2
        </InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={priority2}
          onChange={handlePriority2Change}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Electronics"}>CSE</MenuItem>
          <MenuItem value={"Electrical"}>ECE</MenuItem>
          <MenuItem value={22}>VIT</MenuItem>
        </Select>
        <Button onClick={applyFilters} >Apply</Button>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Colinfo
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
export default FilterBar;
