import Blog from "components/blog/blog";
import Brand from "components/brand/brand";
import Category from "components/category/category";
import Footer from "components/layout/footer";
import Navbar from "components/layout/navbar";
import Wa from "components/layout/wa";
import ListProduct from "components/products/listProduct";
import NewProducts from "components/products/newProducts";
import EmblaCarousel from "components/slider/emblaCarousel";
import { useMemo } from "react";

const Home = () => {
  return (
    <>
      {useMemo(() => {
        return <Navbar />;
      }, [])}
      {useMemo(() => {
        return <EmblaCarousel />;
      }, [])}
      {useMemo(() => {
        return <Category />;
      }, [])}
      {useMemo(() => {
        return <NewProducts />;
      }, [])}
      {useMemo(() => {
        return <ListProduct />;
      }, [])}
      {useMemo(() => {
        return <Blog />;
      }, [])}
      {useMemo(() => {
        return <Brand />;
      }, [])}
      {useMemo(() => {
        return <Footer />;
      }, [])}
      {/* {useMemo(() => {
        return <Wa />;
      }, [])} */}
    </>
  );
};

export default Home;
