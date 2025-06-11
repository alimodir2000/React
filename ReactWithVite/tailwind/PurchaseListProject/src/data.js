export const data =
// Caution: ConfigName Should be Uppercase
// ServiceId is SDP PackageId
{
  "TapcellUrl": "https://api.tapsell.ir/v2/postbacks/by-click?clickId",
  "actwebUrl": "http://offers.actwebmedia.affise.com/postback?clickid",
  "mobipiumUrl": "http://mobipiumlink.com/conversion/index.php?jp",
  "headwayUrl": "http://lead.mobra.in/?token=f357857&hwdid",
  "collectsentUrl": "http://collectsentcallback.com/dlv/track.php?ccuid",
  "level23Url": "http://postback.level23.nl/?currency=USD&handler=10868&hash=bb69655e51a75221991d33d3a8fc6b32&tracker",
  "adjomoUrl": "http://postback.adjomo.com/?a=5f919511663f63404&clickid",
  "sconvtrkUrl": "http://sconvtrk.com/conversion/7bbd4ad323690d8155d00a226cd56690433859d7/?aid=237593&visitor_id",
  "richadsUrl": "http://xml.auxml.com/log?action=conversion&key=",
  "cpaUrl": "http://cpa.cpa-adnetwork.com/p?mid=1808&tid",
  "AdNetwork": {
    "AdXmiNetworkUrl": "http://track.miadx.net/aff_lsr?transaction_id",
    "TapcellNetworkUrl": "http://track.miadx.net/aff_lsr?transaction_id",
    "KimiaNetworkUrl": "http://sign.route-conversion.com/conversion_get/pixel.jpg?kp",
    "actwebUrl": "http://offers.actwebmedia.affise.com/postback?clickid",
    "mobipiumUrl": "http://mobipiumlink.com/conversion/index.php?jp",
    "headwayUrl": "http://lead.mobra.in/?token=f357857&hwdid",
    "collectsentUrl": "http://collectsentcallback.com/dlv/track.php?ccuid",
    "level23Url": "http://postback.level23.nl/?currency=USD&handler=10868&hash=bb69655e51a75221991d33d3a8fc6b32&tracker",
    "adjomoUrl": "http://postback.adjomo.com/?a=5f919511663f63404&clickid",
    "sconvtrkUrl": "http://sconvtrk.com/conversion/7bbd4ad323690d8155d00a226cd56690433859d7/?aid=237593&visitor_id",
    "cpaUrl": "http://cpa.cpa-adnetwork.com/p?mid=1808&tid",
    "richadsUrl": "http://xml.auxml.com/log?action=conversion&key="
  },

  "75C805F2-3F8F-4EFF-B0B3-09F6B79E5065": {
    "ServiceId": "75C805F2-3F8F-4EFF-B0B3-09F6B79E5065",
    "Name": "Simayeaval",
    "ShortCode": "9820902",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8003/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "8e37cda54df14e73921f1e7028ee0833",
        "ServiceName": "CHUBPSIMAY1",
        "SubChargeCode": "HUBSUBCHUBPSIMAY1",
        "UnsubChargeCode": "HUBUSUBCHUBPSIMAY1"
      },
      "SDPOperator": "Mci"
    }
  },
  "98818C1B-2357-4DD1-BE32-8F3B743B80EE": {
    "ServiceId": "98818C1B-2357-4DD1-BE32-8F3B743B80EE",
    "Name": "clipum_ksa_3anet_virgin",
    "OtpLength": 4,
    "ShortCode": "300386",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.34:8022/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "ThreeANet",
      "ThreeANet": {
        "ApiKey": "9fb901fdfe3b7302b02e1f7685de4448",
        "ServiceConnectionId": "3240",
        "DefaultLang": "ar",
        "OtpPushApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.send_pincode/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}&async=0",
        "OtpConfirmApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.subscribe_pincode/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}&pincode={pincode}",
        "UnsubApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.unsub_user/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },

      "SDPOperator": ""
    }
  },
  "9D5351D2-BF8A-4C63-A429-1F177BFCDE4E": {
    "ServiceId": "9D5351D2-BF8A-4C63-A429-1F177BFCDE4E",
    "Name": "clipum_ksa_3anet_stc",
    "OtpLength": 4,
    "ShortCode": "802087",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.34:8022/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "ThreeANetCG",
      "ThreeANetCG": {
        "ApiKey": "9fb901fdfe3b7302b02e1f7685de4448",
        "ServiceConnectionId": "3107",
        "DefaultLang": "ar",
        "OtpPushApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.send_pincode/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}&async=0",
        "OtpConfirmApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.subscribe_pincode/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}&pincode={pincode}",
        "UnsubApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.unsub_user/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID",
        "GetCgUrlApi": "http://console.ngvas.com/en/api/get/v1.5/users.stc_echannel/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}&success_page={CGCallBackUrl}"
      },

      "SDPOperator": ""
    }
  },
  "99FE0C84-58B5-424A-BCA8-1371A258EAC0": {
    "ServiceId": "99FE0C84-58B5-424A-BCA8-1371A258EAC0",
    "Name": "vidanet_ksa_3anet_mobily",
    "OtpLength": 6,
    "ShortCode": "625827",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.34:8022/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "ThreeANet",
      "ThreeANet": {
        "ApiKey": "9fb901fdfe3b7302b02e1f7685de4448",
        "ServiceConnectionId": "3516",
        "DefaultLang": "ar",
        "OtpPushApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.send_pincode/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}&async=0",
        "OtpConfirmApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.subscribe_pincode/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}&pincode={pincode}",
        "UnsubApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.unsub_user/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },

      "SDPOperator": ""
    }
  },
  "E6355B06-EC5C-4497-87FF-87DFE650B0AB": {
    "ServiceId": "E6355B06-EC5C-4497-87FF-87DFE650B0AB",
    "Name": "clipum_ksa_3anet_zain",
    "OtpLength": 4,
    "ShortCode": "703426",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.34:8022/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "ThreeANet",
      "ThreeANet": {
        "ApiKey": "9fb901fdfe3b7302b02e1f7685de4448",
        "ServiceConnectionId": "3111",
        "DefaultLang": "ar",
        "OtpPushApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.send_pincode/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}&async=0",
        "OtpConfirmApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.subscribe_pincode/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}&pincode={pincode}",
        "UnsubApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.unsub_user/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },

      "SDPOperator": ""
    }
  },

  "6D33DAC4-70CE-4945-8C4D-54F6A4F82A10": {
    "ServiceId": "6D33DAC4-70CE-4945-8C4D-54F6A4F82A10",
    "Name": "clipum_ksa_3anet_mobily",
    "CacheInvalidMsisdn": true,
    "OtpLength": 6,
    "ShortCode": "607110",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.34:8022/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "ThreeANet",
      "ThreeANet": {
        "ApiKey": "9fb901fdfe3b7302b02e1f7685de4448",
        "ServiceConnectionId": "3108",
        "DefaultLang": "ar",
        "OtpPushApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.send_pincode/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}&async=0",
        "OtpConfirmApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.subscribe_pincode/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}&pincode={pincode}",
        "UnsubApi": "http://console.ngvas.com/{lang}/api/get/v1.1/users.unsub_user/?api_key={apikey}&msisdn={msisdn}&service_connection_id={service_connection_id}",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },

      "SDPOperator": ""
    }
  },
  "D86A7E30-5E67-4E20-AF7F-7E91559578FE": {
    "ServiceId": "D86A7E30-5E67-4E20-AF7F-7E91559578FE",
    "Name": "Tournament",
    "ShortCode": "9820901",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "69f37a4ef72146fa8d48b200e4bf91d6",
        "ServiceName": "CHUBPTORNOMENT",
        "SubChargeCode": "HUBSUBCHUBPTORNOME",
        "UnsubChargeCode": "HUBUSUBCHUBPTORNOM"
      },
      "SDPOperator": "Mci"
    }
  },
  "57A41DC8-84EC-41DC-89D2-C5F98109C515": {
    "ServiceId": "57A41DC8-84EC-41DC-89D2-C5F98109C515",
    "Name": "Rabona-Par",
    "ShortCode": "9850959",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "0f77c2874873491796c3aa7e12899db4",
        "ServiceName": "CPARRABONADIGITAL",
        "SubChargeCode": "PARSUBCPARRABONADI",
        "UnsubChargeCode": "PARUSUBCPARRABONAD"
      },
      "SDPOperator": "Mci"
    }
  },
  "D78D9C2D-B505-4F63-BB34-B395480E840D": {
    "ServiceId": "D78D9C2D-B505-4F63-BB34-B395480E840D",
    "Name": "Rabona-TV",
    "ShortCode": "9850959",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "026fcc0b31e9430f9574014bb31f83e0",
        "ServiceName": "CPARRABONATV",
        "SubChargeCode": "PARUSUBCPARRABONAT",
        "UnsubChargeCode": "PARUSUBCPARRABONAT"
      },
      "SDPOperator": "Mci"
    }
  },

  "58071F67-7605-4EC7-831C-F4063404B92C": {
    "ServiceId": "58071F67-7605-4EC7-831C-F4063404B92C",
    "Name": "Hashieh-Mci",
    "ShortCode": "9830726",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "86bb6edc73474481943cc4e327ffe770",
        "ServiceName": "CTELHASHIEH",
        "SubChargeCode": "TELSUBCTELHASHIEH",
        "UnsubChargeCode": "TELUSUBCTELHASHIEH"
      },
      "SDPOperator": "Mci"
    }
  },

  "1ECD80DC-3650-483B-ABD1-E50217EF7178": {
    "ServiceId": "1ECD80DC-3650-483B-ABD1-E50217EF7178",
    "Name": "Porsesh-Mci",
    "ShortCode": "9830783",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "088824e038384037a90ea4806b0cc3b1",
        "ServiceName": "CPARPORSESH",
        "SubChargeCode": "PARSUBCPARPORSESH",
        "UnsubChargeCode": "PARUSUBCPARPORSESH"
      },
      "SDPOperator": "Mci"
    }
  },

  "E56F5597-E26F-4487-9681-5789E2FC70D2": {
    "ServiceId": "E56F5597-E26F-4487-9681-5789E2FC70D2",
    "Name": "Resanet-Mci",
    "ShortCode": "9830736",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "e0213071fa93492c93b4a76272dc321a",
        "ServiceName": "CMOBRASANET",
        "SubChargeCode": "MOBSUBCMOBRASANET",
        "UnsubChargeCode": "MOBUSUBCMOBRASANET"
      },
      "SDPOperator": "Mci"
    }
  },
  "67A41DC8-84EC-41DC-89D2-C5F98109C515": {
    "ServiceId": "67A41DC8-84EC-41DC-89D2-C5F98109C515",
    "Name": "ShomareshMakoos-Mci",
    "ShortCode": "98307181",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "c505cbc4ccd246ba997037adf82da327",
        "ServiceName": "CPAKSHOMARESHEMAKOOS",
        "SubChargeCode": "PAKSUBCPAKSHOMARES",
        "UnsubChargeCode": "PAKUSUBCPAKSHOMARE"
      },
      "SDPOperator": "Mci"
    }
  },
  "A72B5598-A62A-421F-A3FF-C809855B9C6B": {
    "ServiceId": "A72B5598-A62A-421F-A3FF-C809855B9C6B",
    "Name": "Nama3-Mci",
    "ShortCode": "9830725",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "c9bb18eec5784c13b7cd0adb821f6b2e",
        "ServiceName": "CTELNAMA3",
        "SubChargeCode": "TELSUBCTELNAMA3",
        "UnsubChargeCode": "TELUSUBCTELNAMA3"
      },
      "SDPOperator": "Mci"
    }
  },
  "24B3FC94-D864-442E-A4BB-FB1646550725": {
    "ServiceId": "24B3FC94-D864-442E-A4BB-FB1646550725",
    "Name": "Dastpokht-Mci",
    "ShortCode": "9840510",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "7d224b0e930548d5be67fe0f4f257b0e",
        "ServiceName": "CHUBDASTPOKHT",
        "SubChargeCode": "HUBSUBCHUBDASTPOKH",
        "UnsubChargeCode": "HUBUSUBCHUBDASTPOK"
      },
      "SDPOperator": "Mci"
    }
  },
  "3B5FC7CC-5428-4B22-88EE-5196426C436C": {
    "ServiceId": "3B5FC7CC-5428-4B22-88EE-5196426C436C",
    "Name": "Service3-5000",
    "ShortCode": "9830781",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "https://sdp.cammpaign.com/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "1653971ee1e6495ca2405b5ec480c904",
        "ServiceName": "سرویس 3",
        "SubChargeCode": "APPSUBSERVICE3BUND",
        "UnsubChargeCode": "APPUSUBSERVICE3BUN"
      },
      "SDPOperator": "Mci"
    }
  },
  "3B5FC7CC-5428-4B22-88EE-5196426C436D": {
    "ServiceId": "3B5FC7CC-5428-4B22-88EE-5196426C436D",
    "Name": "Service3-6000",
    "ShortCode": "9830781",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "https://sdp.cammpaign.com/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "1fdeb045760e454fbe3637957963e407",
        "ServiceName": "CAPPSERVICE3BUNDLE6000",
        "SubChargeCode": "APPSUBCAPPSERVICE",
        "UnsubChargeCode": "APPUSUBCAPPSERVIC"
      },
      "SDPOperator": "Mci"
    }
  },
  "FF84B59F-7187-4B75-8D11-7DBD78B0EDDA": {
    "ServiceId": "FF84B59F-7187-4B75-8D11-7DBD78B0EDDA",
    "Name": "Negative-Mci",
    "ShortCode": "9840720",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "41136da03058432e8eafccf9557247ff",
        "ServiceName": "CBEINEGATIVE",
        "SubChargeCode": "BEISUBCBEINEGATIVE",
        "UnsubChargeCode": "BEIUSUBCBEINEGATIV"
      },
      "SDPOperator": "Mci"
    }
  },
  "30E4583B-3A2F-4164-82CB-C773635803A4": {
    "ServiceId": "30E4583B-3A2F-4164-82CB-C773635803A4",
    "Name": "Negative-Mci-700",
    "ShortCode": "9840720",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "c04445b4b31846538b45f2de9f8d54cd",
        "ServiceName": "CBEINEGATIVE",
        "SubChargeCode": "BEISUBCBEINEGATIV",
        "UnsubChargeCode": "BEIUSUBCBEINEGATI"
      },
      "SDPOperator": "Mci"
    }
  },
  "8EF81B54-C7DE-467C-9D04-1455D6203D73": {
    "ServiceId": "8EF81B54-C7DE-467C-9D04-1455D6203D73",
    "Name": "Scoreboard",
    "ShortCode": "9850952",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "b93353c952b141a3baf960649a5d5556",
        "ServiceName": "CPARSCOREBOARD",
        "SubChargeCode": "PARSUBCPARSCOREBOA",
        "UnsubChargeCode": "PARUSUBCPARSCOREBO"
      },
      "SDPOperator": "Mci"
    }
  },
  "CFE64733-0F0D-493D-83E8-E6E05DB6AECB": {
    "ServiceId": "CFE64733-0F0D-493D-83E8-E6E05DB6AECB",
    "Name": "Havadar",
    "ShortCode": "9850955",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "bf6c3bd43bc34851a724d9dcd6a70a28",
        "ServiceName": "CPARHAVADAR",
        "SubChargeCode": "PARSUBCPARHAVADAR",
        "UnsubChargeCode": "PARUSUBCPARHAVADAR"
      },
      "SDPOperator": "Mci"
    }
  },
  "7020B182-89F1-4E1C-969E-85F5A5B9D9F9": {
    "ServiceId": "7020B182-89F1-4E1C-969E-85F5A5B9D9F9",
    "Name": "Ashpazshow",
    "ShortCode": "9850956",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "50ab6972781b4c1ebb6319426d14c217",
        "ServiceName": "CPARASHPAZSHOW",
        "SubChargeCode": "PARSUBCPARASHPAZSH",
        "UnsubChargeCode": "PARUSUBCPARASHPAZS"
      },
      "SDPOperator": "Mci"
    }
  },
  "EA744DC0-BBCB-41B8-9267-1DC84233737A": {
    "ServiceId": "EA744DC0-BBCB-41B8-9267-1DC84233737A",
    "Name": "Ravitel-Mci",
    "ShortCode": "9830720",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "616c01f564a844d4921ff6c91d413998",
        "ServiceName": "راویتل و دریافت جایزه",
        "SubChargeCode": "TELSUBCTELRAVITELN",
        "UnsubChargeCode": "TELUSUBCTELRAVITEL"
      },
      "SDPOperator": "Mci"
    }
  },
  "4158ACAF-71D2-4AE4-8C1C-AE5049843F6B": {
    "ServiceId": "4158ACAF-71D2-4AE4-8C1C-AE5049843F6B",
    "Name": "Namanet-Mci",
    "ShortCode": "9840502",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "f644e104d14a4944a62bb4f63224ab84",
        "ServiceName": "Namanet-5000",
        "SubChargeCode": "HUBSUBCNAMANET",
        "UnsubChargeCode": "HUBUSUBCNAMANET"
      },
      "SDPOperator": "Mci"
    }
  },
  "8FA95B89-03E1-4350-87EF-3315CD1C5667": {
    "ServiceId": "8FA95B89-03E1-4350-87EF-3315CD1C5667",
    "Name": "Kavosh-Mci",
    "ShortCode": "9830738",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "adc8b3cf4aeb4753a5118a14dabb41ed",
        "ServiceName": "Kavosh-5000",
        "SubChargeCode": "MOBSUBCMOBKAVOSH",
        "UnsubChargeCode": "MOBUSUBCMOBKAVOSH"
      },
      "SDPOperator": "Mci"
    }
  },
  "4CAFCDEE-4CCD-4DB1-B986-E8AA0E3394F7": {
    "ServiceId": "4CAFCDEE-4CCD-4DB1-B986-E8AA0E3394F7",
    "Name": "Click-Mci",
    "ShortCode": "9840721",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "1f8abe11733a4e5a999002b680917450",
        "ServiceName": "Click-5000",
        "SubChargeCode": "BEISUBCBEICLICK",
        "UnsubChargeCode": "BEIUSUBCBEICLICK"
      },
      "SDPOperator": "Mci"
    }
  },
  "4B5FC7CC-5428-4B22-88EE-5196426C4555": {
    "ServiceId": "4B5FC7CC-5428-4B22-88EE-5196426C4555",
    "Name": "Artel-Mci",
    "ShortCode": "98309203",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "16c610d54c494a4fae7d1383de2b1257",
        "ServiceName": "Artel-5000",
        "SubChargeCode": "TBLSUBCTBLARTEL",
        "UnsubChargeCode": "TBLUSUBCTBLARTEL"
      },
      "SDPOperator": "Mci"
    }
  },
  "F1C2C863-7087-4967-B578-779D4D202FE5": {
    "ServiceId": "F1C2C863-7087-4967-B578-779D4D202FE5",
    "Name": "Telecup-Mci",
    "ShortCode": "9840525",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "30e8347930034491be512207e112ec47",
        "ServiceName": "Telecup-5000",
        "SubChargeCode": "HUBSUBGaameAval",
        "UnsubChargeCode": "HUBUSUBGaameAval"
      },
      "SDPOperator": "Mci"
    }
  },
  "722DE0C2-91B6-4924-B291-91BC9B9F5C1F": {
    "ServiceId": "722DE0C2-91B6-4924-B291-91BC9B9F5C1F",
    "Name": "HamAva-Mci",
    "ShortCode": "9830739",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "0abcc2a980214ca1a0a9f13ed227a9af",
        "ServiceName": "CMOBHAMAVA",
        "SubChargeCode": "MOBSUBCMOBHAMAVA",
        "UnsubChargeCode": "MOBUSUBCMOBHAMAVA"
      },
      "SDPOperator": "Mci"
    }
  },
  "08641610-B723-4449-B6A3-7A87FFFC2262": {
    "ServiceId": "08641610-B723-4449-B6A3-7A87FFFC2262",
    "MciRegEx": "",
    "Name": "Farapayamak",
    "ShortCode": "10005328",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Farapayamak",
      "Farapayamak": {
        "Username": "nova",
        "Password": "DoneSho@97",
        "ShortCode": 10005328,
        "Url": "https://rest.payamak-panel.com/api/SendSMS/SendSMS",
        "MessageTemplate": "کد  احراز هویت شما: {code}"
      },
      "SDPOperator": "Farapayamak"
    }
  },
  "BD4E0B7F-8355-491A-859F-03FCE645FD52": {
    "ServiceId": "BD4E0B7F-8355-491A-859F-03FCE645FD52",
    "MciRegEx": "",
    "Name": "Kavenegar",
    "ShortCode": "10008445",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Kavenegar",
      "Kavenegar": {
        "VerifyTemplate": "VerifyNamaraz",
        "ApiKey": "4E4C5A62534B6870443369357A423631717059637A2B473861756163437163786451466D5168785046356B3D"

      },
      "SDPOperator": "Kavenegar"
    }
  },
  "25DC013A-EC55-482E-978D-0197C8137C25": {
    "ServiceId": "25DC013A-EC55-482E-978D-0197C8137C25",
    "MciRegEx": "^(989|9|09)(10|11|12|13|14|15|16|17|18|19|90|91|92)\\d{7}$",
    "Name": "Kavenegar",
    "ShortCode": "10008445",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Kavenegar",
      "Kavenegar": {
        "VerifyTemplate": "VerifyNamacent",
        "ApiKey": "4E4C5A62534B6870443369357A423631717059637A2B473861756163437163786451466D5168785046356B3D"

      },
      "SDPOperator": "Kavenegar"
    }
  },
  "13A301EE-EABD-474C-8522-122B11F1150C": {
    "ServiceId": "13A301EE-EABD-474C-8522-122B11F1150C",
    "MciRegEx": "",
    "Name": "Kavenegar",
    "ShortCode": "10008445",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Kavenegar",
      "Kavenegar": {
        "VerifyTemplate": "VerifyCavan",
        "ApiKey": "4E4C5A62534B6870443369357A423631717059637A2B473861756163437163786451466D5168785046356B3D"

      },
      "SDPOperator": "Kavenegar"
    }
  },
  "2363DFF1-1263-4BDC-8ADC-B6B933993AA1": {
    "ServiceId": "2363DFF1-1263-4BDC-8ADC-B6B933993AA1",
    "MciRegEx": "",
    "Name": "Kavenegar",
    "ShortCode": "10008445",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Kavenegar",
      "Kavenegar": {
        "VerifyTemplate": "VerifyTacticPlus",
        "ApiKey": "4E4C5A62534B6870443369357A423631717059637A2B473861756163437163786451466D5168785046356B3D"

      },
      "SDPOperator": "Kavenegar"
    }
  },
  "9C52AA3A-F3F5-4648-BDD9-A7C56425A3A1": {
    "ServiceId": "9C52AA3A-F3F5-4648-BDD9-A7C56425A3A1",
    "MciRegEx": "",
    "Name": "Kavenegar",
    "ShortCode": "10008445",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Kavenegar",
      "Kavenegar": {
        "VerifyTemplate": "VerifyNamana",
        "ApiKey": "4E4C5A62534B6870443369357A423631717059637A2B473861756163437163786451466D5168785046356B3D"

      },
      "SDPOperator": "Kavenegar"
    }
  },


  "C7420707-3F5E-46BE-AF4E-CF94516C5BAE": {
    "ServiceId": "C7420707-3F5E-46BE-AF4E-CF94516C5BAE",
    "MciRegEx": "^(989|9|09)(10|11|12|13|14|15|16|17|18|19|90|91|92)\\d{7}$",
    "Name": "Kavenegar",
    "ShortCode": "10008445",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Kavenegar",
      "Kavenegar": {
        "VerifyTemplate": "VerifyFarsin",
        "ApiKey": "4E4C5A62534B6870443369357A423631717059637A2B473861756163437163786451466D5168785046356B3D"

      },
      "SDPOperator": "Kavenegar"
    }
  },


  "E285A384-062B-405E-8AF8-0B0D6D19D711": {
    "ServiceId": "E285A384-062B-405E-8AF8-0B0D6D19D711",
    "MciRegEx": "",
    "Name": "Farapayamak",
    "ShortCode": "10005328",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Farapayamak",
      "Farapayamak": {
        "Username": "nova",
        "Password": "DoneSho@97",
        "ShortCode": 10005328,
        "Url": "https://rest.payamak-panel.com/api/SendSMS/SendSMS",
        "MessageTemplate": "كد فعالسازي: {code} براي تاييد فعالسازي كد بالا را ارسال نماييد. تعرفه روزانه 500 تومان"
      },
      "SDPOperator": "Farapayamak"
    }
  },
  "1D05B251-4151-4570-A4CF-8B075FC504C8": {
    "ServiceId": "1D05B251-4151-4570-A4CF-8B075FC504C8",
    "Name": "Archive-Mci",
    "ShortCode": "9830752",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "2d8c9d643b274d489514792f50919952",
        "ServiceName": "ARSHIV",
        "SubChargeCode": "HAMSUBCHAMARSHIV",
        "UnsubChargeCode": "HAMUSUBCHAMARSHIV"
      },
      "SDPOperator": "Mci"
    }
  },
  "6E5A2B9D-4C1D-4DF3-9DA4-865DB24ECA32": {
    "ServiceId": "6E5A2B9D-4C1D-4DF3-9DA4-865DB24ECA32",
    "Name": "ServiceAvval",
    "ShortCode": "9840520",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "1c86d122289640fdbcc4f29659f5b708",
        "ServiceName": "CHUBSERVICEAVAL",
        "SubChargeCode": "HUBSUBCHUBSERVICEA",
        "UnsubChargeCode": "HUBUSUBCHUBSERVICE"
      },
      "SDPOperator": "Mci"
    }
  },
  "310EA21C-6058-4BE7-8DD2-D697EF7D6306": {

    "ServiceId": "310EA21C-6058-4BE7-8DD2-D697EF7D6306",
    "Name": "Negareh",
    "ShortCode": "9840504",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "cc6d6c6843c642a7b173018bd2807c6b",
        "ServiceName": "CHUBNEGARE",
        "SubChargeCode": "HUBSUBCHUBNEGARE",
        "UnsubChargeCode": "HUBUSUBCHUBNEGARE"
      },
      "SDPOperator": "Mci"
    }
  },
  "1EBF4BAE-23AE-413F-A3E5-7F840E805C70": {
    "ServiceId": "1EBF4BAE-23AE-413F-A3E5-7F840E805C70",
    "Name": "JamTalaei",
    "ShortCode": "98209005",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 5,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Hub",

      "Hub": {
        "UserId": "54280",
        "Password": "405509@Ucan",
        "ServiceId": "733",
        "Originator": "209005",
        "Cost": 5
      },

      "SDPOperator": "Hub"
    }
  },
  "63D737C9-1B45-4C37-B019-C5FCE8D82834": {
    "ServiceId": "63D737C9-1B45-4C37-B019-C5FCE8D82834",
    "Name": "Techbook-MobineOne",
    "ShortCode": "98307399",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://stats.serviice3.com/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "MobinOne",

      "MobinOne": {
        "UserId": "sepandar",
        "Password": "jbot3tzm!",
        "ServiceKey": "558d788d42984d158a309692a4ef9129",
        "ServiceUrl": "http://sepandarmobinone/server.php?wsdl",
        "ChargeCode": "mobsubcmonteckbook",
        "UnsubscriptioneCode": "mobusubcmonteckboo"
      },
      "SDPOperator": "MobinOne"
    }
  },
  "5C4A13D1-9197-4101-8E7D-6FA046E2D64F": {
    "ServiceId": "5C4A13D1-9197-4101-8E7D-6FA046E2D64F",
    "Name": "Downloadify",
    "ShortCode": "9830784",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "8e4b86eb0a734cf1bf8e733fcaed66ed",
        "ServiceName": "CPARDOWNLOADIFY",
        "SubChargeCode": "PARSUBCPARDOWNLOAD",
        "UnsubChargeCode": "PARUSUBCPARDOWNLOA"
      },
      "SDPOperator": "Mci"
    }
  },
  "7FC71CE5-8DA7-4CEE-8B9F-9DEEE1A44EAA": {
    "ServiceId": "7FC71CE5-8DA7-4CEE-8B9F-9DEEE1A44EAA",
    "Name": "Touchmart-600",
    "ShortCode": "98307171",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mci",
      "Mci": {
        "ConfirmationUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/chargeotp",
        "GetTransactionIdUrl": "http://IMI-SDP.parham-co.ir/apigw/charging/pushotp",
        "ServiceKey": "819cca54e8f84de3949616c62f32174",
        "ServiceName": "CPAKTACHMART2",
        "SubChargeCode": "PAKSUBCPAKTACHMAR2",
        "UnsubChargeCode": "PAKUSUBCPAKTACHMA2"
      },
      "SDPOperator": "Mci"
    }
  },
  "354E8BA8-6D36-4096-BF48-DA60E282062E": {
    "ServiceId": "354E8BA8-6D36-4096-BF48-DA60E282062E",
    "Name": "Hadafaval",
    "ShortCode": "98405509",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 5,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Hub",

      "Hub": {
        "UserId": "54280",
        "Password": "405509@Ucan",
        "ServiceId": "549",
        "Originator": "405509",
        "Cost": 5
      },

      "SDPOperator": "Hub"
    }
  },
  "7D81611B-E6C6-4872-83F2-1A0CB05C74EB": {
    "ServiceId": "7D81611B-E6C6-4872-83F2-1A0CB05C74EB",
    "Name": "Vivedeo",
    "OtpLength": 4,
    "ShortCode": "96300371",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "VirginMobile",
      "VirginMobile": {
        "User": "2570766880",
        "Password": "5686289a-e6b4-4d91-9697-7a1f6e07c2cf",
        "ServiceId": "",
        "PackageId": "1170",
        "PushPinUrl": "http://cmssub-prod.altruistindia.com/subscription-manager/v1/pin/push",
        "ConfirmPinSubscriptionUrl": "http://cmssub-prod.altruistindia.com/subscription-manager/v1/pin/verify",
        "CancelSubscriptionUrl": "http://cmsunsub-prod.altruistindia.com/subscription-manager/v1/unsub",
        "ClientId": "2570766880",
        "Key": "7BEHUKqCBPa5vQRt"
      },
      "SDPOperator": "Kavenegar"
    }
  },

  "08ACA7C4-5C16-4E34-944E-F14C62C8C302": {
    "ServiceId": "08ACA7C4-5C16-4E34-944E-F14C62C8C302",
    "Name": "idealme_ksa_virgin",
    "OtpLength": 4,
    "ShortCode": "963003710",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "VirginMobile",
      "VirginMobile": {
        "User": "2570766880",
        "Password": "5686289a-e6b4-4d91-9697-7a1f6e07c2cf",
        "ServiceId": "",
        "PackageId": "1332",
        "PushPinUrl": "http://cmssub-prod.altruistindia.com/subscription-manager/v1/pin/push",
        "ConfirmPinSubscriptionUrl": "http://cmssub-prod.altruistindia.com/subscription-manager/v1/pin/verify",
        "CancelSubscriptionUrl": "http://cmsunsub-prod.altruistindia.com/subscription-manager/v1/unsub",
        "ClientId": "2570766880",
        "Key": "7BEHUKqCBPa5vQRt"
      },
      "SDPOperator": "Kavenegar"
    }
  },

  "9CB5B052-4484-4B30-8E5D-0C161F21071E": {
    "ServiceId": "9CB5B052-4484-4B30-8E5D-0C161F21071E",
    "Name": "netclips_ksa_virgin",
    "OtpLength": 4,
    "ShortCode": "9630037100",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "VirginMobile",
      "VirginMobile": {
        "User": "RPB",
        "Password": "hdfaahdgqi",
        "ServiceId": "",
        "PackageId": "1332",
        "PushPinUrl": "http://aggregatorsdp.vivideo-app.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://aggregatorsdp.vivideo-app.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "CancelSubscriptionUrl": "http://aggregatorsdp.vivideo-app.com/Moneta/getUnsub.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID"
      },
      "SDPOperator": "Kavenegar"
    }
  },
  "772D6C92-0575-481E-AFD1-A14424E6FBB0": {
    "ServiceId": "772D6C92-0575-481E-AFD1-A14424E6FBB0",
    "Name": "idealme_uae_etisalat_qanavatv1",
    "OtpLength": 4,
    "ShortCode": "1111000",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatV1",
      "QanavatV1": {
        "Username": "6834349719",
        "Password": "77260805-e170-4240-9a51-af36b47a92e9",
        "ClientId": "6834349719",
        "EncryptionKey": "futtdCMnFcAvO2n0",
        "adPartnerName": "google",
        "PackageId": "2498",
        "DefaultLanguage": "En",
        "Country": "X4B7ZQ2",
        "Operator": "X4B7ZN5",
        "Channel": "web",
        "OtpPushPinUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/push",
        "OtpValidationUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/verify",
        "EvinaScriptUrl": "https://cmssub.altruistindia.com/evina/v1/script",
        "UnsubApiUrl": "https://cmsunsub.altruistindia.com/subscription-manager/v1/unsub",
        "EvinaEnabled": true,
        "logEnabled": true
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },

  "92D1B393-D016-4A66-8EC0-ADAE064DE294": {
    "ServiceId": "92D1B393-D016-4A66-8EC0-ADAE064DE294",
    "Name": "idealme_ksa_mobily_qanavatv1",
    "OtpLength": 6,
    "ShortCode": "600206000",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatV1",
      "QanavatV1": {
        "Username": "2992686256",
        "Password": "fed853c7-2b53-4661-b9a4-871e2dd2e615",
        "ClientId": "2992686256",
        "EncryptionKey": "RPOXjdbAIEL8AkaF",
        "adPartnerName": "google",
        "PackageId": "4548",
        "DefaultLanguage": "En",
        "Country": "XRLORQS",
        "Operator": "BRDTGWQ",
        "Channel": "web",
        "OtpPushPinUrl": "https://cmssub-stg.altruistindia.com/subscription-manager/v1/pin/push",
        "OtpValidationUrl": "https://cmssub-stg.altruistindia.com/subscription-manager/v1/pin/verify",
        "EvinaScriptUrl": "https://cmssub.altruistindia.com/evina/v1/script",
        "UnsubApiUrl": "https://cmsunsub-stg.altruistindia.com/subscription-manager/v1/unsub",
        "EvinaEnabled": false,
        "logEnabled": true
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },

  "4F76200E-6525-4842-A140-DC15E035C70C": {
    "ServiceId": "4F76200E-6525-4842-A140-DC15E035C70C",
    "Name": "vvideo_uae_etisalat_qanavatv1",
    "OtpLength": 4,
    "ShortCode": "111100",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatV1",
      "QanavatV1": {
        "Username": "6834349719",
        "Password": "77260805-e170-4240-9a51-af36b47a92e9",
        "ClientId": "6834349719",
        "EncryptionKey": "futtdCMnFcAvO2n0",
        "adPartnerName": "google",
        "PackageId": "2095",
        "DefaultLanguage": "En",
        "Country": "X4B7ZQ2",
        "Operator": "X4B7ZN5",
        "Channel": "web",
        "OtpPushPinUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/push",
        "OtpValidationUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/verify",
        "EvinaScriptUrl": "https://cmssub.altruistindia.com/evina/v1/script",
        "UnsubApiUrl": "https://cmsunsub.altruistindia.com/subscription-manager/v1/unsub",
        "EvinaEnabled": true,
        "logEnabled": true


      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },

  "0836A4D9-F06F-4CB4-9731-5DBEAE04FDBD": {
    "ServiceId": "0836A4D9-F06F-4CB4-9731-5DBEAE04FDBD",
    "Name": "iclub_uae_du_timwecg",
    "OtpLength": 5,
    "ShortCode": "9952",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TimweCG",
      "TimweCG": {
        "CheckUrl": "https://api.dcbprotect.com/{username}/check",
        "RedirectUrl": "https://checkout.dcbprotect.com?m={m}&ti={ti}&locale={local}",
        "ServiceName": "iclub_uae",
        "Username": "sharpdynamic_du_uae",
        "Password": "kVcOsETraKAeOIlYSHJptEjmdMRKpfWj",
        "Service": "iclub",
        "pp": "30407",
        "m": "sharpdynamic_du_uae",
        "Carrier": "42403",
        "Country": "AE",
        "HtmlElement": "#request-btn"
      },
      "SDPOperator": ""
    }
  },


  "78C007A9-69FA-4B71-9303-AA022F4CCC41": {
    "ServiceId": "78C007A9-69FA-4B71-9303-AA022F4CCC41",
    "Name": "vvideo_iraq_zain_qanavatv1",
    "OtpLength": 5,
    "ShortCode": "96440890",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatV1",
      "QanavatV1": {
        "Username": "6834349719",
        "Password": "77260805-e170-4240-9a51-af36b47a92e9",
        "ClientId": "6834349719",
        "EncryptionKey": "futtdCMnFcAvO2n0",
        "adPartnerName": "google",
        "PackageId": "3261",
        "DefaultLanguage": "En",
        "Country": "I4X4WP0",
        "Operator": "P6E1OO9",
        "Channel": "web",
        "OtpPushPinUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/push",
        "OtpValidationUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/verify",
        "EvinaScriptUrl": "https://cmssub.altruistindia.com/evina/v1/script",
        "UnsubApiUrl": "https://cmsunsub.altruistindia.com/subscription-manager/v1/unsub",
        "EvinaEnabled": false,
        "logEnabled": true


      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },


  "1BA371E5-4460-4A42-B84A-39C0EF8AA785": {
    "ServiceId": "1BA371E5-4460-4A42-B84A-39C0EF8AA785",
    "Name": "vvideo_uae",
    "OtpLength": 4,
    "ShortCode": "1111",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatV1",
      "QanavatZein": {
        "PaymentUrl": "https://easyconnect.qanawatdigital.com/Payment.svc",
        "ServiceId": "971003001",
        "StringServiceId": "",
        "IdProvider": "97101",
        "IdVendor": "971003",
        "BillText": "",
        "PartnerId": "RPB",
        "Password": "GKntbYE$c2Hm)~",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      "QanavatV1": {
        "Username": "6834349719",
        "Password": "77260805-e170-4240-9a51-af36b47a92e9",
        "ClientId": "6834349719",
        "EncryptionKey": "futtdCMnFcAvO2n0",
        "adPartnerName": "google",
        "PackageId": "2095",
        "DefaultLanguage": "En",
        "Country": "X4B7ZQ2",
        "Operator": "X4B7ZN5",
        "Channel": "web",
        "OtpPushPinUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/push",
        "OtpValidationUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/verify",
        "EvinaScriptUrl": "https://cmssub.altruistindia.com/evina/v1/script",
        "UnsubApiUrl": "https://cmsunsub.altruistindia.com/subscription-manager/v1/unsub",
        "EvinaEnabled": true,
        "logEnabled": true
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },

  "5D153F4A-EEC1-40FE-B6B7-E64EF0A0602E": {
    "ServiceId": "5D153F4A-EEC1-40FE-B6B7-E64EF0A0602E",
    "Name": "idealme_uae",
    "OtpLength": 4,
    "ShortCode": "11110",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatV1",
      "QanavatZein": {
        "ServiceId": "971003003",
        "StringServiceId": "",
        "IdProvider": "97101",
        "IdVendor": "971003",
        "BillText": "",
        "PartnerId": "RPB",
        "Password": "GKntbYE$c2Hm)~",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID",
        "PaymentUrl": "https://easyconnect.qanawatdigital.com/Payment.svc"
      },
      "QanavatV1": {
        "Username": "6834349719",
        "Password": "77260805-e170-4240-9a51-af36b47a92e9",
        "ClientId": "6834349719",
        "EncryptionKey": "futtdCMnFcAvO2n0",
        "adPartnerName": "google",
        "PackageId": "2498",
        "DefaultLanguage": "En",
        "Country": "X4B7ZQ2",
        "Operator": "X4B7ZN5",
        "Channel": "web",
        "OtpPushPinUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/push",
        "OtpValidationUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/verify",
        "EvinaScriptUrl": "https://cmssub.altruistindia.com/evina/v1/script",
        "UnsubApiUrl": "https://cmsunsub.altruistindia.com/subscription-manager/v1/unsub",
        "EvinaEnabled": true,
        "logEnabled": true
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },

  "519540BC-D447-4B56-B59A-982FEE1B5C53": {
    "ServiceId": "519540BC-D447-4B56-B59A-982FEE1B5C53",
    "Name": "vvideo-oman-ooredoo",
    "OtpLength": 4,
    "ShortCode": "91236",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Actel",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "Actel": {
        "PushOtpUrl": "http://api.actelme.com/api/sdp/otp",
        "ConfirmOtpUrl": "http://api.actelme.com/api/sdp/vocde",
        "AppId": "4667",
        "OperatorId": "229",
        "LandId": "1",
        "Channel": "WEB",
        "ApiKey": "7399E4E7-94DA-4AF8-A7A9-812EF8452511",
        "ApiSecret": "z0gp+TDIU7Tl/cYp4JQRbQ==",

        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },

  "836D84FE-786B-437C-8985-AF0C8AD7FDA5": {
    "ServiceId": "836D84FE-786B-437C-8985-AF0C8AD7FDA5",
    "Name": "Clipo",
    "OtpLength": 4,
    "ShortCode": "1151",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "TPAY": {
        "PublicKey": "wX7JwFGSxwHdHUCagxJ6",
        "PrivateKey": "TGpow5FUFu8O0rQipZ7i",
        "ServiceId": "",
        "OperatorCode": "42402",
        "subscriptionPlanId": 1602,
        "initialPaymentproductId": "com.clipo",
        "productCatalogName": "Multimedia-daily",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": true,
        "executeRecurringPaymentNow": false,
        "freePeriod": true,
        "initPaymentDateDelay": 0,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "09427E12-9EB5-4608-A22B-A6CF729817D3": {
    "ServiceId": "09427E12-9EB5-4608-A22B-A6CF729817D3",
    "Name": "clipo_ksa_zein_tpay",
    "OtpLength": 6,
    "ShortCode": "708900",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "TPAY": {
        "PublicKey": "wX7JwFGSxwHdHUCagxJ6",
        "PrivateKey": "TGpow5FUFu8O0rQipZ7i",
        "ServiceId": "",
        "OperatorCode": "42004",
        "subscriptionPlanId": 1722,
        "initialPaymentproductId": "com.clipo",
        "productCatalogName": "Clipo KSA",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "freePeriod": false,
        "initPaymentDateDelay": 2,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "FB1BA33F-E685-4331-A2D4-4E3652283149": {
    "ServiceId": "FB1BA33F-E685-4331-A2D4-4E3652283149",
    "Name": "clipo-egy-vodafon",
    "OtpLength": 6,
    "ShortCode": "6699",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "TPAY": {
        "PublicKey": "wX7JwFGSxwHdHUCagxJ6",
        "PrivateKey": "TGpow5FUFu8O0rQipZ7i",
        "ServiceId": "",
        "OperatorCode": "60202",
        "subscriptionPlanId": 1381,
        "initialPaymentproductId": "com.clipo",
        "productCatalogName": "Multimedia",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "freePeriod": false,
        "initPaymentDateDelay": 2,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "828DF0D4-6540-4964-948F-E1C7C34AE159": {
    "ServiceId": "828DF0D4-6540-4964-948F-E1C7C34AE159",
    "Name": "clipo-egy-orange",
    "OtpLength": 6,
    "ShortCode": "5030",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "SdpKeywords": "pass-ar,pass-en",
      "TPAY": {
        "V2Enabled": true,
        "PublicKey": "wX7JwFGSxwHdHUCagxJ6",
        "PrivateKey": "TGpow5FUFu8O0rQipZ7i",
        "ServiceId": "",
        "OperatorCode": "60201",
        "subscriptionPlanId": 1432,
        "initialPaymentproductId": "com.clipo",
        "productCatalogName": "Multimedia",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "freePeriod": true,
        "initPaymentDateDelay": 2,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },

  "E2104282-BC52-4AA0-9B67-2E7DA45AB0E1": {
    "ServiceId": "E2104282-BC52-4AA0-9B67-2E7DA45AB0E1",
    "Name": "clipo-egy-etisalat",
    "OtpLength": 6,
    "ShortCode": "1722",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "TPAY": {
        "PublicKey": "wX7JwFGSxwHdHUCagxJ6",
        "PrivateKey": "TGpow5FUFu8O0rQipZ7i",
        "ServiceId": "",
        "OperatorCode": "60203",
        "subscriptionPlanId": 1455,
        "initialPaymentproductId": "com.clipo",
        "productCatalogName": "Etisalat-Egp",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "freePeriod": false,
        "initPaymentDateDelay": 2,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "2A93F157-2A12-4774-B625-6D9431751A2B": {
    "ServiceId": "2A93F157-2A12-4774-B625-6D9431751A2B",
    "Name": "iclub_oman_timwe_ooredoo",
    "OtpLength": 4,
    "ShortCode": "92665",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Timwe",
      "Timwe": {
        "serviceId": "8541",
        "partnerRoleId": "8580",
        "productId": "28663",
        "mcc": "422",
        "mnc": "03",
        "largeAccount": "92665",
        "subKeyword": "11",
        "userIdentifierType": "MSISDN",
        "authentication": "h66qqA3hDhQxhIpP",
        "apiKey": "1b82519d574747ffaf1dc41e108179c1",
        "subApiUrl": "https://ooma.timwe.com/external/v3/subscription/optin/",
        "unsubApiUrl": "https://ooma.timwe.com/external/v3/subscription/optout/",
        "subConfirmationApiUrl": "https://ooma.timwe.com/external/v3/subscription/optin/confirm/",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "84FCAC2C-A479-468A-802A-EFBC709BD1F1": {
    "ServiceId": "84FCAC2C-A479-468A-802A-EFBC709BD1F1",
    "Name": "iclub_bahrain_timwe_batelco",
    "OtpLength": 4,
    "ShortCode": "94932",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Timwe",
      "Timwe": {
        "serviceId": "7259",
        "partnerRoleId": "7223",
        "productId": "29982",
        "mcc": "426",
        "mnc": "01",
        "largeAccount": "94932",
        "subKeyword": "11",
        "userIdentifierType": "MSISDN",
        "authentication": "C8OqrLpWFIlDKaSi",
        "apiKey": "e6e05db607a44fe0bd876e3df8c7629f",
        "subApiUrl": "https://batelcobhr-ma.timwe.com/bh/ma/api/external/v1/subscription/optin/",
        "unsubApiUrl": "https://batelcobhr-ma.timwe.com/bh/ma/api/external/v1/subscription/optout/",
        "subConfirmationApiUrl": "https://batelcobhr-ma.timwe.com/bh/ma/api/external/v1/subscription/optin/confirm/",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID",
        "SendSubscribeNotifConfigs": {
          "Enabled": "true",
          "pricepointId": "67715",
          "text": "subscribe",
          "entryChannel": "WEB",
          "SdpSubReceiveMessageUrl": "https://timwe.iclub-app.com/notification/user-optin/1/7223",
          "SdpUnsubReceiveMessageUrl": "https://timwe.iclub-app.com/notification/user-optout/1/7223"
        }
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "6153C3C8-23F7-4848-97A0-4FF0B9037D1B": {
    "ServiceId": "6153C3C8-23F7-4848-97A0-4FF0B9037D1B",
    "Name": "iclub_qatar_timwe_ooredoo",
    "OtpLength": 4,
    "ShortCode": "92066",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Timwe",
      "Timwe": {
        "serviceId": "3169",
        "partnerRoleId": "3406",
        "productId": "30393",
        "mcc": "427",
        "mnc": "01",
        "largeAccount": "92066",
        "subKeyword": "11",
        "userIdentifierType": "MSISDN",
        "authentication": "Q2nPZpinIKa4zXO8",
        "apiKey": "1b95271c682a4197b8f254842c5c68b2",
        "subApiUrl": "https://qao.timwe.com/external/v2/subscription/optin/",
        "unsubApiUrl": "https://qao.timwe.com/external/v2/subscription/optout/",
        "subConfirmationApiUrl": "https://qao.timwe.com/external/v2/subscription/optin/confirm/",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "EFA0051E-ED7B-48AA-A0E4-F751AF3F89F1": {
    "ServiceId": "EFA0051E-ED7B-48AA-A0E4-F751AF3F89F1",
    "Name": "idealme_oman_timwe_ooredoo",
    "OtpLength": 4,
    "ShortCode": "90787",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Timwe",
      "Timwe": {
        "serviceId": "8541",
        "partnerRoleId": "8580",
        "productId": "30166",
        "mcc": "422",
        "mnc": "03",
        "largeAccount": "90787",
        "subKeyword": "11",
        "userIdentifierType": "MSISDN",
        "authentication": "h66qqA3hDhQxhIpP",
        "apiKey": "1b82519d574747ffaf1dc41e108179c1",
        "subApiUrl": "https://ooma.timwe.com/external/v3/subscription/optin/",
        "unsubApiUrl": "https://ooma.timwe.com/external/v3/subscription/optout/",
        "subConfirmationApiUrl": "https://ooma.timwe.com/external/v3/subscription/optin/confirm/",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "FCDDC814-8ABC-461F-89F3-43E886A707B6": {
    "ServiceId": "FCDDC814-8ABC-461F-89F3-43E886A707B6",
    "Name": "iclub_oman_timwe_omantel",
    "OtpLength": 4,
    "ShortCode": "92338",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Timwe",
      "Timwe": {
        "serviceId": "7506",
        "partnerRoleId": "1270",
        "productId": "29464",
        "mcc": "422",
        "mnc": "02",
        "largeAccount": "92337",
        "subKeyword": "11",
        "userIdentifierType": "MSISDN",
        "authentication": "9U4AAQWar0lisWif",
        "apiKey": "49cfda59f71a4d369db27aedc97819cc",
        "subApiUrl": "https://omantel-ma.timwe.com/om/ma/api/external/v1/subscription/optin/",
        "unsubApiUrl": "https://omantel-ma.timwe.com/om/ma/api/external/v1/subscription/optout/",
        "subConfirmationApiUrl": "https://omantel-ma.timwe.com/om/ma/api/external/v1/subscription/optin/confirm/",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "8EE0A76B-2525-4EF7-A5B3-1C2D89D03090": {
    "ServiceId": "8EE0A76B-2525-4EF7-A5B3-1C2D89D03090",
    "SdpServiceId": "8EE0A76B-2525-4EF7-A5B3-1C2D89D03091",
    "Name": "fitme_qatar_ooredoo_tpay_NotUnified",
    "OtpLength": 4,
    "ShortCode": "92391",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "TPAY": {
        "V2Enabled": false,
        "PublicKey": "g3LfSQGgOvQ4jJWq8nVN",
        "PrivateKey": "U1dvWbwj3IK4T30mpc4h",
        "ServiceId": "",
        "OperatorCode": "42701",
        "subscriptionPlanId": 2507,
        "initialPaymentproductId": "com.fitmeQAT",
        "productCatalogName": "Fitme QA Ooredoo",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 2,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "msisdnEncryptionUrl": "http://live.tpay.me/api/TPaySubscription.svc/json/GetEncryptedMsisdn"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "8EE0A76B-2525-4EF7-A5B3-1C2D89D03091": {
    "ServiceId": "8EE0A76B-2525-4EF7-A5B3-1C2D89D03091",
    "Name": "fitme_qatar_ooredoo_tpay",
    "OtpLength": 4,
    "ShortCode": "92391",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "TPAY": {
        "V2Enabled": true,
        "PublicKey": "g3LfSQGgOvQ4jJWq8nVN",
        "PrivateKey": "U1dvWbwj3IK4T30mpc4h",
        "ServiceId": "",
        "OperatorCode": "42701",
        "subscriptionPlanId": 2507,
        "initialPaymentproductId": "com.fitmeQAT",
        "productCatalogName": "Fitme QA Ooredoo",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 2,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "msisdnEncryptionUrl": "http://live.tpay.me/api/TPaySubscription.svc/json/GetEncryptedMsisdn"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "0B9FD236-DC2F-4644-B314-8C6DE5ABFCAB": {
    "ServiceId": "0B9FD236-DC2F-4644-B314-8C6DE5ABFCAB",
    "SdpServiceId": "0B9FD236-DC2F-4644-B314-8C6DE5ABFCAC",
    "Name": "fitme_qatar_vodapon_tpay_NotUnified",
    "OtpLength": 6,
    "ShortCode": "97814",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "SdpKeywords": "pass-ar,pass-en",
      "TPAY": {
        "V2Enabled": false,
        "PublicKey": "g3LfSQGgOvQ4jJWq8nVN",
        "PrivateKey": "U1dvWbwj3IK4T30mpc4h",
        "ServiceId": "",
        "OperatorCode": "42702",
        "subscriptionPlanId": 2476,
        "initialPaymentproductId": "com.fitmeQAT",
        "productCatalogName": "Fitme QA Vodafone",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": true,
        "initPaymentDateDelay": 2,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "0B9FD236-DC2F-4644-B314-8C6DE5ABFCAC": {
    "ServiceId": "0B9FD236-DC2F-4644-B314-8C6DE5ABFCAC",
    "Name": "fitme_qatar_vodapon_tpay",
    "OtpLength": 6,
    "ShortCode": "97814",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "SdpKeywords": "pass-ar,pass-en",
      "TPAY": {
        "V2Enabled": true,
        "PublicKey": "g3LfSQGgOvQ4jJWq8nVN",
        "PrivateKey": "U1dvWbwj3IK4T30mpc4h",
        "ServiceId": "",
        "OperatorCode": "42702",
        "subscriptionPlanId": 2476,
        "initialPaymentproductId": "com.fitmeQAT",
        "productCatalogName": "Fitme QA Vodafone",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": true,
        "initPaymentDateDelay": 2,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "6F22E791-B015-4BF3-877B-5CF0354D7872": {
    "ServiceId": "6F22E791-B015-4BF3-877B-5CF0354D7872",
    "Name": "clipo_qatar_vodafone_tpay",
    "OtpLength": 6,
    "ShortCode": "978140",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "SdpKeywords": "pass-ar,pass-en",
      "TPAY": {
        "V2Enabled": true,
        "PublicKey": "wX7JwFGSxwHdHUCagxJ6",
        "PrivateKey": "TGpow5FUFu8O0rQipZ7i",
        "ServiceId": "",
        "OperatorCode": "42702",
        "subscriptionPlanId": 2572,
        "initialPaymentproductId": "com.clipo",
        "productCatalogName": "CLIPO_VodafoneQatar",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": true,
        "initPaymentDateDelay": 2,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },

  "3C8EC9AC-DF3A-4FBF-942F-1906FCBB4E69": {
    "ServiceId": "3C8EC9AC-DF3A-4FBF-942F-1906FCBB4E69",
    "Name": "fitme_uae_etisalat_tpay",
    "OtpLength": 4,
    "ShortCode": "11510",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "SdpKeywords": "pass-ar,pass-en",
      "TPAY": {
        "V2Enabled": true,
        "PublicKey": "g3LfSQGgOvQ4jJWq8nVN",
        "PrivateKey": "U1dvWbwj3IK4T30mpc4h",
        "ServiceId": "",
        "OperatorCode": "42402",
        "subscriptionPlanId": 2359,
        "initialPaymentproductId": "com.fitmeUAE",
        "productCatalogName": "fitmeUAE",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": true,
        "initPaymentDateDelay": 0,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "msisdnEncryptionUrl": "http://live.tpay.me/api/TPaySubscription.svc/json/GetEncryptedMsisdn"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },

  "BAFA69D8-31C0-4591-9DA7-B0F1169979CF": {
    "ServiceId": "BAFA69D8-31C0-4591-9DA7-B0F1169979CF",
    "Name": "clipo_kw_stc_tpay",
    "OtpLength": 4,
    "ShortCode": "50917",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "TPAY": {
        "V2Enabled": false,
        "PublicKey": "wX7JwFGSxwHdHUCagxJ6",
        "PrivateKey": "TGpow5FUFu8O0rQipZ7i",
        "ServiceId": "",
        "OperatorCode": "41904",
        "subscriptionPlanId": 2491,
        "initialPaymentproductId": "com.clipo",
        "productCatalogName": "Clipo-STC-KW",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": true,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 0,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "msisdnEncryptionUrl": "http://live.tpay.me/api/TPaySubscription.svc/json/GetEncryptedMsisdn"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },


  "6137D560-4004-492F-96F6-60E0E5846342": {
    "ServiceId": "6137D560-4004-492F-96F6-60E0E5846342",
    "Name": "clipo_kw_zain_tpay",
    "OtpLength": 4,
    "ShortCode": "93052",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "TPAY": {
        "V2Enabled": true,
        "PublicKey": "wX7JwFGSxwHdHUCagxJ6",
        "PrivateKey": "TGpow5FUFu8O0rQipZ7i",
        "ServiceId": "",
        "OperatorCode": "41902",
        "subscriptionPlanId": 2492,
        "initialPaymentproductId": "com.clipo",
        "productCatalogName": "Clipo-ZAIN-KW",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 0,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "msisdnEncryptionUrl": "http://live.tpay.me/api/TPaySubscription.svc/json/GetEncryptedMsisdn"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },


  "7239958F-876B-4CD9-9189-AEE81E659E88": {
    "ServiceId": "7239958F-876B-4CD9-9189-AEE81E659E88",
    "Name": "fitme_egy_orange_tpay",
    "OtpLength": 4,
    "ShortCode": "50300",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "TPAY": {
        "PublicKey": "g3LfSQGgOvQ4jJWq8nVN",
        "PrivateKey": "U1dvWbwj3IK4T30mpc4h",
        "ServiceId": "",
        "OperatorCode": "60201",
        "subscriptionPlanId": 1688,
        "initialPaymentproductId": "com.fitme",
        "productCatalogName": "Fitme",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 0,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "msisdnEncryptionUrl": "http://live.tpay.me/api/TPaySubscription.svc/json/GetEncryptedMsisdn"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "539F4CEB-A632-4712-9A90-A86529EF9B55": {
    "ServiceId": "539F4CEB-A632-4712-9A90-A86529EF9B55",
    "Name": "fitme_egy_vodafon_tpay",
    "OtpLength": 4,
    "ShortCode": "669900",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "TPAY": {
        "PublicKey": "g3LfSQGgOvQ4jJWq8nVN",
        "PrivateKey": "U1dvWbwj3IK4T30mpc4h",
        "ServiceId": "",
        "OperatorCode": "60202",
        "subscriptionPlanId": 1687,
        "initialPaymentproductId": "com.fitme",
        "productCatalogName": "Fitme",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 0,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "msisdnEncryptionUrl": "http://live.tpay.me/api/TPaySubscription.svc/json/GetEncryptedMsisdn"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "571E761C-BC94-4F11-A374-B199ADB5C3E4": {
    "ServiceId": "571E761C-BC94-4F11-A374-B199ADB5C3E4",
    "Name": "fitme_egy_we_tpay",
    "OtpLength": 4,
    "ShortCode": "40410",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "TPAY": {
        "PublicKey": "g3LfSQGgOvQ4jJWq8nVN",
        "PrivateKey": "U1dvWbwj3IK4T30mpc4h",
        "ServiceId": "",
        "OperatorCode": "60204",
        "subscriptionPlanId": 1686,
        "initialPaymentproductId": "com.fitme",
        "productCatalogName": "Fitme",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 0,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "msisdnEncryptionUrl": "http://live.tpay.me/api/TPaySubscription.svc/json/GetEncryptedMsisdn"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "4807888C-3230-4F47-ACD4-6FB6A3A2DB7E": {
    "ServiceId": "4807888C-3230-4F47-ACD4-6FB6A3A2DB7E",
    "Name": "fitme_egy_etisalat_tpay",
    "OtpLength": 4,
    "ShortCode": "17220",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "TPAY": {
        "PublicKey": "g3LfSQGgOvQ4jJWq8nVN",
        "PrivateKey": "U1dvWbwj3IK4T30mpc4h",
        "ServiceId": "",
        "OperatorCode": "60203",
        "subscriptionPlanId": 1685,
        "initialPaymentproductId": "com.fitme",
        "productCatalogName": "Fitme",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 0,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "msisdnEncryptionUrl": "http://live.tpay.me/api/TPaySubscription.svc/json/GetEncryptedMsisdn"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },

  "C07FFEE4-C04F-4A86-A7FC-C83B5E554703": {
    "ServiceId": "C07FFEE4-C04F-4A86-A7FC-C83B5E554703",
    "Name": "bft_egy_orange_tpay",
    "OtpLength": 4,
    "ShortCode": "503000",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "TPAY": {
        "PublicKey": "V0zsBLp8aQ2ZHN1poDFL",
        "PrivateKey": "QoVE0TgO0nsUa9UqFdlg",
        "ServiceId": "",
        "OperatorCode": "60201",
        "subscriptionPlanId": 1937,
        "initialPaymentproductId": "com.bft",
        "productCatalogName": "BFT Egypt",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 0,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "msisdnEncryptionUrl": "http://live.tpay.me/api/TPaySubscription.svc/json/GetEncryptedMsisdn"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "1AAC9E67-C0EC-40A7-A5A0-65833471F3C1": {
    "ServiceId": "1AAC9E67-C0EC-40A7-A5A0-65833471F3C1",
    "Name": "bft_egy_vodafon_tpay",
    "OtpLength": 4,
    "ShortCode": "6699000",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "TPAY": {
        "PublicKey": "V0zsBLp8aQ2ZHN1poDFL",
        "PrivateKey": "QoVE0TgO0nsUa9UqFdlg",
        "ServiceId": "",
        "OperatorCode": "60202",
        "subscriptionPlanId": 1936,
        "initialPaymentproductId": "com.bft",
        "productCatalogName": "BFT Egypt",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 0,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN",
        "msisdnEncryptionUrl": "http://live.tpay.me/api/TPaySubscription.svc/json/GetEncryptedMsisdn"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "789D9A3C-C7BE-4AA6-ACFB-20FCC1F11FB3": {
    "ServiceId": "789D9A3C-C7BE-4AA6-ACFB-20FCC1F11FB3",
    "Name": "bft_egy_we_tpay",
    "OtpLength": 4,
    "ShortCode": "404100",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "TPAY": {
        "PublicKey": "V0zsBLp8aQ2ZHN1poDFL",
        "PrivateKey": "QoVE0TgO0nsUa9UqFdlg",
        "ServiceId": "",
        "OperatorCode": "60204",
        "subscriptionPlanId": 1938,
        "initialPaymentproductId": "com.bft",
        "productCatalogName": "BFT Egypt",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 0,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "55F051D8-04FB-4486-8690-E233441718A5": {
    "ServiceId": "55F051D8-04FB-4486-8690-E233441718A5",
    "Name": "bft_egy_etisalat_tpay",
    "OtpLength": 4,
    "ShortCode": "172200",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "TPAY": {
        "PublicKey": "V0zsBLp8aQ2ZHN1poDFL",
        "PrivateKey": "QoVE0TgO0nsUa9UqFdlg",
        "ServiceId": "",
        "OperatorCode": "60203",
        "subscriptionPlanId": 1935,
        "initialPaymentproductId": "com.bft",
        "productCatalogName": "BFT Egypt",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 0,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },










  "8F0F7084-DEE1-4318-88A8-F8CE807E0DBC": {
    "ServiceId": "8F0F7084-DEE1-4318-88A8-F8CE807E0DBC",
    "Name": "clipo-egy-we",
    "OtpLength": 6,
    "ShortCode": "4041",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "SdpKeywords": "pass-ar,pass-en",
      "TPAY": {
        "V2Enabled": true,
        "PublicKey": "wX7JwFGSxwHdHUCagxJ6",
        "PrivateKey": "TGpow5FUFu8O0rQipZ7i",
        "ServiceId": "",
        "OperatorCode": "60204",
        "subscriptionPlanId": 1433,
        "initialPaymentproductId": "com.clipo",
        "productCatalogName": "WE-EGP",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "freePeriod": true,
        "contractEndAfterYears": 10,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "33DF3E7D-249D-46F4-BD20-9782DE518AB4": {
    "ServiceId": "33DF3E7D-249D-46F4-BD20-9782DE518AB4",
    "Name": "clipclub_ps_jawwal_montymobile",
    "OtpLength": 6,
    "ShortCode": "7991124",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "MontyMobile",
      "MontyMobile": {
        "sid": "981d9546-d42c-41a2-a149-d286d994b365",
        "token": "e6936a3a-c037-4af3-b039-4fa11ab97700",
        "serviceId": "7991124",
        "language": "1",
        "package": "d",
        "addSubUrl": "http://dcbapi.montymobile.com/api/subscriptions/addSubscription",
        "verSubUrl": "http://dcbapi.montymobile.com/api/subscriptions/verifySubscription"
      },
      "SDPOperator": "MontyMobile"
    }
  },
  "BB01D399-B553-4227-8742-E118B9D0F475": {
    "ServiceId": "BB01D399-B553-4227-8742-E118B9D0F475",
    "Name": "clipclub_ps_ooredoo_montymobile",
    "OtpLength": 6,
    "ShortCode": "5172801",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "MontyMobile",
      "MontyMobile": {
        "sid": "981d9546-d42c-41a2-a149-d286d994b365",
        "token": "e6936a3a-c037-4af3-b039-4fa11ab97700",
        "serviceId": "5172801",
        "language": "1",
        "package": "d",
        "addSubUrl": "http://dcbapi.montymobile.com/api/subscriptions/addSubscription",
        "verSubUrl": "http://dcbapi.montymobile.com/api/subscriptions/verifySubscription"
      },
      "SDPOperator": "MontyMobile"
    }
  },


  "DE006630-0657-4DE4-93D7-1C4C712DB2AA": {
    "ServiceId": "DE006630-0657-4DE4-93D7-1C4C712DB2AA",
    "Name": "fake-service",
    "OtpLength": 4,
    "OtpMessage": "Hello, You have requested to subscribe to Clipium Service with price of 1.72 SAR renewed Daily Confirmation code: {xxxx} To view the terms and conditions of service provision, please visit the following: *For postpaid customers, prices are VAT Inclusive. For prepaid customers, VAT is already collected at the time of purchasing the recharge card. Have a great day|الرجاء إستخدام {xxxx}  للإشتراك في خدمة كليبيوم . سعر الخدمه هو1.5 / 1 يوم. Please use the activation code {xxxx} to complete subscription process for Clipium Service . The price is 1.5 / 1 Day|الرجاء إستخدم الرمز {xxxx}  للإشتراك في خدمة خدمة كليبيوم. رسوم الخدمة SR 1.50/يوميا.|Your otp code is {xxxx} ",
    "ShortCode": "9900",
    "Mask": "",
    "MTUrl": "http://rest.mittoapi.com/sms.json",
    "MTApiKey": "lJnq6lmbn5lnqBHkxGBq27kHztUDsrQf",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Fake",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "Fake": {

        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "328E5E36-901A-4791-B2CD-842E777F6176": {
    "ServiceId": "328E5E36-901A-4791-B2CD-842E777F6176",
    "Name": "fake-service_eg_vodafone",
    "OtpLength": 6,
    "OtpMessage": "أدخل الكود التالي {code} لتأكيد الأشتراك اليومى في ميتك بقيمة 3 جنيه مصرى",
    "ShortCode": "6699",
    "Mask": "6699",
    "MTUrl": "http://rest.mittoapi.com/sms.json",
    "MTApiKey": "lJnq6lmbn5lnqBHkxGBq27kHztUDsrQf",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Fake",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "Fake": {

        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "83E7C1D2-9FA2-405C-982C-86F62E7F58BB": {
    "ServiceId": "83E7C1D2-9FA2-405C-982C-86F62E7F58BB",
    "Name": "fake-service_eg_ettisalat",
    "OtpLength": 6,
    "OtpMessage": "أدخل الكود التالي {code} لتأكيد الأشتراك اليومى في ميتك بقيمة 3 جنيه مصرى",
    "ShortCode": "1722",
    "Mask": "1722",
    "MTUrl": "http://rest.mittoapi.com/sms.json",
    "MTApiKey": "lJnq6lmbn5lnqBHkxGBq27kHztUDsrQf",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Fake",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "Fake": {

        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "5AF62F98-1410-4400-9642-5C50B5D9A21C": {
    "ServiceId": "5AF62F98-1410-4400-9642-5C50B5D9A21C",
    "Name": "fake-service_eg_Orange",
    "OtpLength": 6,
    "OtpMessage": "أدخل الكود التالي {code} لتأكيد الأشتراك اليومى في ميتك بقيمة 3 جنيه مصرى",
    "ShortCode": "5030",
    "Mask": "5030",
    "MTUrl": "http://rest.mittoapi.com/sms.json",
    "MTApiKey": "lJnq6lmbn5lnqBHkxGBq27kHztUDsrQf",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Fake",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "Fake": {

        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "A3489B3C-F553-4E01-A7B9-6D8BB343A003": {
    "ServiceId": "A3489B3C-F553-4E01-A7B9-6D8BB343A003",
    "Name": "fake-service_eg_we",
    "OtpLength": 6,
    "OtpMessage": "أدخل الكود التالي {code} لتأكيد الأشتراك اليومى في ميتك بقيمة 3 جنيه مصرى",
    "ShortCode": "4041",
    "Mask": "4041",
    "MTUrl": "http://rest.mittoapi.com/sms.json",
    "MTApiKey": "lJnq6lmbn5lnqBHkxGBq27kHztUDsrQf",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Fake",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "Fake": {

        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "DADDAFD7-9515-4518-9957-2AA21E6B8851": {
    "ServiceId": "DADDAFD7-9515-4518-9957-2AA21E6B8851",
    "Name": "Vivideo-KSA-STC",
    "OtpLength": 6,
    "ShortCode": "7057311",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatCheckout",
      "QanavatCheckout": {
        "ServiceId": "966013001",
        "StringServiceId": "",
        "IdProvider": "96603",
        "IdVendor": "966013",
        "BillText": "",
        "PartnerId": "RPB",
        "Password": "thk5Jqc$aU#g65e",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "E87F9899-5EEA-40EA-A4BB-F965B7C247D4": {
    "ServiceId": "E87F9899-5EEA-40EA-A4BB-F965B7C247D4",
    "Name": "Idealme-KSA-STC",
    "OtpLength": 6,
    "ShortCode": "7057311",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatCheckout",
      "QanavatCheckout": {
        "ServiceId": "966013002",
        "StringServiceId": "",
        "IdProvider": "96603",
        "IdVendor": "966013",
        "BillText": "",
        "PartnerId": "RPB",
        "Password": "thk5Jqc$aU#g65e",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "77D3AB2D-28D9-46CE-8166-7924319BB0BC": {
    "ServiceId": "77D3AB2D-28D9-46CE-8166-7924319BB0BC",
    "Name": "Idealme-Mor-INWI",
    "OtpLength": 6,
    "ShortCode": "7057311",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatCheckout",
      "QanavatCheckout": {
        "ServiceId": "966013002",
        "StringServiceId": "",
        "IdProvider": "96603",
        "IdVendor": "966013",
        "BillText": "",
        "PartnerId": "RPB",
        "Password": "thk5Jqc$aU#g65e",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "9A53062C-F3FD-4742-86DE-A39BBEE62885": {
    "ServiceId": "9A53062C-F3FD-4742-86DE-A39BBEE62885",
    "Name": "vvideo_ksa_mobily_qanawat",
    "OtpLength": 6,
    "ShortCode": "600206",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatCheckout",
      "QanavatCheckout": {
        "ServiceId": "966009001",
        "StringServiceId": "",
        "IdProvider": "96602",
        "IdVendor": "966009",
        "BillText": "",
        "PartnerId": "RPB",
        "Password": "PQprk72_9PgdAAF",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "451C7EF9-5C5D-4F7A-93FC-A8160A027962": {
    "ServiceId": "451C7EF9-5C5D-4F7A-93FC-A8160A027962",
    "Name": "idealme_ksa_mobily",
    "OtpLength": 6,
    "ShortCode": "600206",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatCheckout",
      "QanavatCheckout": {
        "ServiceId": "966009002",
        "StringServiceId": "",
        "IdProvider": "96602",
        "IdVendor": "966009",
        "BillText": "",
        "PartnerId": "RPB",
        "Password": "PQprk72_9PgdAAF",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "A80ADE9D-BDC0-4690-9C54-4878353B69B8": {
    "ServiceId": "A80ADE9D-BDC0-4690-9C54-4878353B69B8",
    "Name": "nitrofilm_kw_stc_mobimind",
    "OtpLength": 4,
    "ShortCode": "50607",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,
    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Mobimind",
      "Mobimind": {
        "AFEnabled": true,
        "Username": "02acfe81bf714b649073f109532f9517",
        "Password": "uzt_daU2IRsyh90UMbNL",
        "spid": "3753",
        "ChannelId": 99943047,
        "DefaultLang": "en",
        "OtpGetPinUrl": "http://apisdp.digitalsp.net/api/V1/PINRequest",
        "OtpConfirmPinUrl": "http://apisdp.digitalsp.net/api/V1/PINVerify",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID",
        //"AFScriptUrl": "<script src=\"https://antifraud.cgparcel.net/AntiFraud/Prepare/?Page=2&ChannelID={channelId}&ClickID={clickId}&Headers={mobimind-header}\"></script>"
        "AFScriptUrl": "http://antifraud.cgparcel.net/AntiFraud/Prepare/?Page=2&ChannelID={channelId}&ClickID={clickId}&UserIP={UserIP}&Headers={mobimind-header}"

      },
      "SDPOperator": ""
    }
  },

  "315BB8F9-FC85-4136-A552-2D3D0488F98E": {
    "ServiceId": "315BB8F9-FC85-4136-A552-2D3D0488F98E",
    "Name": "nitrofilm_jordan_ominah_mobimind",
    "OtpLength": 4,
    "ShortCode": "98330",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Mobimind",
      "Mobimind": {
        "AFEnabled": false,
        "Username": "02acfe81bf714b649073f109532f9517",
        "Password": "uzt_daU2IRsyh90UMbNL",
        "spid": 3753,
        "DefaultLang": "en",
        "ChannelId": 99942950,
        "OtpGetPinUrl": "http://apisdp.digitalsp.net/api/V1/PINRequest",
        "OtpConfirmPinUrl": "http://apisdp.digitalsp.net/api/V1/PINVerify",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID",
        "AFScriptUrl": "https://antifraud.cgparcel.net/AntiFraud/Prepare/?Page=2&ChannelID={channelId}&ClickID={clickId}&Headers={header}"
      },
      "SDPOperator": ""
    }
  },
  "C71BB7B5-DA4E-40EB-A9D4-E7827A7B8811": {
    "ServiceId": "C71BB7B5-DA4E-40EB-A9D4-E7827A7B8811",
    "Name": "Vivideo-Zein",
    "OtpLength": 4,
    "ShortCode": "705731",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 1,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatZein",
      "QanavatZein": {
        "ServiceId": "966007001",
        "StringServiceId": "",
        "IdProvider": "96601",
        "IdVendor": "966007",
        "BillText": "",
        "PartnerId": "RPB",
        "Password": "wEXD8!s7@z6TH4tn",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "F2F6F51F-8806-4641-BB22-E272F0C73DDD": {
    "ServiceId": "F2F6F51F-8806-4641-BB22-E272F0C73DDD",
    "Name": "vvideo_iraq_zein",
    "OtpLength": 5,
    "ShortCode": "9644089",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": false,
    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatV1",
      "QanavatZein": {
        "ServiceId": "964002001",
        "StringServiceId": "",
        "IdProvider": "96401",
        "IdVendor": "964002",
        "BillText": "",
        "PartnerId": "RPB",
        "Password": "RFuaitx*h@ju#g89s",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      "QanavatV1": {
        "Username": "6834349719",
        "Password": "77260805-e170-4240-9a51-af36b47a92e9",
        "ClientId": "6834349719",
        "EncryptionKey": "futtdCMnFcAvO2n0",
        "adPartnerName": "google",
        "PackageId": "3261",
        "DefaultLanguage": "En",
        "Country": "I4X4WP0",
        "Operator": "P6E1OO9",
        "Channel": "web",
        "OtpPushPinUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/push",
        "OtpValidationUrl": "https://cmssub.altruistindia.com/subscription-manager/v1/pin/verify",
        "EvinaScriptUrl": "https://cmssub.altruistindia.com/evina/v1/script",
        "UnsubApiUrl": "https://cmsunsub.altruistindia.com/subscription-manager/v1/unsub",
        "EvinaEnabled": false,
        "logEnabled": true

      }

    }
  },
  "1BFF49CB-9A20-4706-8645-1ABAD5738105": {
    "ServiceId": "1BFF49CB-9A20-4706-8645-1ABAD5738105",
    "Name": "IdealMe_Ksa_Zain",
    "OtpLength": 6,
    "ShortCode": "7057310",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 1,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatZein",
      "QanavatZein": {
        "ServiceId": "966007002",
        "StringServiceId": "",
        "IdProvider": "96601",
        "IdVendor": "966007",
        "BillText": "",
        "PartnerId": "RPB",
        "Password": "wEXD8!s7@z6TH4tn",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "738ABE5C-85FC-42A3-9EC4-240F30C6E08A": {
    "ServiceId": "738ABE5C-85FC-42A3-9EC4-240F30C6E08A",
    "Name": "Netclips_Ksa_Zain",
    "OtpLength": 6,
    "ShortCode": "70573100",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 1,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "QanavatZein",
      "QanavatZein": {
        "ServiceId": "966021001",
        "StringServiceId": "966021001",
        "IdProvider": "96601",
        "IdVendor": "966021",
        "BillText": "",
        "PartnerId": "RPB",
        "Password": "VP/r?8:47Kq{sh:u",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "15A885D9-0B7B-4C6E-8A95-A4C19253EFC3": {
    "ServiceId": "15A885D9-0B7B-4C6E-8A95-A4C19253EFC3",
    "MciRegEx": "",
    "Name": "KavenegarSms",
    "ShortCode": "10008445",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "KavenegarSms",
      "KavenegarSms": {
        "ApiKey": "4E4C5A62534B6870443369357A423631717059637A2B473861756163437163786451466D5168785046356B3D",
        "Message": "Your login code is {CODE}",
        "Sender": "0018018949161"
      },
      "SDPOperator": "Kavenegar"
    }
  },
  "D7A881A5-ED73-4CE9-B277-AFC5E075B397": {
    "ServiceId": "D7A881A5-ED73-4CE9-B277-AFC5E075B397",
    "MciRegEx": "",
    "Name": "KavenegarSms",
    "ShortCode": "10008663",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "KavenegarSms",
      "KavenegarSms": {
        "ApiKey": "4E4C5A62534B6870443369357A423631717059637A2B473861756163437163786451466D5168785046356B3D",
        "Message": "Your login code is {CODE}",
        "Sender": "9810008663"
      },
      "SDPOperator": "Kavenegar"
    }
  },

  "C7D7B4A6-A8E5-49C1-8955-FBEAA4262E19": {
    "ServiceId": "C7D7B4A6-A8E5-49C1-8955-FBEAA4262E19",
    "MciRegEx": "",
    "Name": "Vivideo-Kavenegar",
    "ShortCode": "10008445",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Kavenegar",
      "Kavenegar": {
        "VerifyTemplate": "VerifyNamaraz",
        "ApiKey": "4E4C5A62534B6870443369357A423631717059637A2B473861756163437163786451466D5168785046356B3D"

      },
      "SDPOperator": "Kavenegar"
    }
  },
  "3901194B-6F6B-4732-B7C6-39C3AFDF5EB1": {
    "ServiceId": "3901194B-6F6B-4732-B7C6-39C3AFDF5EB1",
    "Name": "netclips-egy-vodafon",
    "OtpLength": 6,
    "ShortCode": "66990",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "HASIN",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "SdpSubKeyword": "subscribe",
      "SdpOperator": "HasinVas",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "Hasin": {
        "ConfirmPinUrl": "http://vas.sepinno.ir/V1/VodafoneNetClips/VerifyOtp",
        "PushUrl": "http://vas.sepinno.ir/V1/VodafoneNetClips/PushOtp",
        "en-lang": 1,
        "ar-lang": 2
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "68D2B08E-F482-49D1-9BBF-8E957654115E": {
    "ServiceId": "68D2B08E-F482-49D1-9BBF-8E957654115E",
    "MciRegEx": "",
    "Name": "Mock",
    "OtpLength": 5,
    "ShortCode": "10008445",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mock",
      "Mock": {
        "VerifyTemplate": "VerifyNamaraz",
        "ApiKey": "4E4C5A62534B6870443369357A423631717059637A2B473861756163437163786451466D5168785046356B3D"

      },
      "SDPOperator": "Mock"
    }
  },
  "9540576A-476C-4F91-818F-D50D92A8495B": {
    "ServiceId": "9540576A-476C-4F91-818F-D50D92A8495B",
    "MciRegEx": "",
    "Name": "Idealme_KSA_STC_Mock",
    "OtpLength": 6,
    "ShortCode": "966123",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mock",
      "Mock": {
      },
      "SDPOperator": "Mock"
    }
  },
  "BD7D4A33-5A0B-437F-92DE-5335977DB2CC": {
    "ServiceId": "BD7D4A33-5A0B-437F-92DE-5335977DB2CC",
    "MciRegEx": "",
    "Name": "Nitrofilm_Lily_Greece",
    "OtpLength": 6,
    "ShortCode": "19488",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,
    "CheckUserState": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.34:8022/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Lily",
      "GetUserStateURL": "",
      "Lily": {
        "Url": "http://api.lilymobile.gr/sms/subsms/portutel/a3e9y72q",
        "UnsubUrl": "http://api.lilymobile.gr/sms/unsubscribe/portutel/a3e9y72q",
        "PinId": "616",
        "Shortcode": "19488",
        "Keyword": "NITRO"
      },
      "SDPOperator": "LilyMobile"
    }
  },
  "BD7D4A33-5A0B-437F-92DE-5335977DB2BC": {
    "ServiceId": "BD7D4A33-5A0B-437F-92DE-5335977DB2BC",
    "MciRegEx": "",
    "Name": "Nitrofilm_MessageCloud_Greece",
    "OtpLength": 6,
    "ShortCode": "54058",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 20,
    "NeedValidationForRequest": false,
    "CheckUserState": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.34:8022/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "MessageCloud",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "MessageCloud": {
        "Url": "http://client.txtnation.com/gateway.php",
        "Text": "ΣΤΕΙΛΕ:ΟΚ NITRO ΣΤΟ 54058(ΔΩΡΕΑΝ SMS)NITROFILM TXTNATION ΧΡEΩΣΗ:2.29Ex3SMS=6.87/ΕΒΔ.H2.29Εx12SMS=27.48Ε/MHNA ΣΥΝ ΤΕΛΗ ΚΙΝ",
        "Shortcode": "54058",
        "Companycode": "portutelgr",
        "EKey": "fae6f542758249648c2c3810a8ba2abd",
        "Networks": [
          {
            "Name": "COSMOTE17GR",
            "Regex": "^30(697|698)\\d{7}"
          },
          {
            "Name": "VODAFONE17GR",
            "Regex": "^30(694|695)\\d{7}$"
          },
          {
            "Name": "WIND17GR",
            "Regex": "^30(690|693)\\d{7}$"
          }
        ]
      },
      "SDPOperator": "MessageCloud"
    }
  },
  "A2C9A62C-80C3-4AA7-8608-A46DA55A0B1E": {
    "ServiceId": "A2C9A62C-80C3-4AA7-8608-A46DA55A0B1E",
    "MciRegEx": "",
    "Name": "Idealme_KSA_MOBILY_Mock",
    "OtpLength": 6,
    "ShortCode": "966124",
    "HasTwoConfirmationStep": false,
    "ValidationTimeInMinutes": 5,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": "SDP"
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": "http://localhost:8001/api/notification/notify"
    },
    "Supplier": {
      "Name": "Mock",
      "Mock": {
      },
      "SDPOperator": "Mock"
    }
  },
  "3021AC66-DEAC-4880-AEA6-DE9C17AE2F6C": {
    "ServiceId": "3021AC66-DEAC-4880-AEA6-DE9C17AE2F6C",
    "Name": "iclub_ksa_timwe_mobily",
    "OtpLength": 6,
    "ShortCode": "600614",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 10,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Timwe",
      "Timwe": {
        "serviceId": "8317",
        "partnerRoleId": "8342",
        "productId": "28252",
        "mcc": "420",
        "mnc": "03",
        "largeAccount": "600614",
        "subKeyword": "91",
        "userIdentifierType": "REAL",
        "authentication": "X55qwMGfiBK20aKn",
        "apiKey": "2fc17f6045cd4d33bfe3aa3798aa8bce",
        "subApiUrl": "https://mobily-ma.timwe.com/sa/ma/api/external/v1/subscription/optin/",
        "unsubApiUrl": "https://mobily-ma.timwe.com/sa/ma/api/external/v1/subscription/optout/",
        "subConfirmationApiUrl": "https://mobily-ma.timwe.com/sa/ma/api/external/v1/subscription/optin/confirm/",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "64633BA5-EACF-44FC-A384-135E298E95AF": {
    "ServiceId": "64633BA5-EACF-44FC-A384-135E298E95AF",
    "Name": "IdealMe_KSA",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "1BFF49CB-9A20-4706-8645-1ABAD5738105",
          "MsisdnRegex": "^((\\+|00)?9665)(8|9)\\d{7}$"
        },
        {
          "ServiceId": "A2C9A62C-80C3-4AA7-8608-A46DA55A0B1E",
          "MsisdnRegex": "^((\\+|00)?9665)(4|6)\\d{7}$"
        },
        {
          "ServiceId": "9540576A-476C-4F91-818F-D50D92A8495B",
          "MsisdnRegex": "^((\\+|00)?9665)(0|3|5)\\d{7}$"
        },
        {
          "ServiceId": "08ACA7C4-5C16-4E34-944E-F14C62C8C302",
          "MsisdnRegex": "^((\\+|00)?96657)\\d{7}$"
        }
      ]
    }
  },
  "8E15CEA2-28B7-4C06-8A52-D68340D2916F": {
    "ServiceId": "8E15CEA2-28B7-4C06-8A52-D68340D2916F",
    "Name": "clipium_ksa",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "6D33DAC4-70CE-4945-8C4D-54F6A4F82A10",
          "MsisdnRegex": "^((\\+|00)?9665)\\d{8}$"
        }
        //{
        //  "ServiceId": "E6355B06-EC5C-4497-87FF-87DFE650B0AB",
        //  "MsisdnRegex": "^((\\+|00)?9665)(8|9)\\d{7}$"
        //},
        //{
        //  "ServiceId": "6D33DAC4-70CE-4945-8C4D-54F6A4F82A10",
        //  "MsisdnRegex": "^((\\+|00)?9665)(4|6)\\d{7}$"
        //},
        //{
        //  "ServiceId": "98818C1B-2357-4DD1-BE32-8F3B743B80EE",
        //  "MsisdnRegex": "^((\\+|00)?9665)(7)\\d{7}$"
        //}
        //,
        //{
        //  "ServiceId": "9D5351D2-BF8A-4C63-A429-1F177BFCDE4E",
        //  "MsisdnRegex": "^((\\+|00)?9665)(0|3|5)\\d{7}$"
        //}
      ]
    }
  },
  "59822C42-8196-4E26-8A91-2F88ED8E5322": {
    "ServiceId": "59822C42-8196-4E26-8A91-2F88ED8E5322",
    "Name": "clipium_sa",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "E6355B06-EC5C-4497-87FF-87DFE650B0AB",
          "MsisdnRegex": "^((\\+|00)?9665)(8|9)\\d{7}$"
        },
        {
          "ServiceId": "6D33DAC4-70CE-4945-8C4D-54F6A4F82A10",
          "MsisdnRegex": "^((\\+|00)?9665)(4|6)\\d{7}$"
        },
        {
          "ServiceId": "98818C1B-2357-4DD1-BE32-8F3B743B80EE",
          "MsisdnRegex": "^((\\+|00)?9665)(7)\\d{7}$"
        },
        {
          "ServiceId": "9D5351D2-BF8A-4C63-A429-1F177BFCDE4E",
          "MsisdnRegex": "^((\\+|00)?9665)(0|3|5)\\d{7}$"
        }
      ]
    }
  },
  "09DB1C02-56E7-4505-BA6A-3BD9F53D6317": {
    "ServiceId": "09DB1C02-56E7-4505-BA6A-3BD9F53D6317",
    "Name": "fake-service_eg",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "5AF62F98-1410-4400-9642-5C50B5D9A21C",
          "MsisdnRegex": "^((\\+|00)?20)?(12)\\d{8}$"
        },
        {
          "ServiceId": "328E5E36-901A-4791-B2CD-842E777F6176",
          "MsisdnRegex": "^((\\+|00)?20)?(10)\\d{8}$"
        },
        {
          "ServiceId": "83E7C1D2-9FA2-405C-982C-86F62E7F58BB",
          "MsisdnRegex": "^((\\+|00)?20)?(11)\\d{8}$"
        },
        {
          "ServiceId": "A3489B3C-F553-4E01-A7B9-6D8BB343A003",
          "MsisdnRegex": "^((\\+|00)?20)?(15)\\d{8}$"
        }
      ]
    }
  },
  "EE95739E-39C1-43E0-9E7D-90CF5E0B6A3B": {
    "ServiceId": "EE95739E-39C1-43E0-9E7D-90CF5E0B6A3B",
    "Name": "Clipo_eg",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "828DF0D4-6540-4964-948F-E1C7C34AE159",
          "MsisdnRegex": "^((\\+|00)?20)?(12)\\d{8}$"
        },
        {
          "ServiceId": "E2104282-BC52-4AA0-9B67-2E7DA45AB0E1",
          "MsisdnRegex": "^((\\+|00)?20)?(11)\\d{8}$"
        },
        {
          "ServiceId": "8F0F7084-DEE1-4318-88A8-F8CE807E0DBC",
          "MsisdnRegex": "^((\\+|00)?20)?(15)\\d{8}$"
        }
      ]
    }
  },
  "F5D7BEB3-1391-44BF-9EAF-87579A73B90F": {
    "ServiceId": "F5D7BEB3-1391-44BF-9EAF-87579A73B90F",
    "Name": "fitme_egy",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "7239958F-876B-4CD9-9189-AEE81E659E88",
          "MsisdnRegex": "^((\\+|00)?20)?(12)\\d{8}$"
        },
        {
          "ServiceId": "4807888C-3230-4F47-ACD4-6FB6A3A2DB7E",
          "MsisdnRegex": "^((\\+|00)?20)?(11)\\d{8}$"
        },
        {
          "ServiceId": "571E761C-BC94-4F11-A374-B199ADB5C3E4",
          "MsisdnRegex": "^((\\+|00)?20)?(15)\\d{8}$"
        }
      ]
    }
  },

  "0BD72DA3-A113-4D88-9C9A-83C583CE62E4": {
    "ServiceId": "0BD72DA3-A113-4D88-9C9A-83C583CE62E4",
    "Name": "bft_egy",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "C07FFEE4-C04F-4A86-A7FC-C83B5E554703",
          "MsisdnRegex": "^((\\+|00)?20)?(12)\\d{8}$"
        },
        {
          "ServiceId": "789D9A3C-C7BE-4AA6-ACFB-20FCC1F11FB3",
          "MsisdnRegex": "^((\\+|00)?20)?(15)\\d{8}$"
        },
        {
          "ServiceId": "55F051D8-04FB-4486-8690-E233441718A5",
          "MsisdnRegex": "^((\\+|00)?20)?(11)\\d{8}$"
        }

      ]
    }
  },

  "9C86AFF7-926A-4452-B44E-C837B974F581": {
    "ServiceId": "9C86AFF7-926A-4452-B44E-C837B974F581",
    "Name": "Vivideo_KSA",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "C71BB7B5-DA4E-40EB-A9D4-E7827A7B8811",
          "MsisdnRegex": "^((\\+|00)?9665)(8|9)\\d{7}$"
        },
        {
          "ServiceId": "7D81611B-E6C6-4872-83F2-1A0CB05C74EB",
          "MsisdnRegex": "^((\\+|00)?9665)(7)\\d{7}$"
        },
        {
          "ServiceId": "DADDAFD7-9515-4518-9957-2AA21E6B8851",
          "MsisdnRegex": "^((\\+|00)?9665)(0|3|5)\\d{7}$"
        }
      ]
    }
  },
  "2094CB10-ECB1-47AF-B8CC-D76DB9C099EF": {
    "ServiceId": "2094CB10-ECB1-47AF-B8CC-D76DB9C099EF",
    "Name": "clipclub_monty_ps",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [

        {
          "ServiceId": "33DF3E7D-249D-46F4-BD20-9782DE518AB4",
          "MsisdnRegex": "^((\\+|00)?970)(592|597|590|591|593|594|596|598|599)\\d{6}$"
        },
        {
          "ServiceId": "BB01D399-B553-4227-8742-E118B9D0F475",
          "MsisdnRegex": "^((\\+|00)?970)(595|560|561|562|563|564|565|566|567|568|569)\\d{6}$"
        }
      ]
    }
  },

  "3E21F225-493B-4CE6-BD94-38A5AC695F52": {
    "ServiceId": "3E21F225-493B-4CE6-BD94-38A5AC695F52",
    "Name": "bft_uae_etisalat_tpay",
    "OtpLength": 4,
    "ShortCode": "115100",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 5,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "SdpKeywords": "pass-ar,pass-en",
      "TPAY": {
        "V2Enabled": false,
        "PublicKey": "lXY8SLL3ykpfsw1WoHkl",
        "PrivateKey": "MEQfYL1OSsZDbRalkGvB",
        "ServiceId": "",
        "OperatorCode": "42402",
        "subscriptionPlanId": 2584,
        "initialPaymentproductId": "BestFunToday_daily",
        "productCatalogName": "BestFunToday_EtisalatUAE",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": true,
        "initPaymentDateDelay": 2,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },


  "9FD8CD2E-E37E-45B4-949D-4BD42474F2F8": {
    "ServiceId": "9FD8CD2E-E37E-45B4-949D-4BD42474F2F8",
    "Name": "fitme_uae_du_tpay",
    "OtpLength": 6,
    "ShortCode": "2884",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 60,
    "NeedValidationForRequest": false,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "TPAY",
      "SdpMessageURL": "https://sdp.cammpaign.com/api/Messages",
      "GetUserStateURL": "https://sdp.cammpaign.com/api/CustomerMemebrship/state?msisdn={msisdn}&packageid={sid}",
      "SdpGetContractUrl": "https://sdp.cammpaign.com/api/supplier/id",
      "TPAY": {
        "CGOnly": true,
        "PublicKey": "g3LfSQGgOvQ4jJWq8nVN",
        "PrivateKey": "U1dvWbwj3IK4T30mpc4h",
        "ServiceId": "",
        "OperatorCode": "42403",
        "subscriptionPlanId": 2367,
        "initialPaymentproductId": "com.fitmeUAE",
        "productCatalogName": "fitmeUAE-DU",
        "autoRenewContract": true,
        "sendVerificationSMS": true,
        "allowMultipleFreeStartPeriods": true,
        "executeInitialPaymentNow": false,
        "executeRecurringPaymentNow": false,
        "en-lang": 1,
        "ar-lang": 2,
        "language": 1,
        "contractEndAfterYears": 10,
        "freePeriod": false,
        "initPaymentDateDelay": 2,
        "dateTimeFormat": "yyyy-MM-dd HH:mm:ssZ",
        "addSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/AddSubscriptionContractRequest",
        "verifySubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/Json/VerifySubscriptionContract",
        "resendPinURL": "http://live.tpay.me/api/TPaySubscription.svc/Json/SendSubscriptionContractVerificationSMS",
        "PushPinUrl": "http://sdp.altruistindia.com/Moneta/pushPIN.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID",
        "cancellSubContranctURL": "http://live.tpay.me/api/TPAYSubscription.svc/json/CancelSubscriptionContractRequest",
        "ConfirmPinSubscriptionUrl": "http://sdp.altruistindia.com/Moneta/confirmPinSubscription.htm?usr=USERNAME&pwd=PASSWORD&msisdn=MSISDN&packageid=PACKAGEID&pin=PIN&token=TOKEN"
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "0F10A5E2-0CF2-4A0F-B597-302AD1AA353B": {
    "ServiceId": "0F10A5E2-0CF2-4A0F-B597-302AD1AA353B",
    "Name": "fitme_uae",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "3C8EC9AC-DF3A-4FBF-942F-1906FCBB4E69",
          "MsisdnRegex": "^((\\+|00)?971)(50|54|56)\\d{7}$"
        },
        {
          "ServiceId": "9FD8CD2E-E37E-45B4-949D-4BD42474F2F8",
          "MsisdnRegex": "^((\\+|00)?971)(52|55|58)\\d{7}$"
        }
      ]
    }
  },
  "B2B70CED-F4B3-426D-989C-603168BD841C": {
    "ServiceId": "B2B70CED-F4B3-426D-989C-603168BD841C",
    "Name": "fitme_qatar_notunified",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "0B9FD236-DC2F-4644-B314-8C6DE5ABFCAB",
          "MsisdnRegex": "^((\\+|00)?974)?\\d{8}$$",
          "NextServiceId": "8EE0A76B-2525-4EF7-A5B3-1C2D89D03090"
        },
        {
          "ServiceId": "8EE0A76B-2525-4EF7-A5B3-1C2D89D03090",
          "MsisdnRegex": "^((\\+|00)?974)?(3|5|6)\\d{7}$",
          "NextServiceId": "0B9FD236-DC2F-4644-B314-8C6DE5ABFCAB"
        }
      ]
    }
  },
  "B2B70CED-F4B3-426D-989C-603168BD841D": {
    "ServiceId": "B2B70CED-F4B3-426D-989C-603168BD841D",
    "Name": "fitme_qatar",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "8EE0A76B-2525-4EF7-A5B3-1C2D89D03091",
          "MsisdnRegex": "^((\\+|00)?974)?(3|5|6)\\d{7}$"
        },
        {
          "ServiceId": "0B9FD236-DC2F-4644-B314-8C6DE5ABFCAC",
          "MsisdnRegex": "^((\\+|00)?974)?(7)\\d{7}$$"
        }
      ]
    }
  },
  "E14D7495-ACB6-4BF8-9840-93D3590484D1": {
    "ServiceId": "E14D7495-ACB6-4BF8-9840-93D3590484D1",
    "Name": "iclub_ksa_timwe",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "3021AC66-DEAC-4880-AEA6-DE9C17AE2F6C",
          "MsisdnRegex": "^((\\+|00)?9665)\\d{8}$"
        }
      ]
    }
  },
  "9E7DD265-E7D0-4146-A8BF-85ABB2B10056": {
    "ServiceId": "9E7DD265-E7D0-4146-A8BF-85ABB2B10056",
    "Name": "vivideo_iq",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [

        {
          "ServiceId": "F2F6F51F-8806-4641-BB22-E272F0C73DDD",
          "MsisdnRegex": "^((\\+|00)?964)(78|79)\\d{8}$"
        }
      ]
    }
  },
  "9DCB583E-F51C-4CC2-9103-FCEE6998240A": {
    "ServiceId": "9DCB583E-F51C-4CC2-9103-FCEE6998240A",
    "Name": "clipo_kw",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "6137D560-4004-492F-96F6-60E0E5846342",
          "MsisdnRegex": "^\\d{1,9}$"
        },
        {
          "ServiceId": "BAFA69D8-31C0-4591-9DA7-B0F1169979CF",
          "MsisdnRegex": "^((\\+|00)?965)\\d{8}$"
        }

      ]
    }
  },

  "46DFCA55-13A8-4BDC-A39E-6A1FE70FC8F9": {
    "ServiceId": "46DFCA55-13A8-4BDC-A39E-6A1FE70FC8F9",
    "Name": "nitrofilm_kw",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "A80ADE9D-BDC0-4690-9C54-4878353B69B8",
          "MsisdnRegex": "^((\\+|00)?965)\\d{8}$"
        }
      ]
    }
  },

  "3D38B5A3-441F-4BC8-AF32-A4B10501BABD": {
    "ServiceId": "3D38B5A3-441F-4BC8-AF32-A4B10501BABD",
    "Name": "iclub-vivideo_ksa",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "C71BB7B5-DA4E-40EB-A9D4-E7827A7B8811",
          "MsisdnRegex": "^((\\+|00)?9665)(8|9)\\d{7}$"
        },
        {
          "ServiceId": "3021AC66-DEAC-4880-AEA6-DE9C17AE2F6C",
          "MsisdnRegex": "^((\\+|00)?9665)(4|6)\\d{7}$"
        }
      ]
    }
  },
  "018E4E38-D7A7-4FDF-8720-044FA7D28280": {
    "ServiceId": "018E4E38-D7A7-4FDF-8720-044FA7D28280",
    "Name": "nitrofilm_jordan",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "315BB8F9-FC85-4136-A552-2D3D0488F98E",
          "MsisdnRegex": "^((\\+|00)?962)(78)\\d{7}$"
        }
      ]
    }
  },
  "47418FFB-3F1F-4FFD-9C94-CC57DAF6072D": {
    "ServiceId": "47418FFB-3F1F-4FFD-9C94-CC57DAF6072D",
    "Name": "iclub_oman",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "FCDDC814-8ABC-461F-89F3-43E886A707B6",
          "MsisdnRegex": "^((\\+|00)?968)\\d{8}$",
          "NextServiceId": "2A93F157-2A12-4774-B625-6D9431751A2B"
        },
        {
          "ServiceId": "2A93F157-2A12-4774-B625-6D9431751A2B",
          "MsisdnRegex": "^((\\+|00)?968)(78|79|94|95|96|97)\\d{6}$",
          "NextServiceId": "FCDDC814-8ABC-461F-89F3-43E886A707B6"
        }
      ]
    }
  },
  "E97B4814-40C9-4D9B-81A6-3C7C5AE5BC4D": {
    "ServiceId": "E97B4814-40C9-4D9B-81A6-3C7C5AE5BC4D",
    "Name": "iclub_bahrain_timwe_stc",
    "OtpLength": 4,
    "ShortCode": "98721",
    "HasTwoConfirmationStep": "",
    "ValidationTimeInMinutes": 4,
    "NeedValidationForRequest": true,

    "SendMessageAfterRequest": {
      "Enabled": false,
      "Message": "",
      "MessageSenderType": ""
    },
    "Statistics": {
      "Enabled": true,
      "Url": "http://192.168.82.55:8021/api/Stats"
    },
    "SmsSender": {
      "Url": ""
    },
    "Supplier": {
      "Name": "Timwe",
      "Timwe": {
        "serviceId": "9395",
        "partnerRoleId": "9360",
        "productId": "30263",
        "mcc": "426",
        "mnc": "04",
        "largeAccount": "98721",
        "subKeyword": "11",
        "userIdentifierType": "MSISDN",
        "authentication": "krvkqQHjSFVJAKeu",
        "apiKey": "52f59275716d4cb48336fb6c4d3a1eda",
        "subApiUrl": "https://vivabhr-ma.timwe.com/bh/ma/api/external/v1/subscription/optin/",
        "unsubApiUrl": "https://vivabhr-ma.timwe.com/bh/ma/api/external/v1/subscription/optout/",
        "subConfirmationApiUrl": "https://vivabhr-ma.timwe.com/bh/ma/api/external/v1/subscription/optin/confirm/",
        "GetSupplierIdUrl": "https://sdp.cammpaign.com/api/supplier/id?msisdn=MSISDN&packageId=PACKAGEID",
        "SendSubscribeNotifConfigs": {
          "Enabled": "true",
          "pricepointId": "40291",
          "text": "subscribe",
          "entryChannel": "WEB",
          "SdpSubReceiveMessageUrl": "https://timwe.iclub-app.com/notification/user-optin/1/9360",
          "SdpUnsubReceiveMessageUrl": "https://timwe.iclub-app.com/notification/user-optout/1/9360"
        }
      },
      //Mci,Mtn,Par,MobinOne,Hub,HamrahVasImi
      "SDPOperator": ""
    }
  },
  "79CE1F82-B59D-4519-AAC8-ED6177539458": {
    "ServiceId": "79CE1F82-B59D-4519-AAC8-ED6177539458",
    "Name": "iclub_bahrain",
    "Supplier": {
      "Name": "MultipleService",
      "Services": [
        {
          "ServiceId": "84FCAC2C-A479-468A-802A-EFBC709BD1F1",
          "MsisdnRegex": "^(973)(32[0-3]|38[0-4]|38[7-9]|39[0-9])\\d{5}$"
        },
        {
          "ServiceId": "E97B4814-40C9-4D9B-81A6-3C7C5AE5BC4D",
          "MsisdnRegex": "^(973)(3250\\d{4}|33\\d{6}|34[0-6]\\d{5}|35[0-1]\\d{5}|35[3-5]\\d{5})$"
        }
      ]
    }
  }

}
