import { toast } from "react-toastify";
import { postAPI } from "../utils/fetchAPIs";
import { Navigate } from "react-router-dom";

export const submitHandler = async (e, { state, fields }, token) => {
  console.log("state", state);
  const {
    shipDatestamp,
    totalDeclaredValue,
    shipper_streetLines,
    shipper_city,
    shipper_stateOrProvinceCode,
    shipper_postalCode,
    shipper_countryCode,
    shipper_personName,
    shipper_emailAddress,
    shipper_phoneExtension,
    shipper_phoneNumber,
    shipper_companyName,
    weight,
  } = fields;
  if (
    totalDeclaredValue === "" ||
    shipDatestamp === "" ||
    shipper_streetLines === "" ||
    shipper_city === "" ||
    shipper_stateOrProvinceCode === "" ||
    shipper_postalCode === "" ||
    shipper_countryCode === "" ||
    shipper_personName === "" ||
    shipper_emailAddress === "" ||
    shipper_phoneExtension === "" ||
    shipper_phoneNumber === "" ||
    shipper_companyName === "" ||
    weight === ""
  ) {
    return toast.warn("Please enter all required fields!");
  }
  let fD = {
    requestedShipment: {
      shipDatestamp: fields?.shipDatestamp,
      totalDeclaredValue: {
        amount:
          fields?.totalDeclaredValue &&
          parseFloat(fields?.totalDeclaredValue).toFixed(2),
        currency: "USD",
      },
      shipper: {
        address: {
          streetLines: [fields?.shipper_streetLines],
          city: fields?.shipper_city,
          stateOrProvinceCode: fields?.shipper_stateOrProvinceCode,
          postalCode: fields?.shipper_postalCode,
          countryCode: fields?.shipper_countryCode,
          residential: true,
        },
        contact: {
          personName: fields?.shipper_personName,
          emailAddress: fields?.shipper_emailAddress,
          phoneExtension: fields?.shipper_phoneExtension,
          phoneNumber: fields?.shipper_phoneNumber,
          companyName: fields?.shipper_companyName,
        },
      },
      recipients: [
        {
          address: {
            streetLines: [state?.address?.location],
            city: state?.address?.city,
            stateOrProvinceCode: state?.address?.state,
            postalCode: state?.address?.pincode,
            countryCode: "US",
            residential: true,
          },
          contact: {
            personName: "John Taylor",
            emailAddress: "sample@company.com",
            phoneExtension: "+1",
            phoneNumber: "7094345671",
            companyName: "CBD City",
          },
          deliveryInstructions: "Delivery Instructions",
        },
      ],
      pickupType: "USE_SCHEDULED_PICKUP",
      serviceType: "GROUND_HOME_DELIVERY",
      packagingType: "YOUR_PACKAGING",
      totalWeight: fields?.weight,
      shippingChargesPayment: {
        paymentType: "SENDER",
      },
      labelSpecification: {
        labelFormatType: "COMMON2D",
        labelOrder: "SHIPPING_LABEL_FIRST",
        labelStockType: "PAPER_85X11_TOP_HALF_LABEL",
        labelRotation: "UPSIDE_DOWN",
        imageType: "PDF",
        labelPrintingOrientation: "TOP_EDGE_OF_TEXT_FIRST",
        returnedDispositionDetail: true,
      },
      requestedPackageLineItems: [
        {
          weight: {
            units: "LB",
            value: fields?.weight,
          },
        },
      ],
    },
    labelResponseOptions: "LABEL",
    accountNumber: {
      value: "740561073",
    },
    orderId: state?.orderInfo?.orderId,
  };

  const res = await postAPI("admin/order/add-shipment", fD, token);
  if (res?.status) {
    Navigate(-1);
  } else {
    toast.error("The information must be correct.");
  }
  return res;
};
