import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDatailsPage from './src/components/pages/MovieDatailsPage';
import MoviesPage from './src/components/pages/MoviesPage';

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return (
        <StackActions.Navigator>
            <StackActions.Screen name='MoviesPage' component={MoviesPage}
            options={{headerShown: false}} />
            <Stack.Screen name='MovieDatailsPage' component={MovieDatailsPage}
            options={{headerShown: false}}/>

        </StackActions.Navigator>

    )
}










