import {Link} from 'react-router-dom'
import styled from 'styled-components'
export default function NavBar () {
    const Nav = styled.nav`
    display: flex;
    justify-content: space-between;`
    const Name = styled.h1`
    background: blue;
    color: white;`
    const Elemental = styled.h2`
    background: white;
    color: purple;`
 return (
    <Nav>
        <Link to='/'>Home</Link>
        <Link to='/team'>Team</Link>
        <Link to='/characters'>Characters</Link>
    </Nav>
 )   
}