import { createGlobalStyle } from "styled-components";

export const SwalStyles = createGlobalStyle`
	.swal2-container {
		.swal2-popup,
		.swal2-modal {
			border-radius: 0.5rem;
			background-color: ${({ theme }) => theme.colors.gray[100]};
			color: ${({ theme }) => theme.colors.gray[900]};

			.swal2-header {
				.swal2-icon {
					width: 2.5rem;
					height: 2.5rem;
					margin-bottom: 1rem;
					margin-left: auto;
					margin-right: auto;

					.swal2-icon-content {
						font-size: 2.25rem;
						line-height: 2.5rem;
						font-weight: 800;
					}
				}
			}

			.swal2-actions {
				button {
					border-radius: 0.25rem;
					padding-right: 0.75rem;
					padding-left: 0.75rem;
					padding-top: 0.25rem;
					padding-bottom: 0.25rem;
				}

				.swal2-confirm {
					background-color: ${({ theme }) => theme.colors.green};
				}
			}

			.swal2-timer-progress-bar-container {
				.swal2-timer-progress-bar {
					background-color: ${({ theme }) => theme.colors.swalProgress};
				}
			}
		}
	}
`;

export default SwalStyles;
