import React from 'react';
import { Provider as PaperProvider} from "react-native-paper";
import { Provider as StoreProvider } from 'react-redux';
import {persistor, store} from "./src/store";
import { RootNavigator } from "./src/root.navigator";
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
      <StoreProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <PaperProvider>
                  <RootNavigator />
              </PaperProvider>
          </PersistGate>

      </StoreProvider>
  )
}

export default App;
