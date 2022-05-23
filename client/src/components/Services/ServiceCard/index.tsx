import { IconType } from 'react-icons/lib';
import { useTheme } from '@emotion/react';
import {
  CardSubtitle,
  CardTitle,
  IconWrapper,
  Info,
  ServiceCardContainer,
} from './styles';

type ServiceCardProps = {
  color: string;
  title: string;
  subtitle: string;
  Icon: IconType;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  color,
  title,
  subtitle,
  Icon,
}) => {
  const theme = useTheme();
  return (
    <ServiceCardContainer>
      <IconWrapper bgColor={color}>
        <Icon size={21} color={theme.color.white} />
      </IconWrapper>

      <Info>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </Info>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
