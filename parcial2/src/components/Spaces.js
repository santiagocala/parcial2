import React, {useEffect, useState} from 'react';
import {FormattedDate, FormattedMessage} from 'react-intl';
import SpacesDetail from './SpacesDetail';

function Spaces(){
    const [spaces, setSpaces] = useState([]);
    const [selectedSpace, setSelectedSpace] = useState(null); 
    useEffect(()=>{
        const URL = 'https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json';
            fetch(URL).then(res=>res.json()).then(res=>{
                setSpaces(res);
            });
    }, []);

    function renderSpaceDetail(e, space){
        e.preventDefault();
        console.log('clicked', space);
        setSelectedSpace(space);
    }

    function renderSpacePicture(space){
        let route = './images/house.jpeg';
        if(space.type != 'hosue'){
            route = './images/apartment.jpeg';
        }
        return route;
    }

    return (
      <div className = 'container'>
          <div className = 'row'>
        {spaces.map(function (space, index) {
          return (
            <div className="card" onClick={(e) => renderSpaceDetail(e, space)}>
              <img
                src="parcial2/src/images/apartment.png"
                class="card-img-top"
                alt="Image of the selected picture"
              ></img>
              <div className="card-body">
                <h5 className="card-title">{space.name}</h5>
                <p className="card-text">{space.address}</p>
              </div>
            </div>
          );
        })}
        </div>
        <hr/>
            <div className = 'row'>
            {
              selectedSpace && <SpacesDetail space={selectedSpace}/>
            }
            </div>
      </div>
    );
}
export default Spaces;