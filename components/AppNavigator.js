import { createSwitchNavigator } from 'react-navigation';
import BreakdownScreen from "../screens/BreakdownScreen";
import ExpensesScreen from "../screens/ExpensesScreen";

export default createSwitchNavigator(
    {
        Home: BreakdownScreen,
        Expenses: ExpensesScreen
    },
    {
        initialRouteName: 'Home',
    }
);
