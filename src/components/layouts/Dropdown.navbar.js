import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

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

	render() {

	
	const logoutSubmit = (e) => {
    	e.preventDefault();
    	axios.post('/api/logout').then(res=>{
    	  if(res.data.status === 200){
    	    localStorage.removeItem('auth_token', res.data.token); 
    	    localStorage.removeItem('auth_name', res.data.username); 
    	    window.location = "/";
    	    
    	    Swal.fire({
    	        icon:'success',
    	        text: res.data.message,
    	        position: 'top-end',
    	        timer: 1000
    	      })
    	  }else{

    	  }
    	})
	} 

	let Links = [
        { key: '1wet4w4wetb5',name: "account", link: "/" },
        { key: '2wge54gh64rh',name: "products", link: "/products" },
        { key: '3rhe56j7thbb',name: "messages", link: "/messages" },
        
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
					<ul>
						{Links.map((link)=> (
								<Link href="#" key={link.key.toString()} className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white" to={link.link}  >{link.name.toUpperCase()}</Link>
						))}
						<Link href="#" key="55" className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white" to='/logout' onClick={logoutSubmit}>LOGOUT</Link>
					</ul>	
				</div>
			</div>
		</div>
	);
	}
}
