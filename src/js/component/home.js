import React from "react";
import { IgPost } from "./IgPost";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<IgPost />
		</div>
	);
}
