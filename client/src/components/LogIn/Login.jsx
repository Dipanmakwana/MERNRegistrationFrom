import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

const Login = () =>{
    const [data, setData] = useState({
        email : "",
        password : ""
    })
    const [error, setError] = useState("");

    const handleChange = ({currentTarget : input}) =>{
        setData({...data, [input.name]: input.value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const url = "http://localhost:8000/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";
            console.log(res.message);
            
        } catch (error) {
            console.log(error);
            if(error.response){
                setError(error.response.data.message);
            }
        }
    }

    return(
        <>
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Login to Your Account</h1>

                        <input type="email" 
                        className={styles.input}
                        name="email" 
                        value={data.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email here..." />

                        <input type="password" 
                        className={styles.input}
                        name="password" 
                        value={data.password}
                        onChange={handleChange}
                        placeholder="Enter your Password"
                        required />

                        {error && <div className={styles.error_msg}> {error} </div>}

                        <button type="submit" className={styles.green_btn}>
                            Sign In
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>New Here ? </h1>
                    <Link to="/signup">
                        <button type="button" className={styles.white_btn}>
                            Sign Up
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;