export const BUTTON_LOGOUT = 'Logout';
export const BUTTON_CREATE_COURSE = 'Create course';
export const BUTTON_UPDATE_COURSE = 'Update course';
export const BUTTON_TEXT = 'Search';
export const BUTTON_CREATE_AUTHOR = 'Create author';
export const BUTTON_ADD_AUTHOR = 'Add author';
export const BUTTON_DELETE_AUTHOR = 'Delete author';
export const BUTTON_ADD_COURSE = 'Add new course';
export const BUTTON_SHOW_COURSE = 'Show course';
export const BUTTON_CANCEL_COURSE = 'Cancel';
export const BUTTON_BACK_TO_COURSES = 'Back to courses';
export const BUTTON_LOGIN = 'Login';
export const BUTTON_REGISTER = 'Register';
export const ADMIN_NAME = 'Administrator';
export const ADMIN_ROLE = 'admin';
export const ADMIN_USER = 'admin@email.com';
export const USER_ROLE = 'user';

export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the
    1500s, when an unknown
    printer took a galley of type and scrambled it to make a type
    specimen book. It has survived
    not only five centuries, but also the leap into electronic
    typesetting, remaining essentially u
    nchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812bebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the
    1500s, when an unknown
    printer took a galley of type and scrambled it to make a type
    specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];
