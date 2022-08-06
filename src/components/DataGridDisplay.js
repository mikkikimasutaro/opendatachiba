import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

class DataGridDisplay extends React.Component {
    constructor(props) {
        super(props);
      }

      render() {

        const handleChangeDataGrid = (event, value)  => {
          console.log(event);
          console.log(value);
        }
        
        let displayData = "項目を選択するとここにデータが表示されます。";
        if(this.props.rows.length != 0){
        displayData = <DataGrid
                        rows={this.props.rows}
                        columns={this.props.columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        //checkboxSelection
                        onCellClick={handleChangeDataGrid}
                        onColumnHeaderClick={handleChangeDataGrid}
                        columnVisibilityModel={{
                          id: false
                        }}
                        sx={{
                          height: 400,
                          boxShadow: 1,
                          border: 1,
                          borderColor: 'primary.light',
                          '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                          },
                        }}
                      />
        }
        return (
          <div style={{height: '100%', width: '100%' }}>
            <h3>表</h3>
            {displayData}
          </div>
        );
        
      }
}

export default DataGridDisplay;
