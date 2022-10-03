
import Directory from '../../components/category/directory/directory.component';
import { Outlet } from 'react-router-dom';




const Home = () => {

  const categories =[
    {
      "id": 1,
      "title": "HATS",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "JACKETS",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "SNEAKERS",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "WOMEN",
      "imageUrl": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      "id": 5,
      "title": "MENS",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  
  return (
    <>
        <Directory categories={categories}/>
        <Outlet/>
    </>
  );
}

export default Home;
