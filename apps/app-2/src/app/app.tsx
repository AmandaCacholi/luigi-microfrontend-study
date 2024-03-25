// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from 'react';
import '@luigi-project/container';

import { luigiClientInit } from '@luigi-project/client';
import { Box } from '@mui/material';

export function App() {
  useEffect(() => {
    luigiClientInit();
  }, []);

  return (
    <Box display="flex" justifyContent="space-between">
      <Box width="100%">
        <luigi-container viewURL="http://localhost:3004"></luigi-container>
      </Box>
      <Box width="100%">
        <luigi-container viewURL="http://localhost:3006"></luigi-container>
      </Box>
    </Box>
  );
}

export default App;
