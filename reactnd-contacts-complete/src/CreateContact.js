import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import style from './index.css'
class CreateContact extends Component {
	render(){
		return(
			<div>
				<Link className="close-create-contact" to="/">
				</Link>
				<form>
					<ImageInput
						className="create-contact-avatar-input"
						name="avatarURL"
						maxHeight={64}
					/>
					<div className="new-name-input"> <input type="text" name="name" placeholder="name"/></div>
					<div className="new-email-input"> <input type="email" name="email" placeholder="email"/></div>
					<div className="create-contact-button"><button type="submit">Create Contact</button></div>
				</form>
			</div>
		)
	}
}
export default CreateContact
