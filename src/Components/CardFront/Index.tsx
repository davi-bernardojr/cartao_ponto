import { CardFront } from './cardFront'

type dataValues = {
    nome : string
    empresa : string
    area : string
    logo : string | undefined
    foto : string | undefined
}

export const Card_Front = ({nome, empresa, area, logo, foto} : dataValues) => {
    return (
        <CardFront>
            <img src={logo} className="logo" />
            <label className="empresa">{(empresa == "" ? "Empresa" : empresa)}</label>
            <img src={foto} className="foto" />
            <label className="nome"><strong>{(nome == "" ? "Nome" : nome)}</strong></label>
            <label className="area">{(area == "" ? "Area / função" : area)}</label>
        </CardFront>
    )
}