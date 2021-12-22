import imgBanner from "../../assets/BannerServices.jpg";
import { FaMusic } from "react-icons/fa";
import { ContentService, WrapperServices } from "./styles";
import { InfoCard } from "../../components/Servicos";
import { Banner } from "../../components/Banner/Home";

export function Servicos() {
  return (
    <WrapperServices>
      <Banner bgImage={imgBanner} icon={<FaMusic />} title="Serviços" />
      <ContentService>
        <InfoCard
          direction="row"
          imageInfo={imgBanner}
          titleInfo="01/ Produção Musical"
          contentInfo="A Naza Music atua em todas as etapas da produção musical, desde o registro sonoro até a masterização. No nosso quadro de colaboradores e parceiros estão profissionais de alto nível técnico e artístico, entre arranjadores, produtores, músicos, engenheiros e técnicos de som, além de um relacionamento dinâmico com estúdios de gravação. Com a Naza, você pode realizar todo o processo de gravação, da escolha do estúdio ao acabamento final do produto (CD/DVD ou outra mídia digital)."
        />
        <InfoCard
          direction="row-reverse"
          imageInfo={imgBanner}
          titleInfo="01/ Produção Musical"
          contentInfo="A Naza Music atua em todas as etapas da produção musical, desde o registro sonoro até a masterização. No nosso quadro de colaboradores e parceiros estão profissionais de alto nível técnico e artístico, entre arranjadores, produtores, músicos, engenheiros e técnicos de som, além de um relacionamento dinâmico com estúdios de gravação. Com a Naza, você pode realizar todo o processo de gravação, da escolha do estúdio ao acabamento final do produto (CD/DVD ou outra mídia digital)."
        />
        <InfoCard
          direction="row"
          imageInfo={imgBanner}
          titleInfo="01/ Produção Musical"
          contentInfo="A Naza Music atua em todas as etapas da produção musical, desde o registro sonoro até a masterização. No nosso quadro de colaboradores e parceiros estão profissionais de alto nível técnico e artístico, entre arranjadores, produtores, músicos, engenheiros e técnicos de som, além de um relacionamento dinâmico com estúdios de gravação. Com a Naza, você pode realizar todo o processo de gravação, da escolha do estúdio ao acabamento final do produto (CD/DVD ou outra mídia digital)."
        />
        <InfoCard
          direction="row-reverse"
          imageInfo={imgBanner}
          titleInfo="01/ Produção Musical"
          contentInfo="A Naza Music atua em todas as etapas da produção musical, desde o registro sonoro até a masterização. No nosso quadro de colaboradores e parceiros estão profissionais de alto nível técnico e artístico, entre arranjadores, produtores, músicos, engenheiros e técnicos de som, além de um relacionamento dinâmico com estúdios de gravação. Com a Naza, você pode realizar todo o processo de gravação, da escolha do estúdio ao acabamento final do produto (CD/DVD ou outra mídia digital)."
        />
      </ContentService>
    </WrapperServices>
  );
}
