'use client';

import { store } from './store';
// import { wrapper } from './store';
import { Provider } from 'react-redux';


export default function CustomProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}

// export default wrapper.withRedux(CustomProvider)