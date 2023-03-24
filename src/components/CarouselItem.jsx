import { Link } from "react-router-dom"
import styled from "styled-components"


const CarouselItemContainer = styled.div`
    width: 305px;
    height: auto;
    
    position: relative;
    margin-right: 5px;

    &:first-child{
        margin-left: 30px;

    }
    
    &:last-child{
        margin-right: 30px;

    }

    .carousel-item{
            width: 305px;
            height: 362px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 5px;

            border-radius: 20px;
            position: relative;
            background-color: var(--white);
            z-index: 10;

            .img-container{
                width: 295px;
                height: 247px;
                position: relative;

                .promotion-img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 16px 16px 16px 100px;
                }
                .logo{
                    width: 55px;
                    height: 55px;
                    border-radius: 50%;

                    position: absolute;
                    left: 10px;
                    top: 202px;
                }

                .left-time-container{
                    position: absolute;
                    width: 98px;
                    height: 33px;
                    right: 2px;
                    bottom: 2px;
                    background-color: var(--dark);
                    border-radius: 26.82px;
                    display: flex;
                    align-items: center;

                    .left-time{
                        width: 100%;
                        font-weight: var(--font-thin);
                        font-size: 13px;
                        line-height: 15px;
                        text-align: center;
                        letter-spacing: -0.541667px;
                        color: var(--white);
                    }
                }
            }

            .desc{
                width: 245px;
                height: 50px;
                margin-top: 25px;
                font-weight: var(--font-bold);
                font-size: 14px;
                line-height: 20px;
                display: flex;
                align-items: center;
                text-align: center;
                letter-spacing: -0.215385px;
                color: var(--dark);
            }

            .daha{
                padding-top: 5px;
                font-weight: var(--font-bold);
                font-size: 14px;
                line-height: 16px;
                display: flex;
                align-items: center;
                text-align: center;
                color: var(--red);
            }
        }

        .card-bottom{
            position: absolute;
            bottom: -10px;
            width: 305px;
            border-bottom: 42px solid;
            border-color: ${({ cardColor }) => cardColor};
            border-radius: 20px;
            transform: rotate(3deg);
        }
`
const CarouselItem = ({ data }) => {
    return (
        <CarouselItemContainer cardColor={data.PromotionCardColor}>
            <Link to={`/campaign/${data.SeoName}/${data.Id}`} key={data.Id} className="carousel-item">
                <div className="img-container">
                    <img className="promotion-img" src={data.ImageUrl} alt={data.SeoName} />
                    <img src={data.BrandIconUrl} className="logo" alt={data.SeoName} />
                    <div className="left-time-container">
                        <p className="left-time">{data.RemainingText}</p>
                    </div>
                </div>
                <p className="desc">2.5 LT Coca-Cola kapakları Coca-Cola +Coffee kazandırıyor!</p>
                <div className="daha">Daha Daha</div>

            </Link>
            <div className="card-bottom">

            </div>
        </CarouselItemContainer>
    )
}

export default CarouselItem