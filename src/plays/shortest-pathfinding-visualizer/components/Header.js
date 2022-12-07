export default function Header() {
    return (
      <div className="header">
        <nav>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <h1>Pathfinding Visualizer</h1>
            <select style={{ marginLeft: "50px" }}>
              <option value="" selected disabled hidden>
                Algorithms
              </option>
              <option value="1">Depth First Search</option>
              <option value="2">Dijkstra</option>
            </select>
          </div>
          <button className="visualise">Visualize</button>
        </nav>
        <div className="info-header">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "green",
                marginRight: "20px"
              }}
            ></div>
            Start Node
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "red",
                marginRight: "20px"
              }}
            ></div>
            End Node
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "var(--grid)",
                marginRight: "20px"
              }}
            ></div>
            Block/Wall Node
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "var(--bg)",
                marginRight: "20px"
              }}
            ></div>
            Visited Node
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "var(--path)",
                marginRight: "20px"
              }}
            ></div>
            Shortest path Node
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <p className="note" style={{alignSelf:'center'}}>
          Click on 'Visualize' to see the algorithm come alive!
        </p>
        <p className="algo-info" style={{alignSelf:'center'}}></p>
        </div>
      </div>
    );
  }