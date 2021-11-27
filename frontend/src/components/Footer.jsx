import React from 'react'
import styled from "styled-components";
import useState  from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Container = styled.div`
    display: flex;
    background-color: #DADADA;
    
`;
const Left = styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
    padding: 20px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: green;
    display: flex;
`;
const Center = styled.div`
    
    flex: 1;
    padding: 20px;
    display: flex;
    align-items: right;
    
`;
const Right = styled.div`
    
    flex: 1;
    padding: 20px;
    
`;
const Title = styled.h3`
    
    margin-bottom: 30px;
    color: green;
    
`;
const Title2 = styled.h6`
    
    
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    align-items: right;
    display: flex;
`;
const  Footer = () => {
    return (
        <Container>
            <Left>
                <Title>Social Accounts</Title>
                <SocialContainer>
                    <SocialIcon>
                        <FacebookIcon/> 
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedInIcon/> 
                    </SocialIcon>
                </SocialContainer>
                
            </Left>
            
                <Center>
                <Title2>Copyright © 2021</Title2>
                </Center>
            
            <Right>
                <Title>Contact Us</Title>
                <ContactItem> <HomeIcon/>
                    Address: .......
                </ContactItem>
                <ContactItem> <PhoneIcon/>
                    +906687.....
                </ContactItem>
                <ContactItem> <MailIcon/>
                    duygutumer@sabanciuniv.edu
                </ContactItem>
                
            </Right>
        </Container>
    )
}
export default Footer;