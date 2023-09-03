import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
export const Main = () => {
  return (
    <>
      <div >
        <h2 style={{ marginLeft: '10px', padding: '20px', textAlign: 'center', marginTop: '50px' }}>Welcome to Find Insight - Empowering Your Productivity with Microsoft 365 Solutions</h2>
        <Section>

          <Box style={{ opacity: '25%' }}>
            <Logo src="/fi.png" />
          </Box>
          <Box1 class="box">

            <h2>Why Choose Us:</h2>

            <ul>
              <li>
                Expertise: Our seasoned professionals possess in-depth knowledge of Microsoft 365's capabilities. We tailor solutions to align with your business goals and operational requirements.
              </li>
              <li>
                Client-Centric Approach: Your success is our priority. We take the time to understand your challenges and provide solutions that address your unique needs.
              </li>
              <li>
                Seamless Integration: Our solutions seamlessly integrate with your existing IT infrastructure, minimizing disruptions and ensuring a cohesive transition.
              </li>
              <li>
                Innovation: We stay up-to-date with the latest advancements in Microsoft 365. Count on us to bring you innovative solutions that drive business growth.
              </li>
              <li>
                Reliability: With a proven track record of successful implementations, we are your reliable partner for harnessing Microsoft 365's capabilities effectively.
              </li>
            </ul>
            <footer>
              Join us in unlocking the true potential of Microsoft 365. Empower your workforce, supercharge collaboration, and redefine productivity. Contact us today to embark on a transformative journey toward a more efficient and connected future.
            </footer>

          </Box1>
        </Section>

</div>

    </>
  )
}

const Logo = styled.img`
width:auto;
height:auto;
cursor:pointer;
  display:flex; 
    
`

const Section = styled.div`
  display:flex; 
  margin:10px;
  height:450px
    
`

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