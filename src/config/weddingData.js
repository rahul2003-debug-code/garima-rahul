// Wedding Configuration & Details (Accurately transcribed from the authentic printed invitation)
export const BASE_URL = import.meta.env.BASE_URL || '/';

export const WEDDING_DATA = {
  couple: {
    bride: {
      firstName: "गरिमा",
      fullName: "गरिमा वर्मा",
      title: "हृदयकणिका",
      designation: "ब्रान्च पोस्ट मास्टर",
      photo: `${BASE_URL}images/bride.jpg`,
      grandParents: "श्रीमती जगवंती देवी एवं स्व. बसन्त लाल",
      parents: "श्रीमती पूनम वर्मा एवं विनोद कुमार",
      address: "ग्राम- भलवां, पोस्ट- रूपौधा, जिला- मीरजापुर (पिन: 231305)",
      badge: "वधू"
    },
    groom: {
      firstName: "राहुल",
      fullName: "राहुल कुमार",
      title: "हृदयांश",
      designation: "साफ्टवेयर इंजीनियर",
      photo: `${BASE_URL}images/groom.jpg`,
      grandParents: "श्रीमती सरस्वती देवी एवं स्व. मोती लाल राम",
      parents: "श्री अशोक एवं स्व. लालसा देवी",
      address: "ग्राम व पोस्ट- मसोन, जिला- गाजीपुर",
      badge: "वर"
    }
  },

  invitationHeader: {
    ganeshMantra: "॥ श्री गणेशाय नमः ॥",
    ganeshDoha: "विघ्न हरण मंगल करन, श्री गणपति महाराज। प्रथम निमंत्रण आपको, पूरन कीजै सब काज॥",
    kashiBlessing: "देवाधिदेव बाबा श्री काशी विश्वनाथ जी एवं माँ अन्नपूर्णा जी की असीम अनुकम्पा व आशीर्वाद से...",
    vishnuMantra: "मंगलम् भगवान विष्णुः मंगलम् गरुड़ ध्वजः। मंगलम् पुण्डरीकाक्षः मंगलाय तनोहरिः ॥"
  },

  invitationBody: {
    bondTitle: "॥ परिणय सूत्र बन्धन ॥",
    openingMessage: "स्नेही स्वजन,\nदेवाधिदेव बाबा श्री काशी विश्वनाथ जी एवं माँ अन्नपूर्णा जी की असीम अनुकम्पा व आशीर्वाद से हमारे परिवार के परिणय सूत्र बन्धन की इस पावन बेला पर आप सादर आमंत्रित हैं।",
    requestMessage: "की मंगल बेला पर आप नवयुगल के भावी जीवन पथ को अपने स्नेहित आशीर्वाद की मृदुल ज्योत्सना से आलोकित कर हमें अनुगृहीत करें।",
    shayariAagrah: {
      title: ":: विशेष आग्रह ::",
      line1: "भूल न जाना शादी का Date, आना मेरे Gate,",
      line2: "गरिमा की शादी है, हम करेंगे आपका Wait......"
    }
  },

  events: [
    {
      id: "shubh-vivah",
      badge: "मुख्य वैवाहिक समारोह",
      title: "शुभ-विवाह (पाणिग्रहण संस्कार)",
      date: "11 नवम्बर 2026",
      day: "बुधवार",
      time: "रात्रि लग्नानुसार (बारात आगमन एवं जयमाल)",
      icon: "wedding",
      description: "बारात स्वागत, द्वारपूजा, शुभ जयमाल एवं वैदिक मंत्रोच्चार के साथ पाणिग्रहण संस्कार संपन्न होगा।",
      isHighlight: true,
      calendarEvent: {
        title: "गरिमा संग राहुल - शुभ विवाह समारोह",
        start: "20261111T190000",
        end: "20261112T030000",
        location: "ओम् मंगलम् लॉन, रमना (पुलिस चौकी के आगे), वाराणसी"
      }
    },
    {
      id: "vidaai",
      badge: "मंगल विदाई बेला",
      title: "भीगी पलकें (मंगल विदाई)",
      date: "12 नवम्बर 2026",
      day: "गुरुवार",
      time: "प्रातः काल",
      icon: "vidaai",
      description: "आशीर्वाद, स्नेह एवं मंगल कामनाओं के साथ वधू विदाई की पावन बेला।",
      isHighlight: false,
      calendarEvent: {
        title: "गरिमा संग राहुल - विदाई बेला",
        start: "20261112T080000",
        end: "20261112T110000",
        location: "ओम् मंगलम् लॉन, रमना, वाराणसी"
      }
    }
  ],

  venue: {
    name: "ओम् मंगलम् लॉन",
    locationDetails: "रमना (पुलिस चौकी के आगे), वाराणसी, उत्तर प्रदेश",
    shortCity: "वाराणसी (काशी)",
    mapsQuery: "Om Mangalam Lawn Ramna Varanasi",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Om+Mangalam+Lawn+Ramna+Varanasi",
    directionsNote: "रमना पुलिस चौकी से आगे, मुख्य मार्ग के समीप। पार्किंग एवं समस्त वैवाहिक सुविधाएं उपलब्ध।"
  },

  family: {
    darshanabhilashi: [
      "उज्ज्वल वर्मा",
      "रामचरन",
      "रामजतन",
      "राजकुमार",
      "परिपूर्णानन्द (मामा जी)",
      "अमित",
      "लालता",
      "एवं समस्त वर्मा परिवार"
    ],
    vineet: {
      name: "विनोद कुमार",
      address: "ग्राम- भलवां, पोस्ट- रूपौधा, जिला- मीरजापुर"
    },
    contacts: [
      {
        name: "विनोद कुमार",
        number: "9956281258",
        label: "मुख्य प्रेषक"
      },
      {
        name: "हेल्पलाइन / संपर्क",
        number: "9214786150",
        label: "वैवाहिक व्यवस्था"
      }
    ]
  },

  scannedCards: [
    {
      id: "cover",
      name: "मुख्य आवरण पृष्ठ (Front Cover)",
      description: "॥ श्री गणेशाय नमः ॥ शुभ विवाह - गरिमा संग राहुल",
      src: `${BASE_URL}images/invitation-cover.jpg`
    },
    {
      id: "schedule",
      name: "मांगलिक कार्यक्रम (Schedule)",
      description: "शुभ-विवाह एवं भीगी पलकें विवरण",
      src: `${BASE_URL}images/mangalik-karyakram.jpg`
    },
    {
      id: "inner",
      name: "परिणय एवं परिवार पृष्ठ (Family Details)",
      description: "वर-वधू परिचय, दर्शनाभिलाषी एवं विनीत",
      src: `${BASE_URL}images/invitation-inner.jpg`
    }
  ],

  musicTracks: [
    {
      id: "hamari-shaadi",
      title: "हमारी शादी में... (विवाह स्पेशल)",
      artist: "Vivah Special Song",
      src: `${BASE_URL}audio/hamari-shaadi-mein.mp3`
    },
    {
      id: "shehnai",
      title: "शुभ विवाह मंगल शहनाई",
      artist: "Royal Wedding Shehnai",
      src: `${BASE_URL}audio/wedding-song.mp3`
    }
  ],

  weddingTimestamp: new Date("2026-11-11T19:00:00+05:30").getTime(),
  websiteUrl: "https://rahul2003-debug-code.github.io/garima-rahul/"
};
