import React, {
  useCallback,
} from 'react';
import { Pages } from '@stepform/ui';
import { facade } from '@stepform/store';
import { useNavigate, useLocation } from 'react-router-dom';

function Home() {
  const paymentsFacade = facade.productsFacade();

  const history = useNavigate();
  const location = useLocation();
  const historyFacade = useCallback(() => {
    return {
      goTo: (location) => history(location),
      getPathname: location.pathname || '',
    };
  }, [history, location.pathname]);

  return <Pages.Home facade={paymentsFacade} history={historyFacade()} />;
}

export default Home;
