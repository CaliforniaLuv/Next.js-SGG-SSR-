import axios from 'axios'

function Params_static({ item }) {
    return (
      <div>
          { item
           &&
            <>
                <h1>{item.name}</h1>
                <h3>{item.id}번째 가게</h3>
            </>
           }
      </div>
    );
  };
  
  export default Params_static

  export const getStaticPaths = async () => {

    const res = await axios.get(
        `http://localhost:9000/stores`
    );
    const data = res.data;

    return {
      paths: data.map(el => {
        return { params: { id: String(el.id) } }
    }),
      fallback: false,
    };
  };
  
  export const getStaticProps = async (target) => {
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