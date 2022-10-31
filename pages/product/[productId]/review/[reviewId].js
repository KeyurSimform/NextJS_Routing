import { useRouter } from "next/router";
// This is the example of the nested dynamic routing the next js which is implemented using the file based routing.
//Here we have to create the folder under the dynamic route folder which is near most dynamic route folder in the hierarchy.
// Their we need to create the index.js file which contains the react function which will we displayed on the webapp.
//we need to create the another file as the syntax of [filename].js which will indicate that it is dynamic file name which will as per the response from the api or any action which is controlling that file.
function ReviewDetail() {
  const Router = useRouter();
  const { productId, reviewId } = Router.query; // Here we had destrucred the product id and review id from the query which is the property of the router.
  return (
    <>
      <h1>Product Details : {productId}</h1>
      <h3>has review : {reviewId}</h3>
    </>
  );
}

export default ReviewDetail;
