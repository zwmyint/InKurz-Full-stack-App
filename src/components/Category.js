import React from "react";
import styled from "styled-components/macro";
import Title from "./common/Title";

// import sdf from "../../public/"

export default function Category({ firstPart, secondPart }) {
  function CategoryGrid() {
    return (
      <GridContainerStyed>
        <CategoryStyled>
          <a href="/business">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571306854/NewsDB/business_oaplid.jpg"
              alt="business"
            />
            <span>Business</span>
          </a>
        </CategoryStyled>
        <CategoryStyled>
          <a href="/entertainment">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571315088/NewsDB/entertainment_a7z8i8.jpg"
              alt="entertainment"
            />
            <span>Entertainment</span>
          </a>
        </CategoryStyled>

        <CategoryStyled>
          <a href="/health">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571315085/NewsDB/health_g3uajo.jpg"
              alt="health"
            />
            <span>Health</span>
          </a>
        </CategoryStyled>
        <CategoryStyled>
          <a href="/science">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571315085/NewsDB/science_lsksmd.jpg"
              alt="science"
            />
            <span>Science</span>
          </a>
        </CategoryStyled>
        <CategoryStyled>
          <a href="/technology">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571315084/NewsDB/technology_qavndj.jpg"
              alt="technology"
            />
            <span>Technology</span>
          </a>
        </CategoryStyled>

        <CategoryStyled>
          <a href="/sports">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571315083/NewsDB/sports_r0iw7q.jpg"
              alt="sports"
            />
            <span>Sports</span>
          </a>
        </CategoryStyled>
      </GridContainerStyed>
    );
  }

  function CountryGrid() {
    return (
      <GridContainerStyed>
        <CategoryStyled>
          <a href="/us">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571322188/NewsDB/us_ypvofb.jpg"
              alt="us"
            />
            <span>United States</span>
          </a>
        </CategoryStyled>
        <CategoryStyled>
          <a href="/uk">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571322192/NewsDB/uk_ai1dsh.jpg"
              alt="uk"
            />
            <span>United Kingdom</span>
          </a>
        </CategoryStyled>

        <CategoryStyled>
          <a href="/france">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571322196/NewsDB/france_nr55wf.jpg"
              alt="france"
            />
            <span>France</span>
          </a>
        </CategoryStyled>
        <CategoryStyled>
          <a href="/india">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571322195/NewsDB/india_u8kkid.jpg"
              alt="india"
            />
            <span>India</span>
          </a>
        </CategoryStyled>
        <CategoryStyled>
          <a href="/australia">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571322191/NewsDB/australia_xkbkhp.jpg"
              alt="australia"
            />
            <span>Australia</span>
          </a>
        </CategoryStyled>

        <CategoryStyled>
          <a href="/italy">
            <img
              src="https://res.cloudinary.com/dwagc225r/image/upload/v1571322190/NewsDB/italy_golpzq.jpg"
              alt="italy"
            />
            <span>Italy</span>
          </a>
        </CategoryStyled>
      </GridContainerStyed>
    );
  }
  return (
    <div>
      <Title firstPart={firstPart} secondPart={secondPart} />
      <StyledH2>Select by topic</StyledH2>
      <CategoryGrid />
      <StyledH2>Select by country:</StyledH2>
      <CountryGrid />
    </div>
  );
}

const GridContainerStyed = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px 80px 80px;
  grid-row-gap: 120px;

  img {
    height: 120px;
    width: 100px;
    border-radius: 0.4rem;
    box-shadow: 0 5px 10px gray;
  }
`;

const CategoryStyled = styled.div`
  text-align: center;
  a {
    text-decoration: none;
    font-style: italic;
    color: brown;
    font-size: 1.1rem;
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
`;