import { Cart } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const FloatingCartButton = () => {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + (item.quantity || 1), 0)
  );

  const navigate = useNavigate();
  const cartRef = useRef(null);
  const [position, setPosition] = useState({ x: 30, y: 30 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const wasDragged = useRef(false);

  const startDrag = (e) => {
    setDragging(true);
    wasDragged.current = false;

    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY;

    const rect = cartRef.current.getBoundingClientRect();
    offset.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const onDrag = (e) => {
    if (!dragging) return;
    wasDragged.current = true;

    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;

    setPosition({
      x:
        window.innerWidth -
        clientX -
        (cartRef.current.offsetWidth - offset.current.x),
      y:
        window.innerHeight -
        clientY -
        (cartRef.current.offsetHeight - offset.current.y),
    });
  };

  const endDrag = () => {
    setDragging(false);
  };

  const handleClick = () => {
    if (!wasDragged.current) {
      navigate("/cart");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", endDrag);
    window.addEventListener("touchmove", onDrag);
    window.addEventListener("touchend", endDrag);
    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchmove", onDrag);
      window.removeEventListener("touchend", endDrag);
    };
  }, [dragging]);

  return (
    <div
      ref={cartRef}
      onClick={handleClick}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      className="floating-cart d-none d-md-flex justify-content-center align-items-center"
      style={{
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        backgroundColor: "#2a2a2abe",
        cursor: "grab",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.57)",
        color: "white",
        position: "fixed",
        bottom: `${position.y}px`,
        right: `${position.x}px`,
        zIndex: 9999,
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <Cart size={24} />
      {cartCount > 0 && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ fontSize: "0.65rem" }}
        >
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default FloatingCartButton;
