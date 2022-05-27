import React, { useEffect, useState } from "react";
import {FormattedMessage} from 'react-intl';

function RoomDetail(props){
    
    return(
        <div className='container'>
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">
                      ID
                    </th>
                    <th scope="col">
                      <FormattedMessage id="Device" />
                    </th>
                    <th scope="col">
                      <FormattedMessage id="Value" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.room.devices.map(function (device, index) {
                    return (
                      <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{device.id}</td>
                        <td>{device.name}</td>
                        <td>{device.desired.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
        </div>
    )
}
export default RoomDetail;