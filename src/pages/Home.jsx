import styled from "styled-components"
import Carousel from "../components/Carousel"
import Navbar from "../components/Navbar"
import Tags from "../components/Tags"
import Topbar from "../components/Topbar"

const HomeContainer = styled.div`
    width: 375px;
    height: auto;
    border: 1px solid var(--light);

    overflow-x: hidden;

    .main{
        width: 100%;
        height: auto;
        margin-top: 100px;
        margin-bottom: 100px;
        display: flex;
        flex-direction: column;
    }
`
const Home = ({ topData, promotionData, setIsLogin, isLogin, selectedTag, setSelectedTag }) => {
    return (
        <HomeContainer className="home-container">
            <Topbar setIsLogin={setIsLogin} isLogin={isLogin} />
            <div className="main">
                <Tags data={topData} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
                <Carousel data={promotionData} />
            </div>
            <Navbar />
        </HomeContainer>
    )
}

export default Home