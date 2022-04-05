import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useActivate, useUnactivate } from 'react-activation'

const Paragraph: React.FC<{ title: string }> = ({ title, children }) => {
	useActivate(() => {
		console.log(`TestFunction: didActivate :::: ${title}`)
	})

	useUnactivate(() => {
		console.log(`TestFunction: willUnactivate :::: ${title}`)
	})

	return (
		<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
			<Typography variant="h1">{title}</Typography>
			{children}
			<Typography paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
				elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
				hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
				velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
				Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
				quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
				fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
				lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at
				consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
				faucibus et molestie ac.
			</Typography>
			<Typography paragraph>
				Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget
				nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat
				ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
				volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at
				quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus
				viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
				Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et.
				Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod
				elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
				Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
			</Typography>
			<Typography paragraph>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni alias quo error
				pariatur consequatur, esse facere deserunt et modi. Ad beatae, tenetur possimus
				officia dolores vitae temporibus totam maxime placeat.
			</Typography>
		</Box>
	)
}

export const Pages: { [key: string]: React.FC } = {
	One: () => <Paragraph title="One" />,
	Two: () => {
		return (
			<Paragraph title="Two">
				<Box>
					<Button>+</Button>
					<Button>-</Button>
				</Box>
			</Paragraph>
		)
	},
	Three: () => <Paragraph title="Three" />,
	Four: () => <Paragraph title="Four" />,
	Five: () => <Paragraph title="Five" />,
	Six: () => <Paragraph title="Six" />,
	Seven: () => <Paragraph title="Seven" />,
	Eight: () => <Paragraph title="Eight" />,
	Nine: () => <Paragraph title="Nine" />,
	Ten: () => <Paragraph title="Ten" />,
}
