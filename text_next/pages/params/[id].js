import axios from 'axios'

function Params({ item }) {
    return (
      <div>
        <h1>{item.name}</h1>
        <h3>{item.id}번째 가게</h3>
      </div>
    );
  };
  
  export default Params
  
  export const getServerSideProps = async (target) => {
      const id = target.params.id;
      const res = await axios.get(
        `http://localhost:9000/stores/${id}`
      );
      const data = res.data;
    
      return {
        props: {
          item: data,
        },
      };
    };