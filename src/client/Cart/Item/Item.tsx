import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './Item.styles';
//Dialog
import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });



export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
}


type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;

};


const Item: React.FC<Props> = ({ item, handleAddToCart })=>{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
    <Wrapper>
        <a onClick={handleClickOpen}>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <h3>${item.price}</h3>
            </div>
        </a>
        <Button
            onClick={() => handleAddToCart(item)}
            data-cy={`add-to-cart-${item.id}`}>Add to cart</Button>

        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <h3>{item.title}</h3>
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    <h4>Price: ${item.price}</h4>
                    <h4>Description: {item.description}</h4>
                </Typography>
            </DialogContent>
        </Dialog>
    </Wrapper>
)};

export default Item;




