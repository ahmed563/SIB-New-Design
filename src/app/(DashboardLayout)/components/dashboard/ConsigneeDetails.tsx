import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const ConsigneeDetails = () => {
  const infoList = [
    { label: "Full Name", value: "John Carter" },
    { label: "Email Address", value: "john@wakabuy.com" },
    { label: "Phone Number", value: "+1 01539 702257" },
    { label: "Address Line 1", value: "20 Cooper Square" },
    { label: "Country", value: "USA" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "var(--color-primary-white)",
        pt: 3,
        pb: 0,
        border: "1px solid #f5f5f5",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 700,
          color: "var(--color-text-primary)",
          mb: 1,
          px: 3,
          fontFamily: 'Dubai'
        }}
      >
        Consignee Details
      </Typography>

      {infoList.map((item, index) => (
        <Box key={item.label}>
          <Box sx={{ py: "10px", px: 3 }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 450,
                color: "var(--color-text-primary)",
                pb: 1,
                fontFamily: 'Circular Std'
              }}
            >
              {item.label}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 450,
                color: "var(--color-text-secondary)",
                fontFamily: 'Circular Std'
              }}
            >
              {item.value}
            </Typography>
          </Box>
          <Divider sx={{ width: "100%", mx: "" }} />
        </Box>
      ))}

      <Box sx={{ display: "flex", gap: {
      xs: '8rem',
      sm: '7rem',
      md: '8rem',
      lg: '12rem',
    }, mt: 0.5, px:3, pt:"10px" }}>
        {/* State */}
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 450,
              color: "var(--color-text-primary)",
              pb: 1,
              fontFamily: 'Circular Std'
            }}
          >
            State
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 450,
              color: "var(--color-text-secondary)",
              fontFamily: 'Circular Std'
            }}
          >
            Florida
          </Typography>
        </Box>

        {/* City */}
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 450,
              color: "var(--color-text-primary)",
              pb: 1,
              fontFamily: 'Circular Std'
            }}
          >
            City
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 450,
              color: "var(--color-text-secondary)",
              fontFamily: 'Circular Std'
            }}
          >
            Sebring
          </Typography>
        </Box>

        {/* Zip */}
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 450,
              color: "var(--color-text-primary)",
              pb: 1,
              fontFamily: 'Circular Std'
            }}
          >
            Zip
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 450,
              color: "var(--color-text-secondary)",
              fontFamily: 'Circular Std'
            }}
          >
            33875
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsigneeDetails;
