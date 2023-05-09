import { ADMIN_NAME, ADMIN_ROLE } from '../../constants';
import { getUserDetails } from '../../services/authService';
import { userLoggedIn } from './actionCreators';

export const initializeUser = (token) => {
	return async (dispatch) => {
		try {
			const userResponse = await getUserDetails();
			let name =
				userResponse.role === ADMIN_ROLE ? ADMIN_NAME : userResponse.name;
			const userDetails = {
				isAuth: true,
				name,
				email: userResponse.email,
				token: token,
				role: userResponse.role,
			};
			dispatch(userLoggedIn(userDetails));
		} catch (error) {
			console.error(error.message);
		}
	};
};
