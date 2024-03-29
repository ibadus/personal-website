/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable react/jsx-no-bind */
import {Fragment, useEffect, useState} from "react";
import type {Work} from "./work";
import {Dialog, Transition} from '@headlessui/react';
import Image from 'next/image'; // TODO: remove during development

type work = {
	work: Work;
};

export function WorkCard(props: work) {
	const [isOpen, setIsOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	function closeModal() {
		setIsOpen(false);
		document.getElementById("navbar")!.style.opacity = "100";
		document.getElementById("navbar")!.style.pointerEvents = "auto";
	}

	function openModal() {
		setIsOpen(true);
		document.getElementById("navbar")!.style.opacity = "0";
		document.getElementById("navbar")!.style.pointerEvents = "none";
	}

	return (
		<>
			<div>
				<button
					type="button"
					className="rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:text-blue-700"
					onClick={openModal}
				>
					<div className="inline-flex ">
						<h1 className="block text-xl font-medium sm:text-xl md:text-2xl">
							{props.work.start_year} - {props.work.end_year}
						</h1>
						<span className="block text-xl font-medium sm:text-xl md:text-2xl px-2">
							·
						</span>
						<h1 className="block text-xl font-medium sm:text-xl md:text-2xl">
							{props.work.company}
						</h1>
					</div>
					<p className="flex font-medium text-sm">
						Click to view more
					</p>
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/50" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center z-50">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 text-left align-middle shadow-xl transition-all">

									<button
										type="button"
										className='absolute btn btn-circle right-0 top-0 w-9 h-9 p-2 bg-white/70 dark:bg-black/70 rounded-bl-2xl'
										onClick={closeModal}
									>
										✕
									</button>

									<div className="text-neutral-900/30 transition-all hover:text-neutral-900 dark:text-white/20 dark:hover:text-white/100 lg:-mx-8 top-0 flex">
										{/* <img src={props.work.banner} className="aspect-auto" alt="banner"/> */}
										{/* TODO: switch to <Image/> but it cause a bug on local */}
										<Image
											alt="Banner"
											src={props.work.banner}
											width={1920}
											height={640}
											placeholder="blur"
											className="aspect-auto block rounded-xl object-cover shadow-xl shadow-neutral-300 dark:shadow-none"
										/>
									</div>

									<div className="p-6 overflow-y-scroll">

										<Dialog.Title
											as="h3"
											className="text-2xl font-bold sm:text-4xl md:text-6xl"
										>
											{props.work.company}
										</Dialog.Title>
										<div>
											<p className="text-sm text-gray-200">
												{props.work.short_description}
											</p>
										</div>

										<div className="inline-flex">
											<h3 className="flex text-xl font-medium sm:text-xl md:text-2xl flex-wrap">
												{props.work.start_year} - {props.work.end_year}
												<span className="flex text-xl font-medium sm:text-xl md:text-2xl px-2">
													·
												</span>
												{props.work.position}
											</h3>
										</div>

										<div className="mt-2 text-sm text-gray-500">
											{props.work.long_description}
										</div>

										<div className="border-t-2 border-neutral-900/10 my-4 dark:border-white/10" />

										<ul className="grid grid-cols-3 gap-4 sm:grid-cols-4">
											{props.work.technologies}
										</ul>

									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
