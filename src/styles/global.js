import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
        --background: #f0f2f5;
        --white: #fff;

        --red-400: #C00505;
        --red-300: #991D1D;
        --red-200:#841C1C;
        --red-100:#742C2C;

        --gray-100:#444444;
        --gray-200:#464948;
    
    
        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;

        /* #752E2F */
        /* #7F6665 */
        /* #818384 */
        /* #F2EDEB */
    }
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body{
        background: var(--white);
        -webkit-font-smoothing: antialiased;
    }
    body,input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
        border: none;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0,0,0.5);

        position: fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position:relative;
        border-radius: 0.24rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top:1.5rem;
        border:0;
        background: transparent;

        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
        }

    }


`;
