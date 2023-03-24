import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Spinner from "../components/Spinner"
import { getPromotionDetails } from "../features/appSlice"
import backArrow from "../images/backArrow.svg"
const PromotionContainer = styled.div`
    width: 375px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img-container{
        width: 100%;
        height: 305px;
        position: relative;

        .promotion-img{
            width: 100%;
            height: 305px;
            object-fit: cover;
            border-radius: 0 0 0 100px;
        }
        .logo{
            width: 55px;
            height: 55px;
            border-radius: 50%;

            position: absolute;
            left: 10px;
            bottom: -16px;
        }

        .icon-wrapper{
            position: absolute;
            width: 40px;
            height: 40px;
            left: 15px;
            top: 50px;
            background: var(--dark);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            
            img{
                width: 28px;
              

            }
        }

        .left-time-container{
            position: absolute;
            width: 98px;
            height: 33px;
            right: 8px;
            bottom: 6px;
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
        font-weight: var(--font-bold);
        font-size: 26px;
        line-height: 30px;
        letter-spacing: -0.2px;
        text-align: center;
        margin-top: 25px;
        color: var(--dark);

    }

    .details{
        font-weight: var(--font-thin);
        font-size: 14px;
        line-height: 22px;
        color: var(--dark);
        mix-blend-mode: normal;
        opacity: 0.75;
        padding: 15px;
        margin-bottom: 80px;
    }

    .btn-join{
        width: 345px;
        height: 56px;
        border-radius: 28px;
        position: fixed;
        bottom: 20px;
        left: 15px;
        background-color: var(--red);
        color: var(--white);
    }
`
const Promotion = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { promotionDetailData, isLoading } = useSelector(state => state.app)

    useEffect(() => {
        dispatch(getPromotionDetails(id))
    }, [dispatch, id])

    if (isLoading || !promotionDetailData) {
        return <Spinner />
    }
    return (
        <PromotionContainer>
            <div className="img-container">
                <img className="promotion-img" src={promotionDetailData.ImageUrl} alt={promotionDetailData.SeoName} />
                <img src={promotionDetailData.BrandIconUrl} className="logo" alt={promotionDetailData.SeoName} />
                <button onClick={() => navigate(-1)} className="icon-wrapper">
                    <img src={backArrow} alt={promotionDetailData.SeoName} />
                </button>

                <div className="left-time-container">
                    <p className="left-time">{promotionDetailData.RemainingText}</p>
                </div>
            </div>
            <p className="desc">Her altın kapakta bir altın Coca-Cola + Coffee Keyfi</p>
            {/* <p className="details">{promotionDetailData.Description}</p> */}
            <p className="details">Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya getirir.  Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer alır.
                Yeni tatlara açık olanların beğenisini kazanan kahveli Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer almaktadır.
                İçeceğin soğuk tüketilmesi önerilir. Buzla beraber içilebilir.
                Özellikle sıcak yaz günlerinde ferahlatıcı etki gösterir. </p>
            <button className="btn btn-join">Hemen Katıl</button>
        </PromotionContainer>
    )
}

export default Promotion