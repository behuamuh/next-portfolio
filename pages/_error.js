import Layout from "../components/Layout";

export default ({ status = "" }) => (
  <Layout title={"Error! " + status}>
    <p>Couldn't get that page, sorry!</p>
  </Layout>
);
