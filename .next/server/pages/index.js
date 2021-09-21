"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(104);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(802);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var outline_esm = __webpack_require__(49);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/HeaderIcon.js



const HeaderIcon = ({
  Icon,
  active
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex items-center cursor-pointer md:px-10 sm:h-14  md:hover:bg-gray-100 rounded-t-xl  active:border-b-2 active:border-blue-500 group",
    children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
      className: `h-5 text-gray-500 text-center sm:h-7 mx-auto  group-hover:text-blue-500 
                      ${active && 'text-blue-500'}`
    })
  });
};

/* harmony default export */ const components_HeaderIcon = (HeaderIcon);
;// CONCATENATED MODULE: ./components/Header.js









const Header = () => {
  const [session] = (0,client_.useSession)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "static top-0 z-500 bg-white flex items-center p-2 lg:px-5 shadow-md",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "https://links.papareact.com/5me",
        alt: "fb",
        width: 40,
        height: 40,
        layout: 'fixed'
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex ml-2 items-center rounded-full bg-gray-100 p-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(outline_esm/* SearchIcon */.W1M, {
          className: "h-6 text-gray-600"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink",
          type: "text",
          placeholder: "search facebook"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center flex-grow",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex space-x-6 md:space-x-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_HeaderIcon, {
          Icon: esm/* HomeIcon */.tvw,
          active: true
        }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderIcon, {
          Icon: outline_esm/* FlagIcon */.U65
        }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderIcon, {
          Icon: outline_esm/* PlayIcon */.o1U
        }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderIcon, {
          Icon: outline_esm/* ShoppingCartIcon */.Q1y
        }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderIcon, {
          Icon: esm/* UserGroupIcon */.vxs
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center sm:space-x-2 justify-end",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        alt: "user",
        onClick: () => (0,client_.signOut)(),
        className: "rounded-full cursor-pointer" // src={session?.user?.image}
        ,
        src: "https://images.unsplash.com/photo-1542309667-2a115d1f54c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
        width: "40",
        height: "40",
        layout: "fixed"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "whitespace-nowrap font-semibold pr-3",
        children: "Sunny Wang"
      }), /*#__PURE__*/jsx_runtime_.jsx(esm/* ViewGridIcon */.XOb, {
        className: "icon"
      }), /*#__PURE__*/jsx_runtime_.jsx(esm/* ChatIcon */.kBi, {
        className: "icon"
      }), /*#__PURE__*/jsx_runtime_.jsx(esm/* BellIcon */.Dkj, {
        className: "icon"
      }), /*#__PURE__*/jsx_runtime_.jsx(esm/* ChevronDownIcon */.v4q, {
        className: "icon"
      })]
    })]
  });
};

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./components/Login.js






const Login = () => {
  return /*#__PURE__*/_jsxs("div", {
    className: "grid place-items-center",
    children: [/*#__PURE__*/_jsx(Image, {
      src: "https://links.papareact.com/t4i",
      height: 400,
      width: 400,
      objectFit: "contain",
      alt: "login"
    }), /*#__PURE__*/_jsx("h1", {
      onClick: signIn,
      className: "p-5 bg-blue-500 rounded-full text-white  text-center cursor-pointer",
      children: "Login With Facebook"
    })]
  });
};

/* harmony default export */ const components_Login = ((/* unused pure expression or super */ null && (Login)));
;// CONCATENATED MODULE: ./components/SidebarRow.js





const SidebarRow = ({
  src,
  Icon,
  title
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer",
    children: [src && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      alt: "siddebae",
      className: "rounded-full",
      src: src,
      width: 30,
      height: 30,
      layout: "fixed"
    }), Icon && /*#__PURE__*/jsx_runtime_.jsx(Icon, {
      className: "h-8 w-8 text-blue-500"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "hidden sm:inline-flex font-medium",
      children: title
    })]
  });
};

/* harmony default export */ const components_SidebarRow = (SidebarRow);
;// CONCATENATED MODULE: ./components/Sidebar.js








const Sidebar = () => {
  const [session, loading] = (0,client_.useSession)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "p-2 mt-5 max-w-[600px] xl:min-w-[300px]",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      src: "https://images.unsplash.com/photo-1542309667-2a115d1f54c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
      title: "cat"
      /*{session.user.image}*/

    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: esm/* UsersIcon */.oyc,
      title: "Friends"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: outline_esm/* UserGroupIcon */.vxs,
      title: "Groups"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: outline_esm/* ShoppingBagIcon */.b_c,
      title: "Marketplace"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: esm/* DesktopComputerIcon */.DAM,
      title: "Watch"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: esm/* CalendarIcon */.Que,
      title: "Events"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: esm/* ClockIcon */.T39,
      title: "Memories"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_SidebarRow, {
      Icon: outline_esm/* ChevronDownIcon */.v4q,
      title: "See More"
    })]
  });
};

/* harmony default export */ const components_Sidebar = (Sidebar);
;// CONCATENATED MODULE: ./components/StoryCard.js





const StoryCard = ({
  src,
  name,
  profile
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      className: "absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10",
      src: profile,
      alt: profile,
      width: 40,
      height: 40,
      layout: "fixed",
      objectFit: "cover"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      className: "object-cover filter brightness-75 rounded-full lg:rounded-3xl",
      src: src,
      alt: src,
      layout: "fill"
    })]
  });
};

/* harmony default export */ const components_StoryCard = (StoryCard);
;// CONCATENATED MODULE: ./components/Stories.js




const Stories = () => {
  const stories = [{
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v"
  }, {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk"
  }, {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p"
  }, {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf"
  }, {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy"
  }];
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex justify-center space-x-3 mx-auto",
    children: stories.map(story => {
      return /*#__PURE__*/jsx_runtime_.jsx(components_StoryCard, {
        name: story.name,
        src: story.src,
        profile: story.profile
      }, story.name);
    })
  });
};

/* harmony default export */ const components_Stories = (Stories);
;// CONCATENATED MODULE: external "firebase"
const external_firebase_namespaceObject = require("firebase");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_namespaceObject);
;// CONCATENATED MODULE: external "firebase/storage"
const storage_namespaceObject = require("firebase/storage");
;// CONCATENATED MODULE: ./firebase.js
// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler


const firebaseConfig = {
  apiKey: "AIzaSyDjBBiTmu4Gm3_uCD8dBlsj2ooT8yIh6yY",
  authDomain: "next-facebook-d2ec5.firebaseapp.com",
  projectId: "next-facebook-d2ec5",
  storageBucket: "next-facebook-d2ec5.appspot.com",
  messagingSenderId: "55928945409",
  appId: "1:55928945409:web:73eee2c1b432c2471c7900"
};
const app = !(external_firebase_default()).apps.length ? external_firebase_default().initializeApp(firebaseConfig) : external_firebase_default().app();
const db = app.firestore();
const auth = app.auth();
const storage = external_firebase_default().storage();

;// CONCATENATED MODULE: ./components/InputBox.js
/* eslint-disable @next/next/no-img-element */










const InputBox = () => {
  const [session] = (0,client_.useSession)();
  const inputRef = (0,external_react_.useRef)(null);
  const filePickRef = (0,external_react_.useRef)(null);
  const {
    0: imageToPost,
    1: setImageToPost
  } = (0,external_react_.useState)(null);

  const sendPost = e => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection("posts").add({
      message: inputRef.current.value,
      name: 'kai',
      email: 'kai@4idps.com',
      image: "https://images.unsplash.com/photo-1542309667-2a115d1f54c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
      timestamp: external_firebase_default().firestore.FieldValue.serverTimestamp()
    }).then(doc => {
      if (imageToPost) {
        const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, "data_url");
        removeImage();
        uploadTask.on("state_changed", null, error => {
          // ERROR function
          console.log(error);
        }, () => {
          // COMPLETE function
          storage.ref("posts").child(doc.id).getDownloadURL().then(url => {
            db.collection("posts").doc(doc.id).set({
              postImage: url
            }, {
              merge: true
            });
          });
        });
      }
    });
    inputRef.current.value = "";
  };

  const addImageToPost = e => {
    e.preventDefault();
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = readerEvent => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex space-x-4 p-4 items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        className: "rounded-full",
        alt: "profile",
        src: "https://images.unsplash.com/photo-1542309667-2a115d1f54c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
        width: 40,
        height: 40,
        layout: "fixed"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: "flex flex-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          ref: inputRef,
          className: "rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none",
          type: "text",
          placeholder: "what is your post"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          hidden: true,
          onClick: sendPost,
          children: "Submit"
        })]
      }), imageToPost && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: removeImage,
        className: "flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "h-10 object-contain ",
          src: imageToPost,
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs text-red-500 text-center",
          children: "Remove"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-evenly p-3 border-t",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inputIcon",
        children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* VideoCameraIcon */.y3v, {
          className: "h-7 text-red-500"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-sm xl:text-base",
          children: "Live Video"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: () => filePickRef.current.click(),
        className: "inputIcon",
        children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* CameraIcon */.xmR, {
          className: "h-7 text-green-400"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-sm xl:text-base",
          children: "Photo/Video"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          ref: filePickRef,
          onChange: addImageToPost,
          type: "file",
          hidden: true
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inputIcon",
        children: [/*#__PURE__*/jsx_runtime_.jsx(outline_esm/* EmojiHappyIcon */.OdW, {
          className: "h-7 text-yellow-300"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-sm xl:text-base",
          children: "Feeling/Activity"
        })]
      })]
    })]
  });
};

/* harmony default export */ const components_InputBox = (InputBox);
;// CONCATENATED MODULE: external "react-firebase-hooks/firestore"
const firestore_namespaceObject = require("react-firebase-hooks/firestore");
;// CONCATENATED MODULE: ./components/Post.js
/* eslint-disable @next/next/no-img-element */






const Post = ({
  name,
  message,
  email,
  postImage,
  image,
  timestamp
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "p-5 bg-white mt-5 rounded-t-2xl shadow-sm",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "rounded-full",
          src: image,
          height: 40,
          width: 40,
          alt: "post"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: name
          }), timestamp ? /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-xs text-gray-400",
            children: new Date(timestamp === null || timestamp === void 0 ? void 0 : timestamp.toDate()).toLocaleString()
          }) : /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-xs text-gray-400",
            children: "Loading"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "pt-4",
        children: message
      })]
    }), postImage && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "relative h-56 md:h-96 bg-white",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: postImage,
        objectFit: "cover",
        layout: "fill",
        alt: "post-image"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inputIcon p-3 rounded-none rounded-bl-2xl",
        children: [/*#__PURE__*/jsx_runtime_.jsx(outline_esm/* ThumbUpIcon */.Z7j, {
          className: "h-4"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-base",
          children: "Like"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inputIcon p-3 rounded-none",
        children: [/*#__PURE__*/jsx_runtime_.jsx(outline_esm/* ChatAltIcon */.iUF, {
          className: "h-4"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-base",
          children: "Comment"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inputIcon p-3 rounded-none rounded-br-2xl",
        children: [/*#__PURE__*/jsx_runtime_.jsx(outline_esm/* ShareIcon */.aAc, {
          className: "h-4"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs sm:text-base",
          children: "Share"
        })]
      })]
    })]
  });
};

/* harmony default export */ const components_Post = (Post);
;// CONCATENATED MODULE: ./components/Posts.js






const Posts = ({
  posts
}) => {
  const [realtimePosts, loading, error] = (0,firestore_namespaceObject.useCollection)(db.collection("posts").orderBy("timestamp", "desc"));
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: realtimePosts ? realtimePosts === null || realtimePosts === void 0 ? void 0 : realtimePosts.docs.map(post => /*#__PURE__*/jsx_runtime_.jsx(components_Post, {
      name: post.data().name,
      message: post.data().message,
      email: post.data().email,
      timestamp: post.data().timestamp,
      image: post.data().image,
      postImage: post.data().postImage
    }, post.id)) : posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(components_Post, {
      name: post.name,
      message: post.message,
      email: post.email,
      timestamp: post.timestamp,
      image: post.image,
      postImage: post.postImage
    }, post.id))
  });
};

/* harmony default export */ const components_Posts = (Posts);
;// CONCATENATED MODULE: ./components/Feed.js







const Feed = ({
  posts
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex-grow h-screen pb-44 pt-6 mr-4  xl:mr-40 overflow-y-auto",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mx-auto max-w-md md:max-w-lg lg:max-w-2xl",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Stories, {}), /*#__PURE__*/jsx_runtime_.jsx(components_InputBox, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Posts, {
        posts: posts
      })]
    })
  });
};

/* harmony default export */ const components_Feed = (Feed);
;// CONCATENATED MODULE: ./components/Contact.js





const Contact = ({
  src,
  name
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      className: "rounded-full",
      alt: "contract",
      src: src,
      width: 50,
      height: 50,
      layout: "fixed"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"
    })]
  });
};

/* harmony default export */ const components_Contact = (Contact);
;// CONCATENATED MODULE: ./components/Widgets.js







const Widgets = () => {
  const contacts = [{
    src: "https://links.papareact.com/f0p",
    name: "Jeff Bezoz"
  }, {
    src: "https://links.papareact.com/kxk",
    name: "Elon Musk"
  }, {
    src: "https://links.papareact.com/zvy",
    name: "Bill Gates"
  }, {
    src: "https://links.papareact.com/snf",
    name: "Mark Zuckerberg"
  }, {
    src: "https://links.papareact.com/d0c",
    name: "Harry Potter"
  }, {
    src: "https://links.papareact.com/6gg",
    name: "The Queen"
  }, {
    src: "https://links.papareact.com/r57",
    name: "James Bond"
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "hidden lg:flex flex-col w-60 p-2 mt-5",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-between items-center text-gray-500 mb-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-xl",
        children: "Contacts"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex space-x-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* VideoCameraIcon */.y3v, {
          className: "h-6"
        }), /*#__PURE__*/jsx_runtime_.jsx(outline_esm/* SearchIcon */.W1M, {
          className: "h-6"
        }), /*#__PURE__*/jsx_runtime_.jsx(esm/* DotsHorizontalIcon */.nWS, {
          className: "h-6"
        })]
      })]
    }), contacts.map(contact => /*#__PURE__*/jsx_runtime_.jsx(components_Contact, {
      src: contact.src,
      name: contact.name
    }, contact.src))]
  });
};

/* harmony default export */ const components_Widgets = (Widgets);
;// CONCATENATED MODULE: ./pages/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function Home({
  session,
  posts
}) {
  // if(!session) return <Login/>
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "h-screen overflow-hidden bg-gray-100",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Facebook"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "flex",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Sidebar, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Feed, {
        posts: posts
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Widgets, {})]
    })]
  });
}
async function getServerSideProps(context) {
  // Get User
  const session = await (0,client_.getSession)(context);
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = posts.docs.map(post => _objectSpread(_objectSpread({
    id: post.id
  }, post.data()), {}, {
    timestamp: null
  }));
  return {
    props: {
      session,
      posts: docs
    }
  };
}

/***/ }),

/***/ 104:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618], () => (__webpack_exec__(998)));
module.exports = __webpack_exports__;

})();