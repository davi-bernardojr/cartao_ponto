import { Principal, Container } from './Components/Principal'
import { Card_Front } from './Components/CardFront/Index'
import { Card_Back } from './Components/CardBack/Index'
import React, { ChangeEvent, FormEvent, useState } from 'react'

type event = ChangeEvent<HTMLInputElement>
type eventForm = FormEvent<HTMLFormElement>

const App = () => {
  const [func_name, setFunc_name] = useState('')
  const [func_emp, setFunc_emp] = useState('')
  const [func_area, setFunc_area] = useState('')
  const [func_logo, setFunc_logo] = useState('')
  const [func_foto, setFunc_foto] = useState('')

  const [b_codigo, setCodigo] = useState('')
  const [b_name, setName] = useState('')
  const [b_nameEmpresa, setNameEmpresa] = useState('')
  const [b_unidade, setUnidade] = useState('')
  const [b_observacoes, setObs] = useState('')

  const handleFuncLogo = (e : event) => { 
    if ( e.target.files && e.target.files.length > 0 ){      
      setFunc_logo(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleFuncFoto = (e : event) => {
    if ( e.target.files && e.target.files.length > 0 ){
      setFunc_foto(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <Principal>
      <Container>        
          <div>
            <input 
              className=""
              type="text"
              onChange={ (e : event ) => setFunc_name(e.target.value) }
              value={func_name}
              placeholder="Primeiro Nome"
            />
            <input 
              className=""
              type="text"
              onChange={ (e : event ) => setFunc_emp(e.target.value) }
              value={func_emp}
              placeholder="Nome Empresa"
            />
            <input 
              className=""
              onChange={ (e : event ) => setFunc_area(e.target.value) }
              value={func_area}
              placeholder="Area ou função / opcional"
            />
            <input 
              className=""
              type="file"
              onChange={ handleFuncLogo }
            />
            <input 
              className=""
              type="file"
              onChange={ handleFuncFoto }
            />
          </div>
          <br/>
          <br/>
          <div>
            <input 
              type="text" 
              onChange={ (e : event ) => setCodigo(e.target.value) } 
              value={b_codigo}
              placeholder="" 
            />
              <input 
              type="text" 
              onChange={ (e : event ) => setName(e.target.value) } 
              value={b_name}
              placeholder="" 
            />
              <input 
              type="text" 
              onChange={ (e : event ) => setNameEmpresa(e.target.value) } 
              value={b_nameEmpresa}
              placeholder="" 
            />
              <input 
              type="text" 
              onChange={ (e : event ) => setUnidade(e.target.value) } 
              value={b_unidade}
              placeholder="" 
            />
              <input 
              type="text" 
              onChange={ (e : event ) => setObs(e.target.value) } 
              value={b_observacoes}
              placeholder="" 
            />
          </div>
      </Container>
      <Container>
          <Card_Front 
            nome={func_name} 
            empresa={func_emp} 
            area={func_area} 
            logo={func_logo} 
            foto={func_foto} 
          />
          <Card_Back 
            codigo={b_codigo} 
            nome={b_name}
            nomeEmpresa={b_nameEmpresa}
            unidade={b_unidade}
            obs={b_observacoes}
          />
      </Container>
    </Principal>
  )
}

export default App
