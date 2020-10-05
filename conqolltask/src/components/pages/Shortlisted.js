import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';


const Shortlisted = () => {

    const [shortlisted,setShortlisted] = useState([]);

    const delRow = (rowData) => {
        const newList = shortlisted.concat({ rowData });
        shortlisted.push(newList)
        setShortlisted(shortlisted);
        console.log(shortlisted)
      }

    const [columns, setColumns] = useState([
       
        {
          title:"ID", field:"id"
        },

        {
          title:"Name", field:"name"
        },
        {
          title:"Username", field:"username"
        },
        {
          title:"Email", field:"email"
        }
    ]);    
    

    return (
        <div>
            <h1 className='short-text'>This is the <span className='short-text1'>SHORTLISTED</span>  Page</h1> 

            <MaterialTable
        
                columns={columns}
                data={shortlisted}

                options={{
                    actionsColumnIndex: -1,
                    pageSize:10
                }}

                actions={[
                {
                    icon: 'save',
                    tooltip: 'Shortlist Row',
                    
                    onClick: (event, rowData) => {delRow(rowData)} 
                
                }
                ]}
                editable={{
                   
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...shortlisted];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setShortlisted([...dataDelete]);
                                resolve()
                            }, 1000)
                        }),
                }}
      />    
        </div>
    )
}

export default Shortlisted