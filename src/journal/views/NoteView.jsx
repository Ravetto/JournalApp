import { Padding, SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid 
    container
    direction='row'
    justifyContent='space-between'
    alignItems='center'
    sx={{ mb: 1}}
    >
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>28 de Agosto, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{ Padding: 2 }} >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
            type='text'
            variant='filled'
            fullWidth
            placeholder='Ingrese un título'
            label='título'
            sx={{ border: 'none', mb: 1 }}
            />
            <TextField 
            type='text'
            variant='filled'
            fullWidth
            placeholder='¿Qué sucedió en el día de hoy?'
            multiline
            minRows={5}
            />
        </Grid>
        <ImageGallery />
    </Grid>
  )
}
