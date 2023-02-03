class audios {
  createTable(tx) {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS audios(
        id_audio INTEGER,
        data_hora TEXT,
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

// class cabecalho_manutencao_1 {
//   createTable(tx) {
//     tx.executeSql(`
//     CREATE TABLE IF NOT EXISTS cabecalho_manutencao_1(
//       id_cabecalho INTEGER PRIMARY KEY AUTOINCREMENT,
//       id_usuario INTEGER,
//       frota_tag TEXT,
//       marca_modelo TEXT,
//       setor_frente TEXT,
//       nome_operador TEXT,
//       horimetro_horas FLOAT,
//       data DATE,
//       matricula_operador TEXT,
//       id_checklist INTEGER,
//       id_pessoa INTEGER,
//       id_equipamento INTEGER,
//       latitude FLOAT,
//       longitude FLOAT,
//       id_cliente INT
//     )
//     `);
//   }
// }
// export default new cabecalho_manutencao_1();
