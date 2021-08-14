import styled from 'styled-components';

const JumboContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 2rem;
  video {
    position: relative;
    border: 2px solid #915f6d;
    height: 80vh;
    opacity: 0.7;
    object-fit: cover;
    width: 100%;
    z-index: 0;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: -60px;
  z-index: 9999999;
  h3{
    padding: 3rem;
    text-align:center;
    font-size: 3rem;
    text-shadow: 2px 2px #8059D5;
  }
`;

const Jumbo = () => {
  return (
    <div>
      <JumboContainer>
        <video autoPlay loop muted>
          <source src="/tv.mp4" type="video/mp4" />
        </video>
        <OverlayText>
        <h3>Follow what tv shows and movies<br></br>other households are streaming</h3>
        </OverlayText>
      </JumboContainer>
    </div>
  );
};

export default Jumbo;
