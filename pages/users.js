import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
  return (
    <MainContainer keywords={"users"}>
      <h1>users page</h1>
      <ul>
        {users.map(({id, name}) => (
          <li key={id}>
            <Link href={`/users/${id}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {users},
  }
}
