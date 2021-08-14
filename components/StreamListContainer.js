import styled from 'styled-components';
import {
    AiOutlinePlus
} from 'react-icons/ai';
import Image from 'next/image';

const Container = styled.section`
    background: #303030;
    border: 1px solid #303030;
    border-radius: 3px;
    padding: 10px 20px;
    width: 100%;
    min-height: 6rem;
`;

const StreamListItem = styled.li`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #FFF;
    :hover {
        cursor: pointer;
    }
`;

const StreamInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const StreamPoster = styled.div`
    width: 100px;
    height: 150px;
`;

const StreamListContainer = ({ title, streams }) => {
    return (
        <Container>
            <h3>{ title }</h3>
            <ul>
                {
                    streams.map(stream => {
                        return <StreamListItem key={stream.id} onclick="toggleStreamInfo">
                            <StreamInfo >
                                <StreamPoster>
                                    <Image key={stream.id} alt="123" layout="fill" src={`https://image.tmdb.org/t/p/w500${stream.poster_path}`} />
                                </StreamPoster>
                                {stream.title}
                            </StreamInfo>
                            <AiOutlinePlus />
                        </StreamListItem>
                    })
                }
            </ul>
        </Container>
    );
};

export default StreamListContainer;