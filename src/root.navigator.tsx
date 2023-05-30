import {AuthNavigator} from "./navigators/auth.navigator";
import {AppNavigator} from "./navigators/app.navigator";
import {useActiveUser} from "./common/hooks/activeUser.hook";

export const RootNavigator = () => {
    const activeUser = useActiveUser();

    return (
        activeUser ? <AppNavigator /> : <AuthNavigator />
    )
}
