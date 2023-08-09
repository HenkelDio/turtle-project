import { styled } from "styled-components";

export const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 40px);

	position: relative;

	.bg-layout{
		width: 100%;
		height: 50vh;
		
		
		position: absolute;
		top: -20px;
		z-index: 0;

		background-color: ${({ theme }) => theme.colors.green.main};

 	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;

	position: relative;

	margin: 0 auto;
	width: 500px;
	height: 400px;

	border-radius: 10px;
	box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

	background-color: #ffff;
`

export const BackIcon = styled.div`
	position: absolute;
	top: 30px;
	left: 30px;
	font-size: 2rem;
	cursor: pointer;
	animation: login-form 0.3s ease;

	@keyframes login-form {
    from {
        opacity: 0;
        left: 5px;
    }
    to {
        opacity: 1;
        left: 30px;
    }
}
`;

export const Button = styled.button`
	width: 350px;
	height: 50px;
	margin-top: 25px;
	
	border: none;
	background-color: ${({ theme }) => theme.colors.green.main};
	border-radius: 10px;
	
	font-size: 1rem;
	font-weight: 700;
	color: #ffff;
	cursor: pointer;

	position: relative;



	&:hover {
		background-color: ${({ theme }) => theme.colors.green.light};
	}

	&:focus {
		background-color: ${({ theme }) => theme.colors.green.dark};
	}

	span {
		position: absolute;
		right: 10px;
		top: 13px;
		font-size: 1.5rem;
	}


`

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;

	label {
		font-weight: 400;
	}

	input {
		width: 350px;
		background-color: #f8f0f2;
	}

	h1 {
		font-weight: 500;
	}

	p {
		margin-top: 10px;
		margin-bottom: 30px;
	}

	.animate-form{
		animation: animation 0.5s ease;
		position: relative;

		@keyframes animation {
			from {
					opacity: 0;
					left: 10px;
			}
			to {
					opacity: 1;
					left: 0;
			}
}
	}


`;

export const Loader = styled.div`
	margin-top: 30px;

	.loader {
    width: 48px;
    height: 48px;
    border: 5px solid ${({ theme }) => theme.colors.green.main};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`