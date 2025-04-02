import Demo from "./Demo";
import Demo2 from "./Demo2";

function Test() {
  const items = ["Item 1", "Item 2", "Item 3"]; // Define an array
  let demo = false;

  return (
    <div>
      {/* Conditional Rendering */}
      {/* {demo ? <Demo /> : <Demo2 />} */}

      {/* Mapping Over Array */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Keeping the past commented parts */}
      {/* <div> */}
      {/* {Array.map((item)=>( */}
      {/* <li>{item}</li> */}
      {/* ))} */}
      {/* {Array.map((item)=>( */}
      {/* <li key={item}>{item}</li> */}
      {/* ))} */}
      {/* </div> */}
    </div>
  );
}

export default Test;
