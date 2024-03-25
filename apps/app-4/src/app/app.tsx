import { Box, Card, Divider, Typography } from '@mui/material';

export function App() {
  return (
    <Card>
      <Box p={2}>
        <Typography variant="h6" fontWeight="bold">
          Vendas - 3006
        </Typography>
        <Divider />
        <Typography>Dashboard</Typography>
      </Box>
    </Card>
  );
}

export default App;
