import styles from "./styles.module.css";
import Spline from '@splinetool/react-spline';

const Main = () => {

    const handleLogout = () =>{
        localStorage.removeItem("token");
        window.location.reload();
    }

    return(
        <>
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>RoboInnovate</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            <div className={styles.page_one}>
                <div className={styles.content}>
                    <h1>Welcome to the Future of Robotics!</h1>
                    <p>Unleash the power of innovation with our cutting-edge Robot Model. Our state-of-the-art robots are engineered to redefine the boundaries of technology, pushing the limits of what's possible. Whether you're an industry professional seeking efficiency or a tech enthusiast fascinated by the future, our robot model is designed to meet your every expectation.</p>
                </div>
                <div className={styles.model}>
                    <Spline scene="https://prod.spline.design/1Zm8hjJ7cfrR9MKa/scene.splinecode" />
                </div>
            </div>

            <div className={styles.about}>
                <h1>About Us</h1>

                <p>At RoboInnovate, we are pioneers in the field of robotics, dedicated to shaping the future of automation and artificial intelligence. Our journey began with a vision to create intelligent machines that enhance and simplify human lives. Today, we proudly introduce our flagship robot model, representing the culmination of years of research, innovation, and expertise.</p>

                <p>Our mission is to empower individuals and industries with state-of-the-art robotics solutions. We believe in pushing boundaries, challenging the status quo, and redefining what is possible. By combining cutting-edge technology with a passion for progress, we strive to revolutionize the way people interact with and benefit from robotics.</p>

                <h1>Core Values</h1>

                <div className={styles.core}>
                <p>Innovation: We are committed to staying at the forefront of technological advancements, consistently integrating the latest innovations into our products.</p>

                <p>Quality: Quality is not just a standard; it's a commitment. We adhere to the highest standards of craftsmanship and engineering to deliver products that exceed expectations.</p>

                <p>User-Centric Design: Our focus is on creating robots that are not only technologically advanced but also user-friendly. We prioritize a seamless and enjoyable user experience.</p>

                <p>Ethical AI: As creators of intelligent machines, we recognize the importance of ethical AI. Our robots are designed with a commitment to responsible and ethical use.</p>

                </div>
            </div>

            <div className={styles.fetures}>
            <h1>Key Fetures</h1>

            <ul>
                <li> <mark>Precision and Performance</mark> : Our robots are crafted with unparalleled precision and equipped with advanced sensors for optimal performance in various environments. Experience the pinnacle of efficiency in every task.</li>

                <li> <mark>Adaptive Intelligence</mark>: Powered by advanced artificial intelligence, our robots adapt and learn, making them versatile companions in any setting. From dynamic workplaces to household chores, they seamlessly integrate into your daily life.</li>

                <li><mark>User-Friendly Interface</mark>: Interact effortlessly with our robots through an intuitive user interface. Whether you're a tech novice or an expert, our user-friendly design ensures a seamless and enjoyable experience.</li>

                <li><mark>Cutting-Edge Technology</mark>: Stay ahead of the curve with our robots that incorporate the latest in robotics technology. We prioritize innovation to bring you the most advanced features and capabilities.</li>

                <li><mark>Customization Options</mark>: Tailor our robot model to fit your specific needs. With modular components and customizable features, you have the flexibility to create a robot that aligns perfectly with your requirements.</li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default Main;