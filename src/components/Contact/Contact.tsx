import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
	const schema = z.object({
		name: z.string().min(3, "Name is required"),
		email: z.string().email("Invalid email address"),
		message: z.string().min(3, "Message is required"),
	});

	type FormData = z.infer<typeof schema>;

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FormData) => {
		axios
			.post("https://api.web3forms.com/submit", {
				access_key: "29806916-8143-4d12-a8d9-6663d3fa219c",
				...data,
			})
			.then((response) => {
				if (response.status === 200) {
					toast.success("Message sent successfully!");
					reset();
				} else {
					toast.error("Failed to send message.");
				}
			})
			.catch((error: AxiosError) => {
				console.error(error);
				toast.error("An error occurred while sending the message.");
			});
	};

	return (
		<div
			className='contact'
			id='contact'
		>
			<div className='contact-title'>
				<h1>Get in touch</h1>
				<img
					src={theme_pattern}
					alt=''
				/>
			</div>
			<div className='contact-section'>
				<div className='contact-left'>
					<h1>Let's talk</h1>
					<p>
						I'm currently avaliable to take on new projects, so feel free to
						send me a message about anything that you want me to work on. You
						can contact anytime.
					</p>
					<div className='contact-details'>
						<div className='contact-detail'>
							<img
								src={mail_icon}
								alt=''
							/>
							<p>deepak.karanam24@gmail.com</p>
						</div>
						<div className='contact-detail'>
							<img
								src={call_icon}
								alt=''
							/>
							<p>+1 (647)-848-0068</p>
						</div>
						<div className='contact-detail'>
							<img
								src={location_icon}
								alt=''
							/>
							<p>Toronto, CA</p>
						</div>
					</div>
				</div>
				<form
					className='contact-right'
					onSubmit={handleSubmit(onSubmit)}
					noValidate
				>
					<div>
						<label htmlFor='name'>Your Name</label>
						<input
							type='text'
							placeholder='Enter your name'
							{...register("name")}
							id='name'
						/>
						{errors.name && <p className='error'>{errors.name.message}</p>}
					</div>
					<div>
						<label htmlFor='email'>Your Email</label>
						<input
							type='email'
							placeholder='Enter your email'
							{...register("email")}
							id='email'
						/>
						{errors.email && <p className='error'>{errors.email.message}</p>}
					</div>
					<div>
						<label htmlFor='message'>Write your message</label>
						<textarea
							{...register("message")}
							rows={8}
							placeholder='Enter your message'
							id='message'
						></textarea>
						{errors.message && (
							<p className='error'>{errors.message.message}</p>
						)}
					</div>
					<button
						type='submit'
						className='contact-submit'
					>
						{isSubmitting ? "Sending" : "Submit now"}
					</button>
				</form>
			</div>
			<ToastContainer
				position='top-right'
				autoClose={4000}
			/>
		</div>
	);
};

export default Contact;
