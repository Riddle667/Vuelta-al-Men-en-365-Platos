import React, { useEffect, useState } from 'react'
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth'
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal'
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal'
import { userUserLocal } from '../../hooks/userUserLocal'

const HomeViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const {user, getUserSession} = userUserLocal();
    console.log('USUARIO EN SESION: ' + JSON.stringify(user));

    const onChange=(property: string, value: any) =>{
        setValues({...values, [property]: value})
    }

    const login =  async() =>{
      if (isValidForm()) {
        const response = await LoginAuthUseCase(values.email, values.password)
        console.log('RESPUESTA' + JSON.stringify(response)) 
        if (!response.success) {
          setErrorMessage(response.message);
        }
        else{
          await SaveUserLocalUseCase(response.data);
          getUserSession()
        }
      }
    }

    const isValidForm = (): boolean => {
      if (values.email == '') {
        setErrorMessage('Ingresar un correo electronico');
        return false;
      }

      if (values.password == '') {
        setErrorMessage('Ingresar una contraseña');
        return false;
      }

      return true;
    }

  return{
    ...values,
    onChange,
    errorMessage,
    login,
    user
  }
}

export default HomeViewModel
