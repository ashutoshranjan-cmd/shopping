import Layout from "../layouts/Layout"
import '../styles/Form.css';
const Form = ()=>{

    return(
     <Layout>
        <div className="home">

            <h1>Register here </h1>
            <div className="form">
                <form action="">

                    <input type="text" placeholder="Enter your name" />
                    <input type="email" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter password" />
                    <input type="password" placeholder="Confirm password" />
                    <input type="text" placeholder="Enter your address" />
                    <input type="submit" value="signup" />
                </form>
            </div>
            
        
        </div>
     </Layout>
    )
}

export default Form