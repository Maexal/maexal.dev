import React from "react";

export const Main = ({ children, className }: { children: React.ReactNode; className: string }): JSX.Element => {
	return <main className={className}>{children}</main>;
};

export default Main;
