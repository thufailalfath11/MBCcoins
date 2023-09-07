import { blog } from "@/assets/data/dummydata";
import BlogCard from "@/components/BlogCard";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Analysis = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Analysis" /> <br />
            <br />
            <Title title="Analysis on cryptocurency" />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Analysis;