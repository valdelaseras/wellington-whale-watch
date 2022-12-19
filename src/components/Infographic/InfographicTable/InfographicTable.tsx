import React, { FC } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {formatDate, getSightings} from "../../../service/service";
import {Typography} from "@mui/material";

interface InfographicTableProps {
    year: number,
}

const columns: GridColDef[] = [
    { field: 'family', headerName: 'Family', flex: 1 },
    { field: 'species', headerName: 'Species', flex: 1 },
    { field: 'quantity', headerName: 'Approx. quantity', flex: 1 },
    { field: 'location', headerName: 'Location', flex: 1 },
    {
        field: 'datetime',
        headerName: 'Date and time',
        flex: 1,
        renderCell: ( props ) => (
            <Typography>
                { formatDate(props.row.datetime) }
            </Typography>
        )
    },
]

const InfographicTable: FC<InfographicTableProps> = ( props ) => {
    return (
    <div data-testid="InfographicTable">
        <div className="column">
            <div className="content">
                <DataGrid sx={{ border: 'none', color: 'white' }}
                          rows={ getSightings( props.year)}
                          columns={columns}
                          autoHeight
                          pageSize={50}
                          rowsPerPageOptions={[50]}
                />
            </div>
        </div>
      </div>
    )
};

export default InfographicTable;
