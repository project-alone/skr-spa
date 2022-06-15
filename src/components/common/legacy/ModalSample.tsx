import React from 'react'
import { Button, DialogContent, DialogActions, Typography, Grid } from '@components/common/ui'
import { ModalTitle } from '@root/components/common/legacy/ModalTitle'
import { ModalStyled } from '@root/components/common/legacy/ModalSample.styled'

/**
 * FIXME: 샘플 코드 위치를 옮겨 주세요
 */

interface ModalSampleProps {
	title: string
	btnCancel: string
	btnAction: string
}

export const ModalSample: React.FC<ModalSampleProps> = ({ title, btnCancel, btnAction }) => {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<Grid container spacing={5} mt={5}>
				<Grid item xs={6}>
					<Button variant="outlined" onClick={handleClickOpen}>
						Open Modal
					</Button>
					<ModalStyled onClose={handleClose} open={open}>
						<ModalTitle id="customized-dialog-title" onClose={handleClose}>
							{title}
						</ModalTitle>
						<DialogContent>
							<Typography gutterBottom>Contents</Typography>
						</DialogContent>
						<DialogActions>
							<Button color="modal" onClick={handleClose}>
								{btnCancel}
							</Button>
							<Button color="sub" variant="contained" onClick={handleClose}>
								{btnAction}
							</Button>
						</DialogActions>
					</ModalStyled>
				</Grid>
				<Grid item xs={6}>
					<pre>{`// Click Button
<Button variant="outlined" onClick={handleClickOpen}>
    Open Modal
</Button>

// Modal 
// * Default( size="sm" )
// ** size property ( sm / md / lg / xl )
<Modal onClose={handleClose} open={open}>
    <ModalTitle id="customized-dialog-title" onClose={handleClose}>
        Title
    </ModalTitle>
    <DialogContent>
        <Typography gutterBottom>Contents</Typography>
    </DialogContent>
    <DialogActions>
        <Button color="modal" onClick={handleClose}>
            취소
        </Button>
        <Button color="sub" variant="contained" onClick={handleClose}>
            확인
        </Button>
    </DialogActions>
</Modal>
`}</pre>
				</Grid>
			</Grid>
		</>
	)
}
