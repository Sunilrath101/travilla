import React from "react";
import styles from "./PropertyDetails3.module.css";
import { Checkbox, Select } from "@chakra-ui/react";
const PropertyDetails3 = ({ type = "Cottage" }) => {
  const [value, setValue] = React.useState("1");
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.box_1}>
          <h1>Tell us more about the accommodation type</h1>
        </div>
        <div className={styles.box_2}>
          <div className={styles.box_2_selection_1}>
            <h1>{type}</h1>
            <div></div>
          </div>
          <div className={styles.box_2_selection_2}>
            <div>
              <label>How many {type} do you have? </label>
              <Select>
                <option value="1" selected="selected">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
              </Select>
            </div>
            <div>
              <label>Max Guests In Each Apartment</label>
              <Select>
                <option value="1" selected="selected">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
              </Select>
            </div>

            <div>
              <label>Bedrooms In Each Apartment</label>
              <Select>
                <option value="1" selected="selected">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Select>
            </div>
            <div>
              <label>Bathrooms In Each Apartment</label>
              <Select>
                <option value="1" selected="selected">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Select>
            </div>
          </div>
          <div className={styles.box_2_selection_3}>
            <h1>Select whats applicable for Apartment</h1>
            <div onChange={setValue} value={value}>
              <Checkbox value="Kitchen">Kitchen</Checkbox>
              <Checkbox value="AC">AC</Checkbox>
              <Checkbox value="TV">TV</Checkbox>
              <Checkbox value="Sofa">Sofa</Checkbox>
              <Checkbox value="Microwave">Microwave</Checkbox>
              <Checkbox value="Fridge">Fridge</Checkbox>
              <Checkbox value="Induction Cooktop">Induction Cooktop</Checkbox>
              <Checkbox value="Balcony">Balcony</Checkbox>
              <Checkbox value="Bathtub">Bathtub</Checkbox>
              <Checkbox value="Housekeeping">Housekeeping</Checkbox>
              <Checkbox value="Linen Provided">Linen Provided</Checkbox>
              <Checkbox value="Private Swimming Pool">
                Private Swimming Pool
              </Checkbox>
              <Checkbox value="Toiletries">Toiletries</Checkbox>
            </div>
          </div>
        </div>
        <div className={styles.box_3}>
          <button>PREVIOUS</button>
          <button>NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails3;
