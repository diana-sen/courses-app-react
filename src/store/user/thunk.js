import { getUserDetails } from '../../services/authService';
import { userLoggedIn } from './actionCreators';

export const initializeUser = (token) => {
	return async (dispatch) => {
		try {
			const userResponse = await getUserDetails();
			const userDetails = {
				isAuth: true,
				name: userResponse.name,
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
