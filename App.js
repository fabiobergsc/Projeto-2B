import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './src/routes/AppRoutes';


export default function App() {

    return (
      <NavigationContainer>
        <AuthProvider>
        <Routes />
        </AuthProvider>
      </NavigationContainer>
    );



}


