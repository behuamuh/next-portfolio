import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

const URL = "https://api.github.com/users/behuamuh";

const About = props => {
  const { user, status } = props;
  return status != 200 ? (
    <Error status={status} />
  ) : (
    <Layout title="About">
      <p>{user.name || "BeHuaMuH"}</p>
      <img src={user.avatar_url} alt="behuamuh" width="200px" />
    </Layout>
  );
};

About.getInitialProps = async () => {
  const res = await fetch(URL);
  const status = res.status;
  const data = await res.json();
  return {
    user: data,
    status
  };
};

export default About;
