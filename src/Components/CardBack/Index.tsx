import { CardBack, Barcode } from './CardBack'

export const Card_Back = () => {
    return (
        <CardBack>
            <div className="content">
                <p className="matricula">0000000</p>
                <p className="nome">Nome completo</p>            
                <p className="empresa">Nome Da Empresa</p>
                <p className="unidade">Unidade da empresa qdo houver</p>

                <div className="instrucoes">
                    <p>
                        Algumas instruções qdo houver 
                        Algumas instruções qdo houver 
                        Algumas instruções qdo houver 
                        Algumas instruções qdo houver 
                    </p>
                </div>
                
            </div>
            <Barcode></Barcode>
        </CardBack>
    )
}