import React from "react";
import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";

export default function FAQ() {
  return (
    <div className="main_faq_bbg" id="faq">
      <h1 className="main_mdh text-center lower_tkn">Frequently asked questions </h1>
      {/* <p className="faq_par">
      Our thorough FAQ section is aimed to answering common questions regarding Matrix Reserve Token and its features. If your question is not answered here, please contact our dedicated support team. You can contact us through the supplied contact form or use our AI assistant for additional assistance. We're here to make sure your Matrix Reserve experience is easy and pleasurable.
      </p> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{fontFamily:"'Inter', sans-serif"}}>What is Realspad Token? </Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                  Is thoughtfully designed ecosystem created with the vision of amalgamating the best elements of transactional dividends, deflationary mechanisms, and staking benefits. By choosing Smart Staking, you are aligning with a project that emphasizes both immediate rewards and long-term value generation. The road ahead is paved with innovation, commitment, and a relentless pursuit of delivering unparalleled value to our community. </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header style={{fontFamily:"'Inter', sans-serif"}}>Why was a presale launched? </Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                  We're launching the Realspad Token with a presale to give everyone a chance to buy the Realspad Token at a discounted price and be a part of the initial Market cap of $2.1 million before it goes public and explodes.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header style={{fontFamily:"'Inter', sans-serif"}}>What exactly is Realspad staking, and when can you use it? </Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                  Staking allows users to lock away a specified amount of Realspad in return for financial rewards to maximize the potential of their holdings. At its core, staking will offer a dual advantage; it serves as a mechanism for securing the network while simultaneously rewarding participants with additional tokens.  <br></br><br/>
                  Our focus is not just on staking; it is about creating a system where every stakeholder finds value. When holders stake their tokens, they do not just earn passively; they contribute to the overall stability and health of the platform.  <br/><br/>
                  What makes Smart Staking different is that investors will earn both BNB and the native Realspad token, ensuring diverse income streams. This approach mirrors the ethos of depositing in a high-yield savings account but within the decentralized realm, blending traditional finance's stability with crypto's innovation.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              {/* <Accordion.Item eventKey="3">
                <Accordion.Header>How Can I Purchase $Matrix Reserve?</Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                  $Matrix Reserve Tokens are available for purchase during our presale event. We accept major cryptocurrencies, including USDT (USDT-BEP20), BNB (BNB), and USDC (USDC BEP20), as payment. This flexibility allows potential investors to participate in the presale using their preferred cryptocurrency or stablecoin.
                  </p>
                </Accordion.Body>
              </Accordion.Item> */}

              {/* <Accordion.Item eventKey="4">
                <Accordion.Header>How can i claim my tokens? </Accordion.Header>
                <Accordion.Body>
                  <p className="acc_para">
                  Upon the conclusion of the presale, you will have the opportunity to claim your tokens directly from the wallet through which you made the purchase.
                  </p>
                </Accordion.Body>
              </Accordion.Item> */}


            </Accordion>

          </div>
        </div>
      </div>
    </div>
  );
}
