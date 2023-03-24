import styled from "styled-components"
import logo from "../images/logo.svg"
const SpinnerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--black);
    opacity: .8;

    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    .spinner-container{
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--white);
        border-radius: 50%;
        img{
            width: 60px;
            height: 40px;
            fill: var(--white);
        }
    }
`
const Spinner = () => {
    return (
        <SpinnerContainer>
            <div className="spinner-container">
                <img src={logo} alt="daha_daha" />
            </div>
        </SpinnerContainer>
    )
}

export default Spinner