import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const WrapperBiography = styled.section`
  max-width: 600px;
  padding: 20px;
`;

export const TitleBiography = styled.h1`
  font-size: 2rem;
`;

export const TextBiography = styled.p`
  font-size: 1.25rem;
`;

export const AsideArtists = styled.aside`
  max-width: 600px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const WrapperDate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const LinkEvents = styled.a`
  color: var(--red-300);
  font-size: 1.2rem;
  cursor: pointer;

  transform: all 0.2s;
  &:hover {
    color: var(--black);
  }
`;

export const DownloadMusic = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px 0;
  cursor: pointer;

  font-size: 1.25rem;
  color: blue;
`;

export const MusicsPlataform = styled.footer`
  position: relative;
  width: 100%;
  /* max-width: 1100px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
`;
