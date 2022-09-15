import { data } from "./appData";
import { GlobalStyles } from "./components/Global";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container";
import Card from "./components/Card";
import { ButtonPrimary } from "./components/styles/Button.styled";
import bookmark from "./assets/icon-bookmark.svg";
import Flex from "./components/Flex";

const theme = {
  colors: {
    primary: '#3CB3AB', // Cyan
    headings: '#000', // Black
    body: '#7A7A7A', // Grey
    bg: '#F2F2F2' // White
  }
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        {/* Card1 */}
        <Card
          padding="3.25rem 0 2.5rem"
          mb="1.5rem"
          textAlign="center">
          <Container>
            <h1>{data[1].card1.h1}</h1>
            <p>{data[1].card1.p}</p>
            <Flex justify="space-between">
              <ButtonPrimary>{data[1].card1.btn}</ButtonPrimary>
              <img src={bookmark} alt="" />
            </Flex>
          </Container>
        </Card>

        {/* Card2 */}
        <Card
          padding="2.5rem 0"
          mb="4.75rem"
          textAlign="left">
          <Container>
            <h2>{data[3].card3.h2}</h2>
          </Container>
        </Card>
      </>
    </ThemeProvider>
  );
}