import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;
    --blue-light: #6933FF;
    --dark-blue: #363F5F;
    --text-body: #969CB3;
    --light-grey: #F0F2F5;
    --shape: #FFFFFF
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%
    }

    @media (max-width: 720) {
        font-size: 87.5%
    }
}

button {
    cursor: pointer;
}

h1, h2, h3, h4, h5, h5, strong {
    font-weight: 600;
}

body {
    background: var(--dark-blue);
    -webkit-font-smoothing: antialiased;
}

`