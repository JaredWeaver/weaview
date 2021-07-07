import styled from 'styled-components';
// import GirlImage from '../public/girlview.jpg';
const JumboContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
width:100%;
height: auto;
padding: 2rem;
video{
  border: 2px solid #ff00ff;
  height: 80vh;
  opacity: .7;
  object-fit: cover;
  width: 100%;
}
`;

const Jumbo = () => {
  return (
    <div>
      <JumboContainer>
        <video autoPlay loop muted>
          <source src='/tv.mp4' type='video/mp4'/>
        </video>
        {/* <JumboImg layout='responsive' src={GirlImage}></JumboImg> */}
      </JumboContainer>
    </div>
  );
};

export default Jumbo;
