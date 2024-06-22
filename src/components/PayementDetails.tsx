import React from 'react';
import '../styles/Payement.css';

const PayementDetails: React.FC = () => {
  return (
    <div className='pp'>
    <div className="pay">
          <form className="form">
              <div className="separator">
                  <h2>Votre Payement now</h2>
                  <div className="credit-card-info--form">
                      <div className="input_container">
                          <label htmlFor="cardholder_name" className="input_label">Region</label>
                          <select name="input-name" className='input_field' id="cardholder_name">
                              <option className='input_field' value="">tana</option>
                              <option className='input_field' value="">tana</option>
                              <option className='input_field' value="">tana</option>
                          </select>
                          {/* <input id="cardholder_name" className="input_field" type="text" name="input-name" title="Input title" placeholder="Enter your full name" /> */}
                      </div>

                      <div className="input_container">
                          <label htmlFor="card_number" className="input_label">Card Number</label>
                          <input id="card_number" className="input_field" type="text" name="input-name" title="Input title" placeholder="0000 0000 0000 0000" />
                      </div>


                  </div>
              </div>

              <button className="purchase--btn">Checkout</button>

          </form>
      </div>
      <div className="pay2">
              <form className="form">
                  <div className="separator">
                      <h2>Vos informations sup</h2>
                      <div className="credit-card-info--form">
                          

                        <p><b>Nom:</b> John Doe</p>
                        <p><b>Prenom:</b> Jean </p>
                        <p><b>Numero:</b>  03402022</p>
                        <p><b>Adresse:</b> Lot Ab 25125 Andraharo </p>
                        
                      </div>
                  </div>


              </form>
          </div>
          </div>
  );
};

export default PayementDetails;
