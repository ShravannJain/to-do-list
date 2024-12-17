import React, { useState } from 'react'
import { Box, Grid2, Paper, Typography } from '@mui/material'
import InsertForm from './InsertForm'
import List from './List'
import { Note } from '@mui/icons-material'


export default function Home() {
    let initialValue
    if (localStorage.getItem("Notes")==null) {
        initialValue=[]
    } else {
        initialValue=JSON.parse(localStorage.getItem("Notes"))
    }
    const [Notes,setNotes]=useState(initialValue)
    const deleteNode =(id)=> {
        console.log(id)
        let remainingNotes=Notes.filter((item)=>item.id!=id)
        localStorage.setItem("Notes",JSON.stringify(remainingNotes))
        setNotes(remainingNotes)
        
    }
    const updateNode =(note) =>{
        console.log(note)
        let status
        if (note.completed) {
            status=false
        } else {
            status=true
        }   
        let modifiedNote={...note,completed:status}
        console.log(modifiedNote)
        let noteIndex=Notes.findIndex((item)=>item.id==note.id)
        console.log(noteIndex)
        let modifiedCompleteNote=[...Notes]
        modifiedCompleteNote.splice(noteIndex,1,modifiedNote)
        localStorage.setItem("Notes",JSON.stringify(modifiedCompleteNote))
        setNotes(modifiedCompleteNote)
    }
    return (
        <Box sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Paper sx={{ p: 4 }}>
                <Box>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12 }}>
                            <Typography sx={{ textAlign: "center", fontWeight: "600", color: "pink", textTransform: "uppercase" }}>
                                TO DO LIST
                            </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                            <InsertForm  Notes={Notes} setNotes={setNotes}/>
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                            <Box sx={{maxHeight:"40vh",overflow:"auto",scrollbarWidth:"none"}}>
                                {Notes.length>0?
                                Notes.map((note,index)=>(

                                <List deleteNode={deleteNode} key={index} note={note} 
                                updateNode={updateNode}
                                />
                                )):(
                                    <Box>
                                    <Typography 
                                    color='text.secondary'
                                    sx={{display:"flex",
                                    justifyContent:"center",
                                    marginTop:"10px"
                                    }}>
                                        No notes found!!
                                    </Typography>
                                </Box>  
                                )}
                            </Box>
                           
                        </Grid2>
                    </Grid2>
                </Box>
            </Paper>
        </Box>
    )
}