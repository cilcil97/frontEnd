import React from 'react';

function Title ({title}) {
    return(
      <div className="row">
          <div className="col-10 mx-auto text-center text-title my-2">
              <h1 className="font-weight-bold">
                  {title}
              </h1>
          </div>
      </div>
    );
}

export default Title