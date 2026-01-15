import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/variables.scss';
// import './styles/typography.css';
// import './styles/base.css';
// import './styles/buttons.css';
// import './styles/sections.css';

import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import About from './components/Sections/About/About';
import Packages from './components/Sections/Packages/Packages';
import Ask from './components/Sections/Ask/Ask';
import What from './components/Sections/What/What';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Main />
			<About />
			<What />
      <Packages />
      <Ask />
      <Footer />
    </div>
  );
}

export default App;