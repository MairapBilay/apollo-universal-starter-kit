import PdfPrinter from 'pdfmake';
import fonts from './fonts/Roboto/';

class PDFGenerator {
  constructor() {
    this.printer = new PdfPrinter(fonts);
    this.content = [];
    this.styles = {};
  }

  addText(text, style, alignment) {
    this.content.push({
      text,
      style,
      alignment
    });
  }

  addStyle(name, style) {
    this.styles[name] = style;
  }

  addTable(data, columnsWidth) {
    this.content.push({
      table: {
        widths: columnsWidth,
        body: [Object.keys(data[0]), ...data.map(item => Object.values(item))]
      }
    });
  }

  addList(data, type = 'ul') {
    this.content.push({
      [type]: data
    });
  }

  addImage(image, width, height) {
    this.content.push({
      image,
      width,
      height
    });
  }

  getDocument() {
    return this.printer.createPdfKitDocument({
      content: this.content,
      styles: this.styles
    });
  }
}

export default PDFGenerator;
