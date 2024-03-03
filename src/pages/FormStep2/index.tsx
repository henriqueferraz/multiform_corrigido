import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'

import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { SelectOption } from '../../components/SelectOption'
import * as C from './style'

export const FormStep2 = () => {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3')
        } else {
            alert('Informe os dados abaixo')
        }

    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que descreve você profissionalmente.</p>
                <hr />
                <SelectOption
                    title="Sou Iniciante"
                    description="Começei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption
                    title="Sou Programador"
                    description="Já programo há 2 anos ou mais"
                    icon="🤓"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to='/' className='backButton'>Voltar</Link >
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}