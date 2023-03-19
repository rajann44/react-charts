import Papa from "papaparse";

class CSV_Parser {
  toJson(file) {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        complete(results, file) {
          resolve(results.data);
        },
        error(err, file) {
          reject(err);
        },
      });
    });
  }

  toJsonNoPromise = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        console.log(results.data[0]);
        var keyNames = Object.keys(results.data[0]);
        console.log(keyNames);
        console.log(keyNames[0]);
        console.log(keyNames[1]);
      },
    });
  };
}

export default new CSV_Parser();
