import Header from '../components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style.css'



const Layout = (props) => (
    <div>
        <Header />
        <div className='main'>
            <p>Content starts here</p>
            {props.children}
        </div>
    </div>
); 
export default Layout

