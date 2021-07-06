import styled from 'styled-components';
import Link from 'next/link';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #000;
`;

const NavLogo = styled.a`
  font-size: 5vw;
  padding: 0rem 2rem;
`;

const NavLink = styled.a`
  font-size: 2vw;
  padding: 0rem 2rem;
`;

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <div>
          <Link href="/" passHref>
            <NavLogo>weaView</NavLogo>
          </Link>
        </div>
        <div>
          <Link href="/" passHref>
            <NavLink>How it Works</NavLink>
          </Link>
          <Link href="/signup" passHref>
            <NavLink>Signup</NavLink>
          </Link>
          <Link href="/login" passHref>
            <NavLink>Login</NavLink>
          </Link>
        </div>
      </NavContainer>
    </>
  );
};

export default Navbar;
