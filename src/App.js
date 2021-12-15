import './App.css';
import NewPrice from './NewPrice.js';

function App() {

  let priceList =[
          {
            plan :'BASIC',
            member : 'For Team of 3-5 Members',
            symbol :  '$',
            monthly : '28',
            yearly :'240',
            monthlys : '/mo',
            yearlys :'/yr',
            block : 'Save',
            medium : '$20',
            s: 'a Year',
            features: [{team :'Perfect of Small Team'},

            {team : 'Unlimited Invoices'},
            {team : 'Project Management'}
            
            ]


          },

          {
            hello: 'Popular',
            plan :'INTERMEDIATE',
            member : 'For Team of 5-10 Members',
            symbol : '$',
            monthly : '39',
            yearly :'400',
            monthlys : '/mo',
            yearlys :'/yr',
            block : 'Save',
            medium : '$30',
            s: 'a Year',
            features: [{team :'Perfect of Small Team'},

            {team : 'Unlimited Invoices'},
            {team : 'Project Management'},
            {team: 'Team Management'}
            
            ]
            
          },

          {

            plan :'HIGH CLASS',
            member : 'For Team of 10-25 Members',
            symbol : '$',
            monthly : '58',
            yearly :'600',
            monthlys : '/mo',
            yearlys :'/yr',
            block : 'Save',
            medium : '$50',
            s: 'a Year',
            
            features: [{team :'Perfect of Small Team'},

            {team : 'Unlimited Invoices'},
            {team : 'Project Management'},
            {team: 'Team Management'}
            ]
          },
          {
            plan :'SUPREME',
            member : 'For Team of 25-100 Members',
            symbol : '$',
            monthly : '99',
            yearly :'1000',
            monthlys : '/mo',
            yearlys :'/yr',
            block : 'Save',
            medium : '$80',
            features: [{team :'Perfect of Small Team'},

            {team : 'Unlimited Invoices'},
            {team : 'Project Management'},
            {team: 'Team Management'},
            {team : 'Time Tracking'}
            ]
            
             }


  ];
  return (
    <div class="pricing1 py-5 bg-light">
  <div class="container">
    <div class="row justify-content-center">
    
      <div class="col-md-8 text-center">
        <h3 class="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
        <h6 class="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
        </div>
        </div>
        </div>

        <div class="row mt-5">
         
        {
          priceList.map((obj) =>{
             return <NewPrice data = {obj}></NewPrice>
          })
        }
        
        
        </div>
        </div>


  );
}

export default App;
