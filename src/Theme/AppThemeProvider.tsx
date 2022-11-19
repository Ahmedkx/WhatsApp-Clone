import React from 'react'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'
import { CssBaseline } from '@mui/material'

const theme = createTheme({

})

export default function AppThemeProvider({children}:any) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
