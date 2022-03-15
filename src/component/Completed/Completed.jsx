//references: 
//https://mui.com/components/data-grid/components/#main-content
//https://mui.com/components/snackbars/
import { useDispatch, useSelector } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from "@mui/material";
import { completedToPending, removeallcompleted, removeCompletedTodo} from "../../redux/action/dataAction";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {  useSnackbar } from 'notistack';

export const Completed = $ => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const { completed_todo } = useSelector((state) => ({
        completed_todo: state.dataState.completed_todo,
    }))

    const buttonActions = ({ row }) => {
        return (
          <>
            <Button
              variant="outline"
              color="secondary"
              size="small"

              onClick={($) => {
                  dispatch(completedToPending(row))
                  enqueueSnackbar('Marked Uncompleted', { variant : 'info' });
              }}
            >
              Mark as uncomplete
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
           
            <Tooltip title="Remove">
              <IconButton
                onClick={($) => {
                    dispatch(removeCompletedTodo(row));
                    enqueueSnackbar('Removed', { variant : 'error' });
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        );
      };
 
   

    const columns = [
        {
            field: 'created',
            headerName: 'Created',
            width: 200,
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 200,
        },
        {
            field: 'date',
            headerName: 'Deadline',
            width: 200,
        },
        {
            field: "buttons",
            headerName: "Actions",
            width: 300,
            renderCell: buttonActions,
            disableClickEventBubbling: true,
          }
       
      
      
    ]

    return <>
     <Box  sx={{
        height: 500,
        width: "1",
      }}>
          
        <DataGrid 
            columns={columns}
            rows={completed_todo}
            rowHeight={70}
            getRowId={(row) => row.id}
        />
        <Button  variant="contained"
               color="primary"
               onClick={$=> {dispatch(removeallcompleted())}}>Clear All</Button>
    </Box>
    </>
}


