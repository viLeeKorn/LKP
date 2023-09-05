import React from 'react';
import { Provider } from 'react-redux';

import { Navigation } from 'src/features/navigation/navigation.component';
import { useStore } from 'src/app/utils/hooks/use-store.utils';

export const App: React.FC = () => {
    const store = useStore();

    if (!store) {
        return null;
    }

    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
};
