import React from "react";
import Menuitems from "./MenuItems";
import { Box, Typography } from "@mui/material";
import {
  Logo,
  Sidebar as MUI_Sidebar,
  Menu,
  MenuItem,
  Submenu,
} from "react-mui-sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemsProps {
  isSidebarOpen?: boolean;
  isMobileSidebarOpen?:boolean
  setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const renderMenuItems = (items: any, pathDirect: any, isSidebarOpen: boolean, isMobileSidebarOpen: boolean) => {
  return items.map((item: any) => {

    const itemIcon = (
  <img
    src={item.icon}
    // alt={item.title}
  />
);


    return (
      <Box px={3} pb={1} key={item.id}>
        <MenuItem
          key={item.id}
          isSelected={pathDirect === item?.href}
          // borderRadius="8px"
          icon={itemIcon}
          link={item.href}
          component={Link}

        >
        {(isSidebarOpen || isMobileSidebarOpen) && (
            <Typography
              sx={{
                fontFamily: 'Dubai',
                fontSize: {
                  xs: "15px", // mobile
                  sm: "16px", // tablet
                  md: "16px", // desktop
                },
              }}
            >
              {item.title}
            </Typography>
          )}
        </MenuItem>
      </Box>
    );
  });
};

const SidebarItems: React.FC<SidebarItemsProps> = ({
  isSidebarOpen = false,
  isMobileSidebarOpen= false,
  setSidebarOpen,
}) => {
  const pathname = usePathname();
  const pathDirect = pathname;

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <MUI_Sidebar width="100%" showProfile={false}>
        {/* Logo Section */}
        <Box
          onClick={() => setSidebarOpen?.(!isSidebarOpen)}
          sx={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "var(--color-primary-white)",
            // py: 2,
            height:"80px !important"
          }}
        >
          <img src="/images/logos/logo.png" style={{width:"37px", height:"31px"}}/>
        </Box>

        {/* Menu Content */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
           height: "90vh",// height for content inside sidebar
          }}
        >
          {/* Top Items */}
          <Box>
            {renderMenuItems(
              Menuitems.slice(0, Menuitems.length - 3),
              pathDirect,
              isSidebarOpen,
              isMobileSidebarOpen
            )}
          </Box>

          {/* Bottom Items */}
          <Box>
            {renderMenuItems(Menuitems.slice(-3), pathDirect, isSidebarOpen, isMobileSidebarOpen)}
          </Box>
        </Box>
      </MUI_Sidebar>
    </Box>
  );
};


export default SidebarItems;
