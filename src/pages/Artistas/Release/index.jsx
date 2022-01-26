import { useParams } from "react-router-dom";
import { BannerArtists } from "../../../components/Banner/ReleaseArtistas";
import {
  Container,
  TextBiography,
  TitleBiography,
  WrapperBiography,
  AsideArtists,
  WrapperDate,
  LinkEvents,
  DownloadMusic,
  MusicsPlataform,
} from "./styles";

import { FaFileDownload } from "react-icons/fa";
import { CardMusic } from "../../../components/Artistas/CardMusic";

export function Release() {
  const { id } = useParams();
  return (
    <>
      <BannerArtists />

      <Container>
        <WrapperBiography>
          <TitleBiography>George Arrunáteghi</TitleBiography>
          <TextBiography>
            Voz privilegiada, intimidade com as palavras em cinco idiomas e
            versatilidade no trato e na confluência dos diversos estilos
            musicais, clássicos e populares: são estes alguns dos atributos
            naturais do cantor e compositor George Arrunáteghi. Alia-se a isso
            uma sólida formação musical, iniciada na infância com lições de
            piano e continuada na adolescência com a descoberta do canto.
            Qualidades que estão em evidência em seu discos “Let’s Fall in Love”
            (2015) e “Tropical Romance”, lançado em 2019.
          </TextBiography>
        </WrapperBiography>

        <AsideArtists>
          <WrapperDate>
            <h1>Eventos</h1>
            <LinkEvents>📆 11/Nov - Show </LinkEvents>
            <LinkEvents>📆 12/Nov - Live </LinkEvents>

            <DownloadMusic>💾 Baixar Música</DownloadMusic>
          </WrapperDate>
        </AsideArtists>
      </Container>

      <MusicsPlataform>
        <CardMusic />
        <CardMusic />
      </MusicsPlataform>
    </>
  );
}
