import { useStaticQuery, graphql } from 'gatsby';
import React from 'react'
import {ImLocation} from 'react-icons/im'
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Button } from './Button';

export const query = graphql`query TripsData {
    allTripsJson {
      edges {
        node {
          name
          alt
          button
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  `
const Trips = ({heading}) => {
    const data = useStaticQuery(query);
    function getTrips(data){
        const tripsArray = [];
        data.allTripsJson.edges.forEach((edge, index) => {
            tripsArray.push(
                <ProductCard key={index}>
                    <ProductImg src={edge.node.img.childImageSharp.fluid.src}
                        fluid={edge.node.img.childImageSharp.fluid}
                        alt= {edge.node.img.alt}
                     />
                     <ProductInfo>
                        <TextWrapt>
                            <ImLocation />
                            <ProductTitle>
                                {edge.node.name}
                            </ProductTitle>
                        </TextWrapt>
                        <Button
                            to="/trips"
                            primary="true"
                            round="true" css={`position: absolute; top: 420px; font-size: 14px`}
                         >{edge.node.button}</Button>
                    </ProductInfo>
                </ProductCard>                
            );
        });
        return tripsArray;
    }
    return (
        <ProductsContainer>
            <ProductsHeadding>
                {heading}
            </ProductsHeadding>
            <ProductsWraper>
                {getTrips(data)}
            </ProductsWraper>
        </ProductsContainer>
    )
}

export default Trips


const ProductsContainer = styled.div`
  min-height: 100vh;  
  padding: 5rem  calc((100vw - 1600px) /2);
  color: #fff;

`;
const ProductsHeadding = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    /* margin-top: 3rem; */
    color: #000;
`;
const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0ms.2s ease;
`;
const ProductsWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;
  @media screen and (max-width: 1600px){
      grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 650px){
      grid-template-columns: 1fr;
  }
`;
const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4 cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover{
      filter: brightness(100%);
  }
`;
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;
    @media screen and (max-width: 250px){
        padding: 0 1rem;
    }
`;
const TextWrapt = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`;

const ProductTitle = styled.div`
  
`;