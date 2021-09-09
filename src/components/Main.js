import React from "react";
import styled from "styled-components";
import { BiCaretRight } from "react-icons/bi";

const MainContainer = styled.div`
  padding: 1.5vw;
  grid-area: main;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 25px;
`;

const CategoryContainer = styled.article`
  margin-bottom: 30px;

  @media (max-width: 992px) {
    margin-bottom: 20px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5vw;
  margin-bottom: 15px;

  &::after {
    content: "_";
  }

  & > svg {
    vertical-align: middle;
  }

  @media (max-width: 992px) {
    font-size: clamp(0.75em, 1.85vw, 2em);
    margin-bottom: 5px;
  }
`;

const CategoryBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryEntry = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-weight: 200;
  font-size: 1.2vw;
  text-align: center;
  margin-bottom: 5px;
  flex: 1 1 33%;

  @media (max-width: 992px) {
    font-size: clamp(0.6em, 1.5vw, 2em);
    flex: 1 1 50%;
  }

  @media (max-width: 576px) {
    flex: 1 1 100%;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <CategoryContainer>
        <CategoryTitle>
          <BiCaretRight />
          socials
        </CategoryTitle>
        <CategoryBody>
          <CategoryEntry>Youtube</CategoryEntry>
          <CategoryEntry>Youtube Feed</CategoryEntry>
          <CategoryEntry>Reddit</CategoryEntry>
          <CategoryEntry>Twitch</CategoryEntry>
          <CategoryEntry>Facebook</CategoryEntry>
          <CategoryEntry>Twitter</CategoryEntry>
        </CategoryBody>
      </CategoryContainer>
      <CategoryContainer>
        <CategoryTitle>
          <BiCaretRight />
          linux
        </CategoryTitle>
        <CategoryBody>
          <CategoryEntry>GamingOnLinux</CategoryEntry>
          <CategoryEntry>LinuxUprising</CategoryEntry>
        </CategoryBody>
      </CategoryContainer>
      <CategoryContainer>
        <CategoryTitle>
          <BiCaretRight />
          minecraft
        </CategoryTitle>
        <CategoryBody>
          <CategoryEntry>CurseForge</CategoryEntry>
          <CategoryEntry>Modrinth</CategoryEntry>
          <CategoryEntry>r/FeedTheBeast</CategoryEntry>
          <CategoryEntry>r/FeedTheMemes</CategoryEntry>
        </CategoryBody>
      </CategoryContainer>
      <CategoryContainer>
        <CategoryTitle>
          <BiCaretRight />
          anime/manga
        </CategoryTitle>
        <CategoryBody>
          <CategoryEntry>Anime News</CategoryEntry>
          <CategoryEntry>MyAnimeList</CategoryEntry>
          <CategoryEntry>AniList</CategoryEntry>
        </CategoryBody>
      </CategoryContainer>
      <CategoryContainer>
        <CategoryTitle>
          <BiCaretRight />
          programming
        </CategoryTitle>
        <CategoryBody>
          <CategoryEntry>GitHub</CategoryEntry>
          <CategoryEntry>GitLab</CategoryEntry>
        </CategoryBody>
      </CategoryContainer>
    </MainContainer>
  );
};

export default Main;
