import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("96xrS178ReJlcUqU2MUA")
  .collection("cartItem")
  .doc("Qt4BhORymrkgplLkMN9N");
// Or

firestore.doc("/users/96xrS178ReJlcUqU2MUA/cartItem/Qt4BhORymrkgplLkMN");
// Or

firestore.collection("/users/96xrS178ReJlcUqU2MUA/cartItem");
