



import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
}

a{
    color: inherit;
    text-decoration:none;
}
input, button{
    border: none;
    outline: none;
    background-color: transparent;
}

button{
    cursor: pointer;
}

.table-scroll{
    &::-webkit-scrollbar {
        height: 8px;
        margin: 20px !important;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #9e9b9b;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
}

.scroll{
    &::-webkit-scrollbar {
        height: 7px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--light-2);
        border-radius: 10px;
        padding: 20px;


    }
    &::-webkit-scrollbar-track {
        background-color: transparent;

    }
}
.scrollM::-webkit-scrollbar-track {
        margin: 0 20px;
    }

:root{

    --red: #F40000;
    --green:#009639;
    --dark: #1D1E1C;
    --white: #fff;
    --light:#ECEEEF;
    --light-2:#d7d9d7;
    --black: #000;

    --box-shadow-1: 0px 0px 6px 2px rgba(0, 0, 0, 0.05);
    
    --font-thin:400;
    --font-bold:700;
}
`;

export default GlobalStyles;
