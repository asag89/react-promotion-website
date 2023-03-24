import styled from "styled-components"
import portal from "../images/portal.svg"
import star from "../images/star.svg"
import discover from "../images/discover.svg"
const NavbarContainer = styled.div`
    width: 375px;
    height: 80px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    align-items: flex-end;

    .navbar{
        width: 100%;
        height: 68px;
        background: var(white);
        border: 1.5px solid var(--light);
        box-shadow: var(--box-shadow-1);
        border-radius: 20px 20px 0px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .item{
            width: 110px;
            height: 45px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &:first-child{
                margin-left: 20px;
                fill: var(--black);
            }

            &:last-child{
                margin-right: 20px;
                mix-blend-mode: normal;
                opacity: 0.3;
            }
                img{
                    width: 26px;
                    height: 26px;
                }
            p{
                font-weight: var(--font-bold);
                font-size: 10px;
                line-height: 11px;
                letter-spacing: 0.5px;
                padding-top: 5px;
                text-transform: uppercase;
            }
        }

        .center-icon{
            width: 69px;
            height: 71px;
            position: absolute;
            bottom: 10px;
            left: 153px;
        }
    }
`
const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar">
                <div className="item">
                    <img src={discover} alt="discover" />
                    <p>Keşfet</p>

                </div>
                <img src={portal} className="center-icon" alt="" />
                <div className="item">
                    <img src={star} alt="star" />
                    <p >Daha Cüzdan</p>

                </div>
            </nav>
        </NavbarContainer>
    )
}

export default Navbar