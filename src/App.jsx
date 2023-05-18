import { Router } from '@solidjs/router';
import DopieApp from './DopieApp/DopieApp';
import { HopeProvider } from '@hope-ui/solid';
import ModalProvider from './providers/ModalProvider';
import CurrentPredictionProvider from './providers/CurrentPredictionProvider';

function App() {
  return (
    <HopeProvider>
      <ModalProvider>
        <CurrentPredictionProvider>
          <Router>
            <DopieApp />
          </Router>
        </CurrentPredictionProvider>
      </ModalProvider>
    </HopeProvider>
  );
}

export default App;
