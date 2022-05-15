import { Title } from "./styled";

interface headerProps {
  title: string;
}

const Headline = ({ title }: headerProps) => <Title>{title}</Title>;

export default Headline;