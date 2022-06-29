import { CardBack, Bar } from './CardBack'
import Barcode from 'react-jsbarcode'

type dataValues = {
    codigo : string
    nome : string
    nomeEmpresa : string
    unidade : string
    obs : string
}

export const Card_Back = ( {codigo, nome, nomeEmpresa, unidade, obs} : dataValues ) => {
    return (
        <CardBack>
            <div className="content">
                <p className="matricula">{codigo == "" ? '0000000' : codigo}</p>
                <p className="nome">{nome == "" ? "Nome completo" : nome}</p>
                <p className="empresa">{nomeEmpresa == '' ? "Nome Da Empresa" : nomeEmpresa}</p>
                <p className="unidade">{unidade == "" ? "Unidade" : unidade}</p>

                <div className="instrucoes">
                    <p>
                        {obs == '' ? '' : obs}
                    </p>
                </div>

            </div>
            <Bar>
                <Barcode 
                    className="barcode"
                    value={codigo == "" ? '0000000' : codigo}                    
                    options={{ 
                        width: 2,
                        height: 30,
                        displayValue: false, 
                        format: 'code128'
                    }} 

                />
            </Bar>            
        </CardBack>
    )
}