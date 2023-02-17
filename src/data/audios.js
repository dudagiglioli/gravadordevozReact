class audios {
  createTable(tx) {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS audios(
        id_audio INTEGER,
        data VARCHAR(20),
        hora VARCHAR(20),
        title TEXT,
        tamanho TEXT,
        tags TEXT,
        duracao TEXT,
        caminho TEXT,
       PRIMARY KEY(id_audio AUTOINCREMENT))
      `);
  }
}
export default new audios();
