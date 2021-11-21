
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 70vh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    back-groundcolor: white;
    color: grey;
    cursor: pointer;
    font-weigth: 600;
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src= {item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <form action="/Products" method="get">
                <Button>Shop Now!!</Button>
                </form>
            </Info>
        </Container>
    )
}
export default CategoryItem;