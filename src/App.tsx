import { Header } from './components/Header';
import { GlobalStyles, PageContainer } from './global/styles';
import { SelectedDateProvider } from './hooks/useSelectedDate';
import Routes from './routes';

function App() {
  return (
    <SelectedDateProvider>
      <GlobalStyles />
      <Header />
      <PageContainer>
        <Routes />
      </PageContainer>
    </SelectedDateProvider>
  );
}

export default App;
