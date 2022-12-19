import { Container, Navbar } from "react-bootstrap";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="#home" className="text-light">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
