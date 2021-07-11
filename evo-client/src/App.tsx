import './App.css';
import { IntlProvider } from 'react-intl';
import * as messagesInEnglish from './lang/en-US.json';
import { Game } from './models/game';
import { Player } from './models/player';

function App() {
  return (
    <IntlProvider messages={messagesInEnglish} locale="en" defaultLocale="en">
      <div className="App">
      </div>
    </IntlProvider>
  );
}

export default App;
