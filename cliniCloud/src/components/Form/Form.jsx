import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

const Form = () => {

    const [ newUser, setNewUser ] = useEffect({})

    //validaçoes
    // data de aniversario seletor de abre fecha a data é montada e enviada pro server
    // cpf buscar regex
    // endereço buscar endereço valido no busca cep ou correios
    // email email deve conter pelo menos 3 letras antes da arroba, a arroba, o provedor, o ponto , e pelo menos dois digitos apos o ponto.
    //nome o nome é composto por dois campos, nome e sobrenome que sao unidos e enviados em camelcase pro servidor






    axios.post('/user', {
        birthdate: newUser.birthdate,
        cpf: newUser.cpf,
        address: newUser.address,
        email: newUser.email,
        name: newUser.name
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


  return (
    <div>Form</div>
  )
}

export default Form