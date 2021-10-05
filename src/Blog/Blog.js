import React from "react";
import { Card } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <h2 className="m-4">Visit the Learning Academy Blogs</h2>

      {/* different blogs category */}
      <div className="container blog-design blog-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://blog.hubspot.com/hubfs/assets/blog.hubspot.com/2018/blogroll-images/marketing-blog-image.jpg"
          />
          <Card.Body className="bg-primary text-white card-design">
            <Card.Title>Marketing</Card.Title>
            <Card.Text>Insights, ideas, and inspiration</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://blog.hubspot.com/hubfs/assets/blog.hubspot.com/2018/blogroll-images/sales-blog-image.jpg"
          />
          <Card.Body className="bg-primary text-white card-design">
            <Card.Title>Sales</Card.Title>
            <Card.Text>Sell smarter, better, and faster.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://blog.hubspot.com/hubfs/assets/blog.hubspot.com/2018/blogroll-images/service-blog-image.jpg"
          />
          <Card.Body className="bg-primary text-white card-design">
            <Card.Title>Service</Card.Title>
            <Card.Text>Helping you help your customers.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://blog.hubspot.com/hubfs/assets/blog.hubspot.com/2018/blogroll-images/website-blog-image.jpg"
          />
          <Card.Body className="bg-primary text-white card-design">
            <Card.Title>Website</Card.Title>
            <Card.Text>Go into building your website.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://blog.hubspot.com/hubfs/Sales_Blog/email-subject-lines-for-sales-compressor.jpg"
          />
          <Card.Body className="bg-primary text-white card-design">
            <Card.Title>Technology</Card.Title>
            <Card.Text>Explore new tenchnologies.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://blog.hubspot.com/hubfs/Sales_Blog/social-entrepreneurship-compressor.jpg"
          />
          <Card.Body className="bg-primary text-white card-design">
            <Card.Title>Personal Development</Card.Title>
            <Card.Text>Time management, Public Speaking, etc.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://blog.hubspot.com/hubfs/operating-model.jpg"
          />
          <Card.Body className="bg-primary text-white card-design">
            <Card.Title>Compliance</Card.Title>
            <Card.Text>Workplace health and safety</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://blog.hubspot.com/hubfs/marketing-podcasts%20%281%29.jpg"
          />
          <Card.Body className="bg-primary text-white card-design">
            <Card.Title>Trending</Card.Title>
            <Card.Text>Explore trending topics</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
