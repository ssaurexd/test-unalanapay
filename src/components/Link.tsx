import NextLink, { type LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'
/*  */
import MuiLink from '@mui/material/Link'
import type { SxProps } from '@mui/material/styles'


interface Props extends LinkProps {
	children: ReactNode,
	className?: string
	sx?: SxProps
	hover?: boolean;
	[key: string]: any
	color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' 
}
export const Link: FC<Props> = ({ children, href, className, sx, hover, color, ...props }) => {

	if( !hover ) return (
		<MuiLink
			className={ className }
			component={ NextLink }
			href={ href }
			sx={ sx }
			{ ...props }
		>
			{ children }
		</MuiLink>
	)

	return (
		<MuiLink
			className={ className }
			component={ NextLink }
			href={ href }
			underline='none'
			sx={{
				color: color ? color : 'inherit',
				transition: 'color 0.3s',
				'&:hover': {
					color: theme => theme.palette.primary.main 
				},
				...sx
			}}
			{ ...props }
		>
			{ children }
		</MuiLink>
	)
}