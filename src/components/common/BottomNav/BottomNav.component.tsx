"use client";
import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import CollectionsIcon from "@mui/icons-material/Collections";
import { usePathname, useRouter } from "next/navigation";
import { links } from "@/constant/links";

function BottomNavComponent() {
  const [value, setValue] = React.useState(0);
  const navigate = useRouter();
  const path = usePathname();
  return (
    <div
      className={`z-20 fixed md:hidden bottom-0 w-[100vw] ${
        links.includes(path) ? "hidden" : "block"
      }`}
    >
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => navigate.push("/")}
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            onClick={() => navigate.push("/about-us")}
            label="About us"
            icon={<InfoIcon />}
          />
          <BottomNavigationAction
            onClick={() => navigate.push("/verticals")}
            label="Verticals"
            icon={<AccountTreeIcon />}
          />
          <BottomNavigationAction
            onClick={() => navigate.push("/gallery")}
            label="Gallery"
            icon={<CollectionsIcon />}
          />
          <BottomNavigationAction
            onClick={() => navigate.push("/contact-us")}
            label="Contact"
            icon={<PermContactCalendarIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default BottomNavComponent;
