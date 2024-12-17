import React from 'react'

import { Box,Paper,Checkbox ,Typography,IconButton} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
export default function List({note,deleteNode,updateNode}) {
  return (
    <div>
      <Paper sx={{p:2,
    display:"flex",
    justifyContent:"space-between",
    marginTop:"30px"}}>
        <Box sx={{
            display:"flex",
            alignItems:"center",
            gap:1
        }}>
        <Checkbox checked={note.completed?true:false} onChange={()=>updateNode(note )
        
        }/>
       <Typography 
       color='text.secondary'
       sx={{
        fontWeight:"600",
        textTransform:"capitalize",
        textDecoration:note.completed?"line-through":"none"
       }}>
        {note.title}
       </Typography>
        </Box>
        <IconButton onClick={()=>deleteNode(note.id)}>
            <DeleteIcon sx={{color:"red"}}></DeleteIcon>
        </IconButton>
      </Paper>
    </div>
  )
}
