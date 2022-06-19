import styled from 'styled-components'

export const CardFront = styled.div`
    border: 1px solid rgb(255, 0, 0);
    width: 5.5cm;
    height: 8.5cm;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;

    .logo {
        background-color: rgb(255, 255, 255);
        width: 2cm;
        height: 2cm;
        margin: 0.8cm 0 0 0;
    }

    .empresa{
        font-size: 1.2rem;
    }

    .foto {
        background-color: rgb(255, 255, 255);
        width: 2.4cm;
        height: 3.2cm;
        margin: 0.1cm 0 0.2cm 0;
    }

    .nome {
        font-size: 1.5rem;
    }

    .area {
        font-size: 1rem;
    }
`