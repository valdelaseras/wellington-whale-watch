import React, { FC } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from "@mui/material";

interface InfographicTableProps {}

const columns: GridColDef[] = [
    { field: 'family', headerName: 'Family', width: 160 },
    { field: 'species', headerName: 'Species', width: 160 },
    { field: 'quantity', headerName: 'Approximate quantity', width: 160 },
    { field: 'location', headerName: 'Location', width: 160 },
    { field: 'date', headerName: 'Date and time', width: 160 },
]

const rows = [
    { id: '0', family: 'dolphin', species: 'orca', quantity: 8, location: 'Evans Bay', date: '248029' },
    { id: '1', family: 'dolphin', species: 'bottlenose', quantity: 15, location: 'Evans Bay', date: '248029' },
    { id: '2', family: 'dolphin', species: 'common', quantity: 150, location: 'Evans Bay', date: '248029' },
    { id: '3', family: 'dolphin', species: 'orca', quantity: 5, location: 'Evans Bay', date: '248029' },
]

const InfographicTable: FC<InfographicTableProps> = () => (
  <div data-testid="InfographicTable">
    <div className="column">
        <div className="content">
            <Box sx={{ height: 500 }}>
                <DataGrid sx={{ border: 'none', color: 'white' }}
                          rows={rows}
                          columns={columns}
                          pageSize={5}
                          rowsPerPageOptions={[5]}
                />
            </Box>
        </div>
    </div>
  </div>
);

export default InfographicTable;
