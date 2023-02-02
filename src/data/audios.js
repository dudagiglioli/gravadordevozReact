class audios {
  createTable(tx) {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS audios(
        id_audio INTEGER,
        data_hora VARCHAR(20),
        titulo VARCHAR(20),
        tamanho VARCHAR(20),
        tags VARCHAR(20),
        duracao VARCHAR(20),
        caminho VARCHAR(20),
        PRIMARY KEY(id_audio AUTOINCREMENT))`);
  }
}
export default new audios();