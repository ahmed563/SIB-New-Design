import { Box, Stack, Typography } from "@mui/material";

const steps = [
  "Create Shipment",
  "Repacking & Consolidation",
  "Shipment Details",
  "Shipping Method",
  "Summary & Confirmation",
];

const ProgressShipment = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      flexWrap="wrap"
      rowGap={2}
      sx={{
        backgroundColor: "var(--color-bg-light)",
        py: 2,
        overflowX: "auto",
      }}
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const isCurrent = index === steps.length - 1; 
        const iconSrc = isCurrent
          ? "/images/icons/CurrentStep.svg"
          : "/images/icons/StepCompleted.svg";

        return (
          <Stack direction="row" alignItems="center" key={step}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box component="img" src={iconSrc} alt="step icon" width={32} />
              <Typography
                fontSize="20px"
                fontWeight={400}
                color="var(--color-text-primary)"
                whiteSpace="nowrap"
                sx={{ fontFamily: 'Dubai' }}
              >
                {step}
              </Typography>
            </Stack>

            {!isLast && (
              <Box
                sx={{
                  width: "30px",
                  height: "1px",
                  backgroundColor: "var(--color-primary-blue)",
                  ml: 2,
                  mr:2
                }}
              />
            )}
          </Stack>
        );
      })}
    </Stack>
  );
};

export default ProgressShipment;
