var url = "";
var filename = "";

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createAddonMenu()
      .addItem('Exportar CSV com ponto e virgula', 'showDownloadDialog')
      .addToUi();
}

function showDownloadDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('DownloadDialog')
      .setWidth(300)
      .setHeight(150);
  
  SpreadsheetApp
    .getUi()
    .showModalDialog(htmlOutput, 'Download CSV');
}

function processCsvUrl() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  
  fileName = spreadsheet.getName() + ".csv";
  
  // Obtenha os dados da planilha
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  // Converta os dados para CSV
  var csv = "";
  for (var i = 0; i < values.length; i++) {
    var row = values[i];
    var csvRow = row.join(";");
    csv += csvRow + "\n";
  }
  
  // Crie um arquivo temporário no Google Drive
  var file = DriveApp.createFile(fileName, csv, MimeType.CSV);
  
  // Gere o link de download para o arquivo
  url = file.getDownloadUrl();
  
  // Remove o arquivo depois que o download for feito
  file.setTrashed(true);
}

function getCsvUrl() {
  processCsvUrl();
  return {url: url, filename: filename};
}
