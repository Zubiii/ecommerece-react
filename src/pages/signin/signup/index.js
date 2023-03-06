import { useState } from 'react'

const deafultFormFields = {
    dispalyName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(deafultFormFields)
    const { email, dispalyName, password, confirmPassword } = formFields

    const handleChange = (event) => {
        const { name, value } = event.target
        // console.log("Event => ", event)
        console.log("Name => ", name)
        console.log("Value => ", value)
        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    return (
        <div>
            <h1>Sign up with Email and Password</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="dispalyName" value={dispalyName} />

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />

                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp