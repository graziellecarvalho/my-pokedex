// Global Styles
import 'styles/scss/index.scss';

// Styled Components Theme
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

function SiteApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default SiteApp;
