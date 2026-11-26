import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { mywork_data } from "../../constants";

const MyWork = () => {
	return (
		<div
			className='mywork'
			id='mywork'
		>
			<div className='mywork-title'>
				<h1>My Latest Work</h1>
				<img
					src={theme_pattern}
					alt=''
				/>
			</div>
			<div className='mywork-container'>
				{mywork_data.map((work, index) => {
					return (
						<a
							href={work.w_url}
							target='_blank'
							rel='noopener noreferrer'
							key={index}
						>
							<img
								src={work.w_img}
								alt=''
							/>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default MyWork;
