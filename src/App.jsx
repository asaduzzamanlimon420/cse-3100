import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import ContactUS from './views/ContactUs';
import AboutUs from './views/AboutUS';

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/contact-us'} element={<ContactUS />} />
        <Route path={'/about-us'} element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
