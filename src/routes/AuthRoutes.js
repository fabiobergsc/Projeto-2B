import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgetPassword from './src/components/pages/ForgetPassword';
import Register from './src/components/pages/Register';
import LoginPage from './src/components/pages/LoginPage';

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return (
        <Stack.Navigator>
          <Stack.Screen name='LoginPage' component = {LoginPage} options={{headerShown: false}}/>
          <Stack.Screen name='Register' component = {Register} options={{headerShown: false}}/>
          <Stack.Screen name='ForgetPassword' component = {ForgetPassword} options={{headerShown: false}}/>
        </Stack.Navigator>

    );
}