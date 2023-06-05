import React, { useState } from 'react';
import Image from "react-bootstrap/esm/Image"
import ListGroup from 'react-bootstrap/ListGroup';


export const SideComponent = (props: SideComponentProps) => {
    return (
        <>
            <Image src={'assets/mitchVanVlierberghe.jpg'} alt={'profile picture'} roundedCircle={true} fluid={true} className={'border border-light border-5'}/>
            <FlushExample />
        </>

    )
}

interface SideComponentProps {

}



export const FlushExample = (props: SideNavigationProps) => {
    const [activeItem, setActiveItem] = useState(1)
    return (
        <ListGroup variant="flush" className={'text-center my-3'}>
            <ListGroup.Item action active={activeItem == 1} onClick={() => setActiveItem(1)}>Cras justo odio</ListGroup.Item>
            <ListGroup.Item action active={activeItem == 2} onClick={() => setActiveItem(2)}>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item action active={activeItem == 3} onClick={() => setActiveItem(3)}>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item action active={activeItem == 4} onClick={() => setActiveItem(4)}>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
    );
}

interface SideNavigationProps {
    
}