import * as firebase from "firebase/app";
import 'firebase/firestore';

const enriquecerObjeto = objetivo => {
  return {
    ...objetivo,
    porcentagem: (objetivo.valorAtual * 100) / objetivo.valorNecessario
  }
};

const adicionarObjetivo = objetivo => {
  const db = firebase.firestore();
  return db.collection('objetivos').add(enriquecerObjeto(objetivo));
}

const atualizarObjetivo = (id, objetivo) => {
  const db = firebase.firestore();
  return db.collection(`objetivos`).doc(id).set(enriquecerObjeto(objetivo));
}

const listarObjetivos = async () => {
  const db = firebase.firestore();
  const response = await db.collection('objetivos').get();
  return response.docs.map((item) => {
    return {
      id: item.id,
      ...item.data()
    };
  });
}

const removerObjetivo = id => {
  const db = firebase.firestore();
  return db.collection('objetivos').doc(id).delete();
}


export default {
  adicionarObjetivo,
  atualizarObjetivo,
  listarObjetivos,
  removerObjetivo
}