import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Payment.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { SiPhonepe } from "react-icons/si";
const Payment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="sm" borderRadius="0">
        <ModalOverlay />
        <ModalContent borderRadius="0">
          <ModalHeader
            display={"flex"}
            justifyContent="flex-start"
            gap={"3"}
            borderRadius="0"
            borderBottom={"1px solid #66666666"}
            width="90%"
            margin={"auto"}
          >
            <div
              style={{
                display: "inline-flex",
                objectFit: "contain",
                width: "20%",
              }}
            >
              <img
                src="https://d2vcelvjdj7n25.cloudfront.net/static/new_template/img/logo-teal.450ffb75ec3e.png"
                alt=""
                style={{ objectFit: "contain" }}
                width={"100%"}
              />
            </div>
            <div>Tripvillas.com</div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody borderRadius="0">
            <div className={styles.payment_wrapper}>
              <div className={styles.payment_method}>
                <div>Preferred Payment Method</div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    <div>
                      <SiPhonepe fontSize={"23px"} color="#6237AE" />
                    </div>
                    <div>UPI - PhonePe</div>
                  </div>
                  <div>
                    <MdArrowForwardIos fontSize={"23px"} color="teal" />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    <div>
                      <img
                        src="https://cdn.razorpay.com/app/googlepay.svg"
                        alt=""
                        width={"23px"}
                      />
                    </div>
                    <div>UPI - Google Pay</div>
                  </div>
                  <div>
                    <MdArrowForwardIos fontSize={"23px"} color="teal" />
                  </div>
                </div>
              </div>
              <div className={styles.cards}>
                <div>Cards, UPI & More</div>
                <div>
                  <div>
                    <img
                      src="https://cdn0.iconfinder.com/data/icons/business-startup-10/50/23-64.png"
                      alt=""
                      width={"30px"}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "17px" }}>Card</div>
                    <div style={{ fontSize: "15px" }}>
                      Visa, MasterCard, RuPay & More
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/miscellaneous-371-color-shadow/128/paying_electronics_online_payment_upi_banking_digital_pay-accept-256.png"
                      alt=""
                      width={"30px"}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "17px" }}>UPI ? QR</div>
                    <div style={{ fontSize: "15px", overflow: "elipse" }}>
                      PhonePe,Google pay,Rupay & More
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="https://cdn0.iconfinder.com/data/icons/business-953/42/bank-64.png"
                      alt=""
                      width={"30px"}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "17px" }}>Net Banking</div>
                    <div style={{ fontSize: "15px" }}>All Indian Banks</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/custom-ios-14-1/60/Wallet-64.png"
                      alt=""
                      width={"30px"}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "17px" }}>Wallets</div>
                    <div style={{ fontSize: "15px" }}>PhonePe & More</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/e-commerce-585/512/Pay_Later-64.png"
                      alt=""
                      width={"30px"}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "17px" }}>Pay Later</div>
                    <div style={{ fontSize: "15px" }}>ICICI</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/ui-elements-set-24/512/hand_with_dollar-64.png"
                      alt=""
                      width={"30px"}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "17px" }}>EMI</div>
                    <div style={{ fontSize: "15px" }}>
                      EMI via Debit/Credit cards & One Card
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter borderRadius="0" justifyContent={"flex-start"}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ width: "40%" }}>Value</div>
              <div style={{ width: "280px" }}>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={onClose}
                  width="100%"
                >
                  Pay Now
                </Button>
              </div>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Payment;
