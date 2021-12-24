import { createStackNavigator } from '@react-navigation/stack';
import {Home} from './screens/Home'
import {Note} from './screens/Note'
import {Challenges} from './screens/Challenge'
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Note" component={Note} />
      <Stack.Screen name="Challenges" component={Challenges} />
    </Stack.Navigator>
  );
}