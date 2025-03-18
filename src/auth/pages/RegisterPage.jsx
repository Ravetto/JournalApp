import { Link as RouterLink } from 'react-router-dom';
import React, { useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
  email: [(value) => value.includes('@'), 'El correo debe tener una @.'],
  password: [(value) => value.length >= 6, 'La contraseña debe tener al menos 6 carácteres']
}

export const RegisterPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [ formSubmitted, setformSubmitted ] = useState(false)
  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,  
  } = useForm(formData, formValidations);
  
  const isCheckingAutentication = useMemo(() => status === 'checking', [ status ])

  const onSubmit = (event) => {
    event.preventDefault()
    if(!isFormValid) return;
    setformSubmitted(true)
    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    <AuthLayout title="Crear cuenta">
      <h1>isFormValid: { isFormValid ? 'válido' : 'incorrecto' }</h1>
      <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="nombre completo" 
                type="name" 
                placeholder='nombre completo' 
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
              <Grid item xs={ 12 }>
                <Button disabled={ isCheckingAutentication } type='submit' variant='contained' fullWidth>
                  <Typography sx={{ ml: 1 }}>Crear Cuenta</Typography>
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
