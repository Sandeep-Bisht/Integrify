import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeContent: any ;
  lang = 'en';
  customOptions: any = {
    // loop: true,
    mouseDrag: true,
    // autoplay:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
  industries  = [
    {
      id:1,
      title: "Financial Services:",
      src:"../../assets/images/skills.png",
      desc : "Banks, credit unions, and financial institutions require thorough background checks for employees handling finances, customer data, and sensitive information."
    },
    {
      id:2,
      title: "Healthcare",
      src:"../../assets/images/edit.png",
      desc : "Hospitals, clinics, nursing homes, and healthcare providers conduct background checks to ensure patient safety and compliance with healthcare regulations."
    },
    {
      id:3,
      title: "Education",
      src:"../../assets/images/skills.png",
      desc : "Schools, colleges, universities, and educational institutions verify the backgrounds of teachers, staff, and volunteers to ensure a safe environment for students."
    },
    {
      id:4,
      title: "Government and Public Sector",
      src:"../../assets/images/prooofreading.png",
      desc : "Government agencies and public sector organizations conduct background checks for employees involved in public safety, law enforcement, and regulatory roles."
    },
    {
      id:5,
      title: "Transportation and Logistics",
      src:"../../assets/images/anonymous.png",
      desc : "Airlines, shipping companies, and transportation providers verify backgrounds for employees handling passenger safety, cargo security, and logistics operations."
    },
    {
      id:6,
      title: "Technology and IT Services",
      src:"../../assets/images/content.png",
      desc : "Tech companies, IT services providers, and software firms conduct background checks for employees with access to sensitive data, intellectual property, and systems."
    },
    {
      id:7,
      title: "Retail and Hospitality",
      src:"../../assets/images/content.png",
      desc : "Retailers, restaurants, hotels, and hospitality businesses verify backgrounds for employees handling customer service, cash handling, and guest accommodations."
    },
    {
      id:8,
      title: "Construction and Engineering",
      src:"../../assets/images/anonymous.png",
      desc : "Construction firms, engineering companies, and contractors verify backgrounds for employees involved in project management, site operations, and safety compliance."
    },
    {
      id:9,
      title: "Legal and Professional Services",
      src:"../../assets/images/content.png",
      desc : "Law firms, accounting firms, and professional services providers conduct background checks for employees handling legal matters, financial audits, and client confidentiality."
    },
    {
      id:10,
      title: "Nonprofit and Social Services",
      src:"../../assets/images/content.png",
      desc : "Nonprofit organizations and social services agencies verify backgrounds for employees working with vulnerable populations, youth services, and community support programs."
    },
    {
      id:11,
      title: "Manufacturing and Industrial",
      src:"../../assets/images/content.png",
      desc : "Manufacturing companies and industrial firms verify backgrounds for employees involved in production, equipment operation, and workplace safety."
    },
    {
      id:12,
      title: "Pharmaceuticals and anonymous",
      src:"../../assets/images/content.png",
      desc : "Pharmaceutical companies, biotech firms, and research organizations conduct background checks for employees involved in drug development, clinical trials, and regulatory compliance."
    },
    {
      id:13,
      title: "Insurance",
      src:"../../assets/images/content.png",
      desc : "Insurance companies verify backgrounds for agents, underwriters, and claims adjusters to ensure compliance with industry regulations and customer trust."
    },
  ]

  slidesStore  = [
    {
      id:1,
      title: "Employment verification",
      src:"../../assets/images/edit.png",
      desc : "Employment verification is the process of confirming an individual’s past or current job experience with previous or current employers."
    },
    {
      id:2,
      title: "Moonlighting verification",
      src:"../../assets/images/skills.png",
      desc : "Moonlighting verification refers to the process of confirming whether an employee is engaging in additional work outside their primary employment. Here’s an overview of moonlighting verification and its significance."
    },
    {
      id:3,
      title: "Education verification",
      src:"../../assets/images/prooofreading.png",
      desc : "Education verification is the process of confirming the educational qualifications claimed by an individual. This typically involves checking the authenticity of degrees, diplomas, certificates, and other academic credentials with the issuing institutions."
    },
    {
      id:4,
      title: "Address verification",
      src:"../../assets/images/anonymous.png",
      desc : "Address verification is the process of confirming the accuracy and validity of an individual's address. This process involves cross-checking the provided address with reliable databases or through direct confirmation with postal services or property records."
    },
    {
      id:5,
      title: "Identity verification",
      src:"../../assets/images/typing.png",
      desc : "Identity verification is the process of ensuring that a person is who they claim to be. This process involves confirming the authenticity of personal identification documents and information through various means, including government databases, biometric data, and other verification tools."
    },
    {
      id:6,
      title: "Credit check",
      src:"../../assets/images/anonymous.png",
      desc : "Credit check, also known as a credit report or credit inquiry, involves assessing an individual's credit history and financial behavior. It is typically conducted by lenders, landlords, employers, and other entities to evaluate an individual's creditworthiness, reliability, and financial responsibility."
    },
    {
      id:7,
      title: " Criminal background check",
      src:"../../assets/images/skills.png",
      desc : "Criminal background check is a process used to verify whether an individual has a criminal record. It involves searching databases maintained by law enforcement agencies, courts, and other sources to find any history of criminal convictions or pending criminal cases."
    },
    {
      id:8,
      title: "Reference verification",
      src:"../../assets/images/content.png",
      desc : "Reference verification is the process of confirming the authenticity and reliability of the references provided by an individual during the hiring process or other professional contexts."
    },
    {
      id:9,
      title: " Criminal background check",
      src:"../../assets/images/content.png",
      desc : " criminal background check is a process used to verify whether an individual has a criminal record. It involves searching databases maintained by law enforcement agencies, courts, and other sources to find any history of criminal convictions or pending criminal cases."
    },
  ]
  constructor() { }

  
  ngOnInit(): void {
    // this.getHomeContent();
    // this.translation.getLangValue().subscribe(item => {
    //   this.lang = item;
    //   this.getHomeContent();
    // });
  }

  // getHomeContent = () => {
  //   this.contentsService.getPage('homepage').subscribe(res => {
  //     this.homeContent = res.data;
  //   });
  // }
}
