'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ProgressShipment from './components/dashboard/ProgressComponent';
import ConsigneeDetails from './components/dashboard/ConsigneeDetails';
import ShippingDetails from './components/dashboard/ShippingDetails';
import CustomerInfoCard from './components/dashboard/InfoCard';
import ShippingSummaryBar from './components/dashboard/ShippmentSummary';
import AddTextBox from './components/dashboard/AddDetails';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={2}>
          <Grid
            size={{
              xs: 12,
              lg: 12
            }}>
            <ProgressShipment />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 12
            }}>
            <CustomerInfoCard />
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6
            }}>
            <ConsigneeDetails />
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6
            }}>
              <ShippingDetails />
          </Grid>     
          <Grid
            size={{
              xs: 12,
              md: 5
            }}>
              <AddTextBox />
          </Grid>         
         <Grid
            size={{
              xs: 12,
              md: 7
            }}>
              <ShippingSummaryBar />
          </Grid> 
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default Dashboard;
