import React from 'react';
import './NewPrice.css';

export default function NewPrice(props){

    return(
        
    
        <div class="col-lg-3 col-md-6">
        <div class="card text-center card-shadow on-hover border-0 mb-4">
          <div class="card-body font-14">
          <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">{props.data.hello}</span>
            <h5 class="mt-3 mb-1 font-weight-medium">{props.data.plan}</h5>
            <h6 class="subtitle font-weight-normal">{props.data.member}</h6>
            <div class="pricing my-3">
              <sup>{props.data.symbol}</sup>
              <span class="monthly display-5">{props.data.monthly}</span>
              <span class="yearly display-5">{props.data.yearly}</span>
              <small class="monthly">{props.data.monthlys}</small>
              <small class="yearly">{props.data.yearlys}</small>
              <span class="d-block">{props.data.block}<span class="font-weight-medium">{props.data.medium}</span>{props.data.s}</span>
            </div>
            <ul class="list-inline">
              
              {
                props.data.features.map(obj => {
                   return <li class="d-block py-2">{obj.team}</li>
                } )
              }
              <li class="d-block py-2">&nbsp;</li>
              <li class="d-block py-2">&nbsp;</li>
            </ul>
            <div class="bottom-btn">
              <a class="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
            </div>
          </div>
        </div>
      </div>










    )
}
