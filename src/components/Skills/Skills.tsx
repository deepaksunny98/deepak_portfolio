// src/components/Skills/Skills.jsx
import { SkillsInfo } from "../../constants";
import theme_pattern from "../../assets/theme_pattern.svg";
import Tilt from "react-parallax-tilt";
import "./Skills.css"; // Import the CSS file

const Skills = () => (
	<section
		className='skills'
		id='skills'
	>
		<div className='skills-title'>
			<h1>Technical Skills</h1>
			<img
				src={theme_pattern}
				alt=''
			/>
		</div>

		<div className='skills-container'>
			{SkillsInfo.map((category) => (
				<div
					key={category.title}
					className='skills-category'
				>
					<h3>{category.title}</h3>
					<Tilt
						tiltMaxAngleX={20}
						tiltMaxAngleY={20}
						perspective={2000}
						scale={1.05}
						transitionSpeed={1000}
					>
						<div className='skills-grid'>
							{category.skills.map((skill) => (
								<div
									key={skill.name}
									className='skill-item'
								>
									<img
										src={skill.logo}
										alt={`${skill.name} logo`}
									/>
									<span>{skill.name}</span>
								</div>
							))}
						</div>
					</Tilt>
				</div>
			))}
		</div>
	</section>
);

export default Skills;
