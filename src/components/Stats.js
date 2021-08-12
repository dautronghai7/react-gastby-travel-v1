import React from 'react'
import styled from 'styled-components'
import {StatsData} from '../data/StatsData'

const Stats = () => {
     return (
        <StatsContainer>
            <Heading>Why Choose Us?</Heading>
            <Wrapper>
                {
                    StatsData.map((stat, index)=>{
                       return (
                            <StatsBox key={index} >
                                <Icon key={'ic' + index}> {stat.icon}</Icon>
                                <Title key={'t' + index}>{stat.title}</Title>
                                <Description key={'desc' + index}>{stat.desc}</Description>
                            </StatsBox>               
                        )
                    })
                }
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1600px)/2)
`;
const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 4rem;
    padding: 0 2rem;
`;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    @media screen and (max-width: 650px){
        grid-template-columns: 1fr;
    }
`;
const StatsBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`;
const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 3rem;
`;
const Title = styled.div`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;
`;
const Description = styled.p`
`;