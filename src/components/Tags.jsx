import styled from "styled-components"
import { GoSearch } from "react-icons/go"
import TagItem from "./TagItem"
import { useSelector } from "react-redux"
const TagsContainer = styled.div`
    width: 100%;
    overflow: auto;
    height: 36px;
    margin-left: 15px;

    .wrapper{
        width: max-content;
        height: 100%;
        display: flex;
        align-items: center;

    .tag-item{
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 6px;
        cursor: pointer;

        .icon-wrapper{
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--red);
            border-radius: 7.2px;

            .icon{
                width: 12px;
                height: 12px;
                fill: var(--white);
            }
        }

        .text{
            font-weight: var(--font-thin);
            font-size: 12px;
            line-height: 14px;
            color: var(--dark);
            padding: 0 6px;
        }
    }
}

`
const Tags = () => {


    const { tagsData } = useSelector(state => state.app)
    if (!tagsData) {
        return null
    }
    return (
        <TagsContainer className="scroll">
            <div className="wrapper">
                <div className="tag-item">
                    <div className="icon-wrapper">
                        <GoSearch className="icon" />
                    </div>
                    <p className="text">Fırsat Bul</p>
                </div>
                {tagsData.map((item) => (
                    <TagItem data={item} key={item.Id} />
                ))}
            </div>

        </TagsContainer>
    )
}

export default Tags