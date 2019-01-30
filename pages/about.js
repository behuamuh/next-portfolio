import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const URL = "https://api.github.com/users/behuamuh";

const About = props => {
  const { user } = props;
  return (
    <Layout title="About">
      <p>{user.name || "BeHuaMuH"}</p>
      <img src={user.avatar_url} alt="behuamuh" width="200px" />
    </Layout>
  );
};

About.getInitialProps = async () => {
  const data = await fetch(URL);
  const json = await data.json();
  return {
    user: json
  };
};

export default About;
