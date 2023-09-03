import React from 'react'
import styled from 'styled-components';

 const Services = () => {

    return (
        <div style={{}}>
            <h2 style={{padding:'20px',textAlign:'center',marginTop:'50px',marginLeft: '10px' }}>Welcome to Find Insight - Empowering Your Productivity with Microsoft 365 Solutions</h2>
            <Section>

                <Box style={{ opacity: '25%' }}>
                    <Logo src="/fi.png" />
                </Box>
                <Box1 class="box">

                    <h2>Our Services:</h2>
                    <ul>
                        <li>Microsoft Teams Collaboration: Navigate the world of remote work seamlessly with Microsoft Teams. We help you optimize team communication, virtual meetings, and collaborative project management, ensuring that distance doesn't hinder productivity.</li>

                        <li>SharePoint Solutions: Leverage SharePoint to organize and manage your documents, data, and information in a centralized and secure manner. Our experts ensure efficient content sharing, version control, and easy access, promoting effective teamwork.</li>

                        <li>Efficient Email Management: Make the most of Microsoft Outlook for streamlined email communication. We assist in email setup, organization, and integration with other Microsoft 365 applications for a unified experience.</li>

                        <li>Data Security and Compliance: Safeguard your sensitive information with Microsoft 365's advanced security features. Our solutions encompass data encryption, access controls, and compliance measures to meet industry standards.</li>

                        <li>OneDrive for Business: Revolutionize how your team stores and accesses documents with OneDrive. Our tailored implementations allow for seamless file synchronization, enabling work continuity across devices.</li>

                        <li>Document Collaboration: Enhance collaboration with real-time document editing and sharing using Microsoft Word, Excel, and PowerPoint. Our solutions ensure that your team can work together on projects regardless of location.</li>

                        <li>Streamlined Communication: Microsoft 365 empowers your organization with efficient communication tools, including Yammer and Outlook Groups. We assist in creating a connected workspace where ideas flow freely.</li>

                        <li>Customized Training and Support: Embracing new technologies can be daunting. Our team offers comprehensive training and ongoing support to ensure a smooth transition to Microsoft 365, boosting user adoption and proficiency.</li>

                    </ul>
                </Box1>
            </Section>
        </div>
    )
}



const Box = styled.div`
width: auto;
height: 150px;
margin: 10px;
box-sizing: border-box;
    
`
const Box1 = styled.div`
font-size:14px;
width: auto;
height: 150px;
margin: 10px;
box-sizing: border-box;
`

const Section = styled.div`
  display:flex; 
  margin:10px;
  height:450px
    
`

const Logo = styled.img`
width:auto;
height:auto;
cursor:pointer;
  display:flex; 
    
`

export default Services