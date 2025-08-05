// components/ShippingSummaryBar.tsx

import React from 'react';
import { Box, Typography, Divider, Stack, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ValueBox = ({
  heading,
  value,
  color,
  fontSize = '24px',
}: {
  heading: string;
  value: string;
  color?: string;
  fontSize?: string;
}) => (
  <Stack alignItems="center" flex={1}>
    <Typography sx={{ fontSize: {
      xs: '14px',
      sm: '14px',
      md: '16px',
    },fontWeight: 500,  color: 'var(--color-text-primary)', pb:1, fontFamily: 'Dubai' }}>
      {heading}
    </Typography>
    <Typography
      sx={{
        fontSize: fontSize,
        fontWeight: fontSize === '26px' ? "bold !important" : 500,
        color: color || 'var(--color-text-primary)',
        fontFamily: 'Dubai'
      }}
    >
      {value}
    </Typography>
  </Stack>
);

const VerticalDivider = () => (
  <Box mx={3}>
    <Divider
      orientation="vertical"
      flexItem
      sx={{
        height: '58px',
        width: '1px',
        borderColor: '#0057B880 !important',
      }}
    />
  </Box>
);

const ShippingSummaryBar = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: 'var(--color-bg-blue)',
          border: '1px solid var(--color-primary-blue)',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4,
          py: 2,
          minHeight:"106px"
        }}
      >
        <ValueBox heading="Total Cost" value="$100.00" />
        <VerticalDivider />
        <ValueBox heading="Repacking/Consolidation" value="$10.00" />
        <VerticalDivider />
        <ValueBox
          heading="Total Shipping Cost"
          value="$510.00"
          color="var(--color-primary-blue)"
          fontSize="26px"
        />
      </Box>

      {/* Action Buttons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 2,
          mt: 4,
          flexWrap: 'wrap',
        }}
      >
        <Button
          variant="contained"
          startIcon={<ArrowBackIosIcon sx={{
        fontSize: 16, // smaller arrow
        fontWeight: 'normal !important', // not bold (optional, mostly controlled by font)
        color: 'var(--color-text-primary)', // match text color
      }} />} 
          sx={{
            backgroundColor: 'var(--color-bg-orange)',
            color: 'var(--color-text-primary)',
            fontWeight: 500,
            fontSize: '16px',
            borderRadius: '100px',
            px: 4,
            py: 2,
            '&:hover': { backgroundColor: '#FF5E1424' },
            textTransform: 'none',
            boxShadow: 'none',
            fontFamily: 'Circular Std'
          }}
        >
           Back
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--color-primary-blue)",
            color: '#FFFFFF',
            fontWeight: 500,
            fontSize: '16px',
            borderRadius: '100px',
            px: 4,
            py: 2,
            '&:hover': { backgroundColor: '#004fa3' },
            textTransform: 'none',
            boxShadow: 'none',
            fontFamily: 'Circular Std'
          }}
        >
          Save for Later
        </Button>

        <Button
          variant="outlined"
          sx={{
            backgroundColor: '#0057B81A',
            borderColor: "var(--color-primary-blue)",
            color: "var(--color-primary-blue)",
            fontWeight: 500,
            fontSize: '16px',
            borderRadius: '100px',
            px: 4,
            py: 2,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#0057B81A',
              borderColor: "var(--color-primary-blue)",
            },
            fontFamily: 'Circular Std'
          }}
        >
          Create Shipment
        </Button>
      </Box>
    </Box>
  );
};

export default ShippingSummaryBar;
