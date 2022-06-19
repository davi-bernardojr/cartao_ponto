import { CardFront } from './cardFront'

export const Card_Front = () => {
    return (
        <CardFront>
            <img src="" className="logo" />
            <label className="empresa">Empresa</label>
            <img src="" className="foto" />
            <label className="nome"><strong>Nome</strong></label>
            <label className="area">Area / função</label>
        </CardFront>
    )
}