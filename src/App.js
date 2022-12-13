import { useState } from "react";
import {Table,Modal,Button} from 'antd'
import axios from "axios";


function App() {
  const [showModal,setShowModal]=useState(false)
  const [movies,setMovies]=useState([])
  

 const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '0f8dea1aa1mshfb3bd624f5cc9a7p1d9cfejsn4fe2a9721196',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

axios.request(options).then(response=>setMovies(response.data)).catch(function (error) {
	console.error(error);
});

 const columns =[
  {
    title:"Film Adı",
    dataIndex:"title",
    key:"title",
  },
  {
    title:"Rank",
    dataIndex:"rank",
    key:"rank",
  },
  {
    title:"Açıklama",
    dataIndex:"description",
    key:"description",
  },
]
 console.log(movies)
  return (
    <div className="App">
      <Button type="primary" danger onClick={()=>setShowModal(true)} >Aç</Button>
      <Modal onCancel={()=>setShowModal(false)} footer={false} open={showModal}>
        <h1>Modal Aç</h1>
      </Modal>
      <Table dataSource={movies} columns={columns}/>
    </div>
  );
}

export default App;
