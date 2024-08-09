"use client";
import { adminLinks, BASE_URL } from "@/constant/links";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import { Accordion, AccordionSummary } from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

const drawerWidth = 240;
interface Props {
  title: string;
}

const AdminSidebar = ({ title }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useRouter();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleLogout = async () => {
    const id = toast.loading("Loading.");
    try {
      const { data } = await axios.get(`${BASE_URL}/users/logout`);

      if (data.success) {
        toast.success(data.message, { id });
        navigate.push("/admin/login");
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Something went wrong", {
        id,
      });
    }
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <div>
        <Typography
          variant="h6"
          className="font-bold text-[#1e1e5d] text-center py-4"
        >
          Bluescope Logo
        </Typography>
      </div>

      <Divider />
      <List>
        <ListItem
          disablePadding
          onClick={() => navigate.push("/admin/messages")}
        >
          <ListItemButton>
            <ListItemIcon>{<MessageOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="messages" className="capitalize" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => navigate.push("/admin/members")}
        >
          <ListItemButton>
            <ListItemIcon>{<GroupsOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="members" className="capitalize" />
          </ListItemButton>
        </ListItem>

        {adminLinks.map(({ Icon, name, items }, index) => (
          <Accordion key={name} defaultExpanded={index === 0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <ListItemIcon>{<Icon />}</ListItemIcon>
              <Typography>{name}</Typography>
            </AccordionSummary>
            {items.map(({ Icon, name, path }) => (
              <ListItem
                key={name}
                disablePadding
                onClick={() => navigate.push(path)}
              >
                <ListItemButton>
                  <ListItemIcon>{<Icon />}</ListItemIcon>
                  <ListItemText primary={name} className="capitalize" />
                </ListItemButton>
              </ListItem>
            ))}
          </Accordion>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-background-texture">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="font-semibold capitalize"
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
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
};

export default AdminSidebar;
