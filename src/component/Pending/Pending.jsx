
import { useDispatch, useSelector } from "react-redux"
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from "@mui/material";
import { addCompletedTodo, removePendingTodo } from "../../redux/action/dataAction";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {  useSnackbar } from 'notistack';

export const Pending = $ => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const { pending_todo } = useSelector((state) => ({
        pending_todo: state.dataState.pending_todo,
    }))

    const buttonActions = ({ row }) => {
        return (
          <>
            <Button
              variant="outline"
              color="secondary"
              size="small"

              onClick={($) => {
                  enqueueSnackbar('Marked completed', { variant : 'success' });
                  dispatch(addCompletedTodo(row));
              }}
            >
              Mark As Completed
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
           
            <Tooltip title="Remove">
              <IconButton
                onClick={$ => {
                    dispatch(removePendingTodo(row));
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
            rows={pending_todo}
            rowHeight={70}
            getRowId={(row) => row.id}
        />
    </Box>
    </>
}


