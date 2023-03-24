import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { loginUser } from "../features/appSlice"
import logo from "../images/logo.svg"
import profile from "../images/profile.svg"
const TopbarContainer = styled.div`
    width: 345px;
    height: 40px;
    position: fixed;
    top: 40px;
    left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white);
    z-index: 100;

    .logo {
        width: 81px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .right-side{
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;

        .btn{

        }

        
        .btn-login{
            width: 91px;
            height: 100%;
            font-size: 12px;
            font-weight: var(--font-bold);
            line-height: 13.8px;
            letter-spacing: -0.17px;
            text-align: center;
            border-radius: 20px;
            background-color: var(--red);
            color: var(--white);
        }

        .user-container{
            width: 40px;
            height: 40px;
            background-color:${({ isLogin }) => isLogin ? "#F40000" : "#1D1E1C"} ;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            position: relative;
            .user-icon{
                width: 16px;
                height: 17px;
                fill: var(var(--white));
            }

            .dot{
                width: 12px;
                height: 12px;
                position: absolute;
                top: 0;
                right: 0;
                border-radius: 50%;
                background-color: var(--green);
                border: 2px solid var(--white);
            }
        }
    }
`
const Topbar = () => {

    const { isLoggedIn } = useSelector(state => state.app)
    const dispatch = useDispatch()

    return (
        <TopbarContainer isLogin={isLoggedIn}>
            <img className="logo" src={logo} alt="daha_daha" />
            <div className="right-side">
                {
                    !isLoggedIn &&
                    <button className="btn btn-login" onClick={() => dispatch(loginUser(true))}>Giriş Yap</button>
                }
                <div className="user-container">
                    <img src={profile} className="user-icon" alt="profile" />
                    {isLoggedIn &&
                        <div className="dot"></div>
                    }
                </div>
            </div>
        </TopbarContainer>
    )
}

export default Topbar