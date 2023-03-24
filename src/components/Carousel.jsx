import { useSelector } from "react-redux"
import styled from "styled-components"
import CarouselItem from "./CarouselItem"

const CarouselContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 25px;

    .carousel{
    width: 100%;
        height: 403px;
        overflow: auto;
        display: flex;
        align-items: flex-start;
    }
`
const Carousel = () => {

    const { promotionsData } = useSelector(state => state.app)

    if (!promotionsData) {
        return null
    }
    return (
        <CarouselContainer>
            <div className="carousel scroll scrollM">
                {promotionsData.map((item) => (
                    <CarouselItem key={item.Id} data={item} />
                ))}
            </div>
        </CarouselContainer>
    )
}

export default Carousel