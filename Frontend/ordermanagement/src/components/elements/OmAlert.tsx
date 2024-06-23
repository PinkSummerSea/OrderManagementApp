import { Alert, Box } from '@mui/material'
import React from 'react'

interface OmAlertProps {
    message: string;
}

const OmAlert = ({message}: OmAlertProps) => {
  return (
    <Box sx={{display: 'flex'}}>
        <Alert severity='error'>{message}</Alert>
    </Box>
  )
}

export default OmAlert