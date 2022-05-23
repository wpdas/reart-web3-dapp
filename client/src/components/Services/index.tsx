import { BiSearchAlt } from 'react-icons/bi';
import { BsShieldFillCheck } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';
import { RiHeart2Fill } from 'react-icons/ri';
import { useTheme } from '@emotion/react';
import ServiceCard from './ServiceCard';
import { Container, Left, Right, Content, TitleWrapper, Title } from './styles';

const Services = () => {
  return (
    <Container>
      <Content>
        <Left>
          <TitleWrapper>
            <Title>
              Services that we <br /> continue to improve
            </Title>
          </TitleWrapper>
        </Left>

        <Right>
          <ServiceCard
            color="#2952e3"
            title="Security Guaranteed"
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products."
            Icon={BsShieldFillCheck}
          />

          <ServiceCard
            color="#8945f8"
            title="Best exchange rates"
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products."
            Icon={BiSearchAlt}
          />

          <ServiceCard
            color="#f84550"
            title="Fastest transactions"
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products."
            Icon={RiHeart2Fill}
          />
        </Right>
      </Content>
    </Container>
  );
};

export default Services;
