import { useEffect, useState } from 'react';

export default function Fileupload(){

  useEffect(() => {
    console.log('Effect')
  });

    return(<div className="container">
        <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Default file input example</label>
            <input className="form-control" type="file" id="formFile" />
        </div>
        </div>
        );
}