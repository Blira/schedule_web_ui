import { Header } from './components/Header';
import { GlobalStyles, PageContainer } from './global/styles';
import { SelectedDateProvider } from './hooks/useSelectedDate';
import { SelectedTimeProvider } from './hooks/useSelectedTime';
import Routes from './routes';

function App() {
  return (
    <SelectedDateProvider>
      <SelectedTimeProvider>
        <GlobalStyles />
        <Header />
        <PageContainer>
          <Routes />
        </PageContainer>
      </SelectedTimeProvider>
    </SelectedDateProvider>
  );
}

export default App;
