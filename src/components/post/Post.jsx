import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            odio error enim tempore i quidem unde exure ex animi harum aperiam earum repellat.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere culpa illo ratione veritatis quae a, rerum, saepe commodi nostrum exercitationem laudantium earum, ad atque ipsa praesentium accusantium deleniti totam.
          provident placeat totam culpa, quisquam iste facere deleniti id.
      </p>
    </div>
  );
}
