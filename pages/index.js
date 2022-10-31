import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	const handleClick = () => {
		router.push("/product");
	};
	return (
		<>
			<h1>Here is the next js Routing Practicle.</h1>
			<p>
				This is implemented with the inbuilt routing feature of the next js,
				next js has inbuilt page based routing which makes the routing easier
				and makes the file structure more meaning full.
			</p>

			<p>
				Let's explore the new way of routing thorough out the app, without much
				efforts to route.
			</p>

			<h1> Now we will implement the navigation in the next js</h1>
			<h3>
				Next js provides the navigation through links which is implemented below
			</h3>
			<Link href="/product">Product</Link>

			<h3>
				Next Js also provide the feature of navigation programmatically which is
				implemented below
			</h3>
			<button onClick={handleClick}>Product Page</button>
		</>
	);
}
