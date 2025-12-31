// Gallery.tsx
import "./Gallery.css";
import { useEffect } from "react";
import scanImg from "../assets/scanfood.jpg";

export default function Gallery() {
  useEffect(() => {
    import("./gallery-gsap");
  }, []);

  return (
    <>
      <div className="gallery-wrap">
        <div className="gallery gallery--bento gallery--switch mt-40" id="gallery-8">
          <div className="gallery__item">
            <img
              src="https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="gallery__item">
            <img
              src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="gallery__item">
            <img src={scanImg} alt="" />
          </div>
          <div className="gallery__item">
            <img
              src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="gallery__item">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="gallery__item">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="gallery__item">
            <img
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="gallery__item">
            <img
              src="https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Here is some content</h2>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>

        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
        <p>Привет Aня)))</p>
      </div>
    </>
  );
}
