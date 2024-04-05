import { luigiClientInit } from '@luigi-project/client';
import { Box, Card, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    luigiClientInit();
  }, []);

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
