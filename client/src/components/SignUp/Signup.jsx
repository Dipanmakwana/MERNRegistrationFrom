import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

const SignUp = () =>{
    const [data, setData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    })
    const [error, setError] = useState("");

    const handleChange = ({currentTarget : input}) =>{
        setData({...data, [input.name]: input.value});
    }

    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const url = "http://localhost:8000/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/login");
            console.log(res.message);

        } catch (error) {
            console.log(error.response.data.message);
            if(error.response){
                setError(error.response.data.message);
            }
        }
    }

    return(
        <>
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back </h1>
                    <Link to="/login">
                        <button type="button" className={styles.white_btn}>
                            Sign In
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>

                        <input type="text" 
                        name="firstName" 
                        className={styles.input}
                        value={data.firstName} 
                        onChange={handleChange}
                        placeholder="First Name"
                        required />

                        <input type="text" 
                        className={styles.input}
                        name="lastName" 
                        value={data.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required />

                        <input type="email" 
                        className={styles.input}
                        name="email" 
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Enter your email here..."
                        required />

                        <input type="password" 
                        className={styles.input}
                        name="password" 
                        value={data.password}
                        onChange={handleChange}
                        placeholder="Enter your Password"
                        required />

                        {error && <div className={styles.error_msg}> {error} </div>}

                        <button type="submit" className={styles.green_btn}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp;