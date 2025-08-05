import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { IconMenu } from "@tabler/icons-react";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px",
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled
      position="sticky"
      color="default"
      sx={{
        borderBottom: "1px solid #E5E5E5",
        height: "80px !important",
        backgroundColor: "var(--color-bg-light)",
      }}
    >
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        <Typography
          fontSize="16px"
          fontWeight={450}
          color="text.primary"
          sx={{ color: "var(--color-text-primary)" , display:'flex', alignItems:"center", gap:"5px", fontFamily: 'Circular Std'}}
        >
        <img src="/images/icons/ShipingHeader.svg" alt="Notification" />  Shipments / Create New
        </Typography>
        <Box flexGrow={1} />
        <Stack spacing={3} direction="row" alignItems="center">
          <img src="/images/icons/Notifications.svg" alt="Notification" />
          <img src="/images/icons/MenuHeader.svg" alt="Menu" />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
