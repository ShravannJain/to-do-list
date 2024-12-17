import { LockOpen, Note } from '@mui/icons-material';
import { Box, Button, Grid2, Icon, TextField, colors } from '@mui/material'
import React, { useState } from 'react'

export default function InsertForm({Notes,setNotes}) {
    const [noteTitle,setNoteTitle]=useState("");
    const [noteTitleError,setNoteTitleError]= useState("")
    const handleChange=(e)=>{
        setNoteTitle(e.target.value)
        setNoteTitleError(null)
        
    };
    const handleSubmit= ()=>{
        console.log(noteTitle)
        if(noteTitle==""){
            setNoteTitleError("please Enter the title!!")
        } else{
            // console.log(Notes)
            let noteId= Notes.length == 0 ? 1 : Notes[Notes.length-1].id+1
            let fullNote={id:noteId,title:noteTitle,completed:false}
            console.log(fullNote)
            let updatedNoteData=[...Notes,fullNote]
            console.log(updatedNoteData)
            localStorage.setItem("Notes",JSON.stringify(updatedNoteData))
            setNotes(updatedNoteData)
            setNoteTitle("")

        }

    }
    return (
        <Box>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 10 }}>
                    <TextField 
                    value={noteTitle}
                    onChange={handleChange}
                    fullWidth label="Enter the title" placeholder='Enter the title' 
                    helperText={noteTitleError && noteTitleError}
                    error={!!noteTitleError}
                    />
                </Grid2>
                <Grid2 size={{ xs: 2}}>
                    <Button
                    onClick={handleSubmit}
                    variant="contained" href="#contained-buttons" sx={{p:2,
                    width:"80px"}}>
                        ADD
                    </Button>
                </Grid2>
            </Grid2>
        </Box >
    )
}