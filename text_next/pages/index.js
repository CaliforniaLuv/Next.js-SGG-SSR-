import axios from 'axios'
import Link from 'next/link'

function Home({ name }) {
  return (
    <div>
      <h1>가게 이름</h1>
       <ul>
          {name.map(el => {
            return (
            <li key={el.id}>
              <Link href="/params/[id]" as={`/params/${el.id}`}>
                <a>
                  {el.name}
                </a>
              </Link>
            </li>)
          })}
       </ul>
    </div>
  )
}

export default Home;

export const getStaticProps = async () => {
  const res = await axios.get(`http://localhost:9000/stores`);
  const data = res.data;

  return {
    props: {
      name: data,
    },
  };
};