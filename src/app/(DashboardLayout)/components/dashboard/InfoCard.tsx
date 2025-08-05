// components/CustomerInfoCard.tsx

import React from 'react';
import { Box, Typography, Divider, Stack } from '@mui/material';
import Image from 'next/image';

const Item = ({
  iconSrc,
  heading,
  value,
}: {
  iconSrc: string;
  heading: string;
  value: string;
}) => (
  <Stack direction="row" spacing={2} alignItems="center" flex={1}>
    <Box>
      <Image src={iconSrc} alt={heading} width={44} height={44} />
    </Box>
    <Stack direction='column' spacing={1} justifyItems="center" >
      <Typography sx={{ color: '#4A4A49', fontSize: '16px', fontWeight: 400, fontFamily: 'Dubai' }}>
        {heading}
      </Typography>
      <Typography
        sx={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-text-primary, #212529)', fontFamily: 'Dubai' }}
      >
        {value}
      </Typography>
    </Stack>
  </Stack>
);

const VerticalDivider = () => (
    <Box mr={7}>
  <Divider orientation="vertical" flexItem sx={{ height: '48px', width: '1px', bgcolor: '#E5E5E5' }} />
  </ Box>
);

const CustomerInfoCard = () => {
  return (
    <Stack
    rowGap={2}
    direction={{ xs: 'column', sm: 'column', md: 'row' }}
  alignItems={{ xs: 'flex-start', sm: 'flex-start', md: 'center' }}
      sx={{
        bgcolor: 'white',
        borderRadius: '12px',
        p: 3,
        minHeight:"96px",
        flexWrap:"wrap"
      }}
    >
      <Item iconSrc="/images/icons/UserIcon.svg" heading="Customer name" value="Adedamola Olarele" />
      <VerticalDivider />
      <Item iconSrc="/images/icons/BuisnessIcon.svg" heading="Business name" value="Dolf Technologies" />
      <VerticalDivider />
      <Item iconSrc="/images/icons/UnitIcon.svg" heading="Unit no." value="1E" />
    </Stack>
  );
};

export default CustomerInfoCard;
