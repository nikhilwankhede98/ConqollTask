import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Shortlisted from './Shortlisted';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const All = () => {

    const classes = useStyles();
    const [details,setDetails] = useState([]);
    const [shortlisted,setShortlisted] = useState([]);
      
    const delRow = (rowData) => {
      const newList = shortlisted.concat({ rowData });
      shortlisted.push(newList)
      setShortlisted(shortlisted);
      console.log(shortlisted)
    }

    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            setDetails(res.data);
        })
        .catch(err =>alert(err));
    }, []);
    


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
      
      <MaterialTable
        
        columns={columns}
        data={details}

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
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setDetails([...details, newData]);
                
                resolve();
              }, 1000)
            }),
          
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...details];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setDetails([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
      />
      
    )

    
  }

  export default All
  