import styled from 'styled-components'
export default function CharacterCard () {
    const Card = styled.div`
    display:flex;
    flex-direction: column;`
    const Name = styled.h1`
    background: blue;
    color: white;`
    const Elemental = styled.h2`
    background: white;
    color: purple;`
 return (
    <Card>
        <Name>Character Name</Name>
        <Elemental>Character Title</Elemental>
    </Card>
 )   
}