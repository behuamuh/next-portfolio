import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p style={{width='80vh'}}>
        Lorem ipsum dolor sit amet, his cu dico eleifend, id mei modo accusamus.
        Mazim movet eu sit. Id soluta populo ponderum sit, fabulas cotidieque
        sit an, ad est tantas integre. Nominavi definiebas ut per, ea quo iusto
        feugait urbanitas. Ridens pertinax dissentiunt ei pro, pri ut odio
        soluta essent. Eu wisi liber epicurei mei, an cum suas deseruisse
        quaerendum. Vel inani eloquentiam cu, vim no nobis hendrerit. Ut solum
        dicam atomorum eos, ea persius nostrud prodesset quo. Usu ei magna
        nominati appellantur, suscipit percipitur sadipscing ne sit, mea id
        graece regione voluptatum. Mel ex utinam volumus. Ius odio deseruisse
        eu, vix cu fuisset maiestatis necessitatibus.
      </p>
    </Layout>
  );
};

export default withRouter(Post);
