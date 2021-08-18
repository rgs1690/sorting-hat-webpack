// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import { addStudentToArray, expelStudent } from './helpers/data/studentData';
import '../styles/main.scss';
import initialScreen from './components/initialScreen';
import renderToDOM from './helpers/renderToDom';
import domEvents from './helpers/domEvents';

const init = () => {
  initialScreen();
  domEvents();
};

init();
