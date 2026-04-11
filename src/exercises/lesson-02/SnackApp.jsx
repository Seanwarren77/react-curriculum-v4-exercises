// Import the snack components
import SnackHeader from './SnackHeader.jsx';
import SnackList from './SnackList.jsx';
import SnackFooter from './SnackFooter.jsx';

// Main Snack App component
function SnackApp() {
  return (
    <div>
      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}

export default SnackApp;
