import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { SelectOption } from '../../components/SelectOption'
import * as C from './style'

export const FormStep2 = () => {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    })

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3')
        } else {
            alert('Informe os dados abaixo')
        }

    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>Vamos começar com os seu nome</h1>
                <p>Preencha o campo abaixo com seu completo</p>
                <hr />
                <SelectOption
                    title="Sou Iniciante"
                    description="Começei a programar a menos de 2 anos"
                    icon="🥳"
                />
                <SelectOption
                    title="Sou Programador"
                    description="Já programo há 2 anos ou mais"
                    icon="🤓"
                />

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}