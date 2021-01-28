import React,{useState} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import './count.css';
const ClientCount = (ClassName,...rest) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <>
             <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <h4 className={ClassName} ref={countUpRef}/>
          </VisibilitySensor>
        );
      }}
    </CountUp>
        </>
    )
}

export default ClientCount;
