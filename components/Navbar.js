import styled from 'styled-components';
import Link from 'next/link';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  background-color: #000;
  overflow:hidden ;
`;

const NavLogo = styled.a`
  font-size: 5vw;
  padding: 0 20px;
`;

const NavLink = styled.a`
  font-size: 2vw;
  padding: 0 20px;
`;

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <div>
          <Link href="/" passHref>
            <NavLogo>WeView</NavLogo>
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
          <Link href="/dashboard" passHref>
            <NavLink>Dashboard</NavLink>
          </Link>
        </div>
      </NavContainer>
    </>
  );
};

export default Navbar;
