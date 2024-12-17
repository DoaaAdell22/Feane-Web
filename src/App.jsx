import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './routes/Root';
import Home from './routes/Home';

function App() {

  const routes = createBrowserRouter([
    {
      path : "/",
      element : <Root />,
      children : [
        {
          index : true , element : <Home />
        },

      ]
}])


  return (
    
    <div  className='main'>
    <RouterProvider router={routes} />
    </div>

  );
}







export default App;
