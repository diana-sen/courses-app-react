import { addAllCourses, addCourse } from '../actionCreators';
import { coursesReducer } from '../reducer';

test('reducer should return the initial state', () => {
	expect(coursesReducer(undefined, { type: undefined })).toEqual([]);
});

test('reducer should handle SAVE_COURSE and returns new state.', () => {
	const previousState = [];

	const newCourse = {
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
	};

	expect(coursesReducer(previousState, addCourse(newCourse))).toEqual([
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
	]);
});

test('reducer should handle GET_COURSES and returns new state', () => {
	const previousState = [
		{
			id: 'previousId',
			title: 'c++',
			description: 'C++ course',
			creationDate: '10/10/2020',
			duration: 60,
			authors: ['authod-id'],
		},
	];

	const getAllCourses = [
		{
			id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
			title: 'JavaScript',
			description: `Lorem Ipsum is`,
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
			description: `Lorem Ipsum is simply dummy text of the printing`,
			creationDate: '10/11/2020',
			duration: 210,
			authors: [
				'df32994e-b23d-497c-9e4d-84e4dc02882f',
				'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			],
		},
	];

	expect(coursesReducer(previousState, addAllCourses(getAllCourses))).toEqual([
		{
			id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
			title: 'JavaScript',
			description: `Lorem Ipsum is`,
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
			description: `Lorem Ipsum is simply dummy text of the printing`,
			creationDate: '10/11/2020',
			duration: 210,
			authors: [
				'df32994e-b23d-497c-9e4d-84e4dc02882f',
				'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			],
		},
	]);
});
