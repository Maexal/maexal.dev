import { createGlobalStyle } from 'styled-components';

export const ToastifyStyles = createGlobalStyle`
	.Toastify__toast-container {
	}

	.Toastify__toast-container--top-left {
	}
	.Toastify__toast-container--top-center {
	}
	.Toastify__toast-container--top-right {
	}
	.Toastify__toast-container--bottom-left {
	}
	.Toastify__toast-container--bottom-center {
	}
	.Toastify__toast-container--bottom-right {
	}

	.Toastify__toast {
		border-radius: 0.25rem;
		padding: 1rem;
	}
	.Toastify__toast--rtl {
	}
	.Toastify__toast--dark {
	}
	.Toastify__toast--default {
	}
	.Toastify__toast--info {
		background-color: ${({ theme }) => theme.colors.blue};
	}
	.Toastify__toast--success {
		background-color: ${({ theme }) => theme.colors.green};
	}
	.Toastify__toast--warning {
	}
	.Toastify__toast--error {
		background-color: ${({ theme }) => theme.colors.red};
	}
	.Toastify__toast-body {
		margin-right: 1rem;
		margin-top: -0.25rem;
	}

	.Toastify__close-button {
	}
	.Toastify__close-button--default {
	}
	.Toastify__close-button > svg {
	}
	.Toastify__close-button:hover,
	.Toastify__close-button:focus {
	}

	.Toastify__progress-bar {
		background-color: ${({ theme }) => theme.colors.toasterProgress};
	}
	.Toastify__progress-bar--animated {
	}
	.Toastify__progress-bar--controlled {
	}
	.Toastify__progress-bar--rtl {
	}
	.Toastify__progress-bar--default {
	}
	.Toastify__progress-bar--dark {
	}
`;

export default ToastifyStyles;
