import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`query TestimonialsData {
    allFile(
      filter: {
        ext: {
          regex: "/(jpg)|(png)|(jpeg)/"
        }, 
        name: {
          in: ["testimonials-1","testimonials-2"]
          }
      }) {
      edges {
        node {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `;


const Testimonials = () => {
    const data = useStaticQuery(query);

    return (
        <TestimonialsContainer>
            <TopLine>
                Testiminial
            </TopLine>
            <Description>
                What people are saying
            </Description>
            <ContentWraper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`color: #3fffa8; font-size: 2rem; margin-bottom: 1rem`} />
                        <h3>Sean Michaels</h3>
                        <p>Sharp only supports certain image formats (see the Parsing algorithm section above) and hence throws a warning when you e.g. use a .gif in an ImageSharp query. You’ll need to use publicURL instead. With this option you can disable the warning behavior.</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb css={`color: #f9b19b; font-size: 2rem; margin-bottom: 1rem`}/>
                        <h3>Sean Lisa</h3>
                        <p>Sharp only supports certain image formats (see the Parsing algorithm section above) and hence throws a warning when you e.g. use a .gif in an ImageSharp query. You’ll need to use publicURL instead. With this option you can disable the warning behavior.</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((edge, index)=>(
                    <Image key={index} fluid={edge.node.childImageSharp.fluid} />
                    ) )}
                </ColumnTwo>
            </ContentWraper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000; 
    padding: 5rem calc((100vw - 1600px)/2);
    height: 100%;

`;
const TopLine = styled.div`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`;
const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`;
const ContentWraper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 650px){
        padding-left: 0 2rem;
        grid-template-columns: 1fr;
    }
`;
const ColumnOne = styled.div`
    display: grid;
    grid-grid-template-rows: 1fr 1fr;
`;
const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    h3{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }
    p{
        color: #3b3b3b;
    }
`;
const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;
    @media screen and (max-width: 650px){
        grid-template-columns: 1fr;

    }
`;
const Image = styled(Img)`
    border-radius: 10px;
    height: 100%;
`