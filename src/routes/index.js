import { createNativeStackNavigator } from '@react-navigation/native-stack'

import welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'


const Stack = createNativeStackNavigator();

export default function Routes(){
 return(
    <Stack.Navigator>
    <Stack.Screen 
        name ="welcome"
        component={welcome} 
        options ={{ headerShown:false }}
    />
    <Stack.Screen 
        name ="SignIn"
        component={SignIn} 
        options ={{ headerShown:false }}
    />
    </Stack.Navigator>

 )
}