import React from "react";
import {useState} from 'react';
function ButtonLoader({}){
     const [loading,setLoading] = useState(false);
  function fetchData (){
    setLoading( true );

    //Faking API call here
    setTimeout(() => {
      setLoading( false );
    }, 2000);
  };

    return (
      <div style={{ marginTop: "60px" }}>
        <button className="button" type="submit" className="submit"onClick={fetchData} disabled={loading}>
          {loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {loading && <span>Loading Data from Server</span>}
          {!loading && <span>Fetch Data from Server</span>}
        </button>
      </div>
    );
  
}
export default ButtonLoader;
