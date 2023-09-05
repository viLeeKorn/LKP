import { useEffect, useRef, useState } from 'react';
import { Store } from 'redux';

import { createStore } from 'src/app/data/store/root.store';

export const useStore = (): Store | undefined => {
    const [, setIsReady] = useState(false);
    const store = useRef<Store>();

    useEffect(() => {
        (async () => {
            store.current = await createStore();

            setIsReady(true);
        })();
    }, []);

    return store.current;
};
