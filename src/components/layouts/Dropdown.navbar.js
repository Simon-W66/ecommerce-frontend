import React from 'react';
import { Link } from 'react-router-dom';

export class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			parentClass: props.parentClass,
            
		};

		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.closeDropdown = this.closeDropdown.bind(this);
	}
    

	toggleDropdown() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	closeDropdown() {
		this.setState({ isOpen: false });
	}

	render({logout}) {
	let Links = [
        { name: "account", link: "/" },
        { name: "products", link: "/products" },
        { name: "messages", link: "/messages" },
        { name: "logout", link: "/logout" },
      ];
        return (
			<div className={this.state.parentClass}>
				<div className="relative">
					<button
						onClick={this.toggleDropdown}
						className="relative z-10 block h-8 w-8 border-2 border-gray-600 rounded-full overflow-hidden focus:outline-none focus:border-white mx-2"
					>
						<img
							className="w-full h-full object-cover "
							src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
							alt="Your avatar"
						/>
					</button>
					<button
						className={
							this.state.isOpen ? (
								' cursor-default bg-black opacity-50 fixed inset-0 w-full h-full'
							) : (
								'hidden'
							)
						}
						onClick={this.closeDropdown}
						tabIndex="-1"
					/>
					<div
						className={
							this.state.isOpen ? (
								'absolute right-0 mt-2 w-48 bg-white rounded-lg py-2 shadow-xl'
							) : (
								'hidden'
							)
						}
					>
						
					{Links.map((link)=> (
                        <div>
                            <Link href="#" key={link.name} className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white" to='/'>{link.name.toUpperCase()}</Link>
                            <Link href="#" key={link.name} className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white" to='/products'>{link.name.toUpperCase()}</Link>
                            <Link href="#" key={link.name} className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white" to='/messages'>{link.name.toUpperCase()}</Link>
							<Link href="#" key={link.name} className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white" to='/logout' onClick={logout}>{link.name.toUpperCase()}</Link>
                        </div>
                    ))}
					</div>
				</div>
			</div>
		);
	}
}
