import { useSelector } from "react-redux";


const Home = () => {
     const a = useSelector(a => a)
     console.log(a)

    return(
        <div>
          <h1>Home Page</h1>
          <h1>{a.name}</h1>
        </div>
    );
}


export default Home;