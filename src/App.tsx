import { Header } from './components/Header';
import { GlobalStyles, PageContainer } from './global/styles';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <PageContainer>
        <Routes />
      </PageContainer>
    </>
  );
}

export default App;
