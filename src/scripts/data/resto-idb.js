/* eslint-disable quotes */
import { openDB } from 'idb';
import CONFIG from "../globals/config";

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG;

const openIdb = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

const FavRestoIdb = {

  async getResto(id) {
    const result = await (await openIdb).get(OBJECT_STORE_NAME, id);
    console.log(`Get Resto with ID: ${id}`, result);
    return result;
  },

  async getAllResto() {
    const result = await (await openIdb).getAll(OBJECT_STORE_NAME);
    console.log('Get All Restos:', result);
    return result;
  },

  async putResto(resto) {
    const result = await (await openIdb).put(OBJECT_STORE_NAME, resto);
    console.log('Put Resto:', resto);
    return result;
  },

  async deleteResto(id) {
    const result = await (await openIdb).delete(OBJECT_STORE_NAME, id);
    console.log(`Delete Resto with ID: ${id}`, result);
    return result;
  },
};

export default FavRestoIdb;
