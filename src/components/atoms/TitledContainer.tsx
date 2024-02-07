import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type TitledContainerProps = {
  title: string;
  children: ReactElement;
};

export default function TitledContainer({ title, children }: TitledContainerProps) {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" color="secondary" sx={{ mb: '20px' }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
