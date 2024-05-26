import React from 'react'
import Card from './Card'



function App() {
  let data=[
    {
      plan:"FREE",
      price:0,
      user:"Single User",
      userEnabler:true,
      storage:"5GB storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:" community Access",
      communityAccessEnabler:true,
      PrivateProjects:"Unlimited Private Projects",
      PrivateProjectsEnabler:false,
      Support:"Dedicated phone suport",
      supportEnabler:false,
      subDomain:"Free Subdomain",
      subDomainEnabler:false,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      plan:"PLUS",
      price:9,
      user:"5 User",
      userEnabler:true,
      storage:"50GB storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:" community Access",
      communityAccessEnabler:true,
      PrivateProjects:"Unlimited Private Projects",
      PrivateProjectsEnabler:true,
      Support:"Dedicated phone suport",
      supportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      plan:"PRO",
      price:49,
      user:"Unlimited User",
      userEnabler:true,
      storage:"150GB storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:" community Access",
      communityAccessEnabler:true,
      PrivateProjects:"Unlimited Private Projects",
      PrivateProjectsEnabler:true,
      Support:"Dedicated phone suport",
      supportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:true
    },
  ]
 return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
      data.map((e,i)=>{
        return <Card key={i} data={e}/>
      })
     }
      
       </div>
  </div>
</section>
      </>
  
}

export default App
