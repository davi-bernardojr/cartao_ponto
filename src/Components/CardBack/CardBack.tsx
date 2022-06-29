import styled from 'styled-components'


export const CardBack = styled.div`
    width: 8.5cm;
    height: 5.5cm;
    border-radius: 8px;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    transform: rotate(90deg); 
    margin-left: -1.5cm;
    border: 1px solid rgb(255,0,0);

    .content {
        padding:0;
        height: 4.3cm;
        width: 5.5cm;
        margin: 0cm 0.2cm 0.2cm 1cm;
        border: 1px solid rgb(255,0,0);

        .matricula {
            font-weight: bold;
            margin: 0;
        }    

        .nome {
            margin: 0.08cm 0 0 0;
        }

        .empresa {
            margin: 0.1cm 0 0 0;
            font-size: 0.8rem;
        }

        .unidade {
            margin: 0 0 0.1cm 0;
        }
        
        .instrucoes {
            font-size: 0.7rem;
        }
    }
`

export const Bar = styled.div`
    position: fixed;
    left: 185px;
    margin: 0 -65px 0 0;
    /* border: 1px solid rgb(255,0,0); */
    transform: rotate(-90deg);
`