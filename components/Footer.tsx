import React from "react";

export const Footer = ({ type = "regular" }: { type?: "small" | "regular" }): JSX.Element => {
	return (
		<footer data-type={type}>
			<div className="footer-wrapper">
				<div className="font-mono text-black dark:text-white">
					<strong className="font-mono">KVK:</strong>78183251
				</div>
				<div className="font-mono text-black dark:text-white">
					<strong className="font-mono">BTW:</strong>NL003297690B50
				</div>
				<div className="font-mono text-black dark:text-white">
					<strong className="font-mono">IBAN:</strong>NL14 BUNQ 2044 3278 72
				</div>
				<div className="font-mono text-black dark:text-white">
					<strong className="font-mono">BIC:</strong>BUNQNL2AXXX
				</div>
			</div>
		</footer>
	);
};

export default Footer;
