import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './../actions/jobSeekerAPIAction';
import {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Links,
	LinkStyled,
	ButtonStyled,
	PurpleText,
	Highlighted,
	HoverText,
	EditDisplayFlex,
	DescriptionStyled,
	StyledDashboardHeading,
	DashboardButton,
	DashboardCenter,
	EditButtonDisplayFlex,
	EditScreenText
} from '../../styledcomp/Home';

const JobSeekerDashBoard = props => {
	const state = useSelector(state => state.companyLoginReducer);
	const id = localStorage.getItem('jobseekerid');

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData(id));

		// axiosWithAuthJobSeeker()
		// 	.get(`/matches/matchseeker/${id}`)
		// 	.then(res => {
		// 		console.log(res.data);
		// 		console.log(res.data[2].job_position);
		// 		setJobs(res.data[2]);
		// 		console.log('jobs', jobs);
		// 	})

		// .catch(err => console.log(err));
	}, []);

	return (
		<HomeStyled>
			<StyledHeading>Dashboard</StyledHeading>
			<Form className='jobSeekerDashboard'>
				{/* <Input name='seekers_location' placeholder='Location' />
				<Input name='job_industry' placeholder='Industry' />
				<Input name='seekers_salary' placeholder='Salary' /> */}
				{
					//to jobseekers swipe
				}
				<DashboardButton
					type='submit'
					onClick={() => props.history.push('/jobseeker-swipe')}
				>
					Search by Occupation
				</DashboardButton>{' '}
				{
					//to jobseekers matches
				}
				{/* <DashboardButton
					onClick={() => props.history.push('/jobseeker-matches')}
				>
					{
						//to jobseekers swipe
					}
					{
						//to jobseekers matches
					}
					Matches
				</DashboardButton> */}
			</Form>
		</HomeStyled>
	);
};

export default JobSeekerDashBoard;
