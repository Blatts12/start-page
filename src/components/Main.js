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
`;

const CategoryBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 10px;
`;

const CategoryEntry = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-weight: 200;
  font-size: 1.2vw;
  text-align: center;
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
          <CategoryEntry>MyAnimeList</CategoryEntry>
          <CategoryEntry>Anilist</CategoryEntry>
        </CategoryBody>
      </CategoryContainer>
      <CategoryContainer>
        <CategoryTitle>
          <BiCaretRight />
          programming
        </CategoryTitle>
        <CategoryBody>
          <CategoryEntry>something</CategoryEntry>
        </CategoryBody>
      </CategoryContainer>
    </MainContainer>
  );
};

export default Main;
