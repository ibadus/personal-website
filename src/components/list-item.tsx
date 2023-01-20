/* eslint-disable react/jsx-no-bind */
import {type ReactNode, useState} from 'react';
import type {IconType} from 'react-icons';

type Props = {
	text: ReactNode;
	icon: IconType;
};

export function ListItem({text, icon}: Props) {
	return (
		<li className="flex items-center space-x-2">
			<span>{icon({className: 'h-6 w-6'})}</span>
			<span>{text}</span>
		</li>
	);
}

export function ListItemToolTip({text, icon}: Props) {
	const [isShowing, setIsShowing] = useState(false);

	function showPopHover() {
		setIsShowing(true);
	}

	function hidePopHover() {
		setIsShowing(false);
	}

	return (
		// <div className='group flex items-center'>
		// 	<li className="" onMouseEnter={showPopHover} onMouseLeave={hidePopHover}>
		// 		<span>{icon({className: 'h-6 w-auto flex'})}</span>
		// 	</li>
		// 	<span className="relative scale-0 rounded font-semibold bg-gray-800/80 p-2 text-xs text-ellipsis transition-all group-hover:scale-100">
		// 		{text}
		// 	</span>
		// </div>
		<li className="flex items-center space-x-2">
			<span>{icon({className: 'h-6 w-6'})}</span>
			<span>{text}</span>
		</li>
	);
}

export function ListItemReversed({text, icon}: Props) {
	return (
		<li className="flex items-center justify-end space-x-2 text-right">
			<span>{text}</span>
			<span>{icon({className: 'h-6 w-6'})}</span>
		</li>
	);
}
