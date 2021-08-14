import styled from 'styled-components';
import {
    AiOutlinePlus
} from 'react-icons/ai';
import {
    MdLocalMovies
} from 'react-icons/md';
import Image from 'next/image';

const Container = styled.section`
    height: 400px;
    overflow: auto;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StreamList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    background: #303030;
    border: 1px solid #303030;
    border-radius: 3px;
    padding: 10px 20px;
`;

const StreamListItem = styled.li`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #FFF;
    :hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

const StreamPoster = styled.div`
    width: 250px;
    height: 300px;
    border-radius: 10px;
`;

const StreamListContainer = ({ title, streams }) => {
    return (
        <Container>
            <Header>
                <h3>{ title }</h3>
                <AiOutlinePlus />
            </Header>
            <StreamList>
                {
                    streams.map(stream => {
                        return <StreamListItem key={stream.id} onclick="toggleStreamInfo">
                            <StreamPoster>
                                <Image key={stream.id} alt="123" layout="fill" src={`https://image.tmdb.org/t/p/w500${stream.poster_path}`} />
                            </StreamPoster>
                            {stream.title}
                        </StreamListItem>
                    })
                }
            </StreamList>
        </Container>
    );
};

export default StreamListContainer;