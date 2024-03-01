import { FC, ReactNode } from 'react'
import { light } from '@/config'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'


interface Props {
	children: ReactNode
}
export const ThemeProvider: FC<Props> = ({ children }) => {

	return (
		<MuiThemeProvider theme={ light } >
			<CssBaseline />
			{ children }
		</MuiThemeProvider>
	)
}