
import { useSelector } from 'react-redux';

function userState() {

    const { user } = useSelector(state => state.userReducer);
    return user;
}
export default userState;

