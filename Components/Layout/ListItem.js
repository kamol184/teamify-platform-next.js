import { styled } from "@mui/system";
import ListItem from '@mui/material/ListItem';

const MyListItem = styled(ListItem)(({theme}) => ({
    "&:hover": {
        transition: "0.3s",
        color: "white",
        background: "#90caf9",
    },
    "&.active": {
        background : '#268fe4ff'
    }
}));

export default MyListItem;