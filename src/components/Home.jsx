import "./Home.css";
export default function Home({name,age}) {
  let id=3453
  return (
    <>
      <h1 style={{backgroundColor: 'yellow', color:'blue'}}>Home {name}. You are {age} years old</h1>
      <h2 className="App-Home-Header">your student id is {id}</h2>
      <p>This is a paragraph</p>
    </>
  );
}
