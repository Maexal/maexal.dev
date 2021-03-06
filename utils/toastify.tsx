import React from 'react';

export const toastSuccess = async (message: string, customPre?: JSX.Element): Promise<void> => {
	const { toast } = await import('react-toastify');

	toast.success(
		<div className="inline-flex">
			{customPre ? (
				customPre
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="inline-block text-white w-8 h-8 mr-2 -mt-1"
				>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clipRule="evenodd"
					/>
				</svg>
			)}
			<p className="text-sm">{message}</p>
		</div>,
	);
};

export const toastError = async (message: string, customPre?: JSX.Element): Promise<void> => {
	const { toast } = await import('react-toastify');

	toast.error(
		<div className="inline-flex">
			{customPre ? (
				customPre
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="inline-block text-white w-8 h-8 mr-2 -mt-1"
				>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
						clipRule="evenodd"
					/>
				</svg>
			)}
			<p className="text-sm">{message}</p>
		</div>,
	);
};
