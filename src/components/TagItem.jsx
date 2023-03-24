import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { setSelectedTag } from "../features/appSlice"

const TagItemContainer = styled.div`
        width: auto !important;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 6px;
        border: 1.5px solid transparent;
        border-color: ${({ isSelected }) => isSelected && "#F40000"};
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 3px;

        &:last-child{
            margin-right: 30px;
        }

        .cover{
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;

                .icon{
                width: 24px;
                height: 24px;
                object-fit: cover;
            }
        }

        .text{
            font-weight: var(--font-thin);
            font-size: 12px;
            line-height: 14px;
            color: var(--dark);
            padding: 0 6px;
        }
`
const TagItem = ({ data }) => {
    const { selectedTag } = useSelector(state => state.app)

    const dispatch = useDispatch()
    return (
        <TagItemContainer isSelected={selectedTag === data.Id} onClick={() => dispatch(setSelectedTag(data.Id))}>
            <div className="cover">
                <img className="icon" src={data.IconUrl} alt={data.name} />
            </div>
            <p className="text">{data.Name}</p>
        </TagItemContainer>
    )
}

export default TagItem