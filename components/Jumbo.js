import styled from "styled-components"
import GirlImage from '../public/girlview.jpg'
import Image from 'next/image';


const JumboContainer = styled.div``;
const JumboImg = styled(Image)``;


const Jumbo = () => {
    return (
        <div>
            <JumboContainer>
                <JumboImg layout='responsive' src={GirlImage}></JumboImg>
            </JumboContainer>
        </div>
    )
}

export default Jumbo
