import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Image from 'next/image';

const ShippingDetails = () => {
  const infoList = [
    { label: "Method Name", value: "Air Freight" },
    { label: "Shipping Date", value: "JUL-25-2025" },
    {
      label: "Carrier",
      value: (
        <Box display="flex" alignItems="center" gap={1}>
          <Image
            src="/images/logos/carrierlogo.png"
            alt="Carrier Logo"
            width={100}
            height={24}
          />
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 450,
              color: "var(--color-text-secondary)",
            }}
          >
            Standard
          </Typography>
        </Box>
      ),
    },
    { label: "ETA", value: "JUL-03-2025" },
    { label: "Price", value: "$20.00" },
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
        Shipping Details
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
            {typeof item.value === "string" ? (
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
            ) : (
              item.value
            )}
          </Box>
          {index !== infoList.length - 1 && <Divider sx={{ width: "100%" }} />}
        </Box>
      ))}
    </Box>
  );
};

export default ShippingDetails;
