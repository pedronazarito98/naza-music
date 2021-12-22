import ImgCard from "../../assets/HansLandim-Banner.jpg";

import { ContainerServicos } from "./style";
import { CardPagArtistas } from "../../components/Artistas/CardPagArtistas";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
export function Artistas() {
  return (
    <>
      <ContainerServicos>
        <CardPagArtistas
          linkUrl="release"
          imageArtista={ImgCard}
          nomeArtista="Hans Landim"
          secondName="Artista"
        />

        {/* <CardPagArtistas
          linkUrl="George"
          imageArtista={ImgCard}
          nomeArtista="Hans Landim"
          secondName="Artista"
        />

        <CardPagArtistas
          imageArtista={ImgCard}
          nomeArtista="Hans Landim"
          secondName="Artista"
        />
        <CardPagArtistas
          imageArtista={ImgCard}
          nomeArtista="Hans Landim"
          secondName="Artista"
        />

        <CardPagArtistas
          imageArtista={ImgCard}
          nomeArtista="Hans Landim"
          secondName="Artista"
        />

        <CardPagArtistas
          imageArtista={ImgCard}
          nomeArtista="Hans Landim"
          secondName="Artista"
        />

        <CardPagArtistas
          imageArtista={ImgCard}
          nomeArtista="Hans Landim"
          secondName="Artista"
        />

        <CardPagArtistas
          imageArtista={ImgCard}
          nomeArtista="Hans Landim"
          secondName="Artista"
        /> */}
      </ContainerServicos>
    </>
  );
}
